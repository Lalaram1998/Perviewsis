"use client";

import Image from "next/image";

const benefits = [
  "Lower Operational Cost with automation of repetitive tasks",
  "Proactive Issue Detection through predictive modeling",
  "Reduced MTTR by eliminating alert noise",
  "Faster RCA with automated root cause suggestions",
  "Better Decision-Making with real-time and historical insights",
];

export default function ThirdSection() {
  return (
    <section className="py-16 bg-white font-display">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start gap-6 relative">
        {/* Left: Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="rounded-full overflow-hidden w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative shadow-xl">
            <Image
              src="/images/homeImages/sectionthree.png"
              alt="Workflow Analysis"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center p-4">
              <h2 className="text-xl md:text-2xl font-semibold leading-snug">
                Key <span className="text-orange-500 font-bold">benefits</span>
                <br /> of automated workflow analysis
              </h2>
              <button className="hidden md1:inline-block bg-orange-400 text-white cursor-pointer px-4 py-1 rounded-3xl font-medium text-sm tracking-[0.5px] whitespace-nowrap">
                DISCOVER MORE ABOUT THE PLATFORM
              </button>
            </div>
          </div>
        </div>

        {/* Right: Arc Benefits */}
        <div className="relative w-full lg:w-1/2 h-[500px] lg:h-[450px] mt-10 lg:mt-0">
          {/* Arc Line */}
          <svg
            className="absolute w-full h-full"
            viewBox="0 0 300 500"
            preserveAspectRatio="none"
          >
            <path
              d="M60,30
                 C120,100 120,400 60,470"
              fill="none"
              stroke="#D1D5DB"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          </svg>

          {/* Benefit Items */}
          {benefits.map((text, index) => {
            const arcPositions = [
              { top: "5%", left: "15%" },
              { top: "20%", left: "30%" },
              { top: "40%", left: "40%" },
              { top: "60%", left: "30%" },
              { top: "80%", left: "15%" },
            ];

            const position = arcPositions[index];

            return (
              <div
                key={index}
                className="absolute flex items-center space-x-4 w-[90%] md:w-[80%] lg:w-auto"
                style={{
                  top: position.top,
                  left: position.left,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="w-14 h-14 flex items-center justify-center border-2 border-gray-400 rounded-full text-xl font-bold text-orange-500 bg-white shadow">
                  {index + 1}
                </div>
                <p className="text-sm text-gray-800 font-semibold max-w-[250px]">
                  {text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
