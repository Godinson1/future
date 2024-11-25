"use client";

import React, { createContext, ReactNode, useContext } from "react";
import { useCart } from "src/app/hooks/useCart";

const CartContext = createContext<any>({});

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const {
    isCartData,
    cart,
    removeFromCart,
    addToCart,
    totalCart,
    subTotal,
    updateQuantity,
    deliveryNote,
    setDeliveryNote,
    shippingAddress,
    setShippingAddress,
    paymentMethod,
    setPaymentMethod,
    deliveryTip,
    setDeliveryTip,
    createOrder,
    createOrderLoading,
    activeSteps,
  } = useCart();

  return (
    <CartContext.Provider
      value={{
        removeFromCart,
        addToCart,
        isCartData,
        cart,
        totalCart,
        subTotal,
        updateQuantity,
        deliveryNote,
        setDeliveryNote,
        shippingAddress,
        setShippingAddress,
        paymentMethod,
        setPaymentMethod,
        deliveryTip,
        setDeliveryTip,
        createOrder,
        createOrderLoading,
        activeSteps,
        cartLength: cart && cart.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
