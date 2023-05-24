"use client";
import React, { FC } from "react";
import styles from "../../styles/loader.module.css";

const Loader: FC = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.ripple}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export const AppLoader = () => {
  return (
    <div className={styles.lds_grid}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
