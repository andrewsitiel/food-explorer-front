import axios from "axios";

const api = axios.create({
  baseURL: "https://food-explorer-back-lsv4.onrender.com"
})

export { api };
