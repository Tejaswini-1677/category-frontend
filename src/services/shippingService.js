import axios from "axios";

const API = "https://category-backend-wkzn.onrender.com/api/shipping";

// Get all shipping
export const getShipping = () => axios.get(API);

// Add shipping
export const createShipping = (data) => axios.post(API, data);

// Update shipping
export const updateShipping = (id, data) =>
  axios.put(`${API}/${id}`, data);