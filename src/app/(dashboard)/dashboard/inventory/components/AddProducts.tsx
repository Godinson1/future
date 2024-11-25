import React from "react";

import { useStateContext } from "src/app/contexts/ContextProvider";
import Button from "@mui/material/Button";
import { useInventory } from "../hooks/useInventory";
import { AppLoader } from "src/app/components/ui/Loader";
import AccordionForm from "src/app/components/ui/form/AccordionForm";
import FutureButton from "src/app/(dashboard)/components/FutureButton";
import TextInput, { InputRow } from "src/app/components/ui/form/TextInput";
import FileUploader from "src/app/components/ui/form/FileUploader";

const AddProduct = () => {
  const { currentColor } = useStateContext();
  const { inputs, handleMultipleFieldsChange, handleMultipleFileSelect, handleAddProduct, createProductLoading, handleAddProductSection, prevImageUrl, removeImage } = useInventory();

  return (
    <div>
      {inputs.map((input: any, index: number) => {
        return (
          <AccordionForm title={input.name} key={index}>
            <InputRow>
              <TextInput onChange={(e) => handleMultipleFieldsChange("name", e.target.value, index)} label='Name' />
              <TextInput onChange={(e) => handleMultipleFieldsChange("category", e.target.value, index)} label='Category' />
            </InputRow>
            <InputRow>
              <TextInput onChange={(e) => handleMultipleFieldsChange("price", e.target.value, index)} label='Price' />
              <TextInput onChange={(e) => handleMultipleFieldsChange("initialQuantityPurchased", e.target.value, index)} label='Quantity' />
            </InputRow>
            <InputRow>
              <TextInput onChange={(e) => handleMultipleFieldsChange("manufacturer", e.target.value, index)} label='Manufacturer' />
              <TextInput disabled label='Godwin Joseph' />
            </InputRow>
            <InputRow>
              <TextInput onChange={(e) => handleMultipleFieldsChange("description", e.target.value, index)} fullWidth label='Product Description' />
            </InputRow>
            <FileUploader title='Add Product Image' index={index} removeImage={removeImage} previewImageUrls={prevImageUrl} handleMultipleFileSelect={handleMultipleFileSelect} />
          </AccordionForm>
        );
      })}
      <FutureButton handleOnClick={() => handleAddProductSection()} title='Add New' fullWidth={false} />
      <Button className='mt-5' variant='contained' onClick={() => handleAddProduct()} disabled={createProductLoading} style={{ backgroundColor: currentColor }} sx={{ height: 60, fontWeight: "bold" }} fullWidth>
        {createProductLoading ? <AppLoader /> : "Add Product"}
      </Button>
    </div>
  );
};

export default AddProduct;
