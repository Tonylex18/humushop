"use client";
import React from "react";

const SortBtn = ({ handleClick, color }: any) => {
  return (
    <button
      className="p-2 text-start pl-4 pt-3 border-b hover:border-l-4 hover:border-[#0D1A4A] text-sm cursor-pointer hover:text-black"
      onClick={handleClick}
      value={color}
    >
      {color}
    </button>
  );
};

export default SortBtn;
