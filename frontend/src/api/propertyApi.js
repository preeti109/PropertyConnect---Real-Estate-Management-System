import axiosInstance from "./axiosInstance";

// get all approved properties
export const getAllProperties = () => {
  return axiosInstance.get("/properties");
};

// get property by id
export const getPropertyById = (id) => {
  return axiosInstance.get(`/properties/${id}`);
};

// get images of property
export const getPropertyImages = (id) => {
  return axiosInstance.get(`/properties/${id}/images`);
};

// search/filter properties
export const searchProperties = (params) => {
  return axiosInstance.get("/properties/search", {
    params,
  });
};
