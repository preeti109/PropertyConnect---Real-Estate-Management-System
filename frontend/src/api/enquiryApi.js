import api from "./axios";

export const sendEnquiry = (data) =>
  api.post("/enquiries", data);
