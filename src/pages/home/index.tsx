import PageLayout from "@/components/Layout";
import { Swiper, SwiperItem, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "src/app";
import SearchInput from "src/components/SearchInput";
import { Job } from "src/types/interface";
import JobList from "./components/JobList";
import styles from "./index.scss";
import { jobs } from "./stubData";

const Home = () => {
    const { mainColor } = useContext(GlobalContext);
    // const [swiperList, setSwiperList] = useState([]);
    const [jobList, setJobList] = useState<Job[]>([]);

    const handleSelectCity = () => {
        Taro.navigateTo({
            url: "/pages/selectCity/index",
        });
    };

    const pageInit = () => {
        setJobList(jobs);
    };

    useEffect(() => pageInit(), []);

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
                <div className={styles.search_row}>
                    <div onClick={handleSelectCity}>上海</div>
                    <SearchInput />
                </div>

                <JobList jobs={jobList} />
            </div>
        </PageLayout>
    );
};

export default Home;
