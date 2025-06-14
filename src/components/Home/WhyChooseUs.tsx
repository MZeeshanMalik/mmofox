import React from "react";
import { FaRocket, FaTag, FaShieldAlt, FaHeadset } from "react-icons/fa";
import { TitleWithCornerGradients } from "../Ui/TitleWithGradients";
import Image from "next/image";

const WhyPlayersChooseUs = () => {
  const stats = [
    { number: "1500+", label: "PROS" },
    { number: "2800k", label: "SUCCESSFUL DEALS" },
    { number: "15k", label: "HAPPY CLIENTS" },
  ];

  const features = [
    {
      icon: <FaRocket className="text-purple-400 w-8 h-8" />,
      title: "Fast Delivry Guarantee",
      desc: "We know the importance of efficiency to players, and the staff will complete the order delivery in the shortest time",
    },
    {
      icon: <FaTag className="text-purple-400 w-8 h-8" />,
      title: "Best Price",
      desc: "Our prices are very competitive in the market, and it is relatively more economical to purchase at CICIPlay",
    },
    {
      icon: <FaShieldAlt className="text-purple-400 w-8 h-8" />,
      title: "100% Safe Transaction",
      desc: "CICIPlay provides reliable security and there will be no problems with your funds and products",
    },
    {
      icon: <FaHeadset className="text-purple-400 w-8 h-8" />,
      title: "Service Experience",
      desc: "Our Customer Service Team and Delivery Team work 24/7; whenever you have any question in game, you can always reach us and get answers in no time.",
    },
  ];

  const news = [
    {
      title: "FF14 Sophia's Assault Strategy Guide",
      desc: "Looking To Take On The Challenge Of Sophia's Assault In FF14? Here's A Comprehensive Strategy Guide To...",
      date: "2024-05-24",
      img: "/NewsImages/img1.png",
    },
    {
      title: "FF14 Sophia's Assault Strategy Guide",
      desc: "Looking To Take On The Challenge Of Sophia's Assault In FF14? Here's A Comprehensive Strategy Guide To...",
      date: "2024-05-24",
      img: "/NewsImages/img2.png",
    },
    {
      title: "FF14 Sophia's Assault Strategy Guide",
      desc: "Looking To Take On The Challenge Of Sophia's Assault In FF14? Here's A Comprehensive Strategy Guide To...",
      date: "2024-05-24",
      img: "/NewsImages/img3.png",
    },
    {
      title: "FF14 Sophia's Assault Strategy Guide",
      desc: "Looking To Take On The Challenge Of Sophia's Assault In FF14? Here's A Comprehensive Strategy Guide To...",
      date: "2024-05-24",
      img: "/NewsImages/img4.png",
    },
  ];

  return (
    <section className="bg-[#0e0c24] text-white px-4 md:px-16 py-12">
      <div className="text-center">
        <TitleWithCornerGradients title="Why Players Choose Us?" />
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-pink-500 text-xl md:text-2xl font-semibold">
                {stat.number}
              </p>
              <p className="text-sm text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#121328] p-6 rounded-xl border border-[#232449] hover:border-purple-500 transition-all duration-300 shadow-lg relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1.5 h-full bg-[#2c2a50] rounded-r"></div>
            <div className="flex items-start gap-5">
              <div className="pt-1">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <div className="flex justify-center items-center mb-6">
          <div>
            <TitleWithCornerGradients title="Latest News" />
          </div>
        </div>
        <div className="flex justify-end">
          <button className="text-sm text-gray-300 hover:text-white cursor-pointer flex items-center">
            MORE NEWS
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {news.map((post, idx) => (
            <div
              key={idx}
              className="rounded-3xl overflow-hidden shadow-lg cursor-pointer relative bg-[#111027] border border-[#23204a]"
            >
              {/* Image with proportional height */}
              <div className="relative w-full h-[250px]">
                <Image
                  src={post.img}
                  width={500}
                  height={250}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />

                {/* Date tag at top-right */}
                <div className="absolute top-4 right-4 bg-[#0000007a] text-white text-xs py-1 px-3 rounded-full">
                  Cici / 569 / {post.date}
                </div>
              </div>

              {/* Text content - separate from image */}
              <div className="p-4 pb-6">
                <h3 className="text-xl font-semibold mb-3 text-white leading-tight">
                  {post.title}
                </h3>
                <p className="text-[#8a8a9c] text-sm leading-relaxed">
                  {post.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPlayersChooseUs;
