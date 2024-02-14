"use client";
import { homeData } from "@/constant/data";
import React from "react";
import { useGlobalContext } from "../context";
import Image from "next/image";
import Cart from "@/components/Cart";
import MainLayout from "../mainLayout/Layout";

const Page = () => {
  return (
    <MainLayout>
      <div className="px-6 lg:px-32">
        <div className="overflow-x-auto">
          <Cart />
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
