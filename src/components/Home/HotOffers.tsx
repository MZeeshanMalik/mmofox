import { TitleWithCornerGradients } from "../Ui/TitleWithGradients";
import GameInputCard from "../Ui/GameInputCard";
// import { ShoppingCart } from "lucide-react";

const items = [
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: true,
    quantity: 2000,
  },
  {
    name: "Mythic +2-20 Dungeons Boost X2\nFREE TRADERS",
    image: "/hotSales/image2.png",
    price: "7.68",
    hot: true,
    details: ["597-613 ilvl Gea", "606-623 Weekly Chest", "Quick Start"],
  },
  {
    name: "Mythic +2-20 Dungeons Boost X2\nFREE TRADERS",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: true,
    details: ["597-613 ilvl Gea", "606-623 Weekly Chest", "Quick Start"],
  },
  {
    name: "Mythic +2-20 Dungeons Boost X2\nFREE TRADERS",
    image: "/hotSales/image4.png",
    price: "7.68",
    hot: true,
    details: ["597-613 ilvl Gea", "606-623 Weekly Chest", "Quick Start"],
  },
];

export default function HotOffers() {
  return (
    <section className="bg-gradient-to-r from-[#0c1020] to-[#1b2038] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-2 text-purple-400">
          <TitleWithCornerGradients title="Hot Sales" />
        </h2>
        <div className="flex justify-center">
          <button className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-2 text-purple-400">
            Items &gt;
          </button>
        </div>

        <GameInputCard items={items} />
      </div>
    </section>
  );
}
