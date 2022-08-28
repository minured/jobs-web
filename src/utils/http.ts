import axios from "axios";


const apiURL = "http://localhost:4001/api"

const aboust = () => {

}
const http = axios.create({
    baseURL: apiURL,
    timeout: 5000,
})


// 添加请求拦截器
http.interceptors.request.use( (config) =>  {
    console.log("request interceptors");
    
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    console.log("request error");
    
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
http.interceptors.response.use(function (response) {
    console.log("response interceptors");
    
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response?.data;
  }, function (error) {
    console.log("response error");
    
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default http