"use client";

import React, { FormEvent, useState } from "react";
import Image from "next/image";
import MainLayout from "../mainLayout/Layout";
import axiosClient from "@/utils/axios-client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/context/Redux/store/store";
import { ToastContainer, toast } from "react-toastify";


const Page = () => {

  const resetEmail = useSelector((state: RootState) => state.auth.resetEmail);
  const verificationCode = useSelector((state: RootState) => state.auth.verificationCode);
  const client = axiosClient();
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await client.post("/auth/reset-password", {
        email: resetEmail,
        password,
        new_password: newPassword,
        new_password_confirmation: confirmPassword,
        reset_token: verificationCode,
      });
      // Reset state after successful password change
      setPassword('');
      setNewPassword('');
      setConfirmPassword('');
      // Navigate to sign-in or wherever needed
      // router.push("/signIn");
      toast.success("Password reset successfully");
      
      setTimeout(() => {
        router.push('/signIn');
      }, 3000);
      
    } catch (error: any) {
      console.error("Error changing password:", error);
      if (error.response) {
        const errorMessage = error.response.data.message || "Failed to reset password. Please try again.";
        toast.error(errorMessage);
      } else {
        toast.error("Failed to reset password. Please try again.");
      }
    }
  };
  

  return (
    <MainLayout>
      <main className="flex flex-col md:flex-row w-full px-4 md:px-0 mb-8 flex-1 md:pl-8 lg:pl-28">
        <div className="md:w-1/2  my-16 md:flex items-center">
          <div className="md:w-3/5">
            <h1 className="font-semibold text-4xl leading-10 w-fit mx-auto">
              Password
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
                <label className="font-semibold text-[16px]">Current Password</label>
                <div className=" h-12 w-full flex items-center relative">
                  <input
                    type="password"
                    placeholder="Current password"
                    className="bg-gray-100 px-5 rounded-full h-full w-full outline-yellow-200 border-none text-[12px]"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-[16px]">New Password</label>
                <div className=" h-12 w-full flex items-center relative">
                  <input
                    type="password"
                    placeholder="new password"
                    className="bg-gray-100 px-5 rounded-full h-full w-full outline-yellow-200 border-none text-[12px]"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-[16px]">
                  Confirm New Password
                </label>
                <div className=" h-12 w-full flex items-center relative">
                  <input
                    type="password"
                    placeholder="Confirm New password"
                    className="bg-gray-100 px-5 rounded-full h-full w-full outline-yellow-200 border-none text-[12px]"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center justify-center button">
                <button
                  type="submit"
                  className="px-16 py-2 font-semibold bg-[#0D1A4A] text-white rounded-full"
                >
                  Continue
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
