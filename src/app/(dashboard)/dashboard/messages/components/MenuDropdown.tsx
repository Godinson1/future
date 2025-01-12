import React from "react";

interface IMenuDropdown {
  toggleDropdown: (e: React.MouseEvent) => void;
  isDropdownOpen: boolean;
  menuOptions: string[];
  handleOptionClick: (menu: string, id: string) => void;
  id: string;
}

const MenuDropdown = ({ menuOptions, isDropdownOpen, toggleDropdown, handleOptionClick, id }: IMenuDropdown) => {
  return (
    <div className='relative'>
      <div onClick={toggleDropdown}>...</div>
      {isDropdownOpen && (
        <div className='absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-10'>
          {menuOptions.map((menu) => (
            <div key={menu} onClick={() => handleOptionClick(menu, id)} className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
              {menu}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
