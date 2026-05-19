import axios from "axios";
import constants from "../constants";

const API = axios.create({
  baseURL: constants.HOST, // http://localhost:8000
});

// Attach JWT token to every request if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const fetchArticles = () => API.get("/api/articles");
export const createArticle = (article) => API.post("/api/articles", article);
export const updateArticle = (id, article) =>
  API.put(`/api/articles/${id}`, article);
export const deleteArticle = (id) => API.delete(`/api/articles/${id}`);
