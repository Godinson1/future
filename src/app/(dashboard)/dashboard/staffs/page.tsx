"use client";

import React from "react";
import styles from "@/styles/dashboard.module.css";
import { useStaffs } from "./hooks/useStaffs";
import { StaffHeaderCell } from "./constants/staffs.constant";
import TableList from "@/components/ui/Lists/Table";

const Page = () => {
  const { staffsData, handleSelectedInput } = useStaffs();

  return (
    <div className={styles.dashboard}>
      <TableList title='Staffs' data={staffsData} headerCells={StaffHeaderCell} handleSelectedInput={handleSelectedInput} />
    </div>
  );
};

export default Page;
