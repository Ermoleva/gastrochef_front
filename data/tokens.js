
function getCookie(key) {
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (!cookie.startsWith(key+"=")) continue;
        return cookie.substring(key.length + 1);
    }
    return null;
}

function setCookie(key, value, options = {}) {
    if (!options) options = {};
    options = {path: '/', ...options};
    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }
    let cookie = encodeURIComponent(key) + "=" + encodeURIComponent(value);
    for (let optionKey in options) {
        cookie += "; " + optionKey;
        cookie += "=" + options[optionKey];
    }
    document.cookie = cookie;
}

function removeCookie(key) {
    setCookie(key, "", {'max-age': -1})
}

const tokens = {
    getToken() {
        return getCookie("auth_token");
    },
    getRefreshToken() {
        return getCookie("refresh_token");
    },
    setTokens(tokens) {
        if (!tokens) removeCookie("auth_token");
        else setCookie("auth_token", tokens.auth_token);

        if (!tokens) removeCookie("refr_token");
        else setCookie("refresh_token", tokens.refresh_token);
    }
}

export default tokens;