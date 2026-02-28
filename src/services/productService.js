import axios from "axios";

 const API_URL = "https://category-backend-wkzn.onrender.com/api/products";
// If using render backend, replace with your deployed URL

export const getProducts = () => axios.get(API_URL);
export const createProduct = (data) => axios.post(API_URL, data);
export const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);