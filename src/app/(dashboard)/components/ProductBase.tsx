import React, { useState } from "react";
import Button from "@mui/material/Button";
import { ICartData } from "src/app/constants/data";

import styles from "@/styles/dashboard.module.css";
interface PurchaseProps {
  item: ICartData;
  currentColor: string;
  addToCart: (item: ICartData) => void;
  isCartData: (item: ICartData) => boolean;
}

const ProductBase = ({ addToCart, isCartData, item, currentColor }: PurchaseProps) => {
  return (
    <div className='flex justify-between items-center'>
      <Button onClick={() => addToCart(item)} style={{ backgroundColor: isCartData(item) ? "" : currentColor }} sx={{ flexGrow: 1, height: "40px" }} disabled={isCartData(item)} variant='contained' className={styles.btn_add}>
        {isCartData(item) ? "Added to Cart" : "Add to Cart"}
      </Button>
    </div>
  );
};

export default ProductBase;
