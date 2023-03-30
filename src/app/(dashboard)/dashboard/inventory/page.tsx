"use client";

import React from "react";
import TableList from "@/app/components/ui/Lists/Table";
import { InventoryHeaderCell } from "./constants";
import { rows, IData } from "@/constants/list";

const page = () => {
  return (
    <div>
      <TableList title='Products' rows={rows} headerCells={InventoryHeaderCell} />
    </div>
  );
};

export default page;
