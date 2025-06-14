// "use client";
// import { useState, useRef, useEffect } from "react";
// import { FaFlagUsa } from "react-icons/fa";
// import { IoMdArrowDropdown } from "react-icons/io";
// import { FiMenu, FiSearch } from "react-icons/fi";
// import { IoCloseOutline } from "react-icons/io5";
// import Link from "next/link";
// import Image from "next/image";
// import SearchComponent from "../Ui/SearchGame";
// // import SearchComponent from "./SearchComponent";

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const searchRef = useRef<HTMLDivElement>(null);

//   const navItems = [
//     { name: "Home", icon: "image", href: "/" },
//     { name: "Gold", icon: "image1", href: "/gold" },
//     { name: "Item", icon: "image2", href: "/item" },
//     { name: "Boot", icon: "image3", href: "/boot" },
//     { name: "News", icon: "image4", href: "/news" },
//   ];

//   // Close search when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         searchRef.current &&
//         !searchRef.current.contains(event.target as Node)
//       ) {
//         setSearchOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav className="w-full bg-[#101828] backdrop-blur-[12.3px] text-white relative z-50">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <div className="font-bold text-blue-400">
//           <Image src={`/home/logo.png`} width={181} height={39} alt="logo" />
//         </div>

//         {/* Nav Items - Desktop */}
//         <div className="hidden md:flex items-center gap-4">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               className="flex items-center gap-1 text-sm hover:text-purple-400 transition-colors"
//             >
//               <Image
//                 src={`/home/${item.icon}.png`}
//                 width={24}
//                 height={24}
//                 alt="icon"
//               />
//               {item.name}
//             </Link>
//           ))}
//           {/* Search Icon - Desktop */}
//           <button
//             onClick={() => setSearchOpen(!searchOpen)}
//             className="hover:text-purple-400 transition-colors"
//           >
//             <FiSearch size={20} />
//           </button>
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center gap-3">
//           {/* Search Icon - Mobile */}
//           <button
//             onClick={() => setSearchOpen(!searchOpen)}
//             className="md:hidden hover:text-purple-400 transition-colors"
//           >
//             <FiSearch size={20} />
//           </button>

//           <Image
//             src={`/home/cart.png`}
//             width={24}
//             height={24}
//             alt="cart"
//             className="hidden sm:block"
//           />

//           <div className="hidden sm:flex items-center gap-1 text-sm border border-gray-600 px-2 py-1 rounded-md">
//             <FaFlagUsa />
//             <span>EN</span>
//             <IoMdArrowDropdown />
//           </div>

//           <button className="text-sm bg-gray-700 px-4 py-1 rounded-md hover:bg-purple-600 transition-colors">
//             Sign Up
//           </button>

//           {/* Mobile menu button */}
//           <button
//             className="md:hidden ml-2"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? (
//               <IoCloseOutline size={24} />
//             ) : (
//               <FiMenu size={24} />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden absolute w-full bg-[#101828] border-t border-gray-800 py-4 px-4 shadow-xl z-40">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               className="flex items-center gap-3 py-3 border-b border-gray-800 hover:text-purple-400 transition-colors"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               <Image
//                 src={`/home/${item.icon}.png`}
//                 width={24}
//                 height={24}
//                 alt="icon"
//               />
//               {item.name}
//             </Link>
//           ))}

//           <div className="flex items-center gap-2 py-3 mt-2">
//             <Image src={`/home/cart.png`} width={24} height={24} alt="cart" />
//             <span>Cart</span>
//           </div>

//           <div className="flex items-center gap-1 text-sm border border-gray-600 px-2 py-2 rounded-md w-fit mt-2">
//             <FaFlagUsa />
//             <span>EN</span>
//             <IoMdArrowDropdown />
//           </div>
//         </div>
//       )}

