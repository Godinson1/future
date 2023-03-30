"use client";

import React from "react";
import TableList from "@/app/components/ui/Lists/Table";
import { InventoryHeaderCell } from "../inventory/constants";
import { rows } from "@/app/constants/list";

const page = () => {
  return (
    <div>
      <TableList data={rows} title='Products' headerCells={InventoryHeaderCell} />
      <TableList data={rows} title='Inventory' headerCells={InventoryHeaderCell} />
    </div>
  );
};

export default page;
