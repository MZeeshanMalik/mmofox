import React, { useState } from "react";
import Image from "next/image";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { PiMinusCircleDuotone, PiPlusCircleDuotone } from "react-icons/pi";
import { TbShoppingCartDiscount } from "react-icons/tb";

interface DiabloRuneshardPurchaseProps {
  onAddToCart?: (orderDetails: OrderDetails) => void;
  onBuyNow?: (orderDetails: OrderDetails) => void;
}

interface OrderDetails {
  server: string;
  platform: string;
  targetLevel: number;
  price: number;
}

const servers = ["US East", "US West", "EU", "Asia"];

const platforms = ["PC", "PlayStation", "Xbox"];

const DiabloRuneshardPurchase: React.FC<DiabloRuneshardPurchaseProps> = ({
  onAddToCart,
  onBuyNow,
}) => {
  // State management
  const [selectedServer, setSelectedServer] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [targetLevel, setTargetLevel] = useState(3);
  const [isServerDropdownOpen, setIsServerDropdownOpen] = useState(false);
  const [isPlatformDropdownOpen, setIsPlatformDropdownOpen] = useState(false);

  // Price calculation
  const basePrice = 19;
  const pricePerLevel = 1.56;
  const calculatedPrice = basePrice + targetLevel * pricePerLevel;
  const formattedPrice = calculatedPrice.toFixed(2);

  // Target level handlers
  const decrementLevel = () => {
    if (targetLevel > 1) {
      setTargetLevel(targetLevel - 1);
    }
  };

  const incrementLevel = () => {
    if (targetLevel < 99) {
      setTargetLevel(targetLevel + 1);
    }
  };

  // Order completion time calculation
  const estimatedTimeMinutes = 12;

  // Action handlers
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({
        server: selectedServer || "US East",
        platform: selectedPlatform || "PC",
        targetLevel,
        price: parseFloat(formattedPrice),
      });
    }
  };

  const handleBuyNow = () => {
    if (onBuyNow) {
      onBuyNow({
        server: selectedServer || "US East",
        platform: selectedPlatform || "PC",
        targetLevel,
        price: parseFloat(formattedPrice),
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-[#101828] rounded-lg overflow-hidden shadow-xl">
      {/* Left side - image and info */}
      <div className="md:w-1/2 lg:w-3/5 relative">
        <div className="relative">
          <Image
            src="/banner/spiderman.png"
            alt="Diablo 4 Runeshard"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101828] to-transparent p-6 flex flex-col justify-end">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Buy Diablo 4 Runeshard
            </h1>
            <p className="text-sm text-gray-300 mb-4">
              Buy Diablo 4 Runeshard Boost To Access The Pit Of The Artificer.
              Once Used By The Horadrim, These Ancient Tokens Are Essential For
              Entering This Challenging Dungeon. Runeshards Are A Rare But
              Essential Resource, Most Often Found In Whisper Bounties, Helltide
              And Legion Chests, And Nightmare Dungeons. These Are Pivotal For
              Build Progression. Purchase D4 Runeshard Boosting And We&#39;ll
              Quickly Farm The Desired Number Of Runeshards, Bypassing The Usual
              Grind.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#331a57] text-purple-300 text-xs px-3 py-1 rounded">
                Tag-001
              </span>
              <span className="bg-[#331a57] text-purple-300 text-xs px-3 py-1 rounded">
                Tag-002
              </span>
              <span className="bg-[#331a57] text-purple-300 text-xs px-3 py-1 rounded">
                Tag-003
              </span>
              <span className="bg-[#331a57] text-purple-300 text-xs px-3 py-1 rounded">
                Tag-004
              </span>
              <span className="bg-[#331a57] text-purple-300 text-xs px-3 py-1 rounded">
                Tag-005
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - order form */}
      <div className="md:w-1/2 lg:w-2/5 p-6">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
          1-99 Lv Job
        </h2>

        {/* Server selection */}
        <div className="mb-4">
          <label className="flex items-center justify-between mb-2">
            <span className="text-gray-400">Server :</span>
            <div className="relative w-52">
              <button
                type="button"
                className="flex items-center justify-between w-full bg-[#0D1323] border border-[#1F2A44] rounded-md p-2.5 text-left text-gray-300"
                onClick={() => setIsServerDropdownOpen(!isServerDropdownOpen)}
              >
                <span>{selectedServer || "Selece"}</span>
                <IoChevronDownCircleOutline className="h-5 w-5 text-gray-400" />
              </button>

              {isServerDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-[#1A2235] border border-[#2A3548] rounded-md shadow-lg max-h-60 overflow-y-auto">
                  {servers.map((server) => (
                    <button
                      key={server}
                      className="w-full px-4 py-2 text-left text-gray-300 hover:bg-[#232e45] hover:text-white"
                      onClick={() => {
                        setSelectedServer(server);
                        setIsServerDropdownOpen(false);
                      }}
                    >
                      {server}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </label>
        </div>

        {/* Platform selection */}
        <div className="mb-4">
          <label className="flex items-center justify-between mb-2">
            <span className="text-gray-400">Platfora :</span>
            <div className="relative w-52">
              <button
                type="button"
                className="flex items-center justify-between w-full bg-[#0D1323] border border-[#1F2A44] rounded-md p-2.5 text-left text-gray-300"
                onClick={() =>
                  setIsPlatformDropdownOpen(!isPlatformDropdownOpen)
                }
              >
                <span>{selectedPlatform || "Selece"}</span>
                <IoChevronDownCircleOutline className="h-5 w-5 text-gray-400" />
              </button>

              {isPlatformDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-[#1A2235] border border-[#2A3548] rounded-md shadow-lg max-h-60 overflow-y-auto">
                  {platforms.map((platform) => (
                    <button
                      key={platform}
                      className="w-full px-4 py-2 text-left text-gray-300 hover:bg-[#232e45] hover:text-white"
                      onClick={() => {
                        setSelectedPlatform(platform);
                        setIsPlatformDropdownOpen(false);
                      }}
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </label>
        </div>

        {/* Target level selection */}
        <div className="mb-8">
          <label className="flex items-center justify-between mb-2">
            <span className="text-gray-400">Target Level :</span>
            <div className="flex w-52">
              <button
                type="button"
                className="px-3 py-2 bg-[#0D1323] border border-[#1F2A44] rounded-l-md text-gray-300 hover:bg-[#1A2235]"
                onClick={decrementLevel}
              >
                <PiMinusCircleDuotone className="h-5 w-5" />
              </button>
              <div className="flex-1 text-center p-2 bg-[#0D1323] border-t border-b border-[#1F2A44] text-white">
                {targetLevel}
              </div>
              <button
                type="button"
                className="px-3 py-2 bg-[#0D1323] border border-[#1F2A44] rounded-r-md text-gray-300 hover:bg-[#1A2235]"
                onClick={incrementLevel}
              >
                <PiPlusCircleDuotone className="h-5 w-5" />
              </button>
            </div>
          </label>
        </div>

        {/* Price and action buttons */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-baseline">
            <span className="text-white text-2xl font-bold">€</span>
            <span className="text-pink-500 text-4xl font-bold">
              {formattedPrice.split(".")[0]}
            </span>
            <span className="text-pink-500 text-xl font-bold">
              .{formattedPrice.split(".")[1]}
            </span>
          </div>

          <div className="text-right">
            <span className="text-pink-500 font-bold">
              {estimatedTimeMinutes} MINUTES
            </span>
            <span className="text-xs text-gray-400 block">
              ORDER COMPLETION
            </span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button
            type="button"
            className="bg-pink-600 hover:bg-pink-700 p-3 rounded-md"
            onClick={handleAddToCart}
          >
            <TbShoppingCartDiscount className="h-6 w-6 text-white" />
          </button>

          <button
            type="button"
            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-md"
            onClick={handleBuyNow}
          >
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiabloRuneshardPurchase;
