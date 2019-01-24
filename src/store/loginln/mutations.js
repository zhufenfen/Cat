
import {getCookie} from "../../utils/Auth"
export default {
    handleGetData(state,params){
        if(params.status){
            state.token = getCookie();
            state.userName = getCookie("user");
            console.log(state);
        }

        // console.log(params);
    }
}