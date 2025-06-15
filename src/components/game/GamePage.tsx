/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import CustomerReviews from "@/components/game/CustomerReviews";
import InventoryFilter from "@/components/game/InventoryFilter";
import NewsSection from "@/components/game/NewsSection";
import PathOfExileItemPage from "@/components/game/PathOfExileItem";
import GamesBanner from "@/components/Ui/GameBanner";
import GameInputCard from "@/components/Ui/GameInputCard";
import Pagination from "@/components/Ui/Pagination";

import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { GiArrowsShield, GiSwordWound } from "react-icons/gi";
import { RiCoinsLine } from "react-icons/ri";
import GamePurchaseCard from "./GamePurchaseCard";
import ThroneAndLibertyLucent from "./GoldArticle";
import GameServicesFilter from "./GameServicesFilter";
import D4BoostingFAQPage from "./FaqPage";
import DiabloRuneshardPurchase from "./GamePurchase";
import FaqAccordion from "./FaqAccordian";
import GamingCheckout from "./GameCheckout";
const diabloRuneshardServiceData = [
  {
    id: "what-you-get",
    question: "What You Will Get",
    answer: (
      <div className="space-y-3">
        <ul className="list-none space-y-3">
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            <span className="text-gray-300">
              The Desired Number Of Runeshards;
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            <span className="text-gray-300">
              Access To Entering The Pit Of The Artificer;
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            <span className="text-gray-300">
              Chance To Obtain Unique, Legendary, And Ancestral Items;
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            <span className="text-gray-300">
              Gold, Materials, And Resources Gathered During Diablo 4 Runeshard
              Carry Service.
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "requirements",
    question: "Requirements",
    answer: (
      <div className="space-y-3">
        <ul className="list-none space-y-3">
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            <span className="text-gray-300">World Tier 3 & 4 Unlocked;</span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            <span className="text-gray-300">
              Main Story Campaign Completed;
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            <span className="text-gray-300">
              If You Have A Physical Copy Of The Game For PS4, PS5, Or Xbox, We
              Only Offer Self-Play Options Since Most Of Our Boosters Have
              Digital Versions Of The Game.
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "how-it-works",
    question: "How It Works",
    answer: (
      <div className="space-y-3">
        <ul className="list-none space-y-3">
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            <span className="text-gray-300">
              Our Support Agent Will Contact You Within 10-15 Minutes After Your
              Order To Clarify Details And Answer Questions Via Live-Chat Or
              Email;
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            <span className="text-gray-300">
              For Piloted — Booster Will Take Your Account And Play For Your
              Character;
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            <span className="text-gray-300">
              We Will Notify You When The Diablo IV Runeshard Farm Service Is
              Completed, And You Can Enjoy The Result. Also, Don&apos;t Forget
              To Leave Reviews About The Service On{" "}
              <a
                href="https://www.trustpilot.com"
                className="text-purple-400 hover:text-purple-300"
              >
                Trustpilot
              </a>
              ;
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            <span className="text-gray-300">
              Feel Free To Tip The Booster If You&apos;re Happy With The
              Service!
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "service-options",
    question: "Service Options",
    answer: (
      <div className="space-y-3">
        <ul className="list-none space-y-3">
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            <span className="text-gray-300">
              Piloted Service: Our expert boosters will play on your account to
              farm the runeshards.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            <span className="text-gray-300">
              Self-Play Service: You play alongside our booster in the same
              party.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            <span className="text-gray-300">
              Coaching Service: Learn efficient farming techniques from our
              professional players.
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "pricing-information",
    question: "Pricing Information",
    answer: (
      <div className="space-y-3">
        <ul className="list-none space-y-3">
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            <span className="text-gray-300">
              Base price starts at €19.00 for basic runeshard farming service.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            <span className="text-gray-300">
              Price scales with the number of runeshards you want to obtain.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            <span className="text-gray-300">
              Self-Play option has an additional €5.00 fee.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            <span className="text-gray-300">
              Coaching service has an additional €10.00 fee.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            <span className="text-gray-300">
              Each order includes all additional items found during the farming
              process.
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "refund-policy",
    question: "Refund Policy",
    answer: (
      <div className="space-y-3">
        <p>We offer a 100% money-back guarantee under these conditions:</p>
        <ul className="list-none space-y-3">
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            <span className="text-gray-300">
              If we are unable to deliver the requested number of runeshards
              within the estimated timeframe.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            <span className="text-gray-300">
              If the service doesn&apos;t meet the description provided on our
              website.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            <span className="text-gray-300">
              For refund requests, please contact our support team via Live-Chat
              or email within 24 hours of service completion.
            </span>
          </li>
        </ul>
      </div>
    ),
  },
];

// export default diabloRuneshardData;
const items = [
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
  {
    name: "Orb Of Fusing",
    image: "/hotSales/image3.png",
    price: "7.68",
    hot: false,
    quantity: 2000,
  },
];

const item = [
  {
    name: "Mythic +2-20 Dungeons Boost X2\nFREE TRADERS",
    image: "/hotSales/image2.png",
    price: "7.68",
    hot: true,
    details: ["597-613 ilvl Gea", "606-623 Weekly Chest", "Quick Start"],
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
    image: "/hotSales/image2.png",
    price: "7.68",
    hot: true,
    details: ["597-613 ilvl Gea", "606-623 Weekly Chest", "Quick Start"],
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
    image: "/hotSales/image2.png",
    price: "7.68",
    hot: true,
    details: ["597-613 ilvl Gea", "606-623 Weekly Chest", "Quick Start"],
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
    image: "/hotSales/image2.png",
    price: "7.68",
    hot: true,
    details: ["597-613 ilvl Gea", "606-623 Weekly Chest", "Quick Start"],
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
const newsItems = [
  {
    imageUrl: "/NewsImages/img1.png",
    category: "GAMING NEWS",
    title: "FF14 Sophia's Assault Strategy Guide",
    author: "Cici",
    date: "2024-05-24",
    previewText:
      "Looking To Take On The Challenge Of Sophia's Assault In FF14? Here's A Comprehensive Strategy Guide To Help You Conquer This Difficult Content.",
    url: "/news/ff14-sophias-assault-strategy",
  },
  {
    imageUrl: "/NewsImages/img2.png",
    category: "GAMING NEWS",
    title: "FF14 Sophia's Assault Strategy Guide",
    author: "Cici",
    date: "2024-05-24",
    previewText:
      "Looking To Take On The Challenge Of Sophia's Assault In FF14? Here's A Comprehensive Strategy Guide To Help You Conquer This Difficult Content.",
    url: "/news/ff14-sophias-assault-strategy-2",
  },
  {
    imageUrl: "/NewsImages/img3.png",
    category: "GAMING NEWS",
    title: "FF14 Sophia's Assault Strategy Guide",
    author: "Cici",
    date: "2024-05-24",
    previewText:
      "Looking To Take On The Challenge Of Sophia's Assault In FF14? Here's A Comprehensive Strategy Guide To Help You Conquer This Difficult Content.",
    url: "/news/ff14-sophias-assault-strategy-3",
  },
  {
    imageUrl: "/NewsImages/img4.png",
    category: "GAMING NEWS",
    title: "FF14 Sophia's Assault Strategy Guide",
    author: "Cici",
    date: "2024-05-24",
    previewText:
      "Looking To Take On The Challenge Of Sophia's Assault In FF14? Here's A Comprehensive Strategy Guide To Help You Conquer This Difficult Content.",
    url: "/news/ff14-sophias-assault-strategy-4",
  },
];
const reviews = [
  {
    id: 1,
    name: "Lucy",
    image: "/reviews/img1.png",
    rating: 5.0,
    comment: "Very Wonderful Experience!Very Wonderful Experience!",
  },
  {
    id: 2,
    name: "Lucy",
    image: "/reviews/img2.png",
    rating: 5.0,
    comment: "Very Wonderful Experience!Very Wonderful Experience!",
  },
  {
    id: 3,
    name: "Lucy",
    image: "/reviews/img3.png",
    rating: 5.0,
    comment: "Very Wonderful Experience!Very Wonderful Experience!",
  },
  {
    id: 4,
    name: "Lucy",
    image: "/reviews/img4.png",
    rating: 5.0,
    comment: "Very Wonderful Experience!Very Wonderful Experience!",
  },
  {
    id: 5,
    name: "Lucy",
    image: "/reviews/img5.png",
    rating: 5.0,
    comment: "Very Wonderful Experience!Very Wonderful Experience!",
  },
  {
    id: 6,
    name: "Lucy",
    image: "/reviews/img6.png",
    rating: 5.0,
    comment: "Very Wonderful Experience!Very Wonderful Experience!",
  },
];

function GamePage({ defaultTab = "gold" }: { defaultTab?: string }) {
  // const [page , setPage] = useState('Gold')
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [cartItems, setCartItems] = useState<any[]>([]);

  const handleAddToCart = (orderDetails: any) => {
    setCartItems((prev) => [...prev, orderDetails]);
    // toast.success('Added to cart!');
    console.log("Added to cart:", orderDetails);
  };

  const handleBuyNow = (orderDetails: any) => {
    console.log("Proceeding to checkout:", orderDetails);
    // Navigate to checkout page or open checkout modal
    // toast.success('Proceeding to checkout!');
  };
  return (
    <div>
      {/* <h1>Hearthstone Game Page</h1> */}
      <GamesBanner
        title={`${
          activeTab === "gold"
            ? "Gold"
            : activeTab === "items"
            ? "Items"
            : "Boost"
        }`}
        imagePath={`${
          activeTab === "gold"
            ? "/banner/gold.png"
            : activeTab === "items"
            ? "/banner/hearthstone.png"
            : "/banner/boost.png"
        }`}
      >
        <span>Home</span>
        <FaChevronRight className="text-xs" />
        <span>Games</span>
        <FaChevronRight className="text-xs" />
        <span>HeartStone</span>
      </GamesBanner>
      <div className="w-full bg-[#0A0F20] text-white p-6">
        {/* Top navigation tabs */}
        <div className="flex border-b border-gray-800">
          <button
            className={`flex items-center px-5 py-3 ${
              activeTab === "gold"
                ? "text-yellow-400 border-b-2 border-yellow-400"
                : "text-gray-400 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("gold")}
          >
            <RiCoinsLine className="mr-2" />
            Gold
          </button>
          <button
            className={`flex items-center px-5 py-3 ${
              activeTab === "items"
                ? "text-purple-400 border-b-2 border-purple-400"
                : "text-gray-400 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("items")}
          >
            <GiSwordWound className="mr-2" />
            Items
          </button>
          <button
            className={`flex items-center px-5 py-3 ${
              activeTab === "boost"
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-gray-400 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("boost")}
          >
            <GiArrowsShield className="mr-2" />
            Boost
          </button>
        </div>
      </div>

      {activeTab === "items" && (
        <>
          <div className="p-4 md:p-6 bg-[#0F1524] text-white transition-opacity duration-700 ease-out opacity-100">
            <InventoryFilter />
          </div>
          <div className="flex items-center justify-center p-4 md:p-6 bg-[#0F1524] text-white">
            <GameInputCard items={items} />
          </div>
          <div className="flex items-center justify-center p-4 md:p-6 bg-[#0F1524] text-white">
            <Pagination
              initialPage={1}
              totalPages={5}
              itemsPerPage={12}
              itemName="News"
            />
          </div>
          <div className="p-4 md:p-6 bg-[#0F1524] text-white">
            <PathOfExileItemPage />
          </div>
        </>
      )}
      {/* Gold section */}

      {activeTab === "gold" && (
        <>
          <div className="p-4 md:p-8 bg-[#0F1524] text-white">
            <GamePurchaseCard
              gameName="Heartstone"
              gameId="1"
              gameImage="/banner/heartstone.png"
            />
          </div>
          <div className="p-4 md:p-8 bg-[#0F1524] text-white">
            <ThroneAndLibertyLucent />
          </div>
        </>
      )}

      {/* Boost section */}

      {activeTab === "boost" && (
        <>
          <div className="p-4 md:p-8 bg-[#0F1524] text-white">
            <GameServicesFilter />
          </div>
          <div className="p-4 md:p-8 bg-[#0F1524] text-white">
            <GameInputCard items={item} />
          </div>
          <div className="flex items-center justify-center p-4 md:p-6 bg-[#0F1524] text-white">
            <Pagination
              initialPage={1}
              totalPages={5}
              itemsPerPage={12}
              itemName="News"
            />
          </div>
          <div className="p-6 md:p-8 bg-[#0F1524] text-white">
            <D4BoostingFAQPage />
          </div>
        </>
      )}
      {activeTab === "order" && (
        <>
          <div className="p-4 md:p-8 bg-[#0F1524] text-white">
            <DiabloRuneshardPurchase
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
            />
          </div>
          <div className="p-4 md:p-8 bg-[#0F1524] text-white">
            <FaqAccordion faqItems={diabloRuneshardServiceData} />
          </div>

          {/* <div className="p-4 md:p-8 bg-[#0F1524] text-white">
            <GameInputCard items={item} />
          </div>
          <div className="flex items-center justify-center p-4 md:p-6 bg-[#0F1524] text-white">
            <Pagination
              initialPage={1}
              totalPages={5}
              itemsPerPage={12}
              itemName="News"
            />
          </div>
          <div className="p-6 md:p-8 bg-[#0F1524] text-white">
            <D4BoostingFAQPage />
          </div> */}
        </>
      )}
      {activeTab === "checkout" && (
        <>
          <div className="p-4 md:p-8 bg-[#0F1524] text-white">
            <GamingCheckout />
          </div>
        </>
      )}
      {/* News section */}
      {/* <div className="p-4 md:p-6 bg-[#0F1524] text-white">
        <NewsSection newsItems={newsItems} />
      </div>
      <div className="p-4 md:p-6 bg-[#0F1524] text-white flex justify-center items-center">
        <CustomerReviews reviews={reviews} />
      </div>
      <div className="flex  justify-center p-4 md:p-1 bg-[#0F1524] text-white">
        <Pagination
          initialPage={1}
          totalPages={5}
          itemsPerPage={12}
          itemName="News"
        />
      </div> */}
    </div>
  );
}

export default GamePage;
