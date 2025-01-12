"use client";

import React from "react";
import styles from "@/styles/dashboard.module.css";
import TableList from "@/components/ui/Lists/Table";
import { useFutureClient } from "./hooks/useClient";
import { FutureClientHeaderCell } from "./constants/clients.constant";

const Page = () => {
  const { clientsData, handleSelectedInput } = useFutureClient();

  return (
    <div className={styles.dashboard}>
      <TableList title='Clients' data={clientsData || ([] as any)} headerCells={FutureClientHeaderCell} handleSelectedInput={handleSelectedInput} />
    </div>
  );
};

export default Page;
