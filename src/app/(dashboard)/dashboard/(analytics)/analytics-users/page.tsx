"use client";

import React from "react";
import FirstChart from "../charts/First";
import styles from "../styles/analytics.module.css";

const page = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.analytics_base}>
        <p className='font-bold text-3xl'>Users</p>
        <div className='flex justify-between items-center gap-10 mt-5 mb-5'>
          <div>
            Visitors
            <p className='font-bold text-xl'>$895.30k</p>
          </div>
          <div>
            Add to Cart
            <p className='font-bold text-xl'>$895.30k</p>
          </div>
          <div>
            Check Out
            <p className='font-bold text-xl'>$895.30k</p>
          </div>
          <div>
            Complete Order
            <p className='font-bold text-xl'>$895.30k</p>
          </div>
        </div>
        <FirstChart />
      </div>
    </div>
  );
};

export default page;
