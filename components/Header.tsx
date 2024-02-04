import React from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./common/CustomButton";

const Header = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] flex mx-auto items-center justify-between sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <p className="text-2xl font-bold">
            Bike<span className="text-slate-500">Zone</span>
          </p>
        </Link>
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-blue-500 rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Header;
