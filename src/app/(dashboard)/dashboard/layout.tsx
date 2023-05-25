"use client";

import React, { ReactNode } from "react";
import { AuthGuard } from "@/app/hooks/useAuth";
import { CartContextProvider } from "@/app/contexts/CartContextProvider";
import Sidebar from "@/app/(dashboard)/components/Sidebar";
import { useStateContext } from "@/app/contexts/ContextProvider";
import DashboardNavbar from "@/app/(dashboard)/components/DashboardNavbar";
import Footer from "@/components/ui/Footer";

import styles from "@/styles/dashboard.module.css";

const DashbaordLayout = ({ children }: { children: ReactNode }) => {
  const { activeMenu } = useStateContext();

  return (
    <AuthGuard>
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
    </AuthGuard>
  );
};

export default DashbaordLayout;
