import Image from "next/image";

const hotSales = [
  { name: "FFXIV Gil", image: "/sale/sale1.png" },
  { name: "Diablo 4 Gold", image: "/sale/sale2.png" },
  { name: "WoW SoD Gold US", image: "/sale/sale3.png" },
  { name: "FC 25 Coins", image: "/sale/sale4.png" },
  { name: "Archeage Gold", image: "/sale/sale5.png" },
  { name: "Dungenobo me Gold", image: "/sale/sale6.png" },
];

const HotSalePanel = () => (
  <div className="bg-[var(--bgSecondary)] bg-[linear-gradient(135deg,#101828_0%,#1E293B_100%)] p-4 rounded-xl shadow-md space-y-4 w-full md:w-[40%] backdrop-blur-[31.1px]">
    <h2 className="text-lg font-semibold text-white flex items-center gap-2">
      <span>🔥</span> Hot Sale
    </h2>
    <ul className="grid grid-cols-2 gap-3">
      {hotSales.map((item) => (
        <li
          key={item.name}
          className="flex items-center gap-2 bg-[#1B2A47] hover:bg-[#2B3B5F] p-2  cursor-pointer border border-gray-600 transition-colors duration-200 rounded-lg shadow-sm hover:shadow-md flex-col md:flex-row md:items-center"
        >
          <Image
            src={item.image}
            height={32}
            width={32}
            alt={item.name}
            className="w-8 h-8 rounded"
          />
          <span className="text-sm text-white">{item.name}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default HotSalePanel;
