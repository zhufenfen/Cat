import JSCookie from "js-cookie"
const TokenKey = "X-Token"
export const setCookie = (TokenKey="X-Token") => {
    // 客户端种cookie
    // JSCookie.set(TokenKey, store.state.Token);
}
export const getCookie = (TokenKey="X-Token") => {
    return JSCookie.get(TokenKey);
}
export const removeCookie = (TokenKey="X-Token") => {
    JSCookie.remove(TokenKey);
}