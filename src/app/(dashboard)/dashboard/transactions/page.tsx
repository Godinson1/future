"use client";

import React from "react";
import styles from "@/styles/dashboard.module.css";
import DataTable from "@/app/components/ui/Lists/CustomTable";

const page = () => {
  return (
    <div className={styles.dashboard}>
      <DataTable />
    </div>
  );
};

export default page;
