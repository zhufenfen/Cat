const qs = require("querystring")
export const UrlParse = (url) => {
    return qs.parse(url);
}