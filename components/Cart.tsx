"use client";
import { useGlobalContext } from "@/app/context";
import React, { useContext, useState } from "react";
import Card from "./Card";
import { allCategoriesProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { CustomButton } from ".";
import Empty from "./Empty";
const Cart = () => {
  const {
    carts,
    handleOrder,
    orderItems,
    handleAddToCart,
    handleRemoveFromCart,
    handleIncrement,
    handleDecrement,
    count,
  } = useGlobalContext();
  console.log(carts);
  const [selectedItems, setSelectedItems] = useState<any | boolean>([]);
  const checkHandler = (e: any) => {
    let isSelected = e.target.checked;
    let value = parseInt(e.target.value);
    console.log(value);
    if (isSelected) {
      setSelectedItems([...selectedItems, value]);
      console.log(setSelectedItems);
    } else {
      setSelectedItems((prevData: []) => {
        return prevData.filter((id) => id !== value);
      });
      console.log(selectedItems);
    }
  };

  const selectAllhandler = () => {
    if (carts.length === selectedItems.length) {
      setSelectedItems([]);
    } else {
      const selectedInput = carts.map((item) => {
        return item.id;
      });
      setSelectedItems(selectedInput);
    }
  };
  return (
    <div className="">
      {carts.length === 0 ? (
        <div>
          <h1 className="flex items-center justify-center font-bold text-xl leading-5">
            EMPTY CART
          </h1>
          <Empty />
        </div>
      ) : (
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-5 justify-between items-center w-full flex-1 font-normal text-xl leading-7 text-[#000000] text-opacity-90">
            <div>
              <input
                id="selectAll"
                type="checkbox"
                className="accent-[#1B0C2E]"
                onChange={selectAllhandler}
              />
              <label htmlFor="selectAll" className="ml-2">
                {carts.length === selectedItems.length
                  ? "Unselect items"
                  : "Select all items"}
              </label>
            </div>

            <div className="hidden md:flex justify-cent">item</div>
            <div className="hidden md:flex justify-cent">Description</div>
            <div className="hidden md:flex justify-center">Quantity</div>
            <div className="hidden md:flex justify-center">Shop</div>
          </div>
          {carts.map((item: any) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-5 mt-8 w-full gap-2"
            >
              <div className="md:flex  gap-2">
                <div>
                  <input
                    type="checkbox"
                    onChange={checkHandler}
                    checked={selectedItems.includes(item.id)}
                    value={item.id}
                    id={item.id}
                    className="accent-[#1B0C2E] w-8"
                  />
                </div>
                <div className="relative w-full h-56 md:w-44 md:h-32">
                  <Image
                    className="w-full rounded-xl"
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
                  {/* {item.currentCost} */}
                  {`₦${
                    Number(item.currentCost.split(" ")[1].replace(",", "")) *
                    Number(item.quantity)
                  }`}
                </span>
              </div>
              <div className="text-[#A8A8A8] font-normal text-base leading-4">
                {item.desc}
              </div>
              <div className="flex gap-2 justify-center items-start">
                <span
                  className="flex items-center font-semibold cursor-pointer text-base leading-6 text-[#000000]/80"
                  onClick={() => handleRemoveFromCart(item)}
                >
                  -
                </span>
                <span className="flex items-center font-semibold cursor-pointer text-base leading-6 text-[#000000]/80">
                  {item.quantity}
                </span>
                <span
                  className="flex items-center font-semibold cursor-pointer text-base leading-6 text-[#000000]/80"
                  onClick={() => handleAddToCart(item)}
                >
                  +
                </span>
              </div>
              <div className="flex justify-center w-ful">
                <button
                  className=" w-fit h-1/2 bg-[#0D1A4A] py-1 px-12 rounded-xl text-white hover:text-[#000000]/80 hover:bg-white font-base text-xl leading-7 cursor-pointer"
                  onClick={() => handleOrder(item)}
                >
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <Link
        href="/checkOut"
        className={`${carts.length === 0 ? "hidden" : "block"}`}
      >
        <button>checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
