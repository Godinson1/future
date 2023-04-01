import React, { useState } from "react";

import { useStateContext } from "@/app/contexts/ContextProvider";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField/TextField";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import Delete from "@mui/icons-material/Delete";

const AddInventory = () => {
  const { currentColor } = useStateContext();
  const [prevImageUrl, setPrevImageUrl] = useState("");

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file as File);
    fileReader.onloadend = () => {
      setPrevImageUrl(fileReader.result as string);
    };
  };

  return (
    <div>
      <div className='flex gap-5 mb-5'>
        <TextField label='Name' size='small' />
        <TextField label='Category' size='small' />
      </div>
      <div className='flex gap-5 mb-5'>
        <TextField label='Price' size='small' />
        <TextField label='Quantity' size='small' />
      </div>
      <div className='flex gap-5 mb-5'>
        <TextField label='Slug' size='small' />
        <TextField disabled label='Status' size='small' />
      </div>
      <div className='flex gap-5 mb-5'>
        <TextField fullWidth label='Product Description' size='small' />
      </div>
      <div className='mb-5'>
        {prevImageUrl === "" ? (
          <label htmlFor='inventory_file' className='font-bold text-gray-500 underline cursor-pointer'>
            Add Product Image
          </label>
        ) : (
          <div className='flex justify-between iems-center'>
            <div className='flex justify-center iems-center' style={{ width: "50px", height: "50px", borderRadius: "50%" }}>
              <Image style={{ borderRadius: "80%" }} width={100} height={100} src={prevImageUrl} alt='product-image' />
            </div>
            <IconButton onClick={() => setPrevImageUrl("")}>
              <Delete />
            </IconButton>
          </div>
        )}
        <input type='file' onChange={(e) => handleFileSelect(e)} id='inventory_file' style={{ display: "none" }} />
      </div>
      <div className='flex gap-5 mb-5'>
        <TextField label='Quantity Consumed ' size='small' />
        <TextField label='Quantity Remaining' size='small' />
      </div>
      <div className='flex gap-5 mb-5'>
        <TextField disabled label='Sub Total' size='small' />
        <TextField disabled label='Total' size='small' />
      </div>
      <div className='flex gap-5 mb-5'>
        <FormControlLabel control={<Checkbox value='allowExtraEmails' color={"secondary"} />} label='Show Live' />
        <FormControlLabel control={<Checkbox value='allowExtraEmails' color={"secondary"} />} label='Add as Draft' />
      </div>
      <Button variant='contained' style={{ backgroundColor: currentColor }} sx={{ height: 60, fontWeight: "bold" }} fullWidth>
        Add Item
      </Button>
    </div>
  );
};

export default AddInventory;
