import axios from "axios";

const API_URL ="http://localhost:8080/api/orders";

export const getOrders = () => axios.get(API_URL);

export const updateOrderStatus = (id, status) =>
  axios.put(`${API_URL}/${id}/status?status=${status}`);

export const cancelOrder = (id) =>
  axios.delete(`${API_URL}/${id}`);