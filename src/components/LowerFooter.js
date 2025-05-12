import React from "react";
import Image from "next/image";
import Link from "next/link";
import facebook from "../../public/images/footer/facebook.svg";
import twitter from "../../public/images/footer/x.svg";
import linkedin from "../../public/images/footer/linkedin.svg";

const LowerFooter = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col md:flex-row m-2">
        {/* Left half with centered h1 */}
        <div className="w-full md:w-1/2 flex justify-center items-center py-4 md:py-0">
          <h1 className="text-xs">
            © 2025 Perviewsis. All rights reserved. Powered by Perviewsis
          </h1>
        </div>

        {/* Right half with social icons */}
        <div className="w-full md:w-1/2">
          <div className="flex gap-6 text-xl justify-center items-center h-full">
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={facebook} alt="Facebook" width={20} height={20} />
            </Link>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <Image src={twitter} alt="X" width={20} height={20} />
            </a>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={linkedin} alt="LinkedIn" width={20} height={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerFooter;
