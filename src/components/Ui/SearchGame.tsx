/* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FiSearch } from "react-icons/fi";
// import { IoMdClose } from "react-icons/io";

// // Define game data structure
// interface Game {
//   id: string;
//   name: string;
//   icon: string;
//   category: string;
//   isPopular?: boolean;
//   isHighlighted?: boolean; // New property to mark games that should have red text
// }

// // Sample game data (you would replace this with your actual data)
// const gamesData: Game[] = [
//   {
//     id: "1",
//     name: "Diablo 4",
//     icon: "/games/diablo4.png",
//     category: "D",
//     isPopular: true,
//     isHighlighted: true,
//   },
//   {
//     id: "2",
//     name: "FFXIV Gil (FF14)",
//     icon: "/games/ffxiv.png",
//     category: "F",
//     isPopular: true,
//     isHighlighted: true,
//   },
//   {
//     id: "3",
//     name: "FC24",
//     icon: "/games/fc24.png",
//     category: "F",
//     isPopular: true,
//   },
//   {
//     id: "4",
//     name: "Last Epoch Gold",
//     icon: "/games/lastepoch.png",
//     category: "L",
//     isPopular: true,
//   },
//   {
//     id: "5",
//     name: "New World Coins",
//     icon: "/games/newworld.png",
//     category: "N",
//     isPopular: true,
//   },
//   {
//     id: "6",
//     name: "WotLK Classic US (Lv80)",
//     icon: "/games/wotlk.png",
//     category: "W",
//     isPopular: true,
//   },
//   { id: "7", name: "Archeage", icon: "/games/archeage.png", category: "A" },
//   { id: "8", name: "Albion Online", icon: "/games/albion.png", category: "A" },
//   { id: "9", name: "Aion Classic", icon: "/games/aion.png", category: "A" },
//   { id: "10", name: "Blade And Soul", icon: "/games/blade.png", category: "B" },
//   {
//     id: "11",
//     name: "Bless Unleashed",
//     icon: "/games/bless.png",
//     category: "B",
//   },
//   {
//     id: "12",
//     name: "Dungeon Fighter Online",
//     icon: "/games/dungeonfighter.png",
//     category: "D",
//   },
//   {
//     id: "13",
//     name: "D2 Resurrected",
//     icon: "/games/d2.png",
//     category: "D",
//     isHighlighted: true,
//   },
//   {
//     id: "14",
//     name: "Dark And Darker",
//     icon: "/games/darkdarker.png",
//     category: "D",
//   },
//   { id: "15", name: "ESO", icon: "/games/eso.png", category: "E" },
//   { id: "16", name: "Fallout 76", icon: "/games/fallout.png", category: "F" },
//   {
//     id: "17",
//     name: "FFXI (FF11)",
//     icon: "/games/ffxi.png",
//     category: "F",
//     isHighlighted: true,
//   },
//   {
//     id: "18",
//     name: "Lost Ark",
//     icon: "/games/lostark.png",
//     category: "L",
//     isHighlighted: true,
//   },
//   { id: "19", name: "NBA2K24 VC", icon: "/games/nba2k.png", category: "N" },
// ];

// interface SearchComponentProps {
//   onClose: () => void;
//   // You can also accept a parameter for games that should be highlighted
//   highlightedGameIds?: string[];
// }

// const SearchComponent = ({
//   onClose,
//   highlightedGameIds = [],
// }: SearchComponentProps) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const [filteredGames, setFilteredGames] = useState<Game[]>([]);
//   const [popularGames, setPopularGames] = useState<Game[]>([]);
//   const [categories, setCategories] = useState<Record<string, Game[]>>({});

//   // Mark games as highlighted based on passed array
//   useEffect(() => {
//     if (highlightedGameIds.length > 0) {
//       // Mark games as highlighted if their ID is in the highlightedGameIds array
//       // eslint-disable-next-line @typescript-eslint/no-unused-vars
//       const updatedGames = gamesData.map((game) => ({
//         ...game,
//         isHighlighted: highlightedGameIds.includes(game.id)
//           ? true
//           : game.isHighlighted,
//       }));

//       // Update the games data
//       // Note: In a real application, you might want to handle this differently
//       // This is just for demonstration purposes
//     }
//   }, [highlightedGameIds]);

//   // Filter games based on search term and organize them
//   useEffect(() => {
//     // Filter games based on search term
//     const filtered = searchTerm
//       ? gamesData.filter((game) =>
//           game.name.toLowerCase().includes(searchTerm.toLowerCase())
//         )
//       : gamesData;

//     setFilteredGames(filtered);

//     // Get popular games
//     const popular = filtered.filter((game) => game.isPopular);
//     setPopularGames(popular);

//     // Organize games by category
//     const gamesByCategory: Record<string, Game[]> = {};
//     filtered.forEach((game) => {
//       if (!gamesByCategory[game.category]) {
//         gamesByCategory[game.category] = [];
//       }
//       gamesByCategory[game.category].push(game);
//     });

//     // Sort categories alphabetically
//     const sortedCategories: Record<string, Game[]> = {};
//     Object.keys(gamesByCategory)
//       .sort()
//       .forEach((key) => {
//         sortedCategories[key] = gamesByCategory[key];
//       });

//     setCategories(sortedCategories);
//   }, [searchTerm]);

//   return (
//     <div className="w-full bg-[#101828] text-white p-4 rounded-b-lg shadow-2xl">
//       {/* Search input */}
//       <div className="relative max-w-full mb-6">
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full bg-[#1D2839] py-3 pl-12 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//           <FiSearch
//             className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
//             size={18}
//           />
//           {searchTerm && (
//             <button
//               onClick={() => setSearchTerm("")}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
//             >
//               <IoMdClose size={18} />
//             </button>
//           )}
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Popular Games Section */}
//         <div className="md:w-[300px] flex-shrink-0">
//           <h3 className="text-red-500 flex items-center gap-2 text-sm font-medium mb-4">
//             <span className="inline-block w-2 h-2 bg-red-500 rounded-full"></span>
//             Popular Games
//           </h3>
//           <div className="flex flex-wrap gap-2">
//             {popularGames.map((game) => (
//               <Link
//                 href={`/games/${game.id}`}
//                 key={game.id}
//                 className="inline-flex items-center gap-2 hover:bg-[#1D2839] p-1.5 rounded-md transition-colors"
//                 style={{ width: "auto" }} // Let the width be determined by content
//               >
//                 <div className="w-5 h-5 rounded-full bg-[#1D2839] flex items-center justify-center overflow-hidden flex-shrink-0">
//                   <Image
//                     src={game.icon || "/home/default-game.png"}
//                     width={20}
//                     height={20}
//                     alt={game.name}
//                     className="object-cover"
//                   />
//                 </div>
//                 <span
//                   className={`text-xs ${
//                     game.isHighlighted ? "text-red-500" : ""
//                   }`}
//                 >
//                   {game.name}
//                 </span>
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* All Games Section */}
//         <div className="flex-grow md:border-l md:border-gray-700 md:pl-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
//           <h3 className="text-purple-500 flex items-center gap-2 text-sm font-medium mb-4">
//             <span className="inline-block w-2 h-2 bg-purple-500 rounded-full"></span>
//             All Games
//           </h3>
//           <div className="space-y-6">
//             {Object.keys(categories).length > 0 ? (
//               Object.entries(categories).map(([category, games]) => (
//                 <div key={category} className="flex gap-4">
//                   {/* Category letter */}
//                   <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-lg font-medium">
//                     {category}
//                   </div>

//                   {/* Games for this category */}
//                   <div className="flex-grow">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2">
//                       {games.map((game) => (
//                         <Link
//                           href={`/games/${game.id}`}
//                           key={game.id}
//                           className="flex items-center gap-2 hover:bg-[#1D2839] p-1.5 rounded-md transition-colors"
//                         >
//                           <div className="w-5 h-5 rounded-full bg-[#1D2839] flex items-center justify-center overflow-hidden flex-shrink-0">
//                             <Image
//                               src={game.icon || "/home/default-game.png"}
//                               width={20}
//                               height={20}
//                               alt={game.name}
//                               className="object-cover"
//                             />
//                           </div>
//                           <span
//                             className={`text-xs ${
//                               game.isHighlighted ? "text-red-500" : ""
//                             }`}
//                           >
//                             {game.name}
//                           </span>
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="text-center py-10 text-gray-400">
//                 No games found matching your search
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Close button on mobile */}
//       <button
//         onClick={onClose}
//         className="md:hidden fixed bottom-4 right-4 bg-purple-600 rounded-full p-3 shadow-lg"
//       >
//         <IoMdClose size={24} />
//       </button>
//     </div>
//   );
// };

// export default SearchComponent;

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

// Define game data structure
interface Game {
  id: string;
  name: string;
  icon: string;
  category: string;
  isPopular?: boolean;
  isHighlighted?: boolean; // New property to mark games that should have red text
}

// Sample game data (you would replace this with your actual data)
const gamesData: Game[] = [
  {
    id: "1",
    name: "Diablo 4",
    icon: "/games/diablo4.png",
    category: "D",
    isPopular: true,
    isHighlighted: true,
  },
  {
    id: "2",
    name: "FFXIV Gil (FF14)",
    icon: "/games/ffxiv.png",
    category: "F",
    isPopular: true,
    isHighlighted: true,
  },
  {
    id: "3",
    name: "FC24",
    icon: "/games/fc24.png",
    category: "F",
    isPopular: true,
  },
  {
    id: "4",
    name: "Last Epoch Gold",
    icon: "/games/lastepoch.png",
    category: "L",
    isPopular: true,
  },
  {
    id: "5",
    name: "New World Coins",
    icon: "/games/newworld.png",
    category: "N",
    isPopular: true,
  },
  {
    id: "6",
    name: "WotLK Classic US (Lv80)",
    icon: "/games/wotlk.png",
    category: "W",
    isPopular: true,
  },
  { id: "7", name: "Archeage", icon: "/games/archeage.png", category: "A" },
  { id: "8", name: "Albion Online", icon: "/games/albion.png", category: "A" },
  { id: "9", name: "Aion Classic", icon: "/games/aion.png", category: "A" },
  { id: "10", name: "Blade And Soul", icon: "/games/blade.png", category: "B" },
  {
    id: "11",
    name: "Bless Unleashed",
    icon: "/games/bless.png",
    category: "B",
  },
  {
    id: "12",
    name: "Dungeon Fighter Online",
    icon: "/games/dungeonfighter.png",
    category: "D",
  },
  {
    id: "13",
    name: "D2 Resurrected",
    icon: "/games/d2.png",
    category: "D",
    isHighlighted: true,
  },
  {
    id: "14",
    name: "Dark And Darker",
    icon: "/games/darkdarker.png",
    category: "D",
  },
  { id: "15", name: "ESO", icon: "/games/eso.png", category: "E" },
  { id: "16", name: "Fallout 76", icon: "/games/fallout.png", category: "F" },
  {
    id: "17",
    name: "FFXI (FF11)",
    icon: "/games/ffxi.png",
    category: "F",
    isHighlighted: true,
  },
  {
    id: "18",
    name: "Lost Ark",
    icon: "/games/lostark.png",
    category: "L",
    isHighlighted: true,
  },
  { id: "19", name: "NBA2K24 VC", icon: "/games/nba2k.png", category: "N" },
];

interface SearchComponentProps {
  onClose: () => void;
  // You can also accept a parameter for games that should be highlighted
  highlightedGameIds?: string[];
}

