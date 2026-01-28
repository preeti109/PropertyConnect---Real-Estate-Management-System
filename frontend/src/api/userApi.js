import api from "./axios";

export const getMyProfile = () => {
  return api.get("/users/profile");
};
<<<<<<< HEAD
=======

export const updateMyProfile = (data) => {
  return api.put("/users/profile", data);
};
>>>>>>> 1ea60b6 (Update services and frontend)
