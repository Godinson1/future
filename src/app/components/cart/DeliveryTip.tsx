import React from "react";
import Chip from "@mui/material/Chip";

interface IDeliveryTip {
  deliveryTip: number;
  setDeliveryTip: React.Dispatch<React.SetStateAction<number>>;
}

const DeliveryTip = ({ deliveryTip, setDeliveryTip }: IDeliveryTip) => {
  const getVariant = (tip: number): "filled" | "outlined" => {
    return tip === deliveryTip ? "filled" : "outlined";
  };

  const getColor = (tip: number): "secondary" | "default" => {
    return tip === deliveryTip ? "secondary" : "default";
  };

  return (
    <div className='flex flex-col gap-4 justify-start items-start bg-gray-50 w-50 p-3 h-24 rounded-md mt-3'>
      <p className='text-gray-500 text-xs dark:text-gray-200'>
        Tip the Courier? <br /> We charge zero fees on tip
      </p>
      <div className='flex justify-center gap-3 items-center cursor-pointer'>
        <Chip variant={getVariant(0)} size='small' color={getColor(0)} label='No tips' onClick={() => setDeliveryTip(0)} />
        <Chip variant={getVariant(1)} size='small' color={getColor(1)} label='N200' onClick={() => setDeliveryTip(1)} />
        <Chip variant={getVariant(2)} size='small' color={getColor(2)} label='N500' onClick={() => setDeliveryTip(2)} />
        <Chip variant={getVariant(3)} size='small' color={getColor(3)} label='N1,000' onClick={() => setDeliveryTip(3)} />
      </div>
    </div>
  );
};

export default DeliveryTip;
