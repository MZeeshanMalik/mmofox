"use client";
import { useState } from "react";
import Image from "next/image";
import {
  FaUser,
  FaMinus,
  FaPlus,
  FaTimes,
  FaCheck,
  FaTicketAlt,
} from "react-icons/fa";
import { BsCreditCard2Front } from "react-icons/bs";
import {
  SiGooglepay,
  SiApplepay,
  SiVisa,
  SiMastercard,
  SiStripe,
} from "react-icons/si";

interface CartItem {
  id: string;
  name: string;
  server: string;
  platform: string;
  quantity: number;
  price: number;
  image: string;
}

interface Coupon {
  id: string;
  label: string;
  discount: string;
  isRecommended?: boolean;
}

const GamingCheckout = () => {
  // States
  const [activeTab, setActiveTab] = useState("face-to-face");
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");
  const [selectedPayment, setSelectedPayment] = useState(
    "mastercard-visa-stripe"
  );
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "World Of Warcraft Game Coins",
      server: "Season 6 - Softcore",
      platform: "PC",
      quantity: 2000,
      price: 12.68,
      image: "/images/wow-coins.jpg",
    },
    {
      id: "2",
      name: "World Of Warcraft Game Coins",
      server: "Season 6 - Softcore",
      platform: "PC",
      quantity: 2000,
      price: 12.68,
      image: "/images/wow-coins.jpg",
    },
  ]);

  // Available coupons
  const coupons: Coupon[] = [
    { id: "percent15", label: "15% Off", discount: "15%" },
    {
      id: "fixed1255",
      label: "$12.55 Off",
      discount: "$12.55",
      isRecommended: true,
    },
    { id: "fixed888", label: "$8.88 Off", discount: "$8.88" },
    { id: "fixed600", label: "$6.00 Off", discount: "$6.00" },
  ];

  // Calculate total
  // const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  const total = 23.68; // Hard-coding the total to match the image, in a real app you'd calculate this

  const handleQuantityChange = (id: string, change: number) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(100, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 bg-[#0A0F20] text-gray-300 p-4 md:p-6 rounded-lg max-w-6xl mx-auto">
      {/* Left Column - Player Info & Payment Method */}
      <div className="flex flex-col w-full md:w-1/2 space-y-6">
        {/* Player Information */}
        <div className="bg-[#101828] rounded-lg p-5">
          <h2 className="text-white text-lg mb-4">Player Information</h2>

          {/* Tabs */}
          <div className="flex mb-4">
            <button
              onClick={() => setActiveTab("face-to-face")}
              className={`px-4 py-2 rounded-md mr-2 flex items-center ${
                activeTab === "face-to-face"
                  ? "bg-[#5D23A5] text-white"
                  : "bg-[#1A2235] text-gray-400"
              }`}
            >
              <span>Face To Face</span>
              {activeTab === "face-to-face" && (
                <span className="ml-2 bg-purple-700 p-1 rounded-full">
                  <FaCheck className="h-2 w-2 text-white" />
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab("in-game-mail")}
              className={`px-4 py-2 rounded-md ${
                activeTab === "in-game-mail"
                  ? "bg-[#5D23A5] text-white"
                  : "bg-[#1A2235] text-gray-400"
              }`}
            >
              <span>In-Game Mail</span>
            </button>
          </div>

          {/* User ID Input */}
          <div className="mb-4">
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Ubisoft ID"
                className="w-full bg-[#0D1323] border border-[#1F2A44] rounded-md py-3 pl-10 pr-3 text-white focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          {/* Message Area */}
          <div className="mb-4">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Leave A Message Here..."
              className="w-full h-24 bg-[#0D1323] border border-[#1F2A44] rounded-md p-3 text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          {/* Notes */}
          <div className="bg-[#291F32] border border-[#5D235A] rounded-md p-4 text-sm">
            <p className="text-pink-400 font-medium mb-1">Note:</p>
            <p className="text-gray-200">
              1. Please Provide Us Your Right Ubisoft ID.
            </p>
            <p className="text-gray-200">
              2. Accept Our Friend Request In Game.
            </p>
            <p className="text-gray-200">
              3. We Will Join Your Team And Trade You.
            </p>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-[#101828] rounded-lg p-5">
          <h2 className="text-white text-lg mb-4">Payment Method</h2>

          <div className="grid grid-cols-2 gap-4">
            {/* MasterCard/Visa/Stripe */}
            <button
              onClick={() => setSelectedPayment("mastercard-visa-stripe")}
              className={`flex items-center justify-center relative h-16 rounded-md ${
                selectedPayment === "mastercard-visa-stripe"
                  ? "bg-[#131E3A] border border-[#5D23A5]"
                  : "bg-[#131E3A] border border-[#1F2A44]"
              }`}
            >
              <div className="flex items-center gap-2">
                <SiMastercard className="text-xl text-orange-500" />
                <SiVisa className="text-xl text-blue-500" />
                <SiStripe className="text-xl text-blue-600" />
              </div>
              {selectedPayment === "mastercard-visa-stripe" && (
                <span className="absolute top-2 right-2 bg-purple-700 p-1 rounded-full">
                  <FaCheck className="h-2 w-2 text-white" />
                </span>
              )}
              <span className="absolute bottom-1 text-xs text-gray-400">
                Master/Isa(Stripe)
              </span>
            </button>

            {/* MasterCard/Visa/OnlyPay */}
            <button
              onClick={() => setSelectedPayment("mastercard-visa-onlypay")}
              className={`flex items-center justify-center relative h-16 rounded-md ${
                selectedPayment === "mastercard-visa-onlypay"
                  ? "bg-[#131E3A] border border-[#5D23A5]"
                  : "bg-[#131E3A] border border-[#1F2A44]"
              }`}
            >
              <div className="flex items-center gap-2">
                <SiMastercard className="text-xl text-orange-500" />
                <SiVisa className="text-xl text-blue-500" />
                <BsCreditCard2Front className="text-xl text-gray-300" />
              </div>
              {selectedPayment === "mastercard-visa-onlypay" && (
                <span className="absolute top-2 right-2 bg-purple-700 p-1 rounded-full">
                  <FaCheck className="h-2 w-2 text-white" />
                </span>
              )}
              <span className="absolute bottom-1 text-xs text-gray-400">
                Master/Visa(OnlyPay)
              </span>
            </button>

            {/* GPay/Apple Pay */}
            <button
              onClick={() => setSelectedPayment("gpay-apple-pay")}
              className={`flex items-center justify-center relative h-16 rounded-md ${
                selectedPayment === "gpay-apple-pay"
                  ? "bg-[#131E3A] border border-[#5D23A5]"
                  : "bg-[#131E3A] border border-[#1F2A44]"
              }`}
            >
              <div className="flex items-center gap-2">
                <SiGooglepay className="text-xl text-white" />
                <SiApplepay className="text-xl text-white" />
              </div>
              {selectedPayment === "gpay-apple-pay" && (
                <span className="absolute top-2 right-2 bg-purple-700 p-1 rounded-full">
                  <FaCheck className="h-2 w-2 text-white" />
                </span>
              )}
              <div className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs px-2 py-0.5 rounded">
                2.5% Fee
              </div>
              <span className="absolute bottom-1 text-xs text-gray-400">
                Gpay/Apple Pay
              </span>
            </button>

            {/* Sofort/P24/iDEAL/Giropay */}
            <button
              onClick={() => setSelectedPayment("sofort-p24-ideal-giropay")}
              className={`flex items-center justify-center relative h-16 rounded-md ${
                selectedPayment === "sofort-p24-ideal-giropay"
                  ? "bg-[#131E3A] border border-[#5D23A5]"
                  : "bg-[#131E3A] border border-[#1F2A44]"
              }`}
            >
              <div className="flex flex-wrap items-center justify-center w-full px-2">
                <div className="text-[10px] bg-orange-500 text-white font-bold px-1 m-0.5 rounded">
                  SOFORT
                </div>
                <div className="text-[10px] bg-red-500 text-white font-bold px-1 m-0.5 rounded">
                  P24
                </div>
                <div className="text-[10px] bg-blue-600 text-white font-bold px-1 m-0.5 rounded">
                  iDEAL
                </div>
                <div className="text-[10px] bg-gray-700 text-white font-bold px-1 m-0.5 rounded">
                  Giropay
                </div>
              </div>
              {selectedPayment === "sofort-p24-ideal-giropay" && (
                <span className="absolute top-2 right-2 bg-purple-700 p-1 rounded-full">
                  <FaCheck className="h-2 w-2 text-white" />
                </span>
              )}
              <span className="absolute bottom-1 text-xs text-gray-400">
                Sofort/P24/IDEAL/Giropay
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Column - Payment/Cart */}
      <div className="w-full md:w-1/2 bg-[#101828] rounded-lg p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-lg">Payment</h2>
        </div>

        {/* Cart Items */}
        <div className="space-y-4 mb-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#0D1323] rounded-lg flex overflow-hidden relative"
            >
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-white"
                onClick={() => handleRemoveItem(item.id)}
              >
                <FaTimes />
              </button>
              <div className="w-24 h-24 relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-3 flex-1">
                <h3 className="text-white font-medium">{item.name}</h3>
                <div className="text-xs text-purple-400">
                  <div>Server : {item.server}</div>
                  <div>Platfora : {item.platform}</div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center">
                    <span className="text-gray-400 text-sm mr-2">
                      Quantity(G):
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.id, -100)}
                      className="bg-[#1A2235] p-1 rounded"
                    >
                      <FaMinus className="h-3 w-3" />
                    </button>
                    <span className="mx-2 min-w-[40px] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 100)}
                      className="bg-[#1A2235] p-1 rounded"
                    >
                      <FaPlus className="h-3 w-3" />
                    </button>
                  </div>
                  <div className="text-pink-500 font-bold">
                    € {item.price.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sale Info */}
        <div className="bg-[#1A2235] p-2 rounded-md mb-4 text-xs">
          <p className="text-gray-400">TKS & Black Friday 8% Sales</p>
          <p className="text-gray-400">Available At</p>
          <p className="text-gray-400">Least $1.00</p>
          <p className="text-gray-400">Start: Nov 20, 2024</p>
          <p className="text-gray-400">Deadline: Dec 02,2024</p>
        </div>

        {/* Coupons Section */}
        <div className="mb-4">
          <p className="text-sm text-gray-400 mb-2">My Coupons:</p>
          <div className="grid grid-cols-2 gap-2">
            {coupons.map((coupon) => (
              <button
                key={coupon.id}
                className={`flex items-center justify-between px-4 py-2 rounded-md ${
                  coupon.isRecommended
                    ? "bg-[#1F2A44] border border-[#5D23A5]"
                    : "bg-[#1A2235] border border-[#1F2A44]"
                }`}
              >
                <div className="flex items-center">
                  <FaTicketAlt className="text-orange-400 mr-2" />
                  <span>{coupon.discount}</span>
                </div>
                {coupon.isRecommended && (
                  <span className="ml-2 bg-purple-700 p-1 rounded-full">
                    <FaCheck className="h-2 w-2 text-white" />
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Show More */}
        <div className="flex justify-end mb-4">
          <button className="text-sm text-purple-400">Show More &gt;</button>
        </div>

        {/* Payment Fee */}
        <div className="flex justify-between mb-4">
          <p className="text-gray-400">Payment Fee :</p>
          <p className="text-white">€ {total.toFixed(2)}</p>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-400">Total :</p>
          <p className="text-2xl text-pink-500 font-bold">
            € <span className="text-3xl">{Math.floor(total)}</span>.
            {((total % 1) * 100).toFixed(0).padStart(2, "0")}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md font-medium">
            PLACE ORDER NOW
          </button>
          <button
            onClick={handleClearCart}
            className="w-full bg-transparent text-pink-500 hover:text-pink-400 py-2"
          >
            CLEAR CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default GamingCheckout;
