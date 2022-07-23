/** 微信小程序配置 */
export default defineAppConfig({
  pages: [
    'pages/login/index',
    'pages/home/index',
    'pages/news/index',
    'pages/company/index',
    'pages/jobs/index',
    'pages/mine/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
})
