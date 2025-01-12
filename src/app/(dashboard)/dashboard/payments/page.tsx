"use client";

import React from "react";
import { useStateContext } from "src/app/contexts/ContextProvider";

import { BsCashCoin } from "react-icons/bs";
import { ModalProvider } from "src/app/contexts/ModalProvider";

import Fund from "./components/Fund";
import Send from "./components/Send";
import Buy from "./components/Buy";
import Settings from "./components/Settings";
import PaymentTotalCard from "./components/PaymentTotalCard";
import PaymentActionCard from "./components/PaymentActionCard";
import RecentActivityCard from "./components/RecentActivityCard";

import styles from "./styles/payments.module.css";

const Page = () => {
  const { isModalPageClicked, handleModalPageClick } = useStateContext();

  return (
    <div>
      <div className={styles.payment_container}>
        <PaymentTotalCard title='Main Balance' balance='895.30' currency='usd' status_flag active={false} />
        <PaymentTotalCard title='Loan' balance='895.30' currency='usd' />
        <PaymentTotalCard title='Investment' balance='895.30' currency='usd' />
        <PaymentTotalCard title='Bitcoin' balance='895.30' currency='btc' />
      </div>
      <div className='mt-5'>
        <h1 className='font-bold text-xl'>Quick Actions</h1>
        <div className={`text-sm ${styles.payment_actions_container}`}>
          <PaymentActionCard action='Fund' handleModalPageClick={handleModalPageClick} icon={<BsCashCoin />} />
          <PaymentActionCard action='Send' handleModalPageClick={handleModalPageClick} icon={<BsCashCoin />} />
          <PaymentActionCard action='Buy Airtime' handleModalPageClick={handleModalPageClick} icon={<BsCashCoin />} />
          <PaymentActionCard action='Buy Data' handleModalPageClick={handleModalPageClick} icon={<BsCashCoin />} />
          <PaymentActionCard action='Pay Bills' handleModalPageClick={handleModalPageClick} icon={<BsCashCoin />} />
          <PaymentActionCard action='Settings' handleModalPageClick={handleModalPageClick} icon={<BsCashCoin />} />
        </div>
      </div>
      <div className={styles.payment_base}>
        <div className={styles.payment_transactions}>
          <div className='flex justify-between items-center'>
            <p className='font-bold text-sm'>Recent Activities</p>
            <span>See All</span>
          </div>
          <RecentActivityCard amount='3000' status='success' type='send' created_at='2024-11-03 15:90' />
          <RecentActivityCard amount='3000' status='pending' type='send' created_at='2024-11-03 15:90' />
          <RecentActivityCard amount='3000' status='failed' type='send' created_at='2024-11-03 15:90' />
        </div>
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
