import Image from "next/image";
import React from "react";

interface GamesBannerProps {
  imagePath: string;
  title: string;
  children?: React.ReactNode;
}

const GamesBanner: React.FC<GamesBannerProps> = ({
  imagePath,
  title,
  children,
}) => {
  return (
    <section className="relative w-full  h-[180px] sm:h-[150px] md:h-[180px] bg-[#0e1d3be8] overflow-hidden">
      {/* Diagonal Light Beam */}
      <div className="absolute -left-6 top-0 h-full w-[6px] bg-gradient-to-b from-blue-400/90 to-indigo-600/20 rotate-6" />

      {/* Left Text Section */}
      <div className="relative z-10 h-full pl-10 max-sm:pl-2 flex flex-col justify-center text-white max-w-[20%] bg-banner-left clip-left">
        <h2 className="text-xl max-sm:text-sm  sm:text-2xl md:text-3xl font-extrabold tracking-wide">
          {title}
        </h2>
        <div className="flex items-center text-sm sm:text-base max-sm:flex-col text-gray-300 mt-2 space-x-2">
          {children}
        </div>
      </div>
      <div className="bg-beam"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center gap-6 max-sm:gap-0 z-10 w-full max-w-[78%] justify-center bg-banner-right clip-right">
        <Image
          height={200}
          width={200}
          src={imagePath}
          alt="Game Character"
          className="h-full min-h-[200px] max-h-[260px] max-sm:h-[161px] object-contain translate-y-2 select-none pointer-events-none"
        />
        <h1 className="text-[44px] sm:text-[56px] md:text-[50px] max-sm:text-xl font-extrabold uppercase text-amber-300 drop-shadow-[4px_4px_0_#081b3f] max-sm:p-6">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default GamesBanner;
