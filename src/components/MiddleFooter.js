import React from "react";

const MiddleFooter = () => {
  return (
    <div
      className="w-full font-display flex flex-col sm:flex-col md:flex-row lg:flex-row text-white pt-8 pb-8"
      style={{
        backgroundColor: "#011219",
      }}
    >
      {/* Left Side */}
      <div className="w-full md:w-2/5 flex flex-col justify-center items-center md:items-start px-6 py-6 md:py-0 md:pl-12 ">
        <div className="flex flex-col lg:pl-46 w-full max-w-md items-center md:items-start">
          <div className="flex text-3xl font-bold justify-center md:justify-start">
            <span>PERV</span>
            <span className="text-orange-400 scale-y-[-1]">i</span>
            <span>EWS</span>
            <span className="text-orange-400">i</span>
            <span>S</span>
          </div>
          <div className="mt-4 text-sm text-center md:text-left leading-[1.75rem]">
            <p>
              Enhance your business experience with our all-in-one software
              management platform—designed to streamline operations, boost
              productivity, and give you full control from a single, intuitive
              interface.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-3/5 flex flex-col sm:flex-row justify-center sm:items-center gap-8 sm:gap-16 px-6 pb-6 md:pb-0 pt-0 md:pt-12">
        <div>
          <h1 className="font-semibold mb-2 leading-[35px]">Quick Links</h1>
          <h2 className="cursor-pointer leading-[35px] text-sm">Features</h2>
          <h2 className="cursor-pointer leading-[35px] text-sm">Use Cases</h2>
          <h2 className="cursor-pointer leading-[35px] text-sm">
            How it Works
          </h2>
          <h2 className="cursor-pointer leading-[35px] text-sm">
            Integrations
          </h2>
        </div>
        <div>
          <h1 className="font-semibold mb-2 leading-[35px]">Connect with Us</h1>
          <h2 className="cursor-pointer leading-[35px] text-sm">About Us</h2>
          <h2 className="cursor-pointer leading-[35px] text-sm">
            Privacy Policy
          </h2>
          <h2 className="cursor-pointer leading-[35px] text-sm">
            Terms and Conditions
          </h2>
          <h2 className="cursor-pointer leading-[35px] text-sm">Resources</h2>
        </div>
      </div>
    </div>
  );
};

export default MiddleFooter;
