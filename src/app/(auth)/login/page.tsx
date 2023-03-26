"use client";

import React from "react";
import Login from "../components/Login";
import styles from "../styles/auth.module.css";

const page = () => {
  return (
    <div className={styles.auth_main}>
      <div className={styles.auth_main_container}>
        <Login />
      </div>
    </div>
  );
};

export default page;
