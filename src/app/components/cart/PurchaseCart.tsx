import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import Divider from "@mui/material/Divider";
import ButtonIcon from "@/app/(dashboard)/components/ButtonIcon";
import Timer from "@mui/icons-material/Timer";
import { ICartData } from "../../constants/data";
import TextField from "@mui/material/TextField";
import PaymentSelectSection from "./PaymentOptions";
import CartMap from "./Map";
import DeliveryTip from "./DeliveryTip";
import { CartOrderRequest } from "./dto/cart.dto";
import { useCartContext } from "../../contexts/CartContextProvider";
import CartItems from "./CartItems";
import { useStateContext } from "@/app/contexts/ContextProvider";
import { formatter } from "@/app/lib/utils";
import { useAuth } from "@/app/hooks/useAuth";

const PurchaseCart = () => {
  const { user } = useAuth();
  const { currentColor } = useStateContext();
  const { cart, updateQuantity, removeFromCart, totalCart, subTotal, deliveryTip, setDeliveryTip, getTip, paymentMethod, setPaymentMethod, deliveryNote, setDeliveryNote, shippingAddress, setShippingAddress, createOrder, createOrderLoading } =
    useCartContext();

  const handlePlaceOrder = (cartItems: ICartData[]) => {
    const cartOrderRequest: CartOrderRequest = {
      userId: user.id,
      orderLineItems: cartItems,
      deliveryInfo: { deliveryNote, pickUpAddress: "hqtrs", shippingAddress, tipAmount: getTip(deliveryTip) },
      paymentInfo: { type: paymentMethod },
      subTotal,
      total: totalCart,
    };
    createOrder(cartOrderRequest);
  };

  return (
    <div className='bg-half-transparent w-full fixed nav-item top-0 right-0'>
      <div className='overflow-auto float-right h-screen duration-1000 ease-in-out transition-all bg-white p-8'>
        <div className='flex justify-between items-center'>
          <p className='font-semibold text-lg'>Purchase Cart</p>
          <ButtonIcon icon={<MdOutlineCancel />} color='rgb(153, 171, 180)' bgHoverColor='light-gray' size='2xl' borderRadius='50%' />
        </div>
        <CartItems cartData={cart} updateCartData={updateQuantity} removeFromCart={removeFromCart} />
        {cart.length ? (
          <>
            <div className='mt-3 mb-3'>
              <div className='flex justify-between items-center'>
                <p className='text-gray-500'>Discount</p>
                <p className='font-semibold'>{formatter.format(0)}</p>
              </div>
              <div className='flex justify-between items-center'>
                <p className='text-gray-500'>Sub Total</p>
                <p className='font-semibold'>{formatter.format(subTotal)}</p>
              </div>
              <div className='flex justify-between items-center mb-3'>
                <p className='text-gray-500'>Tips</p>
                <p className='font-semibold'>{formatter.format(getTip(deliveryTip))}</p>
              </div>
              <Divider />
              <div className='flex justify-between items-center mt-3 mb-3'>
                <p className='text-gray-500 dark:text-gray-200'>Total</p>
                <p className='font-semibold'>{formatter.format(totalCart)}</p>
              </div>
              <Divider />
              <div className='flex justify-start items-center mt-3'>
                <p className='text-gray-500 dark:text-gray-200'>
                  <Timer />
                </p>
                <p className='text-gray-500'>10-20 min</p>
              </div>
              <div className='bg-gray-50 rounded-md h-10 mt-3 cursor-pointer pl-2 pb-2'>
                <TextField className="mt-['-4px']" value={shippingAddress} onChange={(e: any) => setShippingAddress(e.target.value)} fullWidth label='Delivery Address' InputProps={{ disableUnderline: true }} variant='standard' size='small' />
              </div>
              <div className='flex justify-center items-center bg-gray-50 w-50 h-60 rounded-md mt-3'>
                <p className='text-gray-500 dark:text-gray-200'>
                  <CartMap />
                </p>
              </div>
              <div className='flex justify-between items-center bg-gray-50 p-3 rounded-md h-10 mt-4 cursor-pointer'>
                <TextField value={deliveryNote} onChange={(e: any) => setDeliveryNote(e.target.value)} fullWidth label='Delivery Note' InputProps={{ disableUnderline: true }} variant='standard' size='small' />
              </div>
              <DeliveryTip deliveryTip={deliveryTip} setDeliveryTip={setDeliveryTip} />
              <PaymentSelectSection totalCart={totalCart} paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
            </div>
            <div className='mt-5'>
              <ButtonIcon onClick={() => handlePlaceOrder(cart)} color='white' bgColor={currentColor} text={createOrderLoading ? "Loading..." : "Place Order"} borderRadius='10px' width='full' />
            </div>
          </>
        ) : (
          <div className='flex flex-column justify-center items-center h-screen'>
            <p>Cart is empty - Add Items</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PurchaseCart;
