"use client";
import Image from "next/image";
import React, { useState, ChangeEvent, useContext } from "react";
import Link from "next/link";
import { CustomButton, Navbar } from "./index";
import { PiArrowUUpLeftBold, PiCaretDownLight } from "react-icons/pi";
import { homeData, ourShopCategories } from "../constant/data";
import SortDropDown from "./SortDropDown";
import { useGlobalContext } from "@/app/context";
import FilterSideBar from "./FilterSideBar";
import Card from "@/components/Card";

import { allCategoriesProps } from "@/types";
import MainLayout from "@/app/mainLayout/Layout";

const Hero = () => {
  const {
    result,
    openFilter,
    setOpenFilter,
    handleChange,
    handleClick,
    handleReset,
    selectedCategories,
    setSelectedCategories,
  } = useGlobalContext();
  const [openSort, setOpenSort] = useState<boolean>(false);
  console.log(selectedCategories);
  return (
    <MainLayout>
      <div className="w-full">
        <main className="">
          <div className="w-full flex">
            <div className="hidden lg:flex">
              <Image
                // className="w-1/2 md:w-full"
                src="/images/left-curve.png"
                width={120}
                height={120}
                alt="side curve"
              />
            </div>
            <div className="flex flex-col-reverse md:flex-row flex-1 px-4">
              <div className="md:w-1/2 flex flex-col align-bottom pt-3 md:pt-14 text-[#000000]">
                <h1 className="font-extrabold 2xl:w-4/5  text-xl md:text-3xl xl:text-4xl leading-6 xl:leading-[45px]">
                  Shop home appliances and computer accessories
                </h1>
                <p className="font-normal leading-7 xl:w-4/5 text-opacity-50  text-base  md:text-lg my-5">
                  Lorem ipsum dolor sit amet consectetur. Integer enim at
                  pharetra sed turpis adipiscing pharetra orci. Eu interdum
                  mauris nisl ut bibendum. Duis ac lobortis nam ut eget id
                  faucibus est tempor. Est nam ac nulla nisi.
                </p>
                <Link href="/signUp">
                  <CustomButton
                    title="Shop now"
                    containerStyle="bg-[#0D1A4A] text-white md:w-1/2 xl:w-1/3 px-8 py-3 text-lg font-semibold leading-7 md:rounded-3xl rounded-xl"
                  />
                </Link>
              </div>
              <div className="relative md:w-1/2 h-48 md:h-full ">
                <Image src="/images/cooker.png" fill alt="cooker" />
              </div>
            </div>
            <div className="hidden lg:flex">
              <Image
                src="/images/rightSideCurve.png"
                width={120}
                height={120}
                alt="side curve"
              />
            </div>
          </div>
          <div className="px-4 lg:px-32 flex flex-col my-8">
            <div className="relative flex flex-col md:flex-row justify-between flex-1 lg:items-center">
              <div className="flex  justify-between w-full md:w-1/5 items-center cursor-pointer">
                <div
                  className="flex gap-2 items-center"
                  onClick={() => setOpenFilter((prev: any) => !prev)}
                >
                  <Image
                    src="/images/filter-icon.png"
                    width={20}
                    height={20}
                    alt="filter"
                  />
                  <span className="text-[#1B0C2E] font-medium text-base leading-6">
                    filter
                  </span>
                </div>
                <span>
                  <PiArrowUUpLeftBold
                    onClick={(event: any) => handleReset(event)}
                  />
                </span>
              </div>
              <div className="flex items-center justify-between w-full lg:w-2/3">
                <h1 className="font-extrabold lg:text-4xl leading-9 md:ml-4">
                  {selectedCategories || "All Categories"}
                </h1>
                <button className="flex xl:w-1/5 border gap-2 xl:gap-0  rounded-xl px-2  justify-between items-center">
                  <span className="text-[#1B0C2E] font-medium text-base leading-6">
                    sort by:color
                  </span>
                  <div
                    className="m"
                    onClick={(event) => setOpenSort((prev) => !prev)}
                  >
                    <PiCaretDownLight
                      className={`${openSort && "rotate-180"}`}
                    />
                  </div>
                </button>
              </div>
              {openFilter ? (
                <FilterSideBar
                  handleChange={(event: any) => handleChange(event)}
                  // handleReset={handleReset}
                />
              ) : (
                ""
              )}

              {openSort ? (
                <SortDropDown
                  openSort={openSort}
                  handleClick={(event: any) => handleClick(event)}
                />
              ) : (
                ""
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-8 gap-6">
              {result.map(
                ({
                  id,
                  img,
                  desc,
                  title,
                  currentCost,
                  formerCost,
                  btnText,
                }: allCategoriesProps) => (
                  <Card
                    key={id}
                    id={id}
                    img={img}
                    title={title}
                    desc={desc}
                    formerCost={formerCost}
                    currentCost={currentCost}
                    btnText={btnText}
                  />
                )
              )}
            </div>
            <h1 className="font-bold text-xl lg:text-4xl leading-9 my-8">
              Our shop categories
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ourShopCategories.map((item) => (
                <div key={item.id} className="relative h-44 rounded-xl">
                  <Image
                    src={item.img}
                    fill
                    alt="ourShopCategories"
                    className="rounded-3xl"
                  />
                  <span className="absolute bottom-6 px-3 rounded-3xl py-2 left-3 bg-[#FFFFFF] bg-opacity-20 xl:text-2xl font-bold text-[#FFFFFF]">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default Hero;
