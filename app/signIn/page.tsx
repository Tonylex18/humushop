'use client';

import Link from "next/link";
import { CustomButton } from "@/components";
import Image from "next/image";
import MainLayout from "../mainLayout/Layout";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/context/Redux/store/store";
import { useRouter } from "next/navigation";
import axiosClient from "@/utils/axios-client";
import { useState } from "react";
import { setToken, setUser } from "@/context/Redux/slices/authSlice";
import { toast } from "react-toastify";
import validationSchema from "@/lib/validationScheme";

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const client = axiosClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await validationSchema.validate({ email, password }, { abortEarly: false });

      const response = await client.post("/auth/login", {
        email,
        password,
      });
      const userData = response.data.data.user;
      const token = response.data.data.token;

      dispatch(setUser(userData));
      dispatch(setToken(token));

      router.push("/dashboard");
      toast.success("Login Successfully!");

    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        const errorMessage = error.response.data.message;
        // toast.error("Provide a valid credentials");

        if (errorMessage === "Email not verified") {
          // router.push("/signUp");
          toast.error("Email not authenticated or invalid credentials");
        }
      } else if (error.response && error.response.data && error.response.data.message) {
        const errorMessage = error.response.data.message;
        if (errorMessage === "Invalid password") {
          toast.error("Incorrect password");
        }
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <MainLayout >
      <main className="flex flex-col md:flex-row w-full px-4 md:px-0 mb-8 flex-1 md:pl-8 lg:pl-28">
        <div className="md:w-1/2  my-16 ">
          <div className="md:w-3/5">
            <h1 className="font-semibold text-4xl leading-10 w-fit mx-auto">
              Sign in
            </h1>
            <p className="my-3 font-normal text-base leading-5 text-center opacity-50">
              Enter your personal details and start your journey with us at
              humushop
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col flex-1 mt-8">
              <label className="mb-1 font-semibold text-lg leading-7">
                Email address
              </label>
              <input
                name="email"
                type="email"
                className="w-full bg-[#CCCCCC]/20 rounded-full border p-3 outline-none mb-4"
                placeholder="John doe@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label className="mb-1 font-semibold text-lg leading-7">
                Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="********"
                className="flex items-center w-full bg-[#CCCCCC]/20 rounded-full border p-3 outline-none mb-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <Link
                href="/forgetPassword"
                className="flex items-center justify-end w-full flex-1"
              >
                <span className="font-bold text-base leading-5">
                  Forgot password?
                </span>
              </Link>

              <button type="submit" className="bg-[#0D1A4A] rounded-full text-white p-3 w-2/5 flex justify-center mt-10 disabled:cursor-not-allowed disabled:opacity-[.5]">
                {isLoading ? "Loading..." : "Continue"}
              </button>
            </form>
            <p className="mt-3">Don&apos;t have an account <Link href="/signUp" className="underline">create an account</Link> </p>
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
