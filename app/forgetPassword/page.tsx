"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CustomButton } from "@/components";
import MainLayout from "../mainLayout/Layout";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/context/Redux/store/store";
import { useRouter } from "next/navigation";
import axiosClient from "@/utils/axios-client";
import { setResetEmail } from "@/context/Redux/slices/authSlice";
import { ToastContainer, toast } from "react-toastify";


const Page = () => {

  const dispatch = useDispatch<AppDispatch>();
  const client = axiosClient();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await client.post("/auth/forget-password", {
        email,
      });
      dispatch(setResetEmail(email));
      console.log("Email sent successfully!");
      
      toast.success("Email sent succesfully, Check your mail");
      setTimeout(() => {
        router.push('/forgetPassword/enter-code');
      }, 3000);
      // router.push("/forgetPassword/enter-code");
    } catch (error) {
      console.error("Password reset error:", error);
      toast.error("user not found");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <MainLayout>
      <main className="flex flex-col md:flex-row w-full px-4 md:px-0 mb-8 flex-1 md:pl-8 lg:pl-28">
        <div className="md:w-1/2  my-16 md:flex items-center">
          <div className="md:w-3/5">
            <h1 className="font-semibold text-4xl leading-10 w-fit mx-auto">
              Forgot password
            </h1>
            <p className="my-3 font-normal text-base leading-5 text-center opacity-50">
              Enter your personal details and start your journey with us at
              humushop
            </p>
            <form
            onSubmit={handleSubmit}
            className="flex justify-center gap-5 flex-col m-auto w-full md:w-[65%] my-10"
          >
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[16px]">Email address</label>
              <div className="flex items-center w-full h-12">
                <input
                  type="email"
                  placeholder="John doe@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-5 bg-gray-100 w-full h-full rounded-full outline-yellow-200 border-none text-[12px]"
                  required
                />
              </div>

            </div>
            <div className="flex items-center justify-center button">
              <button
                type="submit"
                className="px-16 py-2 font-semibold bg-[#0D1A4A] text-white rounded-full"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Continue"}
              </button>
            </div>
            <ToastContainer />
          </form>
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
