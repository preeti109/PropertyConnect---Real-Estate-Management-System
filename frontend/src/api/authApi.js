import axiosInstance from "./axiosInstance";

// LOGIN
export const loginUser = (data) => {
  return axiosInstance.post("/auth/login", data);
};

// REGISTER
export const registerUser = (data) => {
  return axiosInstance.post("/auth/register", data);
};
