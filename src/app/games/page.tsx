import GameSelectionSection from "@/components/game/GameSelection";
import GameBanner from "@/components/Ui/GameBanner";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
// Example game data - you would replace this with your actual data
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const gameData = [
  {
    id: "1",
    title: "Skull And Bones Silver",
    imageSrc: "/games/skull-and-bones.jpg",
    category: "A",
    isHot: true,
  },
  {
    id: "2",
    title: "FFXIV Gil",
    imageSrc: "/games/ffxiv.jpg",
    category: "A",
  },
  {
    id: "3",
    title: "FC 24 Coins",
    imageSrc: "/games/fc24.jpg",
    category: "A",
  },
  {
    id: "4",
    title: "New World Coins",
    imageSrc: "/games/newworld.jpg",
    category: "A",
  },
  {
    id: "5",
    title: "WOW Classic Gold (Lv80)",
    imageSrc: "/games/wow-classic.jpg",
    category: "B",
  },
  {
    id: "6",
    title: "ESO Gold",
    imageSrc: "/games/eso.jpg",
    category: "B",
  },
  {
    id: "7",
    title: "Last Epoch Gold",
    imageSrc: "/games/lastepoch.jpg",
    category: "B",
  },
  {
    id: "8",
    title: "New World Coins",
    imageSrc: "/games/newworld.jpg",
    category: "B",
  },
  {
    id: "9",
    title: "Skull And Bones Silver",
    imageSrc: "/games/skull-and-bones.jpg",
    category: "C",
  },
  {
    id: "10",
    title: "FFXIV Gil",
    imageSrc: "/games/ffxiv.jpg",
    category: "C",
  },
  {
    id: "11",
    title: "FFXIV Gil",
    imageSrc: "/games/ffxiv.jpg",
    category: "C",
  },
  {
    id: "12",
    title: "FC 24 Coins",
    imageSrc: "/games/fc24.jpg",
    category: "C",
  },
];

function page() {
  return (
    <div>
      <GameBanner title="GAMS" imagePath="/banner/bgcenter.png">
        <span>Home</span>
        <FaChevronRight className="text-xs" />
        <span>Games</span>
      </GameBanner>
      <GameSelectionSection />
    </div>
  );
}

export default page;
