import TextField from "@mui/material/TextField/TextField";
import React from "react";

const AddInventory = () => {
  return (
    <div>
      <div className='flex gap-5 mb-5'>
        <TextField label='Size' id='outlined-size-small' size='small' />
        <TextField label='Size' id='outlined-size-small' size='small' />
      </div>
      <div className='flex gap-5 mb-5'>
        <TextField label='Size' id='outlined-size-small' size='small' />
        <TextField label='Size' id='outlined-size-small' size='small' />
      </div>
      <div className='flex gap-5 mb-5'>
        <TextField label='Size' id='outlined-size-small' size='small' />
        <TextField label='Size' id='outlined-size-small' size='small' />
      </div>
      <div className='flex gap-5 mb-5'>
        <TextField fullWidth label='Size' id='outlined-size-small' size='small' />
      </div>
    </div>
  );
};

export default AddInventory;
