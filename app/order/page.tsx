import React from "react";
import Layout from "../dashboardLayout/Layout";
import Image from "next/image";

const oderedItems = [
  {
    id: "1",
    img: "/images/order-1.png",
    title: "Iphone 14  pro max",
    desc: "Iphone 14 pro max 256GB / 1TB 6.7-Inch Display || Dual Nano SIM || 6GB RAM, 256GB ROM || iOS 16 up to iOS 16.02 || 48MP + 12MP + 12MP Rear Camera || 12MP Front Camera.",
    cost: "$ 1399.90",
    recieveDate: "Recieved on July 4, 2023",
  },
  {
    id: "2",
    img: "/images/order-2.png",
    title: "Cartier men wrist watch",
    desc: "Santos-Dumont watch, large model, high autonomy quartz movement (~ 6 years). Steel case, beaded crown set with a blue synthetic cabochon-shaped spinel, satin-brushed silver dial with sunray effect",
    cost: "$ 1399.90",
    recieveDate: "Recieved on July 4, 2023",
  },
  {
    id: "3",
    img: "/images/order-3.png",
    title: "Galvin Allenwood heels",
    desc: "Iphone 14 pro max 256GB / 1TB 6.7-Inch Display || Dual Nano SIM || 6GB RAM, 256GB ROM || iOS 16 up to iOS 16.02 || 48MP + 12MP + 12MP Rear Camera || 12MP Front Camera.",
    cost: "$ 1399.90",
    recieveDate: "Recieved on July 4, 2023",
  },
];

const Page = () => {
  return (
    <Layout>
      <div className="flex flex-col  px-1 md:p-5  w-full h-full md:mx-4  rounded-md bg-[#F9F9F9]">
        <h1 className="font-semibold text-3xl leading-10">My Order</h1>
        <div className="flex md:mr-4 xl:mr-10 mt-5 justify-between">
          <div className="flex flex-1 md:gap-8 justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="text-[#887F93] font-medium text-base leading-4">
                Order Number
              </span>
              <span className="text-[#1B0C2E] text-lg leading-5 font-semibold">
                EN12344567
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#887F93] font-medium text-base leading-4">
                Date placed
              </span>
              <span className="text-[#1B0C2E] text-lg leading-5 font-semibold">
                july 4, 2023
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#887F93] font-medium text-base leading-4">
                Total amount
              </span>
              <span className="text-[#1B0C2E] text-lg leading-5 font-semibold">
                $ 5325.60
              </span>
            </div>
          </div>
          <div className="hidden lg:flex gap-5 flex-1 justify-end">
            <button className="text-[#1B0C2E] bg-[#FFFFFF] border border-[#E8E7EA] rounded-xl px-2 xl:px-5 py-3 font-medium text-base leading-4">
              View order
            </button>
            <button className="text-[#1B0C2E] bg-[#FFFFFF] border border-[#E8E7EA] rounded-xl px-2 xl:px-5 py-3 font-medium text-base leading-4">
              View invoice
            </button>
          </div>
        </div>
        <div className="mt-4 md:mr-4 xl:mr-10">
          {oderedItems.map((item) => (
            <div className="py-5 border-t" key={item.id}>
              <div className="flex gap-1 justify-between mb-4 text-[#000000]">
                <div>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={200}
                    height={150}
                  />
                </div>
                <div className="f lg:flex-col sm:p-2">
                  <div className=" flex justify-between w-full xl:w">
                    <h1 className="text-base font-semibold leading-5">
                      {item.title}
                    </h1>
                    <h4 className="text-base font-semibold leading-5">
                      {item.cost}
                    </h4>
                  </div>
                  <div>
                    <p className="text-base font-normal leading-5 opacity-50 mt-4">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between w-full text-base font-medium leading-5">
                <div className="text-[#5C516A]">{item.recieveDate}</div>
                <div className="flex items-center  ">
                  <button className="border-r text-[#000000] px-1">
                    View product
                  </button>
                  <button className="border-l text-[#000000] px-1">
                    Buy again
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <h1 className="font-semibold text-3xl leading-10 ">Order</h1> */}
        {/* <div className="relative w-[740px] h-full mx-au flex justify-center ">
          <Image
            className="h-64 w-fu"
            src="/images/order-bg.png"
            fill
            alt="order-img"
          />
        </div> */}
      </div>
    </Layout>
  );
};

export default Page;
