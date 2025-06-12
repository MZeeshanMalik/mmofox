// components/SidebarButtons.tsx
"use client";
import { useEffect } from "react";

const SidebarButtons = () => {
  useEffect(() => {
    // Prevent dragging
    const buttons = document.querySelectorAll(".fixed-button");
    buttons.forEach((btn) => btn.setAttribute("draggable", "false"));
  }, []);

  return (
    <div className="fixed right-4 top-1/3 z-50 flex flex-col space-y-3">
      <button className="fixed-button bg-purple-500 text-white p-3 rounded-full shadow-md">
        💬
      </button>
      <button className="fixed-button bg-green-500 text-white p-3 rounded-full shadow-md">
        🛒
      </button>
      <button className="fixed-button bg-orange-500 text-white p-3 rounded-full shadow-md">
        ⚙️
      </button>
    </div>
  );
};

export default SidebarButtons;
