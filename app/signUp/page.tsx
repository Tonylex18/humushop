"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CustomButton } from "@/components";
import Link from "next/link";
import MainLayout from "../mainLayout/Layout";

// import { Formik, Form } from 'formik'
// import * as yup from "yup";
// import { createUser } from "@/lib/createUser";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
// import actionType from "@/store/actionTypes";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosClient from "@/utils/axios-client";
import { AppDispatch, RootState } from "@/context/Redux/store/store";
import { updateField } from "@/context/Redux/slices/registrationSlice";
import { setToken } from "@/context/Redux/slices/authSlice";


// const validationSchema = yup.object().shape({
//   name: yup.string().required('Name is required'),
//   email: yup.string().required('Email is required').email("Please enter a valid email"),
//   password: yup.string().required("Password is required").min(8, "password must be at least 8 characters"),
//   password_confirmation: yup.string()
//     .oneOf([yup.ref('password'), undefined], 'Passwords must match')
//     .required('Confirm Password is required'),
// })

const Page = () => {

  const router = useRouter();
  const client = axiosClient();

  const [isLoading, setIsLoading] = useState(false);
  const registrationState = useSelector(
    (state: RootState) => state.registration
  );

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await client.post("/auth/register", {
        ...registrationState,
      });

      const token = response.data.data.token;
      const otp = response.data.data.otp;
      console.log(otp);
      console.log(token);
      

      dispatch(setToken(token));
      // dispatch(setOTP(otp));

      router.push("/emailVerification");
      toast.success("Account created successfully");
    } catch (error: any) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
        // toast.error("This email is taken already!")
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      <main className="flex flex-col md:flex-row w-full px-4 md:px-0 mb-8 flex-1 md:pl-8 lg:pl-28">
        <div className="md:w-1/2  my-16 ">
          <div className="md:w-3/5">
            <h1 className="font-semibold text-4xl leading-10 w-fit mx-auto">
              Create account
            </h1>
            <p className="my-3 font-normal text-base leading-5 text-center opacity-50">
              Enter your personal details and start your journey with us at
              humushop
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col flex-1 mt-8">
              <label className="mb-1 font-semibold text-lg leading-7">
                Full name
              </label>
              <input
                name="name"
                type="text"
                className="w-full bg-[#CCCCCC]/20 rounded-full border p-3 outline-none  mb-4"
                placeholder="john doe"
                onChange={(e) => 
                  dispatch(
                    updateField({ field: "name", value: e.target.value })
                  )
                }
                required
              />

              <label className="mb-1 font-semibold text-lg leading-7">
                Email address
              </label>
              <input
                name="email"
                type="text"
                className="w-full bg-[#CCCCCC]/20 rounded-full border p-3 outline-none mb-4"
                placeholder="John doe@gmail.com"
                onChange={(e) => 
                  dispatch(
                    updateField({ field: "email", value: e.target.value })
                  )
                }
                required
              />

              <label className="mb-1 font-semibold text-lg leading-7">
                Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter Password"
                className="flex items-center w-full bg-[#CCCCCC]/20 rounded-full border p-3 outline-none mb-4"
                onChange={(e) => 
                  dispatch(
                    updateField({ field: "password", value: e.target.value })
                  )
                }
                required
              />
              <label className="mb-1 font-semibold text-lg leading-7">
                Confirm password
              </label>
              <input
                name="password_confirmation"
                type="password"
                placeholder="Confirm Password"
                className="flex items-center w-full bg-[#CCCCCC]/20 rounded-full border p-3 outline-none mb-4"
                onChange={(e) => 
                  dispatch(
                    updateField({ field: "password_confirmation", value: e.target.value })
                  )
                }
                required
              />

              <button type="submit" className="bg-[#0D1A4A] rounded-full text-white p-3 w-2/5 flex justify-center mt-5 disabled:cursor-not-allowed disabled:opacity-[.5]"
              disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Continue"}
              </button>
            </form>
            <p className="mt-3">Already have an account {" "} <Link href="/signIn" className="underline">Sign In</Link> </p>
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
