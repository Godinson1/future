import React, { useState } from "react";

import { useStateContext } from "@/app/contexts/ContextProvider";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField/TextField";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import Delete from "@mui/icons-material/Delete";
import { useInventory } from "../hooks/useInventory";
import { AppLoader } from "@/app/components/ui/Loader";

const AddProduct = () => {
  const { currentColor } = useStateContext();
  const { getPrevImageUrl, handleAddProduct, createProductLoading, handleProductInput, setPrevImageUrl, prevImageUrl, removeImage } = useInventory();

  return (
    <div>
      <div className='flex gap-5 mb-5'>
        <TextField onChange={(e) => handleProductInput("name", e.target.value)} label='Name' size='small' />
        <TextField onChange={(e) => handleProductInput("category", e.target.value)} label='Category' size='small' />
      </div>
      <div className='flex gap-5 mb-5'>
        <TextField onChange={(e) => handleProductInput("price", e.target.value)} label='Price' size='small' />
        <TextField onChange={(e) => handleProductInput("initialQuantityPurchased", e.target.value)} label='Quantity' size='small' />
      </div>
      <div className='flex gap-5 mb-5'>
        <TextField onChange={(e) => handleProductInput("manufacturer", e.target.value)} label='Manufacturer' size='small' />
        <TextField disabled label='Godwin Joseph' size='small' />
      </div>
      <div className='flex gap-5 mb-5'>
        <TextField onChange={(e) => handleProductInput("description", e.target.value)} fullWidth label='Product Description' size='small' />
      </div>
      <div className='mb-5'>
        {prevImageUrl[1] === "" ? (
          <label htmlFor='inventory_file' className='font-bold text-gray-500 underline cursor-pointer'>
            Add Product Image
          </label>
        ) : (
          <div className='flex justify-between iems-center'>
            <div className='flex justify-center iems-center' style={{ width: "50px", height: "50px", borderRadius: "50%" }}>
              <Image style={{ borderRadius: "80%" }} width={100} height={100} src={prevImageUrl[1]} alt='product-image' />
            </div>
            <IconButton onClick={() => removeImage(1)}>
              <Delete />
            </IconButton>
          </div>
        )}
        <input type='file' onChange={(e) => getPrevImageUrl(e, 1)} id='inventory_file' style={{ display: "none" }} />
      </div>
      <Button variant='contained' onClick={() => handleAddProduct()} disabled={createProductLoading} style={{ backgroundColor: currentColor }} sx={{ height: 60, fontWeight: "bold" }} fullWidth>
        {createProductLoading ? <AppLoader /> : "Add Product"}
      </Button>
    </div>
  );
};

export default AddProduct;
