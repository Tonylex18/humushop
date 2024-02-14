"use client";
import React from "react";
import { IoMdMenu } from "react-icons/io";
import { HiArrowNarrowRight, HiOutlineDotsVertical } from "react-icons/hi";

export interface sidebarProp {
  handleOpenSidebar: () => void;
  handleCloseSidebar: () => void;
  openSidebar: boolean;
  setOpenSideBar: any;
}
const MobileNavbar = ({
  handleOpenSidebar,
  openSidebar,
  setOpenSideBar,
  handleCloseSidebar,
}: sidebarProp) => {
  return (
    <header className="flex items-center justify-between w-full z-20 h-10 fixed -3 px-4 bg-white">
      <div>
        <IoMdMenu size={25} onClick={() => handleOpenSidebar()} />
      </div>
      <div onClick={() => handleCloseSidebar()}>
        {openSidebar ? (
          <HiArrowNarrowRight />
        ) : (
          <HiOutlineDotsVertical size={20} />
        )}
      </div>
    </header>
  );
};

export default MobileNavbar;
