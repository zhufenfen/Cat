import { getCookie } from "../../utils/Auth";

export default {
    token:getCookie(),
    userName:getCookie("user")
}