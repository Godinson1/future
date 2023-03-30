"use client";

import React from "react";
import TableList from "@/app/components/ui/Lists/Table";
import { InventoryHeaderCell } from "./constants";
import { rows } from "./constants/index";

const page = () => {
  return (
    <div>
      <TableList title='Products' data={rows} headerCells={InventoryHeaderCell} />
    </div>
  );
};

export default page;
