import axios from "axios";

export const issuesAPI = axios.create({
  baseURL: "https://api.github.com",
});
