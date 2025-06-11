"use client";

import { useEffect, useState } from "react";

const images = ["/home/banner.png", "/home/banner.png", "/home/banner.png"];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[20vh] sm:h-[400px] md:h-[200px] overflow-hidden">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Slide ${i}`}
          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700 ${
            current === i ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* Pagination Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-8 h-1 rounded-full transition-colors duration-300 ${
              current === i ? "bg-purple-500" : "bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
