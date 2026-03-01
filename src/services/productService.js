import axios from "axios";

const API_URL = "https://category-backend-wkzn.onrender.com/api/products";

export const getProducts = () => axios.get(API_URL);

export const createProduct = (formData) =>
  axios.post(`${API_URL}/add`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const deleteProduct = (id) =>
  axios.delete(`${API_URL}/${id}`);