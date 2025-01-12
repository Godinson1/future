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
  baseURL: `${process.env.NEXT_PUBLIC_ORDER_BASE_API}/order`,
  ...commonConfig,
});

export const inventoryApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_ORDER_BASE_API}/inventory`,
  ...commonConfig,
});

export const messagesApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_USER_API}/messages`,
  ...commonConfig,
});

export const conversationApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_USER_API}/conversation`,
  ...commonConfig,
});

export const productApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_ORDER_BASE_API}/products`,
  ...commonConfig,
});
