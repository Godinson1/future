import React from "react";

import { useStateContext } from "@/app/contexts/ContextProvider";

interface ButtonIconProps {
  icon?: any;
  bgColor?: string;
  color?: string;
  bgHoverColor?: string;
  size?: string;
  text?: string;
  borderRadius: string;
  width?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const ButtonIcon = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width, onClick }: ButtonIconProps) => {
  const { setIsClicked, initialState } = useStateContext();
  const handleClick = () => setIsClicked(initialState);

  return (
    <button
      type='button'
      onClick={onClick ?? handleClick}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default ButtonIcon;
