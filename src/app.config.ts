/** 微信小程序配置 */
export default defineAppConfig({
    pages: [
        "pages/home/index",
        "pages/news/index",
        "pages/company/index",
        "pages/jobs/index",
        "pages/mine/index",
        "pages/login/index",
        "pages/search/index",
        "pages/selectCity/index",
        "pages/jobDetail/index",
    ],
    window: {
        backgroundTextStyle: "light",
        navigationBarBackgroundColor: "#fff",
        navigationBarTitleText: "WeChat",
        navigationBarTextStyle: "black",
    },
});
