"use client";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoCheckmarkSharp } from "react-icons/io5";
import { HiOutlineChevronDown } from "react-icons/hi";

const InventoryFilter = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedCurrency, setSelectedCurrency] = useState("poe");
  const [selectedServer, setSelectedServer] = useState("");
  const [allSelected, setAllSelected] = useState(true);

  // Item categories - structured as a grid for the checkboxes
  const itemCategories = [
    { id: "all", name: "ALL" },
    { id: "6-link-weapon", name: "6 Link Weapon" },
    { id: "essence", name: "Essence" },
    { id: "gems", name: "Gems" },
    { id: "unique-amulets", name: "Unique Amulets" },
    { id: "unique-axes", name: "Unique Axes" },
    { id: "unique-belts", name: "Unique Belts" },
    { id: "unique-boots", name: "Unique Boots" },
    { id: "unique-daggers", name: "Unique Daggers" },
    { id: "unique-flasks", name: "Unique Flasks" },
    { id: "unique-gloves", name: "Unique Gloves" },
    { id: "unique-maces", name: "Unique Maces" },
    { id: "unique-quivers", name: "Unique Quivers" },
    { id: "unique-rings", name: "Unique Rings" },
    { id: "unique-shields", name: "Unique Shields" },
    { id: "unique-swords", name: "Unique Swords" },
  ];

  const currencies = [
    { id: "poe", name: "POE Currency" },
    { id: "poe2", name: "POE Currency" },
    { id: "poe3", name: "POE Currency" },
    { id: "poe4", name: "POE Currency" },
    { id: "poe5", name: "POE Currency" },
    { id: "poe6", name: "POE Currency" },
  ];

  const handleAllClick = () => {
    setAllSelected(!allSelected);
  };

  return (
    <div className="w-full bg-[#0A0F20] text-white">
      {/* Main content area */}
      <div className="p-4 md:p-6">
        {/* Server selection and search */}
        <div className="flex flex-col md:flex-row justify-between mb-6 space-y-4 md:space-y-0">
          <div className="flex items-center">
            <span className="text-sm text-gray-400 mr-3">Select Server :</span>
            <div className="relative w-44">
              <select
                value={selectedServer}
                onChange={(e) => setSelectedServer(e.target.value)}
                className="appearance-none w-full bg-[#1A2235] border border-[#2A3548] rounded px-3 py-2 pr-8 text-white focus:outline-none"
              >
                <option value="">Select</option>
                <option value="server1">Server 1</option>
                <option value="server2">Server 2</option>
                <option value="server3">Server 3</option>
              </select>
              <HiOutlineChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div className="relative max-w-xs w-full md:w-64">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-[#1A2235] border border-[#2A3548] rounded pl-10 pr-3 py-2 text-white focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Currency buttons */}
        <div className="flex flex-wrap gap-2 mb-6  overflow-x-auto pb-2">
          {currencies.map((currency, index) => (
            <button
              key={currency.id}
              className={`relative flex-shrink-0 bg-[#2A1F55] mt-2 ${
                index === 0 ? "bg-[#3A2C65]" : ""
              } hover:bg-[#3A2C65] text-sm px-4 py-2 rounded-md`}
              onClick={() => setSelectedCurrency(currency.id)}
            >
              {index === 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-purple-500 rounded-full p-0.5">
                  <IoCheckmarkSharp size={12} />
                </span>
              )}
              {currency.name}
            </button>
          ))}
        </div>

        {/* Item categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-3 gap-x-6">
          {itemCategories.map((category) => (
            <div key={category.id} className="flex items-center">
              <div
                className={`w-5 h-5 flex-shrink-0 border ${
                  category.id === "all" && allSelected
                    ? "border-purple-500 bg-purple-500"
                    : "border-gray-500 bg-transparent"
                } rounded mr-2 flex items-center justify-center cursor-pointer`}
                onClick={category.id === "all" ? handleAllClick : undefined}
              >
                {category.id === "all" && allSelected && (
                  <IoCheckmarkSharp className="text-white" size={14} />
                )}
              </div>
              <span
                className={`text-sm ${
                  category.id === "all" ? "text-purple-400" : "text-gray-300"
                }`}
              >
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InventoryFilter;
