import React, { ReactNode } from "react";
import Typography from "@mui/material/Typography";

import styles from "@/styles/main.module.css";

interface ParagraphProps {
  children: ReactNode;
  variant: "subtitle1" | "subtitle2" | "body1" | "body2" | "caption";
  className?: string | undefined;
}

const Paragraph = ({ children, variant, className }: ParagraphProps) => {
  return (
    <Typography className={styles[className as string]} variant={variant}>
      {children}
    </Typography>
  );
};

export default Paragraph;
