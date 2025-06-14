import Image from "next/image";
import React from "react";
import { BiShield } from "react-icons/bi";

interface Game {
  image: string;
  name: string;
  tags?: string[];
}

interface GameCardProps {
  games: Game[];
}

function GameCard({ games }: GameCardProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {games.map((game, index) => (
        <div
          key={index}
          className={`relative rounded-xl overflow-hidden transition transform hover:scale-105 shadow-lg flex flex-col items-center text-center ${
            game.tags ? "bg-purple-700" : "bg-gray-800"
          }`}
        >
          <Image
            src={game.image}
            alt={game.name}
            width={400}
            height={225}
            className="w-full h-48 object-cover opacity-70"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <BiShield className="w-6 h-6 text-white mb-2" />
            <div className="text-sm font-semibold text-white drop-shadow-md">
              {game.name}
            </div>
            {game.tags && (
              <div className="flex justify-center gap-2 mt-3">
                {game.tags.map((tag, i) => (
                  <button
                    key={i}
                    className="bg-white text-black text-xs font-bold px-3 py-1 rounded-md"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default GameCard;
