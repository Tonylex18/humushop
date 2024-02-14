import { dailyDeals } from "@/constant/data";
import React from "react";
import Image from "next/image";
import MainLayout from "../mainLayout/Layout";

const Page = () => {
  return (
    <MainLayout>
      <div className="px-6 lg:px-32 flex flex-col">
        <div className="flex gap-1 justify-end items-center">
          <span className="bg-[#0D1A4A] rounded-xl font-700 text-white text-3xl leading-9 px-1">
            00
          </span>
          <span className="bg-[#0D1A4A] rounded-xl font-700 text-white text-3xl leading-9 px-1">
            00
          </span>
          <span className="bg-[#0D1A4A] rounded-xl font-700 text-white text-3xl leading-9 px-1">
            00
          </span>
          <span className="bg-[#0D1A4A] rounded-xl font-700 text-white text-3xl leading-9 px-1">
            00
          </span>
        </div>
        <div className="my-4">
          <h1 className="font-bold text-2xl leading-9 my-4">Daily deals</h1>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {dailyDeals.map((item) => (
              <div key={item.id} className="rounded-3xl bg-[#A8A8A8]/10">
                <div className="relative h-56">
                  <Image
                    className="w-full rounded-3xl "
                    src={item.img}
                    fill
                    alt="all images"
                  />
                </div>
                <div className="p-2">
                  <h1 className="font-semibold text-base leading-6">
                    {item.title}
                  </h1>
                  <h4 className="font-normal text-sm leading-4 text-[#A8A8A8] my-2">
                    {item.desc}
                  </h4>
                  <div className="flex flex-1 justify-between items-center">
                    <div className="flex gap-1 items-center my-2 w-2/">
                      <span className="text-[#D67B11]/50 font-light h-1/5 py-2 text-[1px]">
                        {item.formerCost}
                      </span>
                      <span className="text-[#D67B11] font-semibold text-[8px] leading-3">
                        {item.currentCost}
                      </span>
                    </div>
                    <button className="font-normal text-xs leading-3 border hover:bg-[#0D1A4A] hover:text-white border-[#000]/50 rounded-3xl px-2 py-1">
                      {item.btnText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
