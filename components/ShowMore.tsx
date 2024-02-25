"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { CustomButton } from ".";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNextPageExist }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    console.log(newLimit);
    
    const newPathName = updateSearchParams("offset", `${newLimit}`);
    router.push(newPathName);
  };

  return (
    <div className="w-full flex justify-center gap-5 mt-10">
      {isNextPageExist && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-blue-600 rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
