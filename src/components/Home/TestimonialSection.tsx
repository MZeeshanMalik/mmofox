"use client";
import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { TitleWithCornerGradients } from "../Ui/TitleWithGradients";
import { TestimonialCard } from "../Ui/TestimonialCard";

const testimonials = [
  {
    name: "Lucy",
    avatarUrl: "/reviews/img1.png",
    rating: 5.0,
    review: "Very Wonderful Experience! Very Wonderful Experience!",
    reverse: true,
  },
  {
    name: "Aaliyah",
    avatarUrl: "/reviews/img2.png",
    rating: 5.0,
    review: "Very Wonderful Experience! Very Wonderful Experience!",
    reverse: true,
  },
  {
    name: "Bert",
    avatarUrl: "/reviews/img3.png",
    rating: 5.0,
    review: "Very Wonderful Experience! Very Wonderful Experience!",
    reverse: true,
  },
  {
    name: "Lucy",
    avatarUrl: "/reviews/img4.png",
    rating: 5.0,
    review: "Very Wonderful Experience! Very Wonderful Experience!",
  },
  {
    name: "John Wilson",
    avatarUrl: "/reviews/img5.png",
    rating: 5.0,
    review: "Very Wonderful Experience! Very Wonderful Experience!",
  },
  {
    name: "Murray",
    avatarUrl: "/reviews/img6.png",
    rating: 5.0,
    review: "Very Wonderful Experience! Very Wonderful Experience!",
  },
];

const TestimonialCenterLayout: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Section Title - Responsive spacing */}
      <div className="flex justify-center px-4 mb-6 sm:mb-8 md:mb-12 mt-2 sm:mt-4">
        <TitleWithCornerGradients title="Good Reviews All The Time" />
      </div>

      {/* Mobile Layout - Grid with better tablet support */}
      <div className="lg:hidden px-4 sm:px-6 md:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex justify-center">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout - Radial Pattern with improved responsiveness */}
      <div className="hidden lg:flex relative min-h-[70vh] xl:min-h-[80vh] 2xl:min-h-[70vh] items-center justify-center py-10 lg:py-16 xl:py-20 overflow-hidden bg-glow">
        {/* Central Badge with Responsive Sizing */}
        <div className="relative w-40 h-40 lg:w-52 lg:h-52 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72 flex items-center justify-center">
          {/* Glow Effect - More responsive sizing */}
          <div className="absolute w-48 h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 rounded-full bg-purple-500 opacity-20 blur-[40px] lg:blur-[60px] xl:blur-[80px] z-0"></div>

          {/* Animated Rings - Proportional sizes */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-purple-500 animate-pulse"
                style={{
                  width: `${60 + i * 24}px`,
                  height: `${60 + i * 24}px`,
                  opacity: 0.08 + i * 0.08,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>

          {/* Dashed Circle - Responsive sizing */}
          <div className="absolute w-32 h-32 lg:w-44 lg:h-44 xl:w-56 xl:h-56 2xl:w-64 2xl:h-64 rounded-full border border-dashed border-purple-400 opacity-75 z-10" />

          {/* Thumb Badge - Proportionally sized */}
          <div className="relative z-20 w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 2xl:w-36 2xl:h-36 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 text-white flex flex-col items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.5)] lg:shadow-[0_0_40px_rgba(168,85,247,0.6)] xl:shadow-[0_0_60px_rgba(168,85,247,0.7)]">
            <FaThumbsUp className="text-xl lg:text-2xl xl:text-3xl" />
            <div className="mt-1 text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-bold">
              10,000+
            </div>
          </div>
        </div>

        {/* Responsive Positioned Cards - Using relative percentages and fixed distances */}
        {/* Left Side Cards */}
        <div className="absolute top-[10%] left-[5%] lg:top-[5%] lg:left-[8%]  transform scale-90 lg:scale-95 xl:scale-100 origin-top-left">
          <TestimonialCard {...testimonials[0]} />
        </div>
        <div className="absolute top-1/2 left-[2%] lg:left-[4%]   -translate-y-1/2 transform scale-90 lg:scale-95 xl:scale-100 origin-left">
          <TestimonialCard {...testimonials[1]} />
        </div>
        <div className="absolute bottom-[10%] left-[5%] lg:bottom-[5%] lg:left-[8%]   transform scale-90 lg:scale-95 xl:scale-100 origin-bottom-left">
          <TestimonialCard {...testimonials[2]} />
        </div>

        {/* Right Side Cards */}
        <div className="absolute top-[10%] right-[5%] lg:top-[5%] lg:right-[8%]  transform scale-90 lg:scale-95 xl:scale-100 origin-top-right">
          <TestimonialCard {...testimonials[3]} />
        </div>
        <div className="absolute top-1/2 right-[2%] lg:right-[4%]   -translate-y-1/2 transform scale-90 lg:scale-95 xl:scale-100 origin-right">
          <TestimonialCard {...testimonials[4]} />
        </div>
        <div className="absolute bottom-[10%] right-[5%] lg:bottom-[5%] lg:right-[8%]   transform scale-90 lg:scale-95 xl:scale-100 origin-bottom-right">
          <TestimonialCard {...testimonials[5]} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCenterLayout;
