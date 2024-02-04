"use client";

import React from "react";
import { CustomButton } from ".";
import Image from "next/image";

export default function Main() {
  const handleCustomBtnClick = () => {};
  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="flex-1 pt-36 sm:px-16 px-6">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
          You can find or rent a bike very fast and easily!
        </h1>
        <p className="text-[27px] text-slate-700 italic mt-5">
          Streamline your bike rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          title="Explore Bikes"
          containerStyles="bg-blue-500 text-white rounded-full mt-10"
          handleClick={handleCustomBtnClick}
        />
      </div>
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image
            src={"/bike.png"}
            alt="image1"
            fill
            className="object-contain"
          />
          <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden">
            <Image src={"/hero-bg.png"} alt="image1" fill />
          </div>
        </div>
      </div>
    </div>
  );
}
