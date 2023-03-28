import React, { useEffect } from "react";
import Image from "next/image";

import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import avatar from "@/assets/avatar.jpg";
import { useStateContext } from "@/app/contexts/ContextProvider";

import { FutureLogo } from "@/components/ui/Logo";
import Profile from "@/components/Profile";
import Notification from "@/components/Notification";
import Messages from "@/components/Messages";
import PurchaseCart from "@/components/PurchaseCart";
import { useViewport } from "@/hooks/useViewPort";

interface NavButtonProps {
  title: string;
  customFunc: Function;
  icon: any;
  color: string;
  dotColor?: string;
  count?: number;
}

const NavButton = ({ title, customFunc, icon, color, count }: NavButtonProps) => (
  <Tooltip title={title} placement='bottom'>
    <Badge overlap='circular' color='secondary' badgeContent={count}>
      <button
        type='button'
        onClick={() => customFunc()}
        style={{ color }}
        className='relative text-xl rounded-full p-3 hover:bg-light-gray'
      >
        {icon}
      </button>
    </Badge>
  </Tooltip>
);

const DashboardNavbar = () => {
  const { width } = useViewport();
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, cartLength } = useStateContext();

  useEffect(() => {
    if (width <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  return (
    <div className='flex justify-between p-2 md:ml-6 md:mr-6 relative'>
      <div className='flex'>
        <NavButton title='Menu' customFunc={() => setActiveMenu(!activeMenu)} color={currentColor} icon={<AiOutlineMenu />} />
        {!activeMenu && (
          <div className='mb-3 ml-[-20px]'>
            <FutureLogo />
          </div>
        )}
      </div>
      <div className='flex'>
        <NavButton
          title='Cart'
          count={cartLength}
          customFunc={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title='Messages'
          dotColor='#03C9D7'
          customFunc={() => handleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title='Notifications'
          dotColor='rgb(254, 201, 15)'
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <Tooltip title='Profile' placement='bottom'>
          <div
            className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={() => handleClick("profile")}
          >
            <Image className='rounded-full w-8 h-8' src={avatar} alt='user-profile' />
            <MdKeyboardArrowDown className='text-gray-400 text-14' />
          </div>
        </Tooltip>

        {isClicked.cart && <PurchaseCart />}
        {isClicked.chat && <Messages />}
        {isClicked.notification && <Notification />}
        {isClicked.profile && <Profile />}
      </div>
    </div>
  );
};

export default DashboardNavbar;
