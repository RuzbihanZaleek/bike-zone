"use client";

import { BikeProps } from "@/types";
import Image from "next/image";
import { GiElectric, GiSteeringWheel } from "react-icons/gi";
import AppColors from "@/utils/appColors";
import { BsFuelPump } from "react-icons/bs";
import { BikeDetails, CustomButton } from ".";
import { useState } from "react";

interface BikeCardProps {
  bike: BikeProps;
}

const BikeCard = ({ bike }: BikeCardProps) => {
  const bikePrice = (Math.floor(Math.random() * (50 - 10) + 1) + 10) * 100;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="transition duration-300 bg-blue-100 flex flex-col p-6 justify-center items-start text-black rounded-3xl hover:bg-blue-50 hover:shadow-md group">
      {/*Bike name */}
      <div className="w-full flex justify-between items-start gap-2 text-[22px] leading-[26px font-bold]">
        <h2 className="uppercase">{bike.make}</h2>
        <h2>{bike.model}</h2>
      </div>

      {/* Bike Rent per day */}
      <p className="flex mt-6 text-[32px]">
        <span className="self-start text-[14px] font-semibold">Rs.</span>
        {bikePrice}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      {/* Bike Image */}
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/bike2.png"
          alt="bike model"
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* Additional Information */}
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-slate-700">
          <div className="flex flex-col justify-center items-center gap-2">
            <GiSteeringWheel color={AppColors.Purple} />
            <p className="text-[14px]">
              {bike.gearbox === "Automatic" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <GiElectric color={AppColors.Yellow} />
            <p className="text-[14px]">
              {bike.starter === "Electric"
                ? "Electric"
                : bike.starter === "Kick"
                ? "Kick"
                : "Electric & Kick"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <BsFuelPump color={AppColors.Green} />
            <p className="text-[14px]">
              {bike.gearbox === "Automatic" ? "Automatic" : "Manual"}
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="hidden group-hover:flex absolute w-full bottom-0 z-10">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] bg-blue-500 rounded-full"
            textStyles="text-white leading-[17px] font-bold"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <BikeDetails
        isOpen={isOpen}
        closeModel={() => setIsOpen(false)}
        bike={bike}
      />
    </div>
  );
};

export default BikeCard;
