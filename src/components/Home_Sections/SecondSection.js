import React from "react";
import SecondSectionCard from "./SecondSectionCard";

const SecondSection = () => {
  const obj = [
    {
      title: "Predictive Analysis",
      para: "Forecast performance degradation and prevent downtime",
      baseImage: "/images/homeImages/first1.png",
      maskImage: "/images/homeImages/mask1.png",
    },
    {
      title: "Causal Analysis",
      para: "Forecast performance degradation and prevent downtime.",
      baseImage: "/images/homeImages/second.png",
      maskImage: "/images/homeImages/mask2.png",
    },
    {
      title: "Automation Workflow",
      para: "Forecast performance degradation and prevent downtime.",
      baseImage: "/images/homeImages/third3.png",
      maskImage: "/images/homeImages/mask3.png",
    },
    {
      title: "Noise Reduction",
      para: "Forecast performance degradation and prevent downtime.",
      baseImage: "/images/homeImages/fourth.png",
      maskImage: "/images/homeImages/mask4.png",
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center px-4">
          <div className="w-full sm:w-3/4 md:w-2/3 lg:w-2/3">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-8 mb-2">
              Holistic solution encompassing people, process and technology
            </h1>
          </div>
          <p className="my-4  text-sm sm:text-base text-gray-700">
            Let’s revolutionize the way you monitor and manage applications. We
            can help deliver success through
          </p>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8  m-4">
            {obj.map((item, index) => (
              <ul key={index}>
                <li className="shadow-[0_0_10px_0_#00000040]">
                  <SecondSectionCard {...item} />
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
