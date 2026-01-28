<<<<<<< HEAD
import axiosInstance from "./axiosInstance";

// LOGIN
export const loginUser = (data) => {
  return axiosInstance.post("/auth/login", data);
=======
import api from "./axios";

// LOGIN
export const loginUser = (data) => {
  return api.post("/auth/login", data);
>>>>>>> 1ea60b6 (Update services and frontend)
};

// REGISTER
export const registerUser = (data) => {
<<<<<<< HEAD
  return axiosInstance.post("/auth/register", data);
=======
  return api.post("/auth/register", data);
>>>>>>> 1ea60b6 (Update services and frontend)
};
