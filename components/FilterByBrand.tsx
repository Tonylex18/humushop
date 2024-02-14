"use client";
import React from "react";
import { PiCaretDownLight } from "react-icons/pi";
import { useGlobalContext } from "@/app/context";
import Input from "./Input";

const FilterByCategories = () => {
  // const { openSort, toggleSort } = useGlobalContext();
  return (
    <h1>Hello</h1>
    // <div className="flex flex-col">
    //   <div className="">
    //     <div className="flex items-center justify-between">
    //       <h1 className="font-bold text-sm text-[#1B0C2E] ">Brand</h1>
    //       <PiCaretDownLight
    //         className={`${openSort && "rotate-180"}`}
    //         onClick={() => toggleSort()}
    //       />
    //     </div>
    //     {openSort ? <Input /> : ""}
    //   </div>
    // </div>
  );
};

export default FilterByCategories;
