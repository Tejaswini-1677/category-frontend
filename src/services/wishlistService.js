import axios from "axios";

const API = "https://category-backend-wkzn.onrender.com/api/wishlist";

export const getWishlist = (customerId) =>
  axios.get(`${API}/${customerId}`);

export const addToWishlist = (data) =>
  axios.post(API, data);

export const removeFromWishlist = (id) =>
  axios.delete(`${API}/${id}`);