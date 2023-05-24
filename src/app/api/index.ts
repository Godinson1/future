import axios from "axios";

const commonConfig = {
  withCredentials: true,
  timeout: 8000,
  headers: { "Access-Control-Allow-Origin": "*", Accept: "application/json" },
};

export const authApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AUTH_BASE_API,
  ...commonConfig,
});

export const userApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_USER_BASE_API,
  ...commonConfig,
});

export const orderApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ORDER_BASE_API,
  ...commonConfig,
});
