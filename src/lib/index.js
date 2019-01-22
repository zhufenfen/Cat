import axios from "axios"
import qs from "qs"
// 请求拦截
axios.interceptors.request.use((req) => {
    /* if(req.method == "post"){
        req.data = qs.stringify(req.data);
    } */
    return req;
})
// 响应拦截
axios.interceptors.response.use((res) => {
    if(res.status == 200){
        return res.data;
    }
})
export default axios;

/* import axios from "axios"
import qs from "qs"
import {getCookie} from "../utils/auth"
const server = axios.create({
    timeout:5000,
    // 请求的时候携带本地cookie到服务器
    // withCredentials:true
})
server.interceptors.request.use((req) => {
    if(req.method == "post"){
        req.data = qs.stringify(req.data);
    }else if(req.method == "get"){
        req.params = {...req.params}
    }
    req.headers["Content-type"] = "application/x-www-form-urlencoded";
    // 每次请求都携带token
    req.headers["X-Token"] = getCookie();
    return req;
}, (err) => {
    return Promise.reject(err);
})
server.interceptors.response.use((res) => {
    if(res.status == 200){
        return res.data;
    }
}, (err) => {
    return Promise.reject(err);
})
export default server; */