import React from "react";

const BaseParagraph = ({ text }: { text: string }) => {
  return <span className='text-gray-500 text-sm dark:text-gray-400'>{text}</span>;
};

export default BaseParagraph;
