import { TitleWithCornerGradients } from "../Ui/TitleWithGradients";
import GameCard from "../Ui/GameCard";

const games = [
  {
    name: "Skull And Bones Silver",
    image: "/GameGridImages/image1.png",
  },
  {
    name: "FFXIV Gil",
    image: "/GameGridImages/image2.png",
  },
  {
    name: "Skull And Bones Silver",
    image: "/GameGridImages/image3.png",
    tags: ["GOLD", "ITEM", "BOOST"],
  },
  {
    name: "FC 24 Coins",
    image: "/GameGridImages/image4.png",
  },
  {
    name: "WotLK Classic Gold us (Lvi80)",
    image: "/GameGridImages/image5.png",
  },
  {
    name: "ESO Gold",
    image: "/GameGridImages/image6.png",
  },
  {
    name: "Last Epoch Gold",
    image: "/GameGridImages/image7.png",
  },
  {
    name: "New World Coins",
    image: "/GameGridImages/image8.png",
  },
];

export default function HotGameGrid() {
  return (
    <section className="bg-[#0c1020] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center">
          <h2 className="text-3xl font-bold flex items-center gap-2 h-12 relative">
            <span className="text-white relative text-4xl">
              <TitleWithCornerGradients
                // reverse={true}
                // flip={true}
                title="Hot Game"
              />
            </span>
          </h2>
        </div>
        <div className="flex justify-end items-center">
          {" "}
          <button className="text-white hover:text-gray-300 font-medium ">
            MORE GAME &gt;
          </button>
        </div>

        <GameCard games={games} />
      </div>
    </section>
  );
}
