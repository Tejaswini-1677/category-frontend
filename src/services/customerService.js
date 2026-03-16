import axios from "axios";

const CUSTOMER_API = "https://category-backend-wkzn.onrender.com/api/customers";
const AUTH_API = "https://category-backend-wkzn.onrender.com/api/auth";

// ---------- CUSTOMER CRUD ----------

export const getAllCustomers = () => {
  return axios.get(CUSTOMER_API);
};

export const getCustomerById = (id) => {
  return axios.get(`${CUSTOMER_API}/${id}`);
};

export const addCustomer = (data) => {
  return axios.post(`${AUTH_API}/register`, data);
};

export const updateCustomer = (id,data) => {
  return axios.put(`${CUSTOMER_API}/${id}`, data);
};

export const deleteCustomer = (id) => {
  return axios.delete(`${CUSTOMER_API}/${id}`);
};

export const deactivateCustomer = (id) => {
  return axios.put(`${CUSTOMER_API}/${id}/deactivate`);
};

// ---------- AUTH ----------

export const registerCustomer = (data) => {
  return axios.post(`${AUTH_API}/register`, data);
};

export const loginUser = (data) => {
  return axios.post(`${AUTH_API}/login`, data);
};