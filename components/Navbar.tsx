"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CustomButton } from "@/components";
import { BsPerson, BsHandbag, BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useGlobalContext } from "../app/context";
const Navbar = () => {
  const { carts } = useGlobalContext();
  return (
    <header className="flex flex-1 flex-col z-20 fixed pt-3 bg-white max-w-[1440px] mx-auto w-full">
      <nav className="max- flex justify-between px-4 items-center w-full xl:px-32">
        <div>
          <Image
            src="/images/brand-logo.png"
            alt="logo"
            width={80}
            height={18}
            className="object-contain"
          />
        </div>
        <div className="bg-[#D9D9D9]/20 px-2 items-center rounded-3xl w-1/2 flex">
          <BsSearch className="ml-4" />
          <input
            type="text"
            placeholder="Search"
            className="w-11/12 outline-none p-2 rounded-3xl bg-transparent"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-2xl leading-7">447449688883</h1>
          <span className="font-medium leading-5 text-base">Call</span>
        </div>
      </nav>
      <nav className="w-full border-y shadow-lg mt-3 px-4 lg:mx-auto py-2 flex justify-between items-center flex-1 xl:px-32">
        <div className="w-3/5 flex justify-between  items-center text- ">
          <Link href="/">
            <CustomButton
              title="Home"
              containerStyle="rounded-3xl border px-2 lg:px-5 py-2 hover:bg-[#0D1A4A] text-sm lg:text-base font-medium leading-5 hover:text-white"
            />
          </Link>
          <CustomButton
            title="Products"
            containerStyle="rounded-3xl border px-2 lg:px-5 py-2 hover:bg-[#0D1A4A] text-sm lg:text-base font-medium leading-5 hover:text-white"
          />
          <Link href="/categories">
            <CustomButton
              title="Categories"
              containerStyle="rounded-3xl border px-2 lg:px-5 py-2 hover:bg-[#0D1A4A] text-sm lg:text-base font-medium leading-5 hover:text-white"
            />
          </Link>
          <Link href="/dailyDeals">
            <CustomButton
              title="Daily deals"
              containerStyle="rounded-3xl border px-2 lg:px-5 py-2 hover:bg-[#0D1A4A] text-base font-medium leading-5 hover:text-white"
            />
          </Link>
          <Link href="/contactUs">
            <CustomButton
              title="Contact us"
              containerStyle="rounded-3xl border px-2 lg:px-5 py-2 hover:bg-[#0D1A4A] text-sm lg:text-base font-medium leading-5 hover:text-white"
            />
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <Link href="/cart">
            <div className="relative flex flex-col items-center justify-center cursor-pointer">
              <span className="absolute top-0 text-[#1B0C2E] font-bold text-base right-1">
                {carts.length === 0 ? (
                  ""
                ) : (
                  <div className="p-[3px] bg-red-600 rounded-full"></div>
                )}
              </span>
              <BsHandbag />
              <h4 className="font-medium text-base leading-5">Cart</h4>
            </div>
          </Link>
          <div className="flex flex-col items-center cursor-pointer justify-center mx-4">
            <AiOutlineHeart />
            <h4 className="font-medium text-sm lg:text-base leading-5">
              favourite
            </h4>
          </div>
          <div className="flex flex-col items-center cursor-pointer justify-center">
            <Link href='/dashboard' className="flex flex-col items-center">
              <BsPerson />
              <h4 className="font-medium text-sm lg:text-base leading-5">
                Profile
              </h4>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
