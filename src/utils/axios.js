import axios from "axios"

// TODO - add env vars with debug mode
// const API_URL = "http://127.0.0.1:8000/api/v1"
const API_URL = "https://aav-work-orders.herokuapp.com/api/v1"

export const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})

export const axiosPrivateInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})