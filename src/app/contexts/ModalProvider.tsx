"use client";

import React, { useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";

import styles from "@/styles/main.module.css";
import IconButton from "@mui/material/IconButton";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "@/app/contexts/ContextProvider";

interface ModalProviderProps {
  children: React.ReactNode;
  title?: string;
  type?: "add" | "update" | "upload" | "send" | "buy" | "top up";
  show?: boolean;
  open: boolean;
}

export const ModalProvider = ({ children, title, type, open }: ModalProviderProps) => {
  const { initialModalState, handleModalPageClick, currentColor } = useStateContext();
  useEffect(() => {
    open && (document.body.style.overflow = "hidden");
    !open && (document.body.style.overflow = "");
  }, [open]);

  return (
    <Backdrop sx={{ display: "flex", justifyContent: "flex-end", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
      <div className={styles.modal_container}>
        <div className='flex justify-between items-center w-full'>
          <div className='capitalize font-bold text-2xl'>
            {type} {title}
          </div>
          <IconButton onClick={() => handleModalPageClick(initialModalState)}>
            <MdOutlineCancel color={currentColor} size={26} />
          </IconButton>
        </div>
        {children}
      </div>
    </Backdrop>
  );
};
