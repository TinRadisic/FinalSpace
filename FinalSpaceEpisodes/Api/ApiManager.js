import axios from "axios";

const ApiManager = axios.create({
    baseURL: "https://finalspaceapi.com/api/v0/",
    responseType: "json",
    withCredentials: 'true'
});

export default ApiManager;