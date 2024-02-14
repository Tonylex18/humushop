"use client";
import { Nerko_One } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";

const ImageSlider = ({ images }: any) => {
  const filteredImages = images.map((item: any) => {
    const { img, subImg, subImg2 } = item;
    return [img, subImg, subImg2];
  });
  console.log(filteredImages);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderData, setSliderData] = useState(filteredImages[1]);
  const previousImage = () => {
    setCurrentIndex(
      currentIndex === 0 ? filteredImages[0].length - 1 : currentIndex - 1
    );
    handleReset();
  };

  const nextImage = () => {
    setCurrentIndex(
      currentIndex === filteredImages[0].length - 1 ? 0 : currentIndex + 1
    );
    handleReset();
  };
  const handleClick = (index: any) => {
    const slider = filteredImages[0];
    setSliderData(slider[index]);
  };

  const handleReset = () => {
    setSliderData(false);
  };
  return (
    <div className="image-slider">
      <div className="flex">
        <div className="flex flex-col justify-between gap-4 w-1/4 ">
          <div className="flex flex-col gap-4 mr-5 ">
            {filteredImages[0].map((item: any, index: any) => (
              <div
                className="relative w-full h-24"
                key={index}
                onClick={() => handleClick(index)}
              >
                <Image className="rounded-2xl" src={item} fill alt={item} />
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center gap-5 mr-5">
            <span className="flex items-center h-8 w-8 rounded-full hover:text-white hover:bg-[#000000]/80">
              <PiCaretUpBold
                onClick={previousImage}
                className="w-1/2 mx-auto"
              />
            </span>
            <span className="flex items-center h-8 w-8 rounded-full hover:bg-[#000000]/80 hover:text-white">
              <PiCaretDownBold onClick={nextImage} className="w-1/2 mx-auto" />
            </span>
          </div>
        </div>
        <div className="flex w-96  mx-auto">
          {sliderData ? (
            <div className="relative w-full h-full">
              <Image
                className="w-full h-full rounded-2xl"
                src={sliderData}
                fill
                sizes="40"
                alt="sliderImg"
              />
            </div>
          ) : (
            <div className="">
              {filteredImages[0].map((imageUrl: any, index: any) => (
                <div
                  className={`relative h-full w-96 ${
                    index === currentIndex ? "block" : "hidden"
                  } `}
                  key={index}
                >
                  <Image
                    className="w-full h-full rounded-2xl"
                    src={imageUrl}
                    fill
                    sizes="40"
                    alt={images.title}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
