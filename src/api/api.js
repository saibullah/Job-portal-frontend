import axios from "axios";
const api = axios.create({
    baseURL : "https://job-portal-ax0d.onrender.com/api"
});

export default api