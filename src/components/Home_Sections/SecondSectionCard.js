import React from "react";
import Image from "next/image";

const SecondSectionCard = ({ title, para, baseImage, maskImage }) => {
  return (
    <div className="font-display flex flex-col items-center text-center">
      <div className="relative w-full h-1/2">
        <Image
          src={baseImage}
          alt="Second Section"
          width={500}
          height={500}
          className="w-full"
        />

        <div className="absolute top-[55%] left-[10%] w-[35%] h-[43%]">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 w-full h-full rounded-full bg-white z-0"></div>

            <div className="absolute inset-0 m-auto w-[73%] h-[73%] rounded-full bg-[#E47722] z-10"></div>

            <div className="absolute inset-0 m-auto w-[40%] h-[40%] z-20">
              <Image
                src={maskImage}
                alt="Mask Icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Text content */}
      <div className="my-6  h-1/2">
        <h1 className=" font-bold">{title}</h1>
        <p className="text-xs 3xl:text-sm leading-[24px]  text-[#333333]">
          {para}
        </p>
      </div>
    </div>
  );
};

export default SecondSectionCard;