//       {/* Search Overlay */}
//       {searchOpen && (
//         <div className="absolute top-full left-0 w-full bg-[#101828] border-t border-gray-800 z-40">
//           <div className="max-w-7xl mx-auto" ref={searchRef}>
//             <SearchComponent onClose={() => setSearchOpen(false)} />
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import { useState, useRef, useEffect } from "react";
import { FaFlagUsa } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiMenu, FiSearch } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import SearchComponent from "../Ui/SearchGame";
import CartModal from "../Ui/CartModel";
import LanguageModal from "../Ui/LanguageModel";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "Home", icon: "image", href: "/" },
    { name: "Gold", icon: "image1", href: "/gold" },
    { name: "Item", icon: "image2", href: "/item" },
    { name: "Boot", icon: "image3", href: "/boot" },
    { name: "News", icon: "image4", href: "/news" },
  ];

  // Close modals when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check for search component
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest("[data-search-toggle]")
      ) {
        setSearchOpen(false);
      }

      // Check for cart modal
      if (
        cartRef.current &&
        !cartRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest("[data-cart-toggle]")
      ) {
        setCartOpen(false);
      }

      // Check for language modal
      if (
        langRef.current &&
        !langRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest("[data-language-toggle]")
      ) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle search visibility
  const toggleSearch = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    setSearchOpen((prev) => !prev);
  };

  // Toggle cart visibility
  const toggleCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCartOpen((prev) => !prev);
    // Close other modals
    setSearchOpen(false);
    setLanguageOpen(false);
  };

  // Toggle language modal
  const toggleLanguage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLanguageOpen((prev) => !prev);
    // Close other modals
    setSearchOpen(false);
    setCartOpen(false);
  };

  return (
    <nav className="w-full bg-[#172239] backdrop-blur-[12.3px] text-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-blue-400">
          <Image src={`/home/logo.png`} width={181} height={39} alt="logo" />
        </div>

        {/* Nav Items - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-1 text-sm hover:text-purple-400 transition-colors"
            >
              <Image
                src={`/home/${item.icon}.png`}
                width={24}
                height={24}
                alt="icon"
              />
              {item.name}
            </Link>
          ))}
          {/* Search Icon - Desktop */}
          <button
            data-search-toggle
            onClick={toggleSearch}
            className="hover:text-purple-400 transition-colors"
          >
            <FiSearch size={20} />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Search Icon - Mobile */}
          <button
            data-search-toggle
            onClick={toggleSearch}
            className="md:hidden hover:text-purple-400 transition-colors"
          >
            <FiSearch size={20} />
          </button>

          {/* Cart Icon */}
          <button
            data-cart-toggle
            onClick={toggleCart}
            className="relative hover:text-purple-400 transition-colors"
          >
            <Image
              src={`/home/cart.png`}
              width={24}
              height={24}
              alt="cart"
              className="hidden sm:block"
            />
            {/* Optional cart badge */}
            <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
              2
            </span>
          </button>

          {/* Language Selector */}
          <div
            data-language-toggle
            onClick={toggleLanguage}
            className="hidden sm:flex items-center gap-1 text-sm border border-gray-600 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-700"
          >
            <FaFlagUsa />
            <span>EN</span>
            <IoMdArrowDropdown />
          </div>

          <button className="text-sm bg-gray-700 px-4 py-1 rounded-md hover:bg-purple-600 transition-colors">
            Sign Up
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <IoCloseOutline size={24} />
            ) : (
              <FiMenu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute w-full bg-[#101828] border-t border-gray-800 py-4 px-4 shadow-xl z-40">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 py-3 border-b border-gray-800 hover:text-purple-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Image
                src={`/home/${item.icon}.png`}
                width={24}
                height={24}
                alt="icon"
              />
              {item.name}
            </Link>
          ))}

          <div className="flex items-center gap-2 py-3 mt-2">
            <Image src={`/home/cart.png`} width={24} height={24} alt="cart" />
            <span>Cart</span>
          </div>

          <div
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-sm border border-gray-600 px-2 py-2 rounded-md w-fit mt-2 cursor-pointer"
          >
            <FaFlagUsa />
            <span>EN</span>
            <IoMdArrowDropdown />
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {searchOpen && (
        <div className="absolute top-full left-0 w-full bg-[#101828] border-t border-gray-800 z-40">
          <div className="max-w-7xl mx-auto" ref={searchRef}>
            <SearchComponent onClose={() => setSearchOpen(false)} />
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {cartOpen && (
        <div className="absolute top-16 right-4 sm:right-20 z-50" ref={cartRef}>
          <CartModal onClose={() => setCartOpen(false)} />
        </div>
      )}

      {/* Language Modal */}
      {languageOpen && (
        <div className="absolute top-16 right-4 sm:right-16 z-50" ref={langRef}>
          <LanguageModal onClose={() => setLanguageOpen(false)} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
