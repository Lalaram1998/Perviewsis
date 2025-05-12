"use client";
import React from "react";
import Image from "next/image";
import footerImage from "../../public/images/footer/footer_img.png";

const UpperFooter = () => {
  return (
    <div className="w-full h-[160px] relative overflow-hidden font-display">
      {/* Background Image */}
      <Image
        src={footerImage}
        alt="Footer background"
        layout="fill"
        className="object-cover"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center text-white px-4 md:px-12 gap-1 sm:gap-0">
        {/* Left Side Text (3/4 width) */}
        <div className="flex flex-col justify-center items-center w-full sm:w-3/4 text-center sm:text-left">
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl xl:text-4xl font-extrabold mb-1">
              Request a Demo
            </h1>
            <p className="text-xs xl:text-sm tracking-tight leading-snug mt-1 sm:mt-0">
              Experience Perviewsis in action and see how it can transform your
              system monitoring and automation.
            </p>
          </div>
        </div>

        {/* Right Side Button */}
        <div className="flex justify-center sm:justify-start items-center w-full sm:w-1/4 sm:ml-auto mt-2 sm:mt-0">
          <button className="bg-orange-400 cursor-pointer text-white px-6 py-2 rounded-3xl text-sm xl:text-md whitespace-nowrap font-bold tracking-tight">
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpperFooter;
