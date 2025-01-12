"use client";

import React, { ReactNode } from "react";

import { AuthGuard } from "src/app/hooks/useAuth";
import { CartContextProvider } from "src/app/contexts/CartContextProvider";
import { SocketProvider } from "src/app/contexts/SocketContextProvider";

import { useStateContext } from "src/app/contexts/ContextProvider";

import DashboardNavbar from "src/app/(dashboard)/components/DashboardNavbar";
import Sidebar from "src/app/(dashboard)/components/Sidebar";
import Footer from "src/app/components/ui/Footer";

import styles from "@/styles/dashboard.module.css";

const DashbaordLayout = ({ children }: { children: ReactNode }) => {
  const { activeMenu } = useStateContext();

  return (
    <AuthGuard>
      <SocketProvider>
        <CartContextProvider>
          <div className={styles.dashboard_container}>
            {activeMenu && (
              <div className={`sidebar ${styles.dashboard_sidebar}`}>
                <Sidebar />
              </div>
            )}
            <div className={`${styles.dashboard_main} ${activeMenu ? styles.dashboard_main_active : styles.dashboard_main_full}`}>
              <DashboardNavbar />
              <div className={styles.dashboard_child}>{children}</div>
              <Footer />
            </div>
          </div>
        </CartContextProvider>
      </SocketProvider>
    </AuthGuard>
  );
};

export default DashbaordLayout;
