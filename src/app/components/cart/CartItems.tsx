"use client";

import React from "react";
import Image from "next/image";
import { ICartData } from "@/app/constants/data";
import product4 from "@/assets/product4.jpg";
import { CartIncrementor, CartIncrementorProps } from "../ui/Button";

const CartItems = ({ cartData, removeFromCart, updateCartData }: CartIncrementorProps) => {
  return (
    <div>
      {cartData?.map((item: ICartData, index: number) => (
        <div className='mt-5' key={index}>
          <div>
            <div className='flex items-center leading-8 gap-5 border-b-1 border-color'>
              <Image className='rounded-lg h-30 w-24' src={product4} alt='' />
              <div>
                <p className='font-semibold leading-5 capitalize'>{item.name}</p>
                <p className='text-gray-600 dark:text-gray-400 text-sm font-semibold'>{item.category}</p>
                <p className='font-semibold text-lg'>
                  ${item.price} <span className='text-sm text-slate-500'>x {item.quantity ?? 1}</span>
                </p>
              </div>
            </div>
            <CartIncrementor removeFromCart={removeFromCart} updateCartData={updateCartData} cartData={cartData} item={item} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
