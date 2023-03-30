"use client";

import React from "react";
import styles from "@/styles/dashboard.module.css";
import TableList from "@/app/components/ui/Lists/Table";
import { InventoryHeaderCell } from "./constants";
import InventoryList from "./components/InventoryList";

const page = () => {
  return (
    <div className={styles.dashboard}>
      <TableList title='Products' headerCells={InventoryHeaderCell} />
    </div>
  );
};

export default page;
