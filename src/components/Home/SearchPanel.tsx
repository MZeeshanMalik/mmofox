/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { useState } from "react";
import Image from "next/image";

const games = [
  {
    label: "Skull And Bones Silver",
    icon: "/searchpanel/skull.png",
  },
  {
    label: "Pirate Gold",
    icon: "/searchpanel/LE.png",
  },
];

const servers = [
  {
    label: "NA East",
    icon: "/searchpanel/LE.png",
  },
  {
    label: "EU West",
    icon: "/searchpanel/LE.png",
  },
];

const CustomDropdown = ({ options, selected, setSelected }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      <button
        className="bg-[#1B2A47] p-3 rounded text-sm h-[45px] w-full flex items-center justify-between"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2">
          <Image src={selected.icon} height={18} width={18} alt={""} />
          <span>{selected.label}</span>
        </div>
        <span className="text-gray-400">▼</span>
      </button>

      {open && (
        <ul className="absolute w-full z-10 bg-[#1B2A47] rounded border border-gray-600 mt-1 shadow">
          {options.map((option: any, idx: number) => (
            <li
              key={idx}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className="p-2 flex items-center gap-2 cursor-pointer hover:bg-[#2A3A57]"
            >
              <Image
                src={option.icon}
                height={18}
                width={18}
                alt={option.label}
              />
              <span>{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const SearchPanel = () => {
  const [selectedGame, setSelectedGame] = useState(games[0]);
  const [selectedServer, setSelectedServer] = useState(servers[0]);

  return (
    <div className="bg-[#0F1B32] p-4 rounded-xl shadow-md text-white w-full md:w-[58%]">
      <div className="flex flex-wrap justify-between gap-6">
        {/* Left Panel */}
        <div className="flex flex-col gap-3 w-full md:w-[45%]">
          {/* Game Dropdown */}
          <CustomDropdown
            options={games}
            selected={selectedGame}
            setSelected={setSelectedGame}
          />

          {/* Game Options */}
          <div className="flex flex-wrap gap-2 mt-1">
            {[
              { src: "/searchpanel/LE.png", label: "GOLD" },
              { src: "/searchpanel/bull.png", label: "WoW", highlight: true },
              { src: "/searchpanel/botel.png", label: "NBA" },
              // { src: "/searchpanel/bull2.png", label: "WoW" },
            ].map(({ src, label, highlight }, i) => (
              <button
                key={i}
                className={`flex items-center justify-center border border-gray-600 px-4 py-2 rounded-lg text-sm ${
                  highlight ? "bg-[#3a2172] text-white" : "bg-[#1b1f2f]"
                }`}
              >
                <Image src={src} height={18} width={18} alt={label} />
                <span className="ml-2">{label}</span>
              </button>
            ))}
          </div>

          {/* Server Dropdown */}
          <CustomDropdown
            options={servers}
            selected={selectedServer}
            setSelected={setSelectedServer}
          />
        </div>

        {/* Right Panel */}
        <div className="flex flex-col gap-3 w-full md:w-[50%]">
          {/* Quantity Input */}
          <div className="flex items-center gap-2">
            <span className="text-lg text-[#D6E0EB]">Quantity(G)</span>
            <div className="flex items-center bg-[#1B2A47] border border-gray-600 rounded overflow-hidden">
              <button className="px-3 text-2xl">-</button>
              <input
                type="number"
                defaultValue="2000"
                className="bg-transparent text-center outline-none h-[30px] w-[100px]"
              />
              <button className="px-3 text-2xl">+</button>
            </div>
          </div>

          {/* Quantity Options */}
          <div className="flex flex-wrap gap-2 mt-3">
            {[
              { label: "500G" },
              { label: "1000G", badge: "+20%" },
              { label: "2000G" },
              { label: "3000G", badge: "+5%" },
            ].map(({ label, badge }, i) => (
              <button
                key={i}
                className={`relative px-4 py-2 rounded-lg border border-gray-600 ${
                  badge ? "bg-[#3a2172] text-white" : "bg-[#1b1f2f]"
                }`}
              >
                {label}
                {badge && (
                  <span className="absolute -top-2 right-0 text-xs bg-pink-600 px-1 rounded-full">
                    {badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Price & Buy Button */}
          <div className="flex justify-between items-center mt-4 flex-wrap gap-2">
            <span className="text-4xl text-[var(--textPink)] font-semibold">
              <span className="text-white mr-1">€</span>
              23<span className="text-xs text-gray-400">.68</span>
            </span>
            <button className="bg-[var(--btnPurple)] px-8 md:px-20 py-2 rounded text-white font-bold border border-gray-600">
              BUY
            </button>
          </div>
        </div>
      </div>

      {/* Footer Notice */}
      <div className="text-xs text-gray-400 mt-4 flex flex-wrap justify-between gap-2">
        <p>📌 Prices May Vary From Server To Server</p>
        <p>⏱️ Expected Delivery Time: 10mins - 24 Hrs</p>
      </div>
    </div>
  );
};

export default SearchPanel;
