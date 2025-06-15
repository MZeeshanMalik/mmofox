"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { PiMinusCircleDuotone, PiPlusCircleDuotone } from "react-icons/pi";
import { CiShoppingCart } from "react-icons/ci";

// Game servers data structure for easy integration
const gameServers = {
  hearthstone: [
    { id: "us", name: "United States" },
    { id: "eu", name: "Europe" },
    { id: "asia", name: "Asia" },
    { id: "china", name: "China" },
  ],
  wow: [
    { id: "us", name: "United States" },
    { id: "eu", name: "Europe" },
    { id: "oceanic", name: "Oceanic" },
    { id: "latin", name: "Latin America" },
  ],
  // Add more games and their servers as needed
};

// Gold package options
const goldPackages = [
  { value: 500, label: "500G" },
  { value: 1000, label: "1000G" },
  { value: 1500, label: "1500G" },
  { value: 2000, label: "2000G", isBestValue: true },
  { value: 2500, label: "2500G" },
  { value: 3000, label: "3000G" },
  { value: 3500, label: "3500G" },
  { value: 4000, label: "4000G" },
  { value: 4500, label: "4500G" },
  { value: 5000, label: "5000G" },
  { value: 5500, label: "5500G" },
  { value: 6000, label: "6000G" },
  { value: 6500, label: "6500G" },
  { value: 7000, label: "7000G" },
  { value: 7500, label: "7500G" },
];

// Rate for price calculation (for example: price per 100G)
const priceRate = 0.677; // €0.677 per 100G

interface GamePurchaseCardProps {
  gameId: string;
  gameName: string;
  gameImage: string;
  onAddToCart?: (item: GamePurchaseItem) => void;
  onBuyNow?: (item: GamePurchaseItem) => void;
}

export interface GamePurchaseItem {
  gameId: string;
  gameName: string;
  serverId: string;
  serverName: string;
  quantity: number;
  price: number;
}

const GamePurchaseCard: React.FC<GamePurchaseCardProps> = ({
  gameId,
  gameName,
  gameImage,
  onAddToCart,
  onBuyNow,
}) => {
  const [quantity, setQuantity] = useState(3500);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedServer, setSelectedServer] = useState("");
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  // Get the servers for this game
  const servers = gameServers[gameId as keyof typeof gameServers] || [];

  // Calculate price based on quantity
  useEffect(() => {
    const price = Math.round((quantity / 100) * priceRate * 100) / 100;
    setCalculatedPrice(price);
  }, [quantity]);

  const handleQuantityChange = (value: number) => {
    setQuantity(value);
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 100);
  };

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(100, prev - 100));
  };

  const handleAddToCart = () => {
    if (!selectedServer) return;

    const selectedServerObj = servers.find((s) => s.id === selectedServer);
    if (!selectedServerObj) return;

    const item: GamePurchaseItem = {
      gameId,
      gameName,
      serverId: selectedServer,
      serverName: selectedServerObj.name,
      quantity,
      price: calculatedPrice,
    };

    onAddToCart?.(item);
  };

  const handleBuyNow = () => {
    if (!selectedServer) return;

    const selectedServerObj = servers.find((s) => s.id === selectedServer);
    if (!selectedServerObj) return;

    const item: GamePurchaseItem = {
      gameId,
      gameName,
      serverId: selectedServer,
      serverName: selectedServerObj.name,
      quantity,
      price: calculatedPrice,
    };

    onBuyNow?.(item);
  };

  return (
    <div className="bg-[#131C32] rounded-lg overflow-hidden w-full ">
      <div className="flex flex-col md:flex-row">
        {/* Game image */}
        <div className="md:w-1/3 lg:w-1/4 relative">
          <div className="aspect-[3/4] w-full">
            <Image
              src={gameImage}
              alt={gameName}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Game details */}
        <div className="p-6 flex-1">
          <h2 className="text-2xl font-bold text-white mb-6">{gameName}</h2>

          {/* Server selection */}
          <div className="mb-6">
            <label className="flex items-center justify-between">
              <span className="text-gray-400 mr-4">Server :</span>
              <div className="relative w-full max-w-md">
                <button
                  type="button"
                  className="flex items-center justify-between w-full bg-[#0D1323] border border-[#1F2A44] rounded-md p-2.5 text-left text-gray-300"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {selectedServer
                    ? servers.find((s) => s.id === selectedServer)?.name
                    : "Select"}
                  <IoChevronDownCircleOutline className="h-5 w-5 text-gray-400" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute z-10 mt-1 w-full bg-[#1A2235] border border-[#2A3548] rounded-md shadow-lg max-h-60 overflow-y-auto">
                    {servers.map((server) => (
                      <button
                        key={server.id}
                        className="w-full px-4 py-2 text-left text-gray-300 hover:bg-[#232e45] hover:text-white"
                        onClick={() => {
                          setSelectedServer(server.id);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {server.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </label>
          </div>

          {/* Quantity selection */}
          <div className="mb-6">
            <label className="flex items-center justify-between">
              <span className="text-gray-400 mr-4">Quantity(G) :</span>
              <div className="flex w-full max-w-md">
                <button
                  type="button"
                  className="px-3 py-2 bg-[#0D1323] border border-[#1F2A44] rounded-l-md text-gray-300 hover:bg-[#1A2235]"
                  onClick={handleDecrement}
                >
                  <PiMinusCircleDuotone className="h-5 w-5" />
                </button>
                <div className="flex-1 text-center p-2 bg-[#0D1323] border-t border-b border-[#1F2A44] text-white">
                  {quantity}
                </div>
                <button
                  type="button"
                  className="px-3 py-2 bg-[#0D1323] border border-[#1F2A44] rounded-r-md text-gray-300 hover:bg-[#1A2235]"
                  onClick={handleIncrement}
                >
                  <PiPlusCircleDuotone className="h-5 w-5" />
                </button>
              </div>
            </label>
          </div>

          {/* Gold package options */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mb-6">
            {goldPackages.map((pkg) => (
              <button
                key={pkg.value}
                className={`relative py-2 px-4 rounded border ${
                  quantity === pkg.value
                    ? "border-purple-500 bg-[#3A2C65]"
                    : "border-[#1F2A44] bg-[#0D1323] hover:bg-[#1A2235]"
                } text-center`}
                onClick={() => handleQuantityChange(pkg.value)}
              >
                <span className="text-white">{pkg.label}</span>
                {pkg.isBestValue && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-1.5 py-0.5 rounded">
                    BEST
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Price and action buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <div className="flex gap-2 w-[-webkit-fill-available]">
              <span className="text-4xl">€</span>
              <span className="text-pink-500 text-4xl">
                {Math.floor(calculatedPrice)}
              </span>
              <span className="text-pink-500">
                .{((calculatedPrice % 1) * 100).toFixed(0).padStart(2, "0")}
              </span>
              <button
                type="button"
                className="bg-pink-500 hover:bg-pink-600 p-3 rounded-md"
                onClick={handleAddToCart}
                disabled={!selectedServer}
              >
                <CiShoppingCart className="h-6 w-6 text-white" />
              </button>

              <button
                type="button"
                className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-8 rounded-md w-[-webkit-fill-available]"
                onClick={handleBuyNow}
                disabled={!selectedServer}
              >
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePurchaseCard;
