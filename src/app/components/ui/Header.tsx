import React, { ReactNode } from "react";
import Typography from "@mui/material/Typography";
import { Roboto } from "next/font/google";

import styles from "../../styles/main.module.css";

interface HeaderProps {
  children: ReactNode;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | undefined;
}

const roboto = Roboto({ subsets: ["latin"], weight: "900" });

const Header = ({ children, variant }: HeaderProps) => {
  return (
    <Typography className={`${roboto.className} ${styles.text_header}`} variant={variant}>
      {children}
    </Typography>
  );
};

export default Header;
