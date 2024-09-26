import axios from "axios";

const https = axios.create({
  baseURL: import.meta.env.VITE_VUE_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

https.interceptors.request.use(
  (config) => {
    const token = `Bearer ${import.meta.env.VITE_VUE_APP_API_KEY}` 
      

    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default https;
