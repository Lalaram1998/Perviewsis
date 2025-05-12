import React from "react";

const FirstSection = () => {
  return (
    <div className="relative w-full">
      {/* Background GIF */}
      <img
        src="/images/homeImages/blue.gif"
        alt="Demo animation"
        className="w-full min-h-[500px] sm:min-h-[500px] md:min-h-[500px] lg:min-h-[600px] object-cover z-0"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 py-6 sm:py-8 md:py-12 z-10">
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
          AI-Powered Observability &
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold leading-tight mt-2">
          Automation for Faster Issue Resolution
        </h1>
        <p className="mt-4 max-w-xl md:max-w-2xl lg:max-w-3xl text-sm sm:text-base lg:text-lg">
          Perviewsis is an AI observability platform that integrates with tools
          like AppDynamics and Dynatrace to cut noise, surface insights, and
          resolve issues faster.
        </p>
        <button className="mt-6 bg-orange-400 cursor-pointer text-white px-6 py-2 rounded-3xl font-medium text-sm sm:text-base tracking-wide">
          Request a Demo
        </button>
      </div>
    </div>
  );
};

export default FirstSection;
