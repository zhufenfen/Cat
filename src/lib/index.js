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