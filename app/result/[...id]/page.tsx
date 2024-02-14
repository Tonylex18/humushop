"use client";
import { useGlobalContext } from "@/app/context";
import MainLayout from "@/app/mainLayout/Layout";
import { CustomButton } from "@/components";
import Card from "@/components/Card";
import ImageSlider from "@/components/ImageSlider";
import SimilarItemSlider from "@/components/SimilarItemSlider";
import { allCategoriesProps } from "@/types";
import Image from "next/image";
import React, { FC } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsHandbag, BsTag } from "react-icons/bs";
import { CiSaveUp2 } from "react-icons/ci";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";

interface pageProps {
  params: {
    id: number | string;
  };
}

const Page: FC<pageProps> = ({ params }) => {
  const { homeData } = useGlobalContext();
  const clickedCard = homeData.find((item) => item.id === Number(params.id));

  return (
    <MainLayout>
      <div className="px-4 lg:px-32 mt-4 gap-4 grid grid-cols-1 md:grid-cols-2">
        <ImageSlider images={[clickedCard]} />
        <div>
          <h1 className="text-[#1B0C2E] font-semibold text-2x leading-6">
            {clickedCard?.title}
          </h1>
          <h4 className="text-[#1B0C2E] font-bold text-2x leading-6">
            {clickedCard?.currentCost}
          </h4>
          <p className="font-normal text-xl leading-6 text-[#000000]/50">
            {clickedCard?.detailDesc}
          </p>
          <div className="flex flex-col gap-6 my-3">
            <h2>
              <span className="font-semibold text-[#1B0C2E] leading-4 text-lg">
                color
              </span>
              :Pink
            </h2>
            <div className="flex gap-4">
              <span className="p-3 bg-red-700 rounded-full"></span>
              <span className="p-3 bg-red-700 rounded-full"></span>
              <span className="p-3 bg-red-700 rounded-full"></span>
            </div>
          </div>
          <div className="flex gap-8 items-center">
            <div className="flex gap-4 items-center">
              <span className="cursor-pointer">-</span>
              <span className="cursor-pointer">1</span>
              <span className="cursor-pointer">+</span>
            </div>
            <div className="flex gap-3">
              <CiSaveUp2 className="cursor-pointer" />
              <AiOutlineHeart className="cursor-pointer" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 my-4">
            <div>
              <span className="flex items-center gap-4">
                Details <PiCaretDownBold className="cursor-pointer" />
              </span>
              <span className="flex flex-col gap-4 font-normal text-xl leading-5 text-[#1B0C2E]">
                <h2>
                  Brand:<span className="text-[#1B0C2E]/50">Rose gold</span>
                </h2>
                <h2>
                  Unit count:<span className="text-[#1B0C2E]/50">4</span>
                </h2>
              </span>
            </div>
            <div>
              <span className="flex items-center gap-4">
                Policy <PiCaretDownBold className="cursor-pointer" />
              </span>
              <span className="flex flex-col gap-4 font-normal text-xl leading-5 text-[#1B0C2E]">
                <h2>
                  Package information:
                  <span className="text-[#1B0C2E]/50">circle</span>
                </h2>
                <h2>
                  Item weight:
                  <span className="text-[#1B0C2E]/50">800 grams</span>
                </h2>
              </span>
            </div>
          </div>
          <div className="flex gap-5 w-full mt-3">
            <CustomButton
              title="Buy now"
              img={<BsTag />}
              containerStyle="flex items-center bg-[#0D1A4A] text-white px-8 py-3 text-lg font-semibold leading-7 md:rounded-3xl rounded-xl"
            />
            <CustomButton
              title="Add to cart"
              img={<BsHandbag />}
              containerStyle=" flex items-center bg-[#0D1A4A] text-white px-8 py-3 text-lg font-semibold leading-7 md:rounded-3xl rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-32 my-20">
        <h1 className="font-bold text-3xl leading-8">
          Similar items you might like
        </h1>
        <div className="">
          <SimilarItemSlider />
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
