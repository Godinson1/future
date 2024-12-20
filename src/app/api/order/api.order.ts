import { CartOrderRequest } from "src/app/components/cart/dto/cart.dto";
import { orderApi } from "../index";

export const placeOrder = (orderRequest: CartOrderRequest) => {
  return orderApi.post("/", orderRequest);
};
