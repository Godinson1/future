import { useState, useEffect } from "react";

import { ICartData, cartData } from "@/app/constants/data";
import { useStateContext } from "@/app/contexts/ContextProvider";
import { useViewport } from "@/app/hooks/useViewPort";

export const usePurchase = () => {
  const [items, setItems] = useState<ICartData[]>([]);
  const [search, setSearch] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<ICartData[]>([]);
  const { addToCart, isCartData, currentColor } = useStateContext();
  const { width } = useViewport();

  const inputWidth = width < 768 ? "100%" : 250;

  useEffect(() => setItems(cartData), []);

  useEffect(() => {
    const filteredData = items.filter((item) => {
      return search.length > 2 ? item.name.toLowerCase().includes(search.toLowerCase()) : item;
    });
    setFilteredItems(filteredData);
  }, [search, items]);

  const getCategories = () => {
    return Array.from(new Set(items.map((item) => item.category)));
  };

  const filterByCategory = (category: string) => {
    return !category ? setItems(cartData) : setItems(items.filter((item) => item.category.toLowerCase() === category.toLowerCase()));
  };

  return {
    addToCart,
    isCartData,
    items,
    getCategories,
    currentColor,
    setItems,
    setSearch,
    filteredItems,
    inputWidth,
    filterByCategory,
  };
};
