"use client";
import { customButtonProps } from "@/types";
import React from "react";

const CustomButton = ({
  title,
  handleClick,
  containerStyle,
  img,
}: customButtonProps) => {
  return (
    <button
      disabled={false}
      className={`${containerStyle}`}
      type={"button"}
      onClick={() => { }}
    >
      <span className={`flex-1 flex justify-center items-center gap-2`}>
        {img}
        {title}
      </span>
    </button>
  );
};

export default CustomButton;
