import api from "./axios";

export const sendEnquiry = (data) =>
  api.post("/enquiries", data);
<<<<<<< HEAD
=======

export const getMyEnquiries = (customerId) => {
  return api.get(`/enquiries/customer/${customerId}`);
};
>>>>>>> 1ea60b6 (Update services and frontend)
