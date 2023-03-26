"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Roboto } from "next/font/google";

import Logo from "./Logo";
import Button from "./Button";
import styles from "../../styles/navbar.module.css";

const roboto = Roboto({ subsets: ["latin"], weight: "900" });

const Navbar = () => {
  const router = useRouter();

  return (
    <div className={`${styles.navbar}`}>
      <div className={styles.navbar_content}>
        <div onClick={() => router.push("/")} className={`${roboto.className} ${styles.logo}`}>
          <Logo />
        </div>
        <div className={styles.nav_right}>
          <Button onClick={() => router.push("/login")} outline size='small'>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
