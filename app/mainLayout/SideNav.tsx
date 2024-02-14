"use client";
import React from "react";
import Link from "next/link";
const sideNavItems = [
  {
    id: "My account",
    label: "My account",
    path: "/dashboard",
  },
  {
    id: "Products",
    label: "Products",
    path: "/products",
  },
  {
    id: "Categories",
    label: "Categories",
    path: "/categories",
  },
  {
    id: "Daily deals",
    label: "Daily deals",
    path: "/dailyDeals",
  },
  {
    id: "Contact us",
    label: "Contact us",
    path: "/contactUs",
  },
  {
    id: "Cart",
    label: "Cart",
    path: "/cart",
  },
  {
    id: "Favorite",
    label: "Favorite",
    path: "/",
  },
  {
    id: "Profile",
    label: "Profile",
    path: "/dashboard",
  },
];
interface props {
  openSidebar: boolean;
}
const SideNav = ({ openSidebar }: props) => {
  return (
    <nav className="w-full border rounded-md p-4">
      <ul className="w-full">
        <h1 className="font-bolder text-xl leading-5">Menu</h1>
        {sideNavItems.map((item) => (
          <li
            className="full hover:bg-[#0D1A4A] px-4 py-2 rounded-sm hover:text-white my-2"
            key={item.id}
          >
            <Link
              href={item.path}
              className="font-bold text-sm  leading-5 w-full"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="border-t-4 flex  border-[#000000]/10">
        <span className="mt-4 font-normal text-2xl leading-6">Call:</span>
        <p className="mt-4 font-bold leading-6 text-2xl"> 447449688883</p>
      </div>
    </nav>
  );
};

export default SideNav;
