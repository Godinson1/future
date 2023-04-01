"use client";

import React from "react";
import OverviewChart from "./charts/Overview";
import OverviewChart1 from "./charts/OverviewChart1";
import styles from "./styles/overview.module.css";

const page = () => {
  const options = {
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: ["1st", "2nd", "3rd", "4th", "5th", "6th"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [10, 20, 40, 50, 30, 70],
      },
    ],
  };

  return (
    <div className='flex flex-col gap-10'>
      <div className='w-full flex justify-between items-center gap-10'>
        <div className={styles.base_container}>
          <div className={styles.base1_container}>
            <div>
              <p className='font-bold'>
                Total Purchase <span className='text-sm text-green-600'> See all</span>
              </p>
              <span className='text-gray-400 text-sm'>Jan 30, 2023 - June 30, 2023</span>
            </div>
            <div>
              <p className='font-bold text-4xl'>$895.30k</p>
              <p className='text-gray-400 text-sm'>
                <span className='text-sm text-green-600'>9.2%</span> vs 6 months before
              </p>
            </div>
          </div>

          <div>
            <OverviewChart />
          </div>
        </div>
        <div className={styles.base2_container}>
          <div>
            <p className='font-bold'>Summary</p>
            <span className='text-gray-400 text-sm'>Jan 30, 2023 - June 30, 2023</span>
          </div>
          <div className='flex justify-between items-center gap-10'>
            <div>
              <p className='font-bold text-3xl'>$895.30k</p>
              Revenue
              <div className='w-15 h-[2px] bg-green-600'></div>
            </div>
            <div>
              <p className='font-bold text-3xl'>$895.30k</p>
              Orders
              <div className='w-15 h-[2px] bg-gray-300'></div>
            </div>
            <div>
              <p className='font-bold text-3xl'>$895.30k</p>
              Avg. Order
              <div className='w-15 h-[2px] bg-gray-300'></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.overview_base}>
        <p className='font-bold text-3xl'>Sales Funnel</p>
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
        <OverviewChart1 />
      </div>
    </div>
  );
};

export default page;
