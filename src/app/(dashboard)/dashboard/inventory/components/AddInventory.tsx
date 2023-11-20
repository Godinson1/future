import React from "react";
import { useStateContext } from "@/app/contexts/ContextProvider";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField/TextField";
import { useInventory } from "../hooks/useInventory";
import { IInventory } from "../constants";
import { AppLoader } from "@/app/components/ui/Loader";
import AccordionForm from "@/app/components/ui/form/AccordionForm";

interface IAddInventory {
  selectedInputs: IInventory[];
}

const AddInventory = ({ selectedInputs }: IAddInventory) => {
  const { currentColor } = useStateContext();
  const { topUpInventoryLoading, handleInventoryTopUpInput, handleTopUpInventory } = useInventory();

  return (
    <div>
      {selectedInputs.map((input, index) => {
        return (
          <div className='mb-2' key={`${input}-${index}`}>
            <AccordionForm title={input.productName}>
              <div className='flex gap-5 mb-5'>
                <TextField disabled value={input?.productName} size='small' />
                <TextField disabled value={input?.productId} size='small' />
              </div>
              <div className='flex gap-5 mb-5'>
                <TextField disabled value={input?.status} size='small' />
                <TextField onChange={(e) => handleInventoryTopUpInput({ quantity: Number(e.target.value), id: input.id }, index)} label='Add quantity' size='small' />
              </div>
            </AccordionForm>
          </div>
        );
      })}
      <Button variant='contained' onClick={() => handleTopUpInventory()} style={{ backgroundColor: currentColor }} sx={{ height: 60, fontWeight: "bold" }} fullWidth>
        {topUpInventoryLoading ? <AppLoader /> : " Top Up"}
      </Button>
    </div>
  );
};

export default AddInventory;
