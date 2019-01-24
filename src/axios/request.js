import axios from "axios"
import qs from "qs"
import { getCookie } from "../utils/Auth";
 

const server = axios.create({
    timeout: 3000,
    
})

server.interceptors.request.use((config)=>{
    if(config.method == "post"){
        config.data = qs.stringify(config.data)
    }
    else if(config.method == "get"){
        config.params = {...config.params}
    }

    config.headers["Content-type"] = "application/x-www-form-urlencoded";
    config.headers["X-Token"] = getCookie();

    return config;
},(err)=>{
    return Promise.reject(err);
})

server.interceptors.response.use((res)=>{
    if(res.status == 200){
        return res.data
    }
},(err)=>{
    return Promise.reject(err);
})

export default server;

