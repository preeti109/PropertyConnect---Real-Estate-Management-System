import axios from "axios";

const api = axios.create({
<<<<<<< HEAD
  baseURL: "http://localhost:8086",
});

// Attach token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Handle expired token
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/auth/login";
    }
    return Promise.reject(err);
=======
  baseURL: "http://localhost:8086", // API Gateway
});

/* ============================
   REQUEST — attach JWT ONLY
   Gateway will decode it
============================ */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/* ============================
   RESPONSE — handle 401
============================ */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");

      const currentPath = window.location.pathname;

      window.location.href = `/auth/login?redirect=${encodeURIComponent(
        currentPath
      )}`;
    }

    return Promise.reject(error);
>>>>>>> 1ea60b6 (Update services and frontend)
  }
);

export default api;
