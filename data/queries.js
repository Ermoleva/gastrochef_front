import axios from "axios";

const queries = axios.create({
    baseURL: 'http://176.57.68.130:2956/api',
    timeout: 5000,
});

export default queries;