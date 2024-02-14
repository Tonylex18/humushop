import React from "react";
import Image from "next/image";
import { footerLinks } from "@/constant/data";
import { LuFacebook, LuInstagram, LuTwitter } from "react-icons/lu";
import { PiAppleLogoLight } from "react-icons/pi";
import { BsGooglePlay } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-4 xl:px-32 py-14 flex justify-between  bg-[#0D1A4A] flex-1">
      <div className="flex flex-col md:flex-row lg:flex-row-reverse gap-4 w-full flex-1 justify-between items-start text-white">
        <div className="block w-full md:w-1/3 lg:w-1/4">
          <h3 className="text-base font-medium leading-5 mb-4">
            Download our mobile app
          </h3>
          <div className="flex flex-col gap-3 justify-between ">
            <button className="rounded-lg py-2 border px-6 flex gap-3 justify-center items-center">
              <PiAppleLogoLight size={35} />
              <div className="flex flex-col ">
                <span className="text-sm font-normal leading-3 text-[#BBB6C0]">
                  Download it on
                </span>
                <span className="text-base font-semibold leading-5">
                  Google store
                </span>
              </div>
            </button>
            <button className="rounded-lg py-2 border px-6 flex gap-3 justify-center items-center">
              <BsGooglePlay size={20} />
              <div className="flex flex-col ">
                <span className="text-sm font-normal leading-3 text-[#BBB6C0]">
                  Download it on
                </span>
                <span className="text-base font-semibold leading-5">
                  Apple store
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:mt-0 md:ml-4 flex-1 lg:grid-cols-3 justify-between items-start">
          {footerLinks.map((link) => (
            <div key={link.title}>
              <h3 className="font-semibold text-base leading-5">
                {link.title}
              </h3>
              {link.links.map((item: any) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="flex flex-col text-base font-normal leading-5"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="mb-4">
          <Image
            src="/images/Humushop-logo.png"
            alt="humushop-logo"
            width={80}
            height={18}
            className="object-contain"
          />
          <h1 className="my-2">Follow us on:</h1>
          <div className="flex flex-1 justify-between items-center cursor-pointer">
            <LuFacebook />
            <LuInstagram />
            <LuTwitter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
