"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Tooltip from "@mui/material/Tooltip";
import { MdOutlineCancel } from "react-icons/md";

import { SIDEBAR_LINKS, activeLink, normalLink } from "src/app/constants/links";
import { useStateContext } from "src/app/contexts/ContextProvider";

import { FutureLogo } from "src/app/components/ui/Logo";
import styles from "@/styles/navbar.module.css";
import { TEXT } from "src/app/(dashboard)/constants/styles";

const Sidebar = () => {
  const pathname = usePathname();
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <>
          <div className='flex justify-between items-center'>
            <FutureLogo />
            <Tooltip title='Menu' placement='bottom'>
              <button type='button' onClick={() => setActiveMenu(!activeMenu)} style={{ color: currentColor }} className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'>
                <MdOutlineCancel size={26} />
              </button>
            </Tooltip>
          </div>
          <div className='mt-10 '>
            {SIDEBAR_LINKS.map((item) => (
              <div key={item.title}>
                <p className={TEXT.title}>{item.title}</p>
                {item.links.map((link) => (
                  <Link href={link.path} key={link.name} onClick={handleCloseSideBar} className={pathname == `${link.path}` ? activeLink : `${normalLink} ${styles.nlink}`}>
                    {link.icon}
                    <span className='capitalize'>{link.name}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
