import axios from "axios";

const api = axios.create({
  baseURL: "https://food-explorer-9i1y.onrender.com"
})

export { api };