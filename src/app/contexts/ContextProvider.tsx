"use client";

import { useViewport } from "@/hooks/useViewPort";
import React, { createContext, ReactNode, useContext, useState } from "react";

const initialState = {
  chat: false,
  cart: false,
  profile: false,
  notification: false,
};

const initialModalState = {
  add_inventory: false,
  add_product: false,
  update_inventory: false,
  upload_inventory: false,
  fund: false,
  send: false,
  buy: false,
  payment_settings: false,
};

const StateContext = createContext<any>({});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentColor, setCurrentColor] = useState("#7c66da");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [isModalPageClicked, setIsModalPageClicked] = useState(initialModalState);
  const { width } = useViewport();
  const inputWidth = width < 768 ? "100%" : 250;

  const setMode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (color: string) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  const handleClick = (clicked: string) => setIsClicked({ ...initialState, [clicked]: true });
  const handleModalPageClick = (clicked: string) => setIsModalPageClicked({ ...initialModalState, [clicked]: true });

  return (
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        handleClick,
        isClicked,
        initialState,
        initialModalState,
        setIsClicked,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
        isModalPageClicked,
        handleModalPageClick,
        inputWidth,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
