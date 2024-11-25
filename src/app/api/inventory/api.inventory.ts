import { InventoryRequest } from "src/app/components/cart/dto/cart.dto";
import { inventoryApi } from "../index";
import { IInventoryTopUp } from "src/app/(dashboard)/dashboard/inventory/hooks/useInventory";

export const addInventory = (inventoryRequest: InventoryRequest) => {
  return inventoryApi.post("/", inventoryRequest);
};

export const getInventories = () => {
  return inventoryApi.get("/");
};

export const topUpInventory = (topUpRequest: IInventoryTopUp[]) => {
  return inventoryApi.patch("/top-up", topUpRequest);
};
