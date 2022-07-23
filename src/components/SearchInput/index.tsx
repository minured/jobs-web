import Taro from "@tarojs/taro";
import styles from "./index.scss";

const SearchInput = () => {
    return (
        <div
            className={styles.M_search_input}
            onClick={() => {
                Taro.navigateTo({
                    url: "/pages/search/index",
                });
            }}
        >
            Search Input
        </div>
    );
};

export default SearchInput;
