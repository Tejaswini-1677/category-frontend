import axios from "axios";

const API = "https://category-backend-wkzn.onrender.com/api/payments";

export const getPayments = () => axios.get(API);

export const createPayment = (data) => axios.post(API, data);

export const refundPayment = (id) =>
  axios.put(`${API}/${id}/refund`);cd 