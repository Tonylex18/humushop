"use client";
import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "@/context/Redux/slices/authSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const sideNavItems = [
  {
    id: "My account",
    label: "My account",
    path: "/dashboard",
  },
  {
    id: "Orders",
    label: "Orders",
    path: "/order",
  },
  {
    id: "Saved items",
    label: "Saved items",
    path: "/saveItems",
  },
  {
    id: "Recently viewed",
    label: "Recently viewed",
    path: "/recentlyViewed",
  },
  {
    id: "Payment history",
    label: "Payment history",
    path: "/paymentHistory",
  },
  {
    id: "Settings",
    label: "Settings",
    path: "/setting",
  },
];
interface props {
  openSidebar: boolean;
}
const SideBar = ({ openSidebar }: props) => {

  const dispatch = useDispatch();
  const router = useRouter();


  const handleSignOut = () => {
      dispatch(setUser(null));
      dispatch(setToken(null));

      toast.success("Sign out successfully!");
      router.push("/signIn")
  }

  return (
    <nav className="w-full border rounded-md p-2">
      <ul className="w-full">
        <h1 className="font-bolder text-xl leading-5">Menu</h1>
        <li
          className="full hover:bg-[#0D1A4A] px-2 py-2 rounded-sm hover:text-white my-2"
        >
          <Link
            href='/'
            className="font-bold text-sm  leading-5 w-full"
          >
            Dashboard
          </Link>
        </li>
        <li
          className="full hover:bg-[#0D1A4A] px-2 py-2 rounded-sm hover:text-white my-2"
        >
          <Link
            href='/'
            className="font-bold text-sm  leading-5 w-full"
          >
            Orders
          </Link>
        </li>
        <li
          className="full hover:bg-[#0D1A4A] px-2 py-2 rounded-sm hover:text-white my-2"
        >
          <Link
            href='/'
            className="font-bold text-sm  leading-5 w-full"
          >
            Saved items
          </Link>
        </li>
        <li
          className="full hover:bg-[#0D1A4A] px-2 py-2 rounded-sm hover:text-white my-2"
        >
          <Link
            href='/'
            className="font-bold text-sm  leading-5 w-full"
          >
            Recently viewed
          </Link>
        </li>
        <li
          className="full hover:bg-[#0D1A4A] px-2 py-2 rounded-sm hover:text-white my-2"
        >
          <Link
            href='/'
            className="font-bold text-sm  leading-5 w-full"
          >
            Payment history
          </Link>
        </li>
        <li
          className="full hover:bg-[#0D1A4A] px-2 py-2 rounded-sm hover:text-white my-2"
        >
          <Link
            href='/'
            className="font-bold text-sm  leading-5 w-full"
          >
            Settings
          </Link>
        </li>
        <li
          className="full hover:bg-[#0D1A4A] px-2 py-2 rounded-sm hover:text-white my-2"
        >
          <button
            type="button"
            className="font-bold text-sm leading-5 w-full text-left"
            onClick={handleSignOut}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
