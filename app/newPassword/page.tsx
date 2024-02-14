import React from "react";
import Layout from "../dashboardLayout/Layout";
import { CustomButton } from "@/components";
import Link from "next/link";

const page = () => {
  return (
    <Layout>
      <div className=" flex flex-col  p-5  w-full h-full mx-4  rounded-md bg-[#F9F9F9]">
        <h1 className="font-semibold text-3xl leading-10">Edit profile</h1>
        <form className="flex flex-col flex-1 mt-4 md:w-1/2">
          <label className="mb-1 font-semibold text-lg leading-7">
            Old password
          </label>
          <input
            type="password"
            className="w-full bg-[#CCCCCC]/20 rounded-full border p-3 outline-none mb-4"
            placeholder="*******"
          />
          <label className="mb-1 font-semibold text-lg leading-7">
            New password
          </label>
          <input
            type="password"
            placeholder="*******"
            className="flex items-center w-full bg-[#CCCCCC]/20 rounded-full border p-3 outline-none mb-4"
          />
          <Link href="/newAddress" className="flex justify-start mt-4">
            <CustomButton
              title="Change"
              containerStyle="bg-[#0D1A4A] rounded-full text-white p-3 w-2/5 flex justify-center"
            />
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default page;
