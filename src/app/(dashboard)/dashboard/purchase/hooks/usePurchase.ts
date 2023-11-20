import { useState, useEffect } from "react";

import { ICartData } from "@/app/constants/data";
import { useStateContext } from "@/app/contexts/ContextProvider";
import { useViewport } from "@/app/hooks/useViewPort";
import { useCartContext } from "@/app/contexts/CartContextProvider";
import { useQuery } from "react-query";
import { getProducts } from "@/app/api/inventory/api.product";

export const usePurchase = () => {
  const [search, setSearch] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<ICartData[]>([]);
  const { isCartData, addToCart } = useCartContext();
  const { currentColor } = useStateContext();
  const { width } = useViewport();
  const { data: products, isLoading: productsLoading } = useQuery("products", getProducts);
  const productItems = products?.data;

  const inputWidth = width < 768 ? "100%" : 250;

  useEffect(() => {
    const filteredData = (productItems || []).filter((item: ICartData) => {
      return search.length > 2 ? item.name.toLowerCase().includes(search.toLowerCase()) : item;
    });
    setFilteredItems(filteredData);
  }, [search, productItems]);

  const getCategories = (): string[] => Array.from(new Set((productItems || []).map((item: ICartData) => item.category)));

  const filterByCategory = (category: string) => {
    return !category ? setFilteredItems(productItems) : setFilteredItems(productItems.filter((item: ICartData) => item.category.toLowerCase() === category.toLowerCase()));
  };

  return {
    addToCart,
    isCartData,
    getCategories,
    currentColor,
    setSearch,
    filteredItems,
    inputWidth,
    filterByCategory,
    productItems,
    productsLoading,
  };
};
