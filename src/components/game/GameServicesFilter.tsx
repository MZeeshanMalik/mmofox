import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { MdCheckCircleOutline } from "react-icons/md";
// import {
//   ChevronDownIcon,
//   MagnifyingGlassIcon,
//   CheckIcon,
// } from "@heroicons/react/24/outline";

interface GameServicesFilterProps {
  onCategoryChange?: (category: string) => void;
  onServerChange?: (server: string) => void;
  onSearch?: (query: string) => void;
}

const GameServicesFilter: React.FC<GameServicesFilterProps> = ({
  onCategoryChange,
  onServerChange,
  onSearch,
}) => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [isServerDropdownOpen, setIsServerDropdownOpen] = useState(false);
  const [selectedServer, setSelectedServer] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "ALL", name: "ALL" },
    { id: "vessel-of-hatred", name: "Vessel Of Hatred" },
    { id: "leveling", name: "Leveling" },
    { id: "bundles", name: "Bundles" },
    { id: "bosses", name: "Bosses" },
    { id: "dungeons", name: "Dungeons" },
    { id: "character-boosting", name: "Character Boosting" },
    { id: "materials", name: "Materials" },
  ];

  const servers = [
    { id: "americas", name: "Americas" },
    { id: "europe", name: "Europe" },
    { id: "asia", name: "Asia" },
  ];

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    onCategoryChange?.(categoryId);
  };

  const handleServerSelect = (serverId: string, serverName: string) => {
    setSelectedServer(serverName);
    setIsServerDropdownOpen(false);
    onServerChange?.(serverId);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  return (
    <div className="w-full bg-[#101828] p-4 rounded-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        {/* Server Selection Dropdown */}
        <div className="relative w-full md:w-auto">
          <div className="flex items-center">
            <span className="text-gray-400 mr-2 whitespace-nowrap">
              Select Server :
            </span>
            <button
              type="button"
              className="flex items-center justify-between w-full md:w-48 bg-[#1A2235] text-gray-300 rounded-md px-3 py-2 text-sm border border-[#2A3548]"
              onClick={() => setIsServerDropdownOpen(!isServerDropdownOpen)}
            >
              <span>{selectedServer || "Selece"}</span>
              <IoChevronDownCircleOutline className="h-4 w-4 ml-2" />
            </button>
          </div>

          {isServerDropdownOpen && (
            <div className="absolute mt-1 w-full md:w-48 bg-[#1A2235] border border-[#2A3548] rounded-md shadow-lg z-10">
              {servers.map((server) => (
                <button
                  key={server.id}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-[#2A3548] text-sm"
                  onClick={() => handleServerSelect(server.id, server.name)}
                >
                  {server.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Search Input */}
        <form
          onSubmit={handleSearchSubmit}
          className="relative w-full md:w-auto"
        >
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full md:w-64 bg-[#1A2235] text-gray-300 rounded-md pl-10 pr-3 py-2 text-sm border border-[#2A3548] focus:outline-none focus:border-purple-500"
          />
          <FaMagnifyingGlass className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </form>
      </div>

      {/* Categories */}
      <div className="flex items-center overflow-x-auto pb-2 gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`flex items-center px-4 py-2 rounded-md text-sm whitespace-nowrap ${
              activeCategory === category.id
                ? "bg-purple-600 text-white"
                : "bg-[#1A2235] text-gray-300 hover:bg-[#232e45]"
            }`}
            onClick={() => handleCategoryClick(category.id)}
          >
            {activeCategory === category.id && category.id === "ALL" && (
              <MdCheckCircleOutline className="h-3 w-3 mr-1 text-white" />
            )}
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GameServicesFilter;
