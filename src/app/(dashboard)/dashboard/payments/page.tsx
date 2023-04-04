"use client";

import React from "react";
import { Roboto } from "next/font/google";
import styles from "./styles/payments.module.css";
import { BsCashCoin } from "react-icons/bs";
import { ModalProvider } from "@/app/contexts/ModalProvider";
import Fund from "./components/Fund";
import Send from "./components/Send";
import { useStateContext } from "@/app/contexts/ContextProvider";
import Buy from "./components/Buy";
import Settings from "./components/Settings";

const roboto = Roboto({ subsets: ["latin"], weight: ["300"] });

const Page = () => {
  const { isModalPageClicked, handleModalPageClick } = useStateContext();

  return (
    <div>
      <div className={styles.payment_container}>
        <div className={styles.payment_card}>
          <div className='flex justify-between items-center w-full'>
            <span>Main Balance</span>
            <div className={`text-sm text-slate-700 ${styles.active}`}>Active</div>
          </div>
          <div>
            <p className='font-bold text-4xl'>$895.30k</p>
          </div>
        </div>
        <div className={styles.payment_card}>
          <span>Loan</span>
          <p className='font-bold text-4xl'>$895.30k</p>
        </div>
        <div className={styles.payment_card}>
          <span>Investment</span>
          <p className='font-bold text-4xl'>$895.30k</p>
        </div>
        <div className={styles.payment_card}>
          <span>Bitcoin</span>
          <p className='font-bold text-4xl'>$895.30k</p>
        </div>
      </div>
      <div className='mt-5'>
        <h1 className='font-bold text-xl'>Quick Actions</h1>
        <div className={`text-sm ${styles.payment_actions_container}`}>
          <div onClick={() => handleModalPageClick("fund")} className={`${styles.payment_card_1} ${styles.payment_actions}`}>
            <BsCashCoin />
            Fund
          </div>
          <div onClick={() => handleModalPageClick("send")} className={styles.payment_actions}>
            <BsCashCoin />
            Send
          </div>
          <div onClick={() => handleModalPageClick("buy")} className={styles.payment_actions}>
            <BsCashCoin />
            Buy Airtime
          </div>
          <div onClick={() => handleModalPageClick("buy")} className={styles.payment_actions}>
            <BsCashCoin />
            Buy Data
          </div>
          <div onClick={() => handleModalPageClick("buy")} className={styles.payment_actions}>
            <BsCashCoin />
            Pay Bills
          </div>
          <div onClick={() => handleModalPageClick("payment_settings")} className={styles.payment_actions}>
            <BsCashCoin />
            Settings
          </div>
        </div>
      </div>
      <div className={styles.payment_base}>
        <div className={styles.payment_transactions}>
          <div className='flex justify-between items-center'>
            <p className='font-bold text-sm'>Transactions</p>
            <span>See All</span>
          </div>
        </div>
        <div className={styles.payment_transactions}>Recommendations</div>
      </div>
      <ModalProvider type='add' title='Fund' open={isModalPageClicked.fund}>
        <Fund />
      </ModalProvider>
      <ModalProvider type='send' title='Fund' open={isModalPageClicked.send}>
        <Send />
      </ModalProvider>
      <ModalProvider type='buy' title='Airtime/Data' open={isModalPageClicked.buy}>
        <Buy />
      </ModalProvider>
      <ModalProvider type='add' title='Settings' open={isModalPageClicked.payment_settings}>
        <Settings />
      </ModalProvider>
    </div>
  );
};

export default Page;
