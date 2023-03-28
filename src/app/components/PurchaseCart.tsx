import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import ButtonIcon from "@/app/(dashboard)/components/ButtonIcon";
import Image from "next/image";

import { CartIncrementor } from "@/components/ui/Button";
import { ICartData } from "../constants/data";
import { useViewport } from "../hooks/useViewPort";

const PurchaseCart = () => {
  const { width } = useViewport();
  const { currentColor, cart, updateQuantity, removeFromCart, totalCart } = useStateContext();

  const handlePlaceOrder = (cartItems: ICartData[]) => {
    console.log({ cartItems, totalCart });
  };

  return (
    <div className='bg-half-transparent w-full fixed nav-item top-0 right-0'>
      <div className='overflow-auto float-right h-screen duration-1000 ease-in-out transition-all bg-white md:w-400 p-8'>
        <div className='flex justify-between items-center'>
          <p className='font-semibold text-lg'>Purchase Cart</p>
          <ButtonIcon icon={<MdOutlineCancel />} color='rgb(153, 171, 180)' bgHoverColor='light-gray' size='2xl' borderRadius='50%' />
        </div>
        {cart?.map((item: ICartData, index: number) => (
          <div className='mt-5' key={index}>
            <div>
              <div className='flex items-center leading-8 gap-5 border-b-1 border-color'>
                <Image className='rounded-lg h-30 w-24' src={item.image} alt='' />
                <div>
                  <p className='font-semibold leading-5 capitalize'>{item.name}</p>
                  <p className='text-gray-600 dark:text-gray-400 text-sm font-semibold'>{item.category}</p>
                  <CartIncrementor removeFromCart={removeFromCart} updateCartData={updateQuantity} cartData={cart} item={item} />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className='mt-3 mb-3'>
          <div className='flex justify-between items-center'>
            <p className='text-gray-500'>Sub Total</p>
            <p className='font-semibold'>${totalCart}</p>
          </div>
          <div className='flex justify-between items-center mt-3'>
            <p className='text-gray-500 dark:text-gray-200'>Total</p>
            <p className='font-semibold'>${totalCart}</p>
          </div>
        </div>
        <div className='mt-5'>
          <ButtonIcon
            onClick={() => handlePlaceOrder(cart)}
            color='white'
            bgColor={currentColor}
            text='Place Order'
            borderRadius='10px'
            width='full'
          />
        </div>
      </div>
    </div>
  );
};

export default PurchaseCart;
