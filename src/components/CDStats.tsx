import React from "react";
import Image from "next/image";
import { TextRing } from "./TextRing/TextRing";

export const CDStats = () => {
  return (
    <div className="relative">
      {/* Outermost circle */}
      <div className="w-96 h-96 bg-gray-800 rounded-full flex items-center justify-center relative">
        <TextRing text="You collected 56 NFTs in 2023 " />

        {/* Middle circle */}
        <div className="w-64 h-64 bg-gray-900 rounded-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Image circle */}
          <div className="w-37 h-37 overflow-hidden rounded-full relative animate-spin-slow">
            <Image
              src="/images/cd-cover.png" // Replace with the path to your image
              alt="CD Cover"
              width={140}
              height={140}
            />
          </div>

          {/* Innermost circle (spindle hole) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
