import queries from "./queries";

async function authRequire(req, res) {
    const auth_token = req.cookies.auth_token;
    if (!auth_token) return undefined;

    // Check if the access token is valid
    try {
        return (await queries.get("/auth/me", {
            headers: { Authorization: auth_token }
        })).data;
    } catch (error) {
        if (error.response?.status != 401) {
            console.error(error);
            return undefined;
        }
    }
    const refresh_token = req.cookies.refresh_token;
    if (!refresh_token) return undefined;

    // If the access token is expired or invalid, try to refresh it with the refresh token
    try {
        console.log('refreshing...')
        const result = (await queries.post("/auth/refresh", { refresh_token })).data;
        // res.setHeader('Set-Cookie', 'auth'); // TODO MAKE REFRESH TOKEN
        const user = (await queries.get("/auth/me", {
            headers: { Authorization: result.auth_token }
        })).data;
        req.cookies.auth_token = result.auth_token;
        req.cookies.refresh_token = result.refresh_token;
        user.new_tokens = result;
        return user;
    } catch (error) {
        console.error(error);
    }
    return undefined;
  }
  
  export default authRequire;