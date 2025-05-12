import Image from "next/image";
import React from "react";
import FourthSectionCard from "./FourthSectionCard";

const FourthSection = () => {
  const obj = [
    {
      title: "Forecast issues",
      paragraph:
        "Anticipate performance issues before they happen using AI models that forecast downtime, traffic surges, and system resource exhaustion.",
      cardImage: "/images/homeImages/mask5.png",
    },
    {
      title: "Root Cause Analysis",
      paragraph:
        "Quickly identify the source of performance anomalies by correlating logs, traces, and metrics across your infrastructure and applications.",
      cardImage: "/images/homeImages/mask6.png",
    },
    {
      title: "Smart Automation",
      paragraph:
        "Automate incident response with self-healing scripts, auto-scaling, and intelligent alert routing—reducing manual intervention and improving system resilience.",
      cardImage: "/images/homeImages/mask7.png",
    },
    {
      title: "Focused Alerting",
      paragraph:
        "Stay on top of what matters intelligently prioritize critical events and minimize distractions for faster, clearer decision-making.",
      cardImage: "/images/homeImages/mask8.png",
    },
  ];

  return (
    <div className="relative font-display w-full">
      <div className="relative w-full">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/homeImages/section-four.png"
            alt="Fourth Section"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col items-center justify-start pt-16 px-4 text-center z-10 pb-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl leading-snug font-bold text-white max-w-2xl lg:max-w-none lg:text-nowrap mb-10">
            Make your product stand out of the crowd
          </h1>

          <div className="w-full max-w-7xl border-gray-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {obj.map((item, index) => (
              <div key={index} className="flex justify-center">
                <div className="w-full max-w-[250px] h-[250px] md:h-[300px] lg:h-[300px]">
                  <FourthSectionCard {...item} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
