import axios from "axios";

export const APIClient = axios.create({
  baseURL: "/api",
  timeout: 1000,
});
