import { useState } from "react";
import { uploadUserPhoto } from "../api/user/api.user";
import { uploadProductImage } from "../api/inventory/api.product";
import { toast } from "react-toastify";
import { getErrorMessage } from "../lib/utils";
import { useMutation } from "react-query";

export enum userAction {
  uploadPhoto = "upload_photo",
}

interface IUseUpload {
  uploadFunc?: (formData: FormData) => Promise<Response>;
}

export const useUpload = (props: IUseUpload) => {
  const [prevImageUrl, setPrevImageUrl] = useState("");
  const uploadFormData = new FormData();

  const { mutate: uploadPhoto, isLoading: uploadPhotoLoading } = useMutation(userAction.uploadPhoto, {
    mutationFn: props.uploadFunc,
    onSuccess: () => {
      toast.success("Photo successfully updated!");
    },
    onError: (error: any) => {
      toast.error(getErrorMessage(error.response.data.message));
    },
  });

  const addFile = (file: File, fileName: string): void => {
    uploadFormData.append(fileName, file);
  };

  const handleUploadPhoto = (file: File): void => {
    const formData = new FormData();
    formData.append("user-avatar", file);
    uploadPhoto(formData);
  };

  const handleUploadFiles = (): void => {
    uploadPhoto(uploadFormData);
  };

  //   const handleMultipleUpload = (files: File[]): void => {
  //     const formData = new FormData();
  //     formData.append("user-avatar", file);
  //     uploadPhoto(formData);
  //   };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files && e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file as File);
    fileReader.onloadend = () => {
      setPrevImageUrl(fileReader.result as string);
    };
    handleUploadPhoto(file as File);
  };

  return {
    handleFileSelect,
    handleUploadFiles,
    prevImageUrl,
    setPrevImageUrl,
    uploadPhotoLoading,
    uploadPhoto,
    uploadFormData,
    addFile,
  };
};
