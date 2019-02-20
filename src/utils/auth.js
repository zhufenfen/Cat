import JSCookie from "js-cookie"
const TokenKey = "X-Token"
export const setCookie = (a, b) => {
    // 客户端种cookie
    JSCookie.set(a, b);
}
export const getCookie = (TokenKey="X-Token") => {
    return JSCookie.get(TokenKey);
}
export const removeCookie = (TokenKey="X-Token") => {
    JSCookie.remove(TokenKey);
}