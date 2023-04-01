"use client";

import React from "react";
import TableList from "@/app/components/ui/Lists/Table";
import { InventoryHeaderCell } from "./constants";
import AddInventory from "./components/AddInventory";
import UploadInventory from "./components/UploadInventory";
import { rows } from "./constants/index";
import { ModalProvider } from "@/app/contexts/ModalProvider";
import { useStateContext } from "@/app/contexts/ContextProvider";

const Page = () => {
  const { isModalPageClicked } = useStateContext();

  return (
    <div>
      <TableList title='Products' data={rows} headerCells={InventoryHeaderCell} />
      <ModalProvider type='add' title='Inventory' open={isModalPageClicked.add_inventory}>
        <AddInventory />
      </ModalProvider>
      <ModalProvider type='upload' title='Inventory' open={isModalPageClicked.upload_inventory}>
        <UploadInventory />
      </ModalProvider>
    </div>
  );
};

export default Page;
