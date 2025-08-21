import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

// Google auth api

export const GoogleAuth = (code) => {
  return api.get(`/auth/google?code=${code}`);
};
