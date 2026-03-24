import axios from "axios";

const API = "https://category-backend-wkzn.onrender.com/api/coupons";

// Get all coupons
export const getCoupons = () => axios.get(API);

// Create coupon
export const createCoupon = (data) => axios.post(API, data);

// Delete coupon
export const deleteCoupon = (id) =>
  axios.delete(`${API}/${id}`);