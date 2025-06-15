import React from "react";

/**
 * GradientTitle Component
 *
 * A simple title component with a purple gradient background
 *
 * @param {Object} props
 * @param {string} props.text - Text to display in the title
 */
const GradientTitle = ({ text }: { text: string }) => {
  return (
    <div
      className="
        py-2.5 px-5 mb-4 
        rounded-md
        bg-gradient-to-r from-[#A855F736] to-[#cc00ff0c]
        border-l-4 border-l-[#A855F7] 
        text-white font-medium
      "
    >
      {text}
    </div>
  );
};

export default GradientTitle;
