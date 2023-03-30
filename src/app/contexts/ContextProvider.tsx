"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";
import { useCart } from "@/app/hooks/useCart";

const initialState = {
  chat: false,
  cart: false,
  profile: false,
  notification: false,
};

const initialModalState = {
  add_inventory: false,
  update_inventory: false,
  upload_inventory: false,
};

const StateContext = createContext({} as any);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentColor, setCurrentColor] = useState("#7c66da");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [isModalPageClicked, setIsModalPageClicked] = useState(initialModalState);

  const { isCartData, cart, removeFromCart, addToCart, totalCart, updateQuantity } = useCart();

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
        removeFromCart,
        addToCart,
        isCartData,
        cart,
        totalCart,
        updateQuantity,
        isModalPageClicked,
        handleModalPageClick,
        cartLength: cart && cart.length,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
