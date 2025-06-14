"use client";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";

interface CartItem {
  id: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
  currency: string;
}

interface CartModalProps {
  onClose: () => void;
}

const CartModal = ({ onClose }: CartModalProps) => {
  // Sample cart items - in a real app, you would get this from context or props
  const cartItems: CartItem[] = [
    {
      id: "1",
      name: "World Of Warcraft Game Coins",
      image: "/games/wow.png", // Update with correct path
      quantity: 2000,
      price: 12.48,
      currency: "€",
    },
    {
      id: "2",
      name: "World Of Warcraft Game Coins",
      image: "/games/wow.png", // Update with correct path
      quantity: 2000,
      price: 12.48,
      currency: "€",
    },
  ];

  return (
    <div className="bg-[#1A2235] rounded-md shadow-xl w-[320px] overflow-hidden">
      {/* Cart Items */}
      <div className="max-h-[350px] overflow-y-auto">
        {cartItems.map((item) => (
          <div key={item.id} className="p-4 border-b border-gray-700 relative">
            {/* Close button */}
            <button
              onClick={() => {
                /* Remove item logic */
              }}
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
            >
              <IoCloseOutline size={20} />
            </button>

            {/* Item content */}
            <div className="flex gap-3">
              {/* Item image */}
              <div className="w-14 h-14 flex-shrink-0">
                <Image
                  src={item.image}
                  width={56}
                  height={56}
                  alt={item.name}
                  className="rounded-md"
                />
              </div>

              {/* Item details */}
              <div className="flex-grow">
                <h3 className="text-sm text-white mb-1">{item.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">
                    x {item.quantity}
                  </span>
                  <span className="text-white font-semibold">
                    {item.currency}{" "}
                    <span className="text-purple-500">
                      {item.price.toFixed(2)}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="p-3">
        <button
          onClick={() => {
            /* View all items logic */
          }}
          className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md w-full transition-colors"
        >
          VIEW ALL
        </button>
      </div>
    </div>
  );
};

export default CartModal;
