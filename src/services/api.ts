import axios from "axios";

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/KarineMomose/hc2-kitchen-garden-project/produtos'
})

export default api;