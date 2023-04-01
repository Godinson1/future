import React, { ReactNode } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import RemoveIcon from "@mui/icons-material/Remove";
import { MdOutlineCancel } from "react-icons/md";
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

interface CartIncrementorProps {
  cartData: ICartData[];
  item: ICartData;
  updateCartData: (cartData: ICartData[], item: ICartData, type: updateType, purchase_type: purchaseType.CART) => void;
  removeFromCart: (item: ICartData) => void;
}

const IButton = ({ children, loading, onClick, outline, size }: ButtonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`${outline ? styles.btn_outline : styles.btn} ${size === "large" ? styles.btn_large : styles.btn_small}`}
      >
        {loading ? "loading..." : children}
      </button>
    </div>
  );
};

export const CartIncrementor = ({ cartData, item, updateCartData, removeFromCart }: CartIncrementorProps) => {
  const isRemove = item.quantity < 2;

  return (
    <div className='flex justify-between gap-4 mt-2 items-center'>
      <IconButton onClick={() => removeFromCart(item)}>
        <Delete />
      </IconButton>
      <ButtonGroup>
        <Button
          aria-label='reduce'
          onClick={() => (isRemove ? removeFromCart(item) : updateCartData(cartData, item, updateType.DECREMENT, purchaseType.CART))}
        >
          {isRemove ? <MdOutlineCancel fontSize='small' /> : <RemoveIcon fontSize='small' />}
        </Button>
        <Button disabled>{item.quantity}</Button>
        <Button aria-label='increase' onClick={() => updateCartData(cartData, item, updateType.INCREMENT, purchaseType.CART)}>
          <AddIcon fontSize='small' />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default IButton;
