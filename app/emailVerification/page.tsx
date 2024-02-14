"use client";

import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "../mainLayout/Layout";
import axiosClient from "@/utils/axios-client";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/context/Redux/store/store";
import { setToken, setUser } from "@/context/Redux/slices/authSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

// const validationSchema = yup.object().shape({
//   // email: yup.string().required('Email is required!').email('Please provide a valid email'),
//   otp: yup.string().required("OTP is required!")
// })


const Page = () => {

  const token = useSelector((state: RootState) => state.auth.token);
  const client = axiosClient(token);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [countdown, setCountdown] = useState(120);
  const [emails, setEmails] = useState(["", "", "", ""]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [countdown]);

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleEmailChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const truncatedValue = event.target.value.slice(0, 1);
    const updatedEmails = [...emails];
    updatedEmails[index] = truncatedValue;
    setEmails(updatedEmails);

    if (index < 3 && truncatedValue) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleBackClick = (index: number) => {
    if (index > 0) {
      if (emails[index] !== "") {
        const updatedEmails = [...emails];
        updatedEmails[index] = "";
        setEmails(updatedEmails);
      } else {
        inputRefs[index - 1].current?.focus();
      }
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Backspace") {
        const currentIndex = inputRefs.findIndex(
          (ref) => ref.current === document.activeElement
        );
        if (currentIndex >= 0) {
          handleBackClick(currentIndex);
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    }

  }, [inputRefs]);

  const registrationState = useSelector(
    (state: RootState) => state.registration
  );
  const email = registrationState.email;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const otp = emails.join("");
    console.log(
      "Sending verification request with code:",
      otp,
      "and email:",
      email
    );

    try {
      const response = await client.post("/auth/verify-otp", {
        otp,
        email,
      });

      const userDate = response.data.data.user;
      const token = response.data.data.token;

      dispatch(setUser(userDate));
      dispatch(setToken(token));

      router.push("/signIn");
      toast.success("Email verify succesfully!");
    } catch (error) {
      console.error("Error verifying email:", error)
      toast.error("Error verifying email!")
    }
  }

  const handleResendOTP = async () => {
    try {
      // Make a request to the endpoint to resend OTP
      const response = await client.post("/auth/resend-otp", {
        email: email,
      });
      // Handle success response, if needed
      toast.success("OTP resent successfully!");
      // Reset the countdown
      setCountdown(120);
    } catch (error) {
      console.error("Error resending OTP:", error);
      toast.error("Failed to resend OTP. Please try again.");
    }
  };

  return (
    <MainLayout>
      <main className="flex flex-col md:flex-row w-full px-4 md:px-0 mb-8 flex-1 md:pl-8 lg:pl-28">
        <div className="md:w-1/2  my-16 flex self-center ">
          <div className="md:w-4/5 xl:w-1/2">
            <h1 className="font-semibold text-3xl md:text-4xl leading-10 w-fit mx-auto">
              Email verification
            </h1>
            <p className="my-3 font-normal text-base leading-5 text-center opacity-50">
              Kindly check your email address and insert the otp sent.
            </p>
            <span className="text-center text-[12px] w-full md:w-[55%] text-gray-400">
              {countdown > 0
                ? `Time remaining: ${Math.floor(countdown / 80)}:${countdown % 80 < 10 ? "0" : ""
                }${countdown % 80}`
                : "Verification code expired"}
            </span>


            <form
              className="flex justify-center gap-5 flex-col m-auto w-full md:w-[65%] my-10"
              onSubmit={handleSubmit}
            >
              <div className="flex gap-2 flex-col">
                <div className="flex items-center justify-between">
                  <span className="font-light text-gray-400 text-[16px]">
                    OTP
                  </span>
                  <span className="font-light text-gray-400 text-[16px]">
                    {countdown > 0
                      ? `${Math.floor(countdown / 80)}:${countdown % 80 < 10 ? "0" : ""
                      }${countdown % 80}`
                      : "Verification code expired"}
                  </span>
                </div>
                <div className="otp-input flex justify-center items-center gap-4">
                  {Array.from({ length: 4 }, (_, index) => (
                    <input
                      key={index}
                      type="number"
                      className="border-b w-[50%] text-center outline-none border-gray-500  rounded-md px-3 py-2"
                      value={emails[index] || ""}
                      ref={inputRefs[index]}
                      onChange={(event) => handleEmailChange(event, index)}
                      maxLength={1}
                      required
                    />
                  ))}
                </div>

                <div className="flex justify-end cursor-pointer w-fit mx-auto mr-0 my-4">
                  <span className="text-[12px] font-semibold w-fit">
                    {countdown === 0 && (
                      <span
                        className="text-[12px] font-semibold w-fit"
                        onClick={() => {
                          // Implement the logic to resend the verification code
                          // e.g., call an API to send a new code
                        }}
                      >
                        Didn&apos;t receive the code?
                      </span>
                    )}
                  </span>
                </div>
              </div>
              <div className="button flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-[#0D1A4A] text-white px-16 py-2 rounded-full font-semibold"
                >
                  Continue
                </button>
              </div>
            </form>

            {countdown === 0 && (
              <div className="flex justify-center my-4">
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={handleResendOTP}
                  disabled={countdown > 0} 
                >
                  Resend OTP
                </button>
              </div>
            )}




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


// bg-[#0D1A4A] rounded-full text-white p-3 w-1/2 md:w-2/5 flex justify-center

export default Page;
