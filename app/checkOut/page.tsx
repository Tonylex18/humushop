"use client";
import React from "react";
import MainLayout from "../mainLayout/Layout";
import { useGlobalContext } from "../context";
import { allCategoriesProps } from "@/types";
import Image from "next/image";
import { BsPlus } from "react-icons/bs";
import { RiDeleteBack2Line } from "react-icons/ri";

const Page = () => {
  const {
    orderItems,
    handleAddToCart,
    handleIncrement,
    handleDecrement,
    removeFromItem,
  } = useGlobalContext();
  console.log(orderItems);
  const totalPrice = orderItems.reduce((acc: any, item: any) => {
    const cost = parseInt(item.currentCost.replace("₦", "").trim()); // Remove '₦' and convert to integer
    const quantity = item.quantity;
    return acc + cost * quantity; // Add the product of currentCost and quantity to the accumulator
  }, 0);

  console.log(`Total Price: ₦ ${totalPrice}`);
  return (
    <MainLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 lg:px-32">
        <form className="mt-4">
          <div className="bg-[#CCCCCC]/20 rounded-xl px-5 py-8">
            <h1 className="font-bold text-2xl leading-9">Shipping Address</h1>
            <div className="flex flex-col lg:flex-row justify-between mt-4">
              <div>
                <h2 className="font-bold text-lg leading-7 mb-2">
                  Lorenzo Daugherty
                </h2>
                <p className="font-normal text-base leading-5 text-[#0A172A]/50">
                  7222 Adgemount Blvd NW
                </p>
                <p className="font-normal text-base leading-5 text-[#0A172A]/50">
                  Alberta, Calgary, Canada, T3A 2X6
                </p>
              </div>
              <div className="flex items-center">
                <button className="px-5 py-2 mt-4 md:mt-0 bg-[#0D1A4A] font-semibold text-lg leading-6 rounded-full text-white">
                  Change
                </button>
              </div>
            </div>
          </div>
          {/* <div className="grid grid-cols-2 gap-4 w-full">
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-lg leading-7">
                Full name
              </label>
              <input
                type="text"
                className="w-full bg-[#CCCCCC]/20 rounded-full border p-3 outline-none mb-4"
                placeholder="John doe"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-lg leading-7">
                Phone number
              </label>
              <input
                type="Phone"
                placeholder=""
                className="flex items-center w-full bg-[#CCCCCC]/20 rounded-full border p-3 outline-none mb-4"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-semibold text-lg leading-7">
                Email address
              </label>
              <input
                type="email"
                placeholder="John doe@gmail.com"
                className="flex items-center w-full bg-[#CCCCCC]/20 rounded-full border p-3 outline-none mb-4"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-lg leading-7">
                City
              </label>
              <input
                type="text"
                placeholder=""
                className="flex items-center w-full bg-[#CCCCCC]/20 rounded-full border p-3 outline-none mb-4"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-semibold text-lg leading-7">
                State
              </label>
              <input
                type="text"
                placeholder=""
                className="flex items-center w-full bg-[#CCCCCC]/20 rounded-full border p-3 outline-none mb-4"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-lg leading-7">
                ZIP
              </label>
              <input
                type="text"
                placeholder=""
                className="flex items-center w-full bg-[#CCCCCC]/20 rounded-full border p-3 outline-none mb-4"
              />
            </div>
          </div>
          <div className="w-full flex flex-col">
            <label className="mb-2 font-semibold text-lg leading-7">
              Address
            </label>
            <input
              type="text"
              placeholder=""
              className="flex items-center w-full bg-[#CCCCCC]/20 rounded-full border p-3 outline-none mb-4"
            />
          </div> */}
          <div className="mt-10">
            <h2 className="mb-2 font-semibold text-xl leading-7">
              payment method
            </h2>
            <div className="flex items-center justify-between">
              <div>
                <input type="radio" />
                <label className="ml-2 font-normal text-lg leading-7">
                  Debit/Credit card
                </label>
              </div>
              <div>
                <BsPlus size={25} />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <label className="mb-2 font-semibold text-lg leading-7">
              Card number
            </label>
            <input
              type="text"
              placeholder=""
              className="flex items-center w-full bg-[#CCCCCC]/20 rounded-full border p-3 outline-none mb-4"
            />
          </div>
          <div className="w-1/2 flex gap-3 flex-col">
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-lg leading-7">
                Valid date
              </label>
              <input
                type="text"
                placeholder=""
                className="flex items-center bg-[#CCCCCC]/20 rounded-full border p-3 outline-none "
              />
            </div>
            <div className="flex w-full md:w-3/4 flex-col">
              <label className="mb-2 font-semibold text-lg leading-7">
                CVV
              </label>
              <input
                type="text"
                placeholder=""
                className="flex items-center bg-[#CCCCCC]/20 rounded-full border p-3 outline-none mb-4"
              />
            </div>
          </div>
          <h1 className="font-normal text-xs text-[#000000]/50">
            Your card details will be securely saved for faster payments. Your
            CVV will not be saved
          </h1>
          <div>
            <input type="radio" />
            <label className="ml-2 font-normal text-lg leading-7">
              Debit/Credit card
            </label>
          </div>
        </form>
        <div className="flex flex-col ">
          <h1 className="font-semibold text-lg leading-7 -mt-4">
            Order summary
          </h1>
          <div className="rounded-2xl shadow-xl  md:mx-4 px-4 py-5 h-full mt-4">
            {orderItems.map((item: any) => (
              <div key={item.id} className="flex  gap-4 my-4 w-full">
                <div className="flex gap-4">
                  <div>
                    <input type="radio" />
                  </div>
                  <div className="relative w-32 h-24">
                    <Image
                      className="w-full rounded-xl h-3/5"
                      src={item.img}
                      fill
                      alt={item.title}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start">
                  <h1 className="font-semibold text-base leading-6 text-[#1B0C2E]">
                    {item.title}
                  </h1>
                  <h1 className="font-normal text-base leading-5 text-[#000000]/50">
                    {item.category}
                  </h1>
                  <span className="font-semibold text-base leading-3">
                    {`₦${
                      Number(item.currentCost.split(" ")[1].replace(",", "")) *
                      Number(item.quantity)
                    }`}
                    {/* {item.quantity} */}
                  </span>
                </div>
                <div className="text-[#A8A8A8] font-normal text-base leading-4">
                  {item.desc}
                </div>
                <div className="flex flex-col ">
                  <div className="flex justify-end">
                    <RiDeleteBack2Line onClick={() => removeFromItem(item)} />
                  </div>
                  <div className="flex gap-2 justify-center items-start">
                    <span
                      className="flex items-center font-semibold cursor-pointer text-base leading-6 text-[#000000]/80"
                      onClick={() => handleDecrement(item)}
                    >
                      -
                    </span>
                    <span className="flex items-center font-semibold cursor-pointer text-base leading-6 text-[#000000]/80">
                      {item.quantity}
                    </span>
                    <span
                      className="flex items-center font-semibold cursor-pointer text-base leading-6 text-[#000000]/80"
                      onClick={() => handleIncrement(item)}
                    >
                      +
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <div>
              <div className="flex items-center gap-4 justify-between w-full border-t pt-4">
                <div>
                  <p className="font-normal text-base leading-5 text-[#000000]/50">
                    Subtotal
                  </p>
                </div>
                <h4 className="font-bold text-lg leading-5 text-[#000000]/80">
                  {totalPrice}
                </h4>
              </div>
              <div className="flex items-center my-2 justify-between">
                <div>
                  <p className="font-normal text-base leading-5 text-[#000000]/50">
                    Discount
                  </p>
                </div>
                <h4 className="font-bold text-lg leading-5 text-[#000000]/80">
                  $35
                </h4>
              </div>
              <div className="flex items-center my-2 justify-between">
                <p className="font-normal text-base leading-5 text-[#000000]/50">
                  Shipping fees
                </p>
                <h4 className="font-bold text-lg leading-5 text-[#000000]/80">
                  $35
                </h4>
              </div>
              <div className="flex items-center justify-between pt-4 border-t">
                <p className="font-normal text-base leading-5  text-[#000000]/50">
                  Total
                </p>
                <h4 className="font-bold text-lg leading-5 text-[#000000]/80">
                  $35
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
