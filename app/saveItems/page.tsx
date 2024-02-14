import React from "react";
import Layout from "../dashboardLayout/Layout";
import Card from "@/components/Card";
import { allCategoriesProps } from "@/types";
const savedItem = [
  {
    id: 0,
    img: "/images/blender.jpg",
    title: "blender",
    detailDesc:
      "Lorem ipsum dolor sit amet consectetur. Quam interdum nulla id et in nisl urna mattis.",
    desc: "Description should be this long",
    formerCost: "₦ 16,000",
    currentCost: "₦ 10,000",
    btnText: "Add to cart",
    color: "red",
  },
  {
    id: 1,
    img: "/images/fridge.jpg",
    title: "fridge",
    detailDesc:
      "Lorem ipsum dolor sit amet consectetur. Quam interdum nulla id et in nisl urna mattis.",
    desc: "Description should be this long",
    formerCost: "₦ 16,000",
    currentCost: "₦ 10,000",
    btnText: "Add to cart",
    color: "blue",
  },
  {
    id: 2,
    img: "/images/washing-machine.jpg",
    title: "washing-machine",
    detailDesc:
      "Lorem ipsum dolor sit amet consectetur. Quam interdum nulla id et in nisl urna mattis.",
    desc: "Description should be this long",
    formerCost: "₦ 16,000",
    currentCost: "₦ 10,000",
    btnText: "Add to cart",
    color: "red",
  },
  {
    id: 3,
    img: "/images/bed.jpg",
    title: "bed",
    detailDesc:
      "Lorem ipsum dolor sit amet consectetur. Quam interdum nulla id et in nisl urna mattis.",
    desc: "Description should be this long",
    formerCost: "₦ 16,000",
    currentCost: "₦ 10,000",
    btnText: "Add to cart",
    color: "blue",
  },
  {
    id: 4,
    img: "/images/computer-accessories.jpg",
    title: "Fenty beauty lip care",
    detailDesc:
      "Lorem ipsum dolor sit amet consectetur. Quam interdum nulla id et in nisl urna mattis.",
    desc: "Description should be this long",
    formerCost: "₦ 16,000",
    currentCost: "₦ 10,000",
    btnText: "Add to cart",
    color: "white",
  },
  {
    id: 5,
    img: "/images/shoes.jpg",
    title: "Fenty beauty lip care",
    detailDesc:
      "Lorem ipsum dolor sit amet consectetur. Quam interdum nulla id et in nisl urna mattis.",
    desc: "Description should be this long",
    formerCost: "₦ 16,000",
    currentCost: "₦ 10,000",
    btnText: "Add to cart",
    color: "purple",
  },
];
const Page = () => {
  return (
    <Layout>
      <div className="flex flex-col  md:p-5  w-full h-full md:mx-4  rounded-md bg-[#F9F9F9]">
        <h1 className="font-semibold text-3xl leading-10">Saved items</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-5">
          {savedItem.map(
            ({
              img,
              id,
              title,
              desc,
              formerCost,
              currentCost,
              btnText,
            }: allCategoriesProps) => (
              <Card
                key={id}
                img={img}
                title={title}
                desc={desc}
                formerCost={formerCost}
                currentCost={currentCost}
                btnText={btnText}
              />
            )
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Page;
