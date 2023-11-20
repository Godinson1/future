"use client";

import React from "react";
import TableList from "@/app/components/ui/Lists/Table";
import { InventoryHeaderCell } from "./constants";
import AddInventory from "./components/AddInventory";
import UploadInventory from "./components/UploadInventory";
import { ModalProvider } from "@/app/contexts/ModalProvider";
import { useStateContext } from "@/app/contexts/ContextProvider";
import { useInventory } from "./hooks/useInventory";
import AddProduct from "./components/AddProduct";
import AddProducts from "./components/AddProducts";

const Page = () => {
  const { isModalPageClicked } = useStateContext();
  const { inventoryData, handleSelectedInput, selectedInputs } = useInventory();

  return (
    <div>
      <TableList title='Products' data={inventoryData} headerCells={InventoryHeaderCell} handleSelectedInput={handleSelectedInput} />
      <ModalProvider type='top up' title='Inventory' open={isModalPageClicked.add_inventory}>
        <AddInventory selectedInputs={selectedInputs} />
      </ModalProvider>
      <ModalProvider type='add' title='Product' open={isModalPageClicked.add_product}>
        <AddProducts />
      </ModalProvider>
      <ModalProvider type='upload' title='Inventory' open={isModalPageClicked.upload_inventory}>
        <UploadInventory />
      </ModalProvider>
    </div>
  );
};

export default Page;
