import React, { ReactNode } from "react";
import styles from "../../styles/button.module.css";

interface ButtonProps {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  loading?: boolean;
  outline?: boolean;
  size?: "small" | "large";
}

const Button = ({ children, loading, onClick, outline, size }: ButtonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`${outline ? styles.btn_outline : styles.btn} ${size === "large" ? styles.btn_large : styles.btn_small}`}
      >
        {loading ? "loading..." : children}
      </button>
    </div>
  );
};

export default Button;
