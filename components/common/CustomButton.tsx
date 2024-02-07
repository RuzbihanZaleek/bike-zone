"use client";

import { CustomButtonProps } from "@/types";
import React from "react";

function CustomButton({
  title,
  containerStyles,
  handleClick,
  btnType,
  isDisabled,
  textStyles
}: CustomButtonProps) {
  return (
    <button
      disabled={isDisabled}
      type={btnType || "button"}
      className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles} ${textStyles}`}
      onClick={handleClick}
    >
      <span className="flex-1 font-semibold">{title}</span>
    </button>
  );
}

export default CustomButton;
