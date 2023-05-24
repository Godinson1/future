import React, { ReactNode } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import styles from "../../styles/button.module.css";
import { purchaseType, updateType } from "@/app/hooks/useCart";
import { ICartData } from "@/app/constants/data";
import IconButton from "@mui/material/IconButton";
import Delete from "@mui/icons-material/Delete";

interface ButtonProps {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  loading?: boolean;
  outline?: boolean;
  size?: "small" | "large";
}

export interface CartIncrementorProps {
  cartData: ICartData[];
  item?: ICartData;
  updateCartData: (cartData: ICartData[], item: ICartData, type: updateType, purchase_type: purchaseType.CART) => void;
  removeFromCart: (item: ICartData) => void;
}

const IButton = ({ children, loading, onClick, outline, size }: ButtonProps) => {
  return (
    <div>
      <button onClick={onClick} className={`${outline ? styles.btn_outline : styles.btn} ${size === "large" ? styles.btn_large : styles.btn_small}`}>
        {loading ? "loading..." : children}
      </button>
    </div>
  );
};

export const CartIncrementor = ({ cartData, item, updateCartData, removeFromCart }: CartIncrementorProps) => {
  const isRemove = item && item.quantity < 2;

  return (
    <div className='flex justify-between gap-4 mt-2 items-center'>
      <IconButton onClick={() => removeFromCart(item as ICartData)}>
        <Delete />
      </IconButton>
      <ButtonGroup>
        <Button aria-label='reduce' disabled={isRemove} onClick={() => (isRemove ? removeFromCart(item) : updateCartData(cartData, item as ICartData, updateType.DECREMENT, purchaseType.CART))}>
          <RemoveIcon fontSize='small' />
        </Button>
        <Button disabled>{item && item.quantity}</Button>
        <Button aria-label='increase' onClick={() => updateCartData(cartData, item as ICartData, updateType.INCREMENT, purchaseType.CART)}>
          <AddIcon fontSize='small' />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default IButton;
