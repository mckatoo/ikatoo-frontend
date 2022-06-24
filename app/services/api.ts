import axios from "axios";

const API_URL = process.env.API_URL;

const api = axios.create({
  baseURL: API_URL,
});

console.log('api', api)

export default api;