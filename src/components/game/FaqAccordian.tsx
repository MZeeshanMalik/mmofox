import React, { useState } from "react";
import { IoChevronUpCircleOutline } from "react-icons/io5";
// import { ChevronUpIcon } from '@heroicons/react/24/solid';

interface FaqItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

interface FaqAccordionProps {
  title?: string;
  faqItems: FaqItem[];
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({
  title = "FAQ About D4 Boosting Service",
  faqItems,
}) => {
  const [openItems, setOpenItems] = useState<string[]>(
    faqItems.map((item) => item.id)
  );

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-[#0C111F] text-gray-300 rounded-lg">
      <h2 className="text-xl font-medium text-white p-6">{title}</h2>

      <div className="space-y-3 pb-6">
        {faqItems.map((item) => (
          <div key={item.id} className="rounded-md overflow-hidden">
            {/* Question header */}
            <button
              className="w-full flex items-center justify-between bg-[#1E1F4A]/30 p-4 text-left hover:bg-[#1E1F4A]/40 transition-colors py-2.5 px-5 mb-4 
        rounded-md
        bg-gradient-to-r from-[#A855F736] to-[#cc00ff0c]
        border-l-4 border-l-[#A855F7] 
        text-white font-medium"
              onClick={() => toggleItem(item.id)}
            >
              <span className="text-sm md:text-base font-medium text-white">
                {item.question}
              </span>
              <div
                className={`h-6 w-8 rounded-md bg-purple-700 flex items-center justify-center transform transition-transform ${
                  openItems.includes(item.id) ? "rotate-180" : ""
                }`}
              >
                <IoChevronUpCircleOutline className="h-4 w-4 text-white" />
              </div>
            </button>

            {/* Answer content */}
            {openItems.includes(item.id) && (
              <div className="bg-[#0C111F] p-4 text-sm">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
