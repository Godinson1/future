import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import { getInventories, topUpInventory } from "@/app/api/inventory/api.inventory";
import { IProductInput } from "@/app/components/cart/dto/cart.dto";
import { addProduct } from "@/app/api/inventory/api.product";
import { getErrorMessage } from "@/app/lib/utils";
import { IInventory } from "../constants";
import useAddForm from "@/app/hooks/forms/useAddForm";
import cloneDeep from "lodash.clonedeep";
import { getFileName, getS3Url } from "@/app/shared/utils";

enum Product {
  create = "create_product",
}

enum Inventory {
  topUp = "top_up_inventory",
}

export interface IInventoryTopUp {
  id: string;
  quantity: number;
}

export const productInitialState: IProductInput = {
  name: "",
  category: "",
  manufacturer: "",
  productPhotoUrl: "",
  price: 0,
  description: "",
  initialQuantityPurchased: 0,
};

export const useInventory = () => {
  const [productInput, setProductInput] = useState<IProductInput>({} as IProductInput);
  const [prevImageUrl, setPrevImageUrl] = useState<Array<string>>([]);
  const [selectedInputs, setSelectedInputs] = useState<IInventory[]>([]);
  const [inventoryTopUpInputs, setInventoryTopUpInputs] = useState<IInventoryTopUp[]>([]);
  const { inputs, formDataInputs, handleAddSection, handleMultipleFieldsChange, handleMultipleFormDataChange, addFile, handleUploadFiles } = useAddForm({ initialState: [productInitialState] });
  const { data: inventories, isLoading: inventoriesLoading } = useQuery("inventories", getInventories);
  const s3ProductBucket = process.env.NEXT_PUBLIC_S3_PRODUCT_BUCKET as string;

  const { mutate: createProduct, isLoading: createProductLoading } = useMutation(Product.create, {
    mutationFn: addProduct,
    onSuccess: ({ data }: any) => {
      toast.success(data.message);
    },
    onError: (error: any) => {
      toast.error(getErrorMessage(error.response.data.message));
    },
  });

  const { mutate: addInventoryTopUp, isLoading: topUpInventoryLoading } = useMutation(Inventory.topUp, {
    mutationFn: topUpInventory,
    onSuccess: ({ data }: any) => {
      toast.success("Inventory top up successfully!");
    },
    onError: (error: any) => {
      toast.error(getErrorMessage(error.response.data.message));
    },
  });

  const handleProductInput = (field: string, value: string): void => {
    setProductInput({
      ...productInput,
      [field]: value,
    });
  };

  const handleAddProductSection = () => {
    return handleAddSection(productInitialState);
  };

  const handleInventoryTopUpInput = (input: IInventoryTopUp, index: number): void => {
    let inputToAdd = inventoryTopUpInputs;
    inputToAdd[index] = input;
    setInventoryTopUpInputs(inputToAdd);
  };

  const handleAddProduct = () => {
    createProduct(inputs);
    handleUploadFiles();
  };

  const handleTopUpInventory = () => {
    addInventoryTopUp(inventoryTopUpInputs);
  };

  const getPrevImageUrl = (file: File): void => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file as File);
    fileReader.onloadend = () => {
      const newUrls = cloneDeep(prevImageUrl);
      setPrevImageUrl([...newUrls, fileReader.result as string]);
    };
  };

  const handleMultipleFileSelect = (e: React.ChangeEvent<HTMLInputElement>, index: number): void => {
    const file = (e.target.files && e.target.files[0]) as File;
    getPrevImageUrl(file);
    const imageIndex = prevImageUrl.length;
    const fileName = getFileName(inputs[imageIndex].name, file.type);
    addFile(file as File, fileName);
    handleMultipleFieldsChange("productPhotoUrl", getS3Url(s3ProductBucket, fileName), imageIndex);
  };

  const removeImage = (index: number): void => {
    handleMultipleFieldsChange("file", null, index);
    const newUrls = prevImageUrl;
    newUrls[index] = "";
    setPrevImageUrl(newUrls);
  };

  const handleSelectedInput = (input: IInventory): void => {
    const item = selectedInputs.find((data) => data.productId === input.productId);
    if (item) {
      setSelectedInputs(selectedInputs.filter((data) => data.productId !== input.productId));
    } else {
      setSelectedInputs([...selectedInputs, input]);
    }
  };

  return {
    handleProductInput,
    getPrevImageUrl,
    setPrevImageUrl,
    prevImageUrl,
    handleAddProduct,
    createProductLoading,
    inventoryData: inventories?.data || [],
    addInventoryTopUp,
    topUpInventoryLoading,
    inventoriesLoading,
    handleSelectedInput,
    selectedInputs,
    handleTopUpInventory,
    handleInventoryTopUpInput,
    handleAddProductSection,
    inputs,
    handleMultipleFieldsChange,
    handleMultipleFormDataChange,
    handleMultipleFileSelect,
    removeImage,
  };
};
