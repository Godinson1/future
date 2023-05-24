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
import Profile from "@/components/Profile";
import Notification from "@/components/Notification";
import Messages from "@/components/Messages";
import PurchaseCart from "@/app/components/cart/PurchaseCart";
import { useViewport } from "@/hooks/useViewPort";
import IconButton from "@mui/material/IconButton/IconButton";
import usePageTitle from "@/app/hooks/usePageTitle";

import styles from "@/styles/dashboard.module.css";
import { useCartContext } from "@/app/contexts/CartContextProvider";

interface NavButtonProps {
  title: string;
  customFunc: Function;
  icon: any;
  dotColor?: string;
  count?: number;
}

const NavButton = ({ title, customFunc, icon, count }: NavButtonProps) => (
  <Tooltip title={title} placement='bottom'>
    <Badge overlap='circular' color='secondary' badgeContent={count}>
      <IconButton onClick={() => customFunc()}>{icon}</IconButton>
    </Badge>
  </Tooltip>
);

const DashboardNavbar = () => {
  const { width } = useViewport();
  const { pageTitle } = usePageTitle();
  const { cartLength } = useCartContext();
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked } = useStateContext();

  useEffect(() => {
    if (width <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  return (
    <div className={`${styles.dashboard_nav} ${activeMenu ? styles.dashboard_nav_active : styles.dashboard_nav_full}`}>
      <div className='flex'>
        <div className='flex justify-center items-center'>
          <IconButton onClick={() => setActiveMenu(!activeMenu)}>
            <AiOutlineMenu color={currentColor} />
          </IconButton>
          <p className={`uppercase font-bold`}> {pageTitle}</p>
        </div>
      </div>
      <div className='flex gap-3 justify-center items-center'>
        <NavButton title='Cart' count={cartLength} customFunc={() => handleClick("cart")} icon={<FiShoppingCart color={currentColor} />} />
        <NavButton title='Messages' dotColor='#03C9D7' customFunc={() => handleClick("chat")} icon={<BsChatLeft color={currentColor} />} />
        <NavButton title='Notifications' dotColor='rgb(254, 201, 15)' customFunc={() => handleClick("notification")} icon={<RiNotification3Line color={currentColor} />} />
        <Tooltip title='Profile' placement='bottom'>
          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={() => handleClick("profile")}>
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