const SearchComponent = ({
  onClose,
  highlightedGameIds = [],
}: SearchComponentProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [popularGames, setPopularGames] = useState<Game[]>([]);
  const [categories, setCategories] = useState<Record<string, Game[]>>({});

  // Mark games as highlighted based on passed array
  useEffect(() => {
    if (highlightedGameIds.length > 0) {
      // Mark games as highlighted if their ID is in the highlightedGameIds array
      const updatedGames = gamesData.map((game) => ({
        ...game,
        isHighlighted: highlightedGameIds.includes(game.id)
          ? true
          : game.isHighlighted,
      }));

      // Update the games data
      // Note: In a real application, you might want to handle this differently
      // This is just for demonstration purposes
    }
  }, [highlightedGameIds]);

  // Filter games based on search term and organize them
  useEffect(() => {
    // Filter games based on search term
    const filtered = searchTerm
      ? gamesData.filter((game) =>
          game.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : gamesData;

    setFilteredGames(filtered);

    // Get popular games
    const popular = filtered.filter((game) => game.isPopular);
    setPopularGames(popular);

    // Organize games by category
    const gamesByCategory: Record<string, Game[]> = {};
    filtered.forEach((game) => {
      if (!gamesByCategory[game.category]) {
        gamesByCategory[game.category] = [];
      }
      gamesByCategory[game.category].push(game);
    });

    // Sort categories alphabetically
    const sortedCategories: Record<string, Game[]> = {};
    Object.keys(gamesByCategory)
      .sort()
      .forEach((key) => {
        sortedCategories[key] = gamesByCategory[key];
      });

    setCategories(sortedCategories);
  }, [searchTerm]);

  return (
    <div className="w-full bg-[#101828] text-white p-4 rounded-b-lg shadow-2xl">
      {/* Search input */}
      <div className="relative max-w-full mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#1D2839] py-3 pl-12 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <FiSearch
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              <IoMdClose size={18} />
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Popular Games Section */}
        <div className="md:w-[300px] flex-shrink-0">
          <h3 className="text-red-500 flex items-center gap-2 text-sm font-medium mb-4">
            <span className="inline-block w-2 h-2 bg-red-500 rounded-full"></span>
            Popular Games
          </h3>
          <div className="flex flex-wrap gap-2">
            {popularGames.map((game) => (
              <Link
                href={`/games/${game.id}`}
                key={game.id}
                className="inline-flex items-center gap-2 hover:bg-[#1D2839] p-1.5 rounded-md transition-colors"
                style={{ width: "auto" }} // Let the width be determined by content
              >
                <div className="w-5 h-5 rounded-full bg-[#1D2839] flex items-center justify-center overflow-hidden flex-shrink-0">
                  <Image
                    src={game.icon || "/home/default-game.png"}
                    width={20}
                    height={20}
                    alt={game.name}
                    className="object-cover"
                  />
                </div>
                <span
                  className={`text-xs ${
                    game.isHighlighted ? "text-red-500" : ""
                  }`}
                >
                  {game.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* All Games Section */}
        <div className="flex-grow md:border-l md:border-gray-700 md:pl-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
          <h3 className="text-purple-500 flex items-center gap-2 text-sm font-medium mb-4">
            <span className="inline-block w-2 h-2 bg-purple-500 rounded-full"></span>
            All Games
          </h3>
          <div className="space-y-6">
            {Object.keys(categories).length > 0 ? (
              Object.entries(categories).map(([category, games]) => (
                <div key={category} className="flex gap-4">
                  {/* Category letter */}
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-lg font-medium">
                    {category}
                  </div>

                  {/* Games for this category */}
                  <div className="flex-grow">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2">
                      {games.map((game) => (
                        <Link
                          href={`/games/${game.id}`}
                          key={game.id}
                          className="flex items-center gap-2 hover:bg-[#1D2839] p-1.5 rounded-md transition-colors"
                        >
                          <div className="w-5 h-5 rounded-full bg-[#1D2839] flex items-center justify-center overflow-hidden flex-shrink-0">
                            <Image
                              src={game.icon || "/home/default-game.png"}
                              width={20}
                              height={20}
                              alt={game.name}
                              className="object-cover"
                            />
                          </div>
                          <span
                            className={`text-xs ${
                              game.isHighlighted ? "text-red-500" : ""
                            }`}
                          >
                            {game.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10 text-gray-400">
                No games found matching your search
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Close button on mobile */}
      <button
        onClick={onClose}
        className="md:hidden fixed bottom-4 right-4 bg-purple-600 rounded-full p-3 shadow-lg"
      >
        <IoMdClose size={24} />
      </button>
    </div>
  );
};

export default SearchComponent;
