import React from "react";
import Image from "next/image";
import { categoriesData } from "@/constant/data";
import MainLayout from "../mainLayout/Layout";
const Page = () => {
  return (
    <MainLayout>
      <div className="px-6 lg:px-32 flex flex-col">
        <div className="flex gap-2 items-center">
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
        <div className="">
          <h1 className="font-bold text-3xl leading-10 my-5">All categories</h1>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {categoriesData.map((item) => (
              <div key={item.id} className="relative h-36 lg:h-44 rounded-xl">
                <Image
                  src={item.img}
                  fill
                  alt="ourShopCategories"
                  className="rounded-3xl"
                />
                <span className="absolute cursor-pointer bottom-6 px-3 rounded-3xl py-2 left-3 bg-[#FFFFFF] bg-opacity-20 xl:text-xl font-bold text-[#FFFFFF]">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
