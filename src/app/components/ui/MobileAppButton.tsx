import Image from "next/image";
import React from "react";
import "@/styles/mobile-button.css";

export interface MobileAppButtonProps {
  url: string;
  theme?: string | undefined;
  logo?: string;
  title: string;
  name?: string;
  width?: number;
  height?: number;
  border?: number;
}

const MobileAppButton = ({ theme = "light", height = 50, width = 190, border, title, logo, name, url }: MobileAppButtonProps) => {
  return (
    <div
      style={{ height, width, borderRadius: border }}
      onClick={() => {
        /*url && window.open(url, "_blank")*/
      }}
      className={`button-container button-container-${theme}`}
    >
      <Image src={logo as string} alt={name as string} />
      <div className='button-text-container'>
        <span className='button-title'>{title}</span>
        <span className='button-store-name'>{name}</span>
      </div>
    </div>
  );
};

export default MobileAppButton;
