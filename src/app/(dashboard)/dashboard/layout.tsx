"use client";

import React, { ReactNode } from "react";
import { Roboto } from "next/font/google";
import { Markup } from "interweave";
import Sidebar from "@/app/(dashboard)/components/Sidebar";
import { useStateContext } from "@/app/contexts/ContextProvider";
import DashboardNavbar from "@/app/(dashboard)/components/DashboardNavbar";
import { DASHBOARD_LAYOUT, getDashboardWidth, TEXT } from "@/app/(dashboard)/constants/styles";
import Footer from "@/components/ui/Footer";

import styles from "@/styles/dashboard.module.css";
import usePageTitle from "@/hooks/usePageTitle";
import { getUserMessage } from "@/lib/utils";

const roboto = Roboto({ subsets: ["latin"], weight: "900" });

const DashbaordLayout = ({ children }: { children: ReactNode }) => {
  const { activeMenu } = useStateContext();
  const { pageTitle, isGreeting } = usePageTitle();
  const dashboard_width = getDashboardWidth(activeMenu);

  return (
    <div className='flex relative'>
      {activeMenu && (
        <div className={DASHBOARD_LAYOUT.sidebar}>
          <Sidebar />
        </div>
      )}
      <div className={`${dashboard_width}`}>
        <div className={DASHBOARD_LAYOUT.nav}>
          <DashboardNavbar />
        </div>
        <div className={DASHBOARD_LAYOUT.children}>
          <div className={styles.dashboard}>
            <div className={`${roboto.className} ${isGreeting ? TEXT.title_greet : TEXT.title_dash} `}>
              {pageTitle}
              {isGreeting && (
                <div className={TEXT.title_base}>
                  <Markup content={getUserMessage()} />
                </div>
              )}
            </div>
            <div className={styles.dashboard_content}>{children}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashbaordLayout;
