import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { formatter } from "@/app/lib/utils";

interface IPaymentSelectSection {
  setPaymentMethod: React.Dispatch<React.SetStateAction<string>>;
  paymentMethod: string;
  totalCart: number;
}

const PaymentSelectSection = ({ setPaymentMethod, paymentMethod, totalCart }: IPaymentSelectSection) => {
  return (
    <div className='flex justify-start items-center bg-gray-50 w-50 p-3 h-24 rounded-md mt-3'>
      <div className='text-gray-500 text-sm dark:text-gray-200'>
        <FormControl>
          <div className='flex justify-between items-center mb-3'>
            <div className='text-xs'>Select payment type</div>
            <div className='font-bold text-black text-lg'>{formatter.format(totalCart)}</div>
          </div>
          <RadioGroup row aria-labelledby='demo-row-radio-buttons-group-label' name='row-radio-buttons-group'>
            <FormControlLabel value='card' onChange={() => setPaymentMethod("card")} control={<Radio checked={paymentMethod === "card"} size='small' />} label='Card' />
            <FormControlLabel value='wallet' onChange={() => setPaymentMethod("wallet")} control={<Radio checked={paymentMethod === "wallet"} size='small' />} label='Wallet' />
            <FormControlLabel value='transfer' onChange={() => setPaymentMethod("transfer")} control={<Radio checked={paymentMethod === "transfer"} size='small' />} label='Transfer' />
            <FormControlLabel value='cash' onChange={() => setPaymentMethod("cash")} control={<Radio checked={paymentMethod === "cash"} size='small' />} label='Cash' />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default PaymentSelectSection;
