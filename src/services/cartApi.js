import axios from "axios";

const API = "https://category-backend-wkzn.onrender.com/api/cart";

export const getCart = () => axios.get(API);

export const addToCart = (data) => axios.post(API, data);

export const updateCart = (id, data) =>
  axios.put(`${API}/${id}`, data);

export const deleteCart = (id) =>
  axios.delete(`${API}/${id}`);