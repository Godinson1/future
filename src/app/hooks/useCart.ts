import { useState, useMemo, SetStateAction } from "react";
import { cartData, ICartData } from "@/constants/data";

export enum updateType {
  INCREMENT = "increment",
  DECREMENT = "decrement",
  REMOVE = "remove",
}

export enum purchaseType {
  ITEM = "item",
  CART = "cart",
}

export const useCart = () => {
  const [cart, setCart] = useState<ICartData[]>([]);
  const [items, setItems] = useState<ICartData[]>([]);

  const totalCart = useMemo(() => {
    return cart.reduce((total, item) => total + item.total, 0);
  }, [cart]);

  const addToCart = (item: ICartData) =>
    setCart((prevState: ICartData[]) => [...prevState, { ...item, total: item.price * item.quantity }]);

  const removeFromCart = (item: ICartData) => {
    const newCartData = cart.filter((data) => data.id !== item.id);
    setCart(newCartData);
  };

  const getQuantity = (quantity: number, type: updateType): number => {
    return type === updateType.DECREMENT ? Math.max(quantity - 1, 0) : quantity + 1;
  };

  const updateQuantity = (itemsData: ICartData[], item: ICartData, type: updateType, purchase_type: purchaseType) => {
    const newData = itemsData.map((data) => {
      if (data.id === item.id) {
        const newQuantity = getQuantity(data.quantity, type);
        return { ...data, quantity: newQuantity, total: newQuantity * data.price };
      }
      return data;
    }) as ICartData[];
    return purchase_type === purchaseType.CART ? setCart(newData) : newData;
  };

  const isCartData = (item: ICartData): boolean => {
    return cart.find((cartItem: ICartData) => cartItem.id === item.id) !== undefined;
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    isCartData,
    totalCart,
    getQuantity,
    updateQuantity,
  };
};
