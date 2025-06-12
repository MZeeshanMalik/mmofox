// components/Navbar.tsx
"use client";
// import { useState } from "react";
import { FaFlagUsa } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
// import { MdOutlineShoppingCart } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const navItems = [
    // { name: "Home", icon: "🏠" },
    { name: "Gold", icon: "1" },
    { name: "Item", icon: "2" },
    { name: "Boot", icon: "3" },
    { name: "News", icon: "4" },
  ];

  return (
    <nav className="w-full bg-[#101828] backdrop-blur-[12.3px] text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-blue-400">
          {/* <span className="text-purple-500">🛡</span>  */}
          {/* <Image src={"/home/logo.png"} alt="logo" height={39} width={181} /> */}
          <Image src={`/home/logo.png`} width={181} height={39} alt="icon" />
        </div>

        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            href="/"
            className="flex items-center gap-1 text-sm text-[ #A855F7
]  hover:text-purple-400"
          >
            <Image src={`/home/image.png`} width={24} height={24} alt="icon" />{" "}
            Home
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href="/"
              className="flex items-center gap-1 text-sm hover:text-purple-400"
            >
              {/* <span>{item.icon}</span> {item.name} */}
              <Image
                src={`/home/image${item.icon}.png`}
                width={24}
                height={24}
                alt="icon"
              />
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* <FaSearch className="text-white cursor-pointer" /> */}
          <Image src={`/home/cart.png`} width={24} height={24} alt="cart" />
          <div className="flex items-center gap-1 text-sm border border-gray-600 px-2 py-1 rounded-md">
            <FaFlagUsa />
            <span>EN</span>
            <IoMdArrowDropdown />
          </div>
          <button className="text-sm bg-gray-700 px-4 py-1 rounded-md hover:bg-purple-600">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
