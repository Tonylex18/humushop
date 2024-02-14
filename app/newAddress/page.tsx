import React from "react";
import Layout from "../dashboardLayout/Layout";
import Link from "next/link";
import { CustomButton } from "@/components";

const page = () => {
  return (
    <Layout>
      <div className=" flex flex-col  p-5  w-full h-full mx-4  rounded-md bg-[#F9F9F9]">
        <h1 className="font-semibold text-3xl leading-10">Add a new address</h1>
        <form className="flex flex-col flex-1 mt-4 md:w-3/5">
          <div className="grid grid-cols-2 gap-4 w-full">
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
          </div>
          <Link href="/newPassword" className="flex justify-start mt-4">
            <CustomButton
              title="Save and confirm"
              containerStyle="bg-[#0D1A4A] rounded-full text-white p-3 w-2/5 flex justify-center"
            />
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default page;
