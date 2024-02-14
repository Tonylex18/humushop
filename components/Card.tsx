"use client";
import React from "react";
import Image from "next/image";
// import { homeData } from "@/constant/data";
import { allCategoriesProps } from "@/types";
import { useGlobalContext } from "@/app/context";
import Link from "next/link";
// import { useRouter } from "next/router";
const Card = ({
  id,
  img,
  desc,
  title,
  currentCost,
  formerCost,
  btnText,
}: allCategoriesProps) => {
  const { handleAddToCart, homeData } = useGlobalContext();
  // console.log("Card component rendered for item with ID:", id);
  // const router = useRouter();

  return (
    <div key={id} className="rounded-3xl bg-[#A8A8A8]/10">
      <div className="relative h-56">
        <Image className="w-full rounded-3xl " src={img} fill alt={title} />
      </div>
      <div className="p-2">
        <Link href={`/result/${id}`}>
          <h1 className="font-semibold text-base leading-6">{title}</h1>
        </Link>
        <h4 className="font-normal text-sm leading-4 text-[#A8A8A8] my-2">
          {desc}
        </h4>
        <div className="relative flex flex-1 justify-between items-center">
          <div className="flex gap-1 items-center my-2 w-2/">
            <del className="text-[#D67B11]/50 font-light h-1/5 py-2 text-[1px]">
              {formerCost}
            </del>
            <span className="text-[#D67B11] font-semibold text-[8px] leading-3">
              {currentCost}
            </span>
          </div>
          <button
            className="font-normal text-xs leading-3 border hover:bg-[#0D1A4A] hover:text-white border-[#000]/50 rounded-3xl px-2 py-1"
            onClick={() =>
              handleAddToCart({
                id,
                img,
                desc,
                title,
                currentCost,
                formerCost,
                btnText,
              })
            }
          >
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
