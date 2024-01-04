import axios from "axios"

// TODO - add env vars with debug mode
// const BASE_URL = "http://127.0.0.1:8000/api/v1"
const BASE_URL = "https://aav-work-orders.herokuapp.com/api/v1"

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});