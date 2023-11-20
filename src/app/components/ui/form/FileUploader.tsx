import React from "react";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import Delete from "@mui/icons-material/Delete";

interface IFileUploader {
  index: number;
  title: string;
  previewImageUrls: string[];
  removeImage: (index: number) => void;
  handleMultipleFileSelect: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
}

const FileUploader = ({ index, previewImageUrls, handleMultipleFileSelect, removeImage }: IFileUploader) => {
  return (
    <div className='mb-5' id={`${index}`}>
      {!previewImageUrls[index] ? (
        <label htmlFor='inventory_file' className='font-bold text-gray-500 underline cursor-pointer'>
          Add Product Image
        </label>
      ) : (
        <div className='flex justify-between iems-center'>
          <div className='flex justify-center iems-center' style={{ width: "50px", height: "50px", borderRadius: "50%" }}>
            <Image style={{ borderRadius: "80%" }} width={100} height={100} src={previewImageUrls[index]} alt='product-image' />
          </div>
          <IconButton onClick={() => removeImage(index)}>
            <Delete />
          </IconButton>
        </div>
      )}
      <input type='file' onChange={(e) => handleMultipleFileSelect(e, index)} id='inventory_file' style={{ display: "none" }} />
    </div>
  );
};

export default FileUploader;
