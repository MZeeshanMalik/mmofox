"use client";
import React, { useState, useMemo } from "react";
import { FiSearch } from "react-icons/fi";
import GameCard from "../Ui/GameCard"; // or adjust the path accordingly

const games = [
  { name: "Skull And Bones Silver", image: "/GameGridImages/image1.png" },
  { name: "FFXIV Gil", image: "/GameGridImages/image2.png" },
  { name: "Skull And Bones Silver", image: "/GameGridImages/image1.png" },
  { name: "FFXIV Gil", image: "/GameGridImages/image2.png" },
  { name: "Skull And Bones Silver", image: "/GameGridImages/image1.png" },
  { name: "FFXIV Gil", image: "/GameGridImages/image2.png" },
  { name: "Skull And Bones Silver", image: "/GameGridImages/image1.png" },
  { name: "FFXIV Gil", image: "/GameGridImages/image2.png" },
  {
    name: "Skull And Bones Silver",
    image: "/GameGridImages/image3.png",
    tags: ["GOLD", "ITEM", "BOOST"],
  },
  { name: "FC 24 Coins", image: "/GameGridImages/image4.png" },
  {
    name: "WotLK Classic Gold us (Lvi80)",
    image: "/GameGridImages/image5.png",
  },
  { name: "ESO Gold", image: "/GameGridImages/image6.png" },
  { name: "Last Epoch Gold", image: "/GameGridImages/image7.png" },
  { name: "New World Coins", image: "/GameGridImages/image8.png" },
];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function GameSelection() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return games;
    const q = searchQuery.toLowerCase();
    return games.filter((g) => g.name.toLowerCase().includes(q));
  }, [searchQuery]);

  const grouped = useMemo(() => {
    const m: Record<string, typeof games> = {};
    filtered.forEach((g) => {
      const letter = g.name[0].toUpperCase();
      if (!m[letter]) m[letter] = [];
      m[letter].push(g);
    });
    return m;
  }, [filtered]);

  return (
    <div className="w-full bg-[#0F1524] text-white p-4 md:p-6">
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h2 className="text-xl font-bold">Choose Game</h2>

        {/* Search box */}
        <div className="relative w-full sm:max-w-xs">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#1D2533] text-white pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
          <FiSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
        </div>
      </div>

      {/* Mobile horizontal A–Z nav */}
      <div className="lg:hidden overflow-x-auto mb-4 -mx-2 px-2">
        <ul className="flex gap-2 w-max">
          {ALPHABET.map((ltr) => {
            const hasGames = grouped[ltr]?.length;
            return (
              <li key={ltr}>
                {hasGames ? (
                  <a
                    href={`#sec-${ltr}`}
                    className="w-8 h-8 flex items-center justify-center rounded bg-purple-600 hover:bg-purple-700 text-sm font-bold transition"
                  >
                    {ltr}
                  </a>
                ) : (
                  <span className="w-8 h-8 flex items-center justify-center rounded bg-gray-700 text-gray-500 text-sm font-bold">
                    {ltr}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Main layout */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Desktop vertical A–Z nav */}
        <ul className="hidden lg:flex flex-col items-center gap-1 sticky top-24 h-max">
          {ALPHABET.map((ltr) => {
            const hasGames = grouped[ltr]?.length;
            return (
              <li key={ltr}>
                {hasGames ? (
                  <a
                    href={`#sec-${ltr}`}
                    className="w-6 h-6 flex items-center justify-center rounded bg-purple-600 hover:bg-purple-700 text-xs font-bold transition"
                  >
                    {ltr}
                  </a>
                ) : (
                  <span className="w-6 h-6 flex items-center justify-center rounded bg-gray-700 text-gray-500 text-xs font-bold">
                    {ltr}
                  </span>
                )}
              </li>
            );
          })}
        </ul>

        {/* Game Sections */}
        <div className="flex-1 space-y-12">
          {ALPHABET.map((ltr) => {
            const list = grouped[ltr];
            if (!list?.length) return null;

            return (
              <section
                key={ltr}
                id={`sec-${ltr}`}
                className="space-y-4 scroll-mt-24"
              >
                <div className="px-4 py-2 bg-[#1d2533] rounded text-lg font-semibold tracking-wider">
                  {ltr}
                </div>
                <GameCard games={list} />
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
