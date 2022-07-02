import BottomBar from "../BottomBar";
import styles from "./index.scss";

const PageLayout = ({ children }) => {
  return (
    <div className={styles.pageLayout}>
        {children}
        <BottomBar />
    </div>
  );
}

export default PageLayout;