import React, { useState } from "react";
import Button from "@mui/material/Button";
import { ICartData } from "@/app/constants/data";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { purchaseType, updateType } from "@/app/hooks/useCart";
import IconButton from "@mui/material/IconButton";

import styles from "@/styles/dashboard.module.css";
import { useStateContext } from "@/app/contexts/ContextProvider";
import { MdOutlineCancel } from "react-icons/md";

interface PurchaseProps {
  item: ICartData;
  currentColor: string;
  addToCart: (item: ICartData) => void;
  isCartData: (item: ICartData) => boolean;
}

const ItemInCart = ({ item }: { item: ICartData }) => {
  const [count, setCount] = useState(1);
  const { cart, updateQuantity, removeFromCart } = useStateContext();
  const isRemove = item.quantity < 2;

  const handleUpdate = (actionType: string) => {
    if (actionType == "remove") {
      setCount(Math.max(count - 1, 0));
      isRemove ? removeFromCart(item) : updateQuantity(cart, item, updateType.DECREMENT, purchaseType.CART);
    } else if (actionType === "add") {
      setCount(count + 1);
      updateQuantity(cart, item, updateType.INCREMENT, purchaseType.CART);
    }
  };

  return (
    <div className='flex justify-between gap-4 mt-2 items-center'>
      <IconButton aria-label='reduce' onClick={() => handleUpdate("remove")}>
        {isRemove ? <MdOutlineCancel fontSize='small' /> : <RemoveIcon fontSize='small' />}
      </IconButton>
      <Button disabled>{count}</Button>
      <IconButton aria-label='increase' onClick={() => handleUpdate("add")}>
        <AddIcon fontSize='small' />
      </IconButton>
    </div>
  );
};

const ProductBase = ({ addToCart, isCartData, item, currentColor }: PurchaseProps) => {
  return (
    <div>
      {isCartData(item) ? (
        <ItemInCart item={item} />
      ) : (
        <div className='flex justify-between items-center'>
          <Button
            onClick={() => addToCart(item)}
            style={{ backgroundColor: isCartData(item) ? "" : currentColor }}
            sx={{ lineHeight: 1, textTransform: "none", fontWeight: "bold", flexGrow: 1, height: "40px" }}
            disabled={isCartData(item)}
            variant='contained'
            className={styles.btn_add}
          >
            {isCartData(item) ? "Added to Cart" : "Add to Cart"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductBase;
