import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import { TitleWithCornerGradients } from "../Ui/TitleWithGradients";
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
          <TitleWithCornerGradients
            reverse={true}
            flip={true}
            title="Hot Sales"
          />
        </h2>
        <div className="flex justify-center">
          <button className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-2 text-purple-400">
            Items &gt;
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-[#141a2d] rounded-2xl p-4 shadow-lg flex flex-col justify-between relative"
            >
              {item.hot && (
                <span className="absolute top-2 left-2 bg-pink-500 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                  <span className="text-sm">🔥</span> Hot Offer
                </span>
              )}
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={200}
                className="rounded-md object-cover mb-4"
              />
              <div className="text-sm font-semibold leading-tight whitespace-pre-line mb-2">
                {item.name}
              </div>
              {item.details && (
                <ul className="text-xs text-gray-300 space-y-1 mb-4">
                  {item.details.map((detail, i) => (
                    <li
                      key={i}
                      className={
                        detail.includes("ilvl") ? "text-purple-400" : ""
                      }
                    >
                      ▸ {detail}
                    </li>
                  ))}
                </ul>
              )}

              {!item.details && (
                // <div className="flex items-center justify-between mt-auto bg-[#1c233b] rounded-md px-3 py-2">
                //   <input
                //     type="number"
                //     value={item.quantity}
                //     readOnly
                //     className="bg-transparent w-full text-center text-white text-sm outline-none"
                //   />
                // </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-[#1B2A47] border border-gray-600 rounded overflow-hidden">
                    <button className="px-3 text-2xl">-</button>
                    <input
                      type="number"
                      defaultValue="2000"
                      className="bg-transparent text-center outline-none h-[40px]"
                    />
                    <button className="px-3 text-2xl">+</button>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between mt-4">
                <div className="text-pink-400 font-bold text-lg">
                  <span className="text-white">€</span>
                  {item.price}
                </div>
                {item.details ? (
                  <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-purple-600">
                    ORDER NOW
                  </button>
                ) : (
                  <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold text-sm flex items-center gap-2 hover:bg-purple-600">
                    <CiShoppingCart size={16} /> BUY NOW
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
