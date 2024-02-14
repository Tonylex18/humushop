import React from "react";
import Image from "next/image";
import { CustomButton } from "@/components";
import Link from "next/link";
import MainLayout from "../mainLayout/Layout";
const Page = () => {
  return (
    <MainLayout>
      <main className="flex flex-col md:flex-row w-full px-4 md:px-0 mb-8 flex-1 md:pl-8 lg:pl-28">
        <div className="md:w-1/2  my-16 ">
          <div className="md:w-3/5">
            <h1 className="font-semibold text-4xl leading-10 text-start">
              Contact us
            </h1>

            <form className="flex flex-col flex-1 mt-8">
              <label className="mb-1 font-semibold text-lg leading-7">
                Full name
              </label>
              <input
                type="text"
                className="w-full bg-[#CCCCCC]/20 rounded-full border p-3 outline-none  mb-4"
                placeholder="john doe"
              />
              <label className="mb-1 font-semibold text-lg leading-7">
                Email address
              </label>
              <input
                type="text"
                className="w-full bg-[#CCCCCC]/20 rounded-full border p-3 outline-none mb-4"
                placeholder="John doe@gmail.com"
              />
              <label className="mb-1 font-semibold text-lg leading-7">
                Order number
              </label>
              <input
                type="password"
                placeholder="********"
                className="flex items-center w-full bg-[#CCCCCC]/20 rounded-full border p-3 outline-none mb-4"
              />
              <label className="mb-1 font-semibold text-lg leading-7">
                Subject
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full bg-[#CCCCCC]/20 rounded-full border p-3 outline-none mb-4"
              />
            </form>
            <Link href="/contactUs" className="flex justify-center mt-4">
              <CustomButton
                title="Submit"
                containerStyle="bg-[#0D1A4A] rounded-full text-white p-3 w-2/5 flex justify-center"
              />
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 my-16">
          <Image
            className="object-cover w-full h-[520px]"
            src="/images/signUpSideImg.png"
            width={120}
            height={30}
            alt="side curve"
          />
        </div>
      </main>
    </MainLayout>
  );
};

export default Page;
