import axios from "../../../lib";

export default{
    handleDell({commit}){
        axios({
            method:"post",
            url:"/dell/mock/5c38814f4ca7fb6358ce72bd/dell/dell", 
        })
        .then((data)=>{
            commit("handleDell",data.data);
        })
    }
}