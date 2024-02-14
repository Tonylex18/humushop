"use client";
import { setVerificationCode } from "@/context/Redux/slices/authSlice";
import { AppDispatch, RootState } from "@/context/Redux/store/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

function Page() {

    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const [emails, setEmails] = useState(["", "", "", ""]);

    const handleEmailChange = (
        event: ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const truncatedValue = event.target.value.slice(0, 1);
        const updatedEmails = [...emails];
        updatedEmails[index] = truncatedValue;
        setEmails(updatedEmails);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const verificationCode = emails.join("");
        dispatch(setVerificationCode(verificationCode));
        // router.push("/password");
        toast.success("Password reset token sent successfully")
        setTimeout(() => {
          router.push('/password');
        }, 3000);
    }

  return (
    <div className="w-full py-10">
      <div className="max-w-[1140px] md:mx-auto mx-5 mt-16">
        <div className="cursor-pointer w-fit">
          <Link
            href="../forgetPassword"
            className="w-fit flex  gap-1 items-center"
          >
            
            <span className="text-gray-400">Back</span>
          </Link>
        </div>

        <div className="w-[95%] md:max-w-[60%] m-auto shadow-xl bg-white py-10 px-7  mt-10 rounded-2xl border border-gray-200">
          <div className="heading flex flex-col items-center justify-center gap-5">
            <h2 className="text-3xl">Enter Passcode</h2>
            <span className="text-center text-[12px] w-full md:w-[55%] text-gray-400">
              A four digit code was sent to the number below. Kindly enter the
              code.
            </span>
          </div>

          <form
            className="flex justify-center gap-5 flex-col m-auto w-full md:w-[65%] my-10"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-2 flex-col">
              <div className="flex items-center justify-between">
                <span className="font-light text-gray-400 text-[16px]">
                  Email
                </span>
                <span className="font-light text-gray-400 text-[16px]">
                  3:00
                </span>
              </div>
              <div className="otp-input flex justify-center items-center gap-4">
                {Array.from({ length: 4 }, (_, index) => (
                  <input
                    key={index}
                    type="number"
                    className="border-b w-[50%] text-center outline-none border-gray-500  rounded-md px-3 py-2"
                    value={emails[index] || ""}
                    onChange={(event) => handleEmailChange(event, index)}
                    maxLength={1}
                    required
                  />
                ))}
              </div>

              <div className="flex justify-end cursor-pointer w-fit mx-auto mr-0 my-4">
                <span className="text-[12px] font-semibold w-fit">
                  Didn&apos;t recieved the code?
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
            <ToastContainer /> 
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
