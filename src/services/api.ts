import axios from "axios";

export const api = axios.create({
    baseURL:'https://psychonauts-api.herokuapp.com/api'
})