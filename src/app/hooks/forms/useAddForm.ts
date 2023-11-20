import { useUpload } from "../useUpload";
import { useOnChange } from "./useOnChange";

export interface IUseAddForm {
  initialState?: any;
}

const useAddForm = (props: IUseAddForm) => {
  const { initialState } = props;
  const { addFile, uploadFormData, handleUploadFiles } = useUpload({});
  const { inputs, formDataInputs, handleInputChange, handleAddSection, handleMultipleFieldsChange, setInputs, handleMultipleFormDataChange } = useOnChange(initialState);

  return {
    inputs,
    formDataInputs,
    handleInputChange,
    handleMultipleFieldsChange,
    handleMultipleFormDataChange,
    setInputs,
    handleAddSection,
    addFile,
    uploadFormData,
    handleUploadFiles,
  };
};

export default useAddForm;
