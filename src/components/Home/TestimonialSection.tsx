import React from "react";
import { FaStar, FaThumbsUp } from "react-icons/fa";

const testimonials = [
  {
    name: "Lucy",
    review: "Very Wonderful Experience! Very Wonderful Experience!",
    avatar: "👩‍💼",
  },
  {
    name: "Aaliyah",
    review: "Very Wonderful Experience! Very Wonderful Experience!",
    avatar: "👩‍💼",
  },
  {
    name: "Bert",
    review: "Very Wonderful Experience! Very Wonderful Experience!",
    avatar: "👨‍💼",
  },
  {
    name: "Lucy",
    review: "Very Wonderful Experience! Very Wonderful Experience!",
    avatar: "👩‍💼",
  },
  {
    name: "John Wilson",
    review: "Very Wonderful Experience! Very Wonderful Experience!",
    avatar: "👨‍💼",
  },
  {
    name: "Murray",
    review: "Very Wonderful Experience! Very Wonderful Experience!",
    avatar: "👨‍💼",
  },
];

interface CardProps {
  name: string;
  avatar: string;
  review: string;
}

const Card: React.FC<CardProps> = ({ name, avatar, review }) => (
  <div className="bg-[#1e1e3f] text-white p-4 rounded-xl shadow-md border border-white/10 w-64">
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2">
        <span className="text-xl">{avatar}</span>
        <span className="font-semibold">{name}</span>
      </div>
      <div className="flex gap-1 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="w-4 h-4" />
        ))}
      </div>
    </div>
    <p className="text-sm text-white/80">{review}</p>
  </div>
);

const TestimonialCenterLayout = () => {
  return (
    <div className="relative bg-[#0f0f2d] min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Glow Background */}
      <div className="absolute w-96 h-96 rounded-full bg-purple-600 opacity-30 blur-3xl"></div>

      {/* Center Icon */}
      <div className="relative z-10 text-white flex flex-col items-center">
        <div className="bg-purple-700 p-6 rounded-full shadow-2xl text-3xl">
          <FaThumbsUp />
        </div>
        <div className="mt-4 text-4xl font-bold">10,000+</div>
      </div>

      {/* Cards - Left Side */}
      <div className="absolute top-10 left-4 md:left-16">
        <Card {...testimonials[0]} />
      </div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 md:left-10">
        <Card {...testimonials[1]} />
      </div>
      <div className="absolute bottom-10 left-4 md:left-16">
        <Card {...testimonials[2]} />
      </div>

      {/* Cards - Right Side */}
      <div className="absolute top-10 right-4 md:right-16">
        <Card {...testimonials[3]} />
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 md:right-10">
        <Card {...testimonials[4]} />
      </div>
      <div className="absolute bottom-10 right-4 md:right-16">
        <Card {...testimonials[5]} />
      </div>
    </div>
  );
};

export default TestimonialCenterLayout;
