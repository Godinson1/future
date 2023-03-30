"use client";

import React from "react";
import styles from "@/styles/dashboard.module.css";
import TableList from "@/app/components/ui/Lists/Table";
import { InventoryHeaderCell } from "../inventory/constants";

const page = () => {
  return (
    <div className={styles.con}>
      <TableList title='Products' headerCells={InventoryHeaderCell} />
      <TableList title='Inventory' headerCells={InventoryHeaderCell} />
    </div>
  );
};

export default page;
