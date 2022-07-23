import PageLayout from "@/components/Layout";
import { Swiper, SwiperItem, View } from "@tarojs/components";
import { useContext } from "react";
import { GlobalContext } from "src/app";
import JobList from "./components/JobList";
import styles from "./index.scss";

const Home = () => {
  const { mainColor } = useContext(GlobalContext);
  // const [swiperList, setSwiperList] = useState([]);
  
  

  return (
    <PageLayout>
      <div className={styles.P_home}>
        <Swiper
          className={styles.M_swiper}
          indicatorActiveColor={mainColor}
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem>
            <View className={styles.swiper_item}>1</View>
          </SwiperItem>
          <SwiperItem>
            <View className={styles.swiper_item}>2</View>
          </SwiperItem>
          <SwiperItem>
            <View className={styles.swiper_item}>3</View>
          </SwiperItem>
        </Swiper>
      </div>
      <JObsList jobs={}/>
    </PageLayout>
  );
};

export default Home;
