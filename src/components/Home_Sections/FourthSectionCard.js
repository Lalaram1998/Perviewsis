import Image from "next/image";
import React from "react";

const FourthSectionCard = ({ title, paragraph, cardImage }) => {
  return (
    <div className="bg-white flex flex-col items-start gap-4 px-4 py-6 rounded-2xl text-left w-full ">
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20">
        <Image
          src="/images/homeImages/maskcircle.png"
          alt="Background Circle"
          fill
          className="object-contain"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9">
            <Image
              src={cardImage}
              alt="Mask Icon"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="pt-3 px-1">
        <h1 className="font-semibold text-sm sm:text-base md:text-lg leading-[120%] py-1">
          {title}
        </h1>
        <p className="text-xs sm:text-xs md:text-xs leading-[140%]">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default FourthSectionCard;
