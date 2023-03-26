import React from "react";
import { Roboto } from "next/font/google";
import { useRouter } from "next/navigation";
import styles from "../../styles/navbar.module.css";

const roboto = Roboto({ subsets: ["latin"], weight: "900" });

const Logo = () => {
  return (
    <div>
      <div className={styles.logo_main}>
        <div className={styles.logo_main_1}></div>
        <div className={styles.logo_main_2}></div>
        <div className={styles.logo_main_3}></div>
      </div>
      <div className={styles.logo_text}>Future.</div>
    </div>
  );
};

export const FutureLogo = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/dashboard")} className={`${roboto.className} ${styles.logo_side}`}>
      <Logo />
    </div>
  );
};

export default Logo;
