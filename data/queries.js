import axios from "axios";
import tokens from "./tokens";

const queries = axios.create({
    baseURL: 'http://176.57.68.130:2956/api',
    timeout: 5000,
});

export async function getServerAuthQuery(req, url) {
    return queries.get(url, {headers: {
        Authorization: req.cookies.auth_token
    }});
};
export async function getAuthQuery(url) {
    const token = tokens.getToken();
    return queries.get(url, {headers: {
        Authorization: token
    }});
};
export async function postAuthQuery(url, body) {
    const token = tokens.getToken();
    if (!token) throw ["No auth_token", 401];
    return queries.post(url, body, {
        headers: {Authorization: token}
    });
};
export async function postQuery(url, body) {
    return queries.post(url, body);
};

export default queries;