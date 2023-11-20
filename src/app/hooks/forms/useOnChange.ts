import cloneDeep from "lodash.clonedeep";
import { useState } from "react";

export const useOnChange = (initialState: any) => {
  const [inputs, setInputs] = useState(initialState);
  const formDataInputs = new FormData();

  const handleInputChange = (name: any, value: any) => {
    setInputs({ ...inputs, [name]: value });
  };

  const handleMultipleFieldsChange = (name: string, value: any, index: number) => {
    const newFields = cloneDeep([...inputs]);
    newFields[index][name] = value;
    setInputs(newFields);
  };

  const handleAddSection = (newInput: any) => {
    const newFields = cloneDeep(inputs);
    setInputs([...newFields, newInput]);
  };

  const handleMultipleFormDataChange = (name: string, value: any, index: number) => {
    formDataInputs.append(`${name}-${index}`, value);
  };

  return {
    handleInputChange,
    handleMultipleFieldsChange,
    setInputs,
    inputs,
    formDataInputs,
    handleAddSection,
    handleMultipleFormDataChange,
  };
};
