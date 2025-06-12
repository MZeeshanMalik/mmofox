import Image from "next/image";
import { BiShield } from "react-icons/bi";
import { TitleWithCornerGradients } from "../Ui/TitleWithGradients";

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
                reverse={true}
                flip={true}
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
      </div>
    </section>
  );
}
