import Taro from "@tarojs/taro";
import { UserOutline  } from 'antd-mobile-icons';
import cn from "classnames";
import { useContext } from "react";
import { GlobalContext } from "src/app";
import { tabs } from "./config";
import styles from "./index.scss";

const BottomBar = () => {
  const { currentPageKey, updateStore } = useContext(GlobalContext);

  const handleTabClick = (pageKey: string) => {
    Taro.redirectTo({
      url: `/pages/${pageKey}/index`,
    }).then(() => updateStore("currentPageKey", pageKey));
  };

  return (
    <div className={styles.bottomBar}>
      {tabs.map((item, index) => (
        <div
          key={index}
          className={cn(
            styles.tabItem,
            currentPageKey === item.key && styles.active
          )}
          onClick={() => handleTabClick(item.key)}
        >
          <div className={styles.icon}>
          <UserOutline className={styles.icon} />

          </div>
          <div className={styles.text}>{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default BottomBar;
