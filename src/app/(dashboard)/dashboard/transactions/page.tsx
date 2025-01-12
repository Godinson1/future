"use client";

import React from "react";
import styles from "@/styles/dashboard.module.css";
import Transaction from "./components/Transaction";

const page = () => {
  return (
    <div className={styles.dashboard}>
      <Transaction />
    </div>
  );
};

export default page;
