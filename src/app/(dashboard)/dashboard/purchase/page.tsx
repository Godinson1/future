"use client";

import React from "react";
import Image from "next/image";
import { ICartData, cartData } from "@/constants/data";
import styles from "@/styles/dashboard.module.css";
import { Roboto } from "next/font/google";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ProductBase from "../../components/ProductBase";
import { usePurchase } from "./hooks/usePurchase";

const roboto = Roboto({ subsets: ["latin"], weight: ["700"] });

const Page = () => {
  const { addToCart, isCartData, currentColor, items, setSearch, getCategories, filterByCategory, filteredItems, inputWidth } =
    usePurchase();

  const getFilteredList = (filteredList: ICartData[]) => {
    return filteredList.length < 1 ? (
      <div className='w-full text-center'>
        <p>No Result Found</p>
      </div>
    ) : (
      filteredList?.map((item: ICartData, index: number) => (
        <div key={index} className={styles.purchase_container}>
          <Image className={styles.purchase_image} src={item.image} alt='item-order' />
          <div className={styles.purchase_content}>
            <div>
              <div className='flex justify-between items-center'>
                <span className={styles.base}>{item.category}</span>
                <span className='font-bold text-sm text-slate-500'>${item.price}</span>
              </div>
              <div className={`${roboto.className} font-bold text-base capitalize`}>{item.name}</div>
            </div>
            <ProductBase currentColor={currentColor} item={item} addToCart={addToCart} isCartData={isCartData} />
          </div>
        </div>
      ))
    );
  };

  return (
    <div className={styles.dashboard}>
      <div className='flex flex-wrap items-center justify-start gap-5'>
        <Autocomplete
          disablePortal
          onChange={(event: any, newValue: string | null) => filterByCategory(newValue as string)}
          options={getCategories()}
          sx={{ width: inputWidth }}
          renderInput={(params) => <TextField {...params} size='small' label='Search by Categories' />}
        />
        <TextField
          onChange={(e: any) => setSearch(e.target.value)}
          label='Search by Name'
          sx={{ width: inputWidth }}
          variant='outlined'
          size='small'
        />
      </div>
      <div className='flex flex-wrap gap-5'>{cartData ? getFilteredList(filteredItems) : ""}</div>
    </div>
  );
};

export default Page;
