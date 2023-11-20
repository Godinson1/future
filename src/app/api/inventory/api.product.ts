import { productApi } from "../index";

export const addProduct = (productRequest: FormData) => {
  return productApi.post("/", productRequest);
};

export const getProducts = () => {
  return productApi.get("/");
};

export const uploadProductImage = (productImageRequest: FormData) => {
  return productApi.post("/upload", productImageRequest);
};
