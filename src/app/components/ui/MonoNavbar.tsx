"use client";

import React from "react";
import { Roboto } from "next/font/google";
import styles from "../../styles/navbar.module.css";
import Logo from "@/app/components/ui/Logo";
import { useRouter } from "next/navigation";

const inter = Roboto({ subsets: ["latin"], weight: "900" });

const AuthNavbar = () => {
  const router = useRouter();

  return (
    <div className={`${styles.auth_navbar}`}>
      <div className={styles.auth_navbar_content}>
        <div onClick={() => router.push("/")} className={`${inter.className} ${styles.logo}`}>
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default AuthNavbar;
