"use client";
import React, { useState } from "react";
import { Footer } from "@/components";
import MainMobileNav from "./MainMobileNav";
import Navbar from "../../components/Navbar";
import SideNav from "./SideNav";
// import SideNav from "./SideNav";
interface LayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: LayoutProps) => {
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);
  const handleOpenSidebar = () => {
    setOpenSideBar(true);
  };
  const handleCloseSidebar = () => {
    setOpenSideBar(false);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="flex flex-col w-full">
        <div className="w-full hidden md:flex flex-1">
          <Navbar />
        </div>
        <div className="md:hidden w-full z-20">
          <MainMobileNav
            handleOpenSidebar={handleOpenSidebar}
            handleCloseSidebar={handleCloseSidebar}
            openSidebar={openSideBar}
            setOpenSideBar={setOpenSideBar}
          />
        </div>
        <main className="flex flex-1 w-full xl:px-32 pt-10 md:pt-36 lg:pt-40 ">
          <div
            className={`w-1/4 ${
              openSideBar
                ? "block  w-full bg-white h-full fixed left-0 top-8 border-none bg-fixed z-10"
                : "hidden"
            }`}
          >
            <SideNav openSidebar={openSideBar} />
          </div>
          {/* <div className="w-full mx-4 md:w-3/4">{children}</div> */}
        </main>
        <div className="w-full pt-14 md:pt- ">{children}</div>
        <div className="w-full mt-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
