"use client";
import { Hero } from "@/components";
import Card from "@/components/Card";
import Cart from "@/components/Cart";
import { homeData } from "@/constant/data";
import { allCategoriesProps } from "@/types";
import React, { useState, ChangeEvent } from "react";
export default function Home() {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [selectedCategories, setSelectedCategories] = useState<any>(null);
  const [cartItem, setCartItem] = useState<any>([]);
  let filteredProducts = homeData;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedCategories(event.target.value);
    setOpenFilter(false);
  };
  const handleClick = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedCategories(event.target.value);
    setOpenFilter(false);
  };

  const handleReset = () => {
    setSelectedCategories(null); // Clear the filter by setting selectedCategories to null
  };
  const FilteredData = (homeData: any, selected: any) => {
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ title, color }: allCategoriesProps) => {
          return title === selected || color === selected;
        }
      );
    }
    return filteredProducts;
  };

  const result = FilteredData(homeData, selectedCategories);
  return (
    <main className="">
      <Hero />
    </main>
  );
}
