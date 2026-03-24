import axios from "axios";

const API = "https://category-backend-wkzn.onrender.com/api/reviews";

// Add review
export const addReview = (data) => axios.post(API, data);

// Get reviews by product
export const getReviewsByProduct = (productId) =>
  axios.get(`${API}/product/${productId}`);

// Approve review (admin)
export const approveReview = (id) =>
  axios.put(`${API}/approve/${id}`);

// Delete review
export const deleteReview = (id) =>
  axios.delete(`${API}/${id}`);