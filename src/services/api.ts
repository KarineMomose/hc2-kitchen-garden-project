import axios from "axios";

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/KarineMomose/hc2-kitchen-garden-project/produtoshttp://localhost:8080/produtos'
})

export default api;