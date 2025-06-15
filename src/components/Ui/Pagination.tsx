"use client";
import { useState } from "react";
import {
  IoChevronBack,
  IoChevronForward,
  IoChevronDown,
} from "react-icons/io5";

type PaginationProps = {
  initialPage?: number;
  totalPages?: number;
  itemsPerPage?: number;
  itemName?: string;
  onPageChange?: (page: number) => void;
  onItemsPerPageChange?: (amount: number) => void;
};

const Pagination = ({
  initialPage = 1,
  totalPages = 5,
  itemsPerPage = 12,
  itemName = "News",
  onPageChange,
  onItemsPerPageChange,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [showDropdown, setShowDropdown] = useState(false);
  const [itemsPerPageState, setItemsPerPageState] = useState(itemsPerPage);

  // Options for items per page dropdown
  const itemsPerPageOptions = [12, 24, 36, 48];

  // Calculate visible page numbers
  const getVisiblePages = () => {
    // For small number of pages, show all
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Otherwise, show current page and neighbors
    if (currentPage <= 3) {
      return [1, 2, 3, 4, 5];
    } else if (currentPage >= totalPages - 2) {
      return [
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    } else {
      return [
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
      ];
    }
  };

  const visiblePages = getVisiblePages();

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) {
      return;
    }

    setCurrentPage(page);
    if (onPageChange) {
      onPageChange(page);
    }
  };

  interface HandleItemsPerPageChange {
    (amount: number): void;
  }

  const handleItemsPerPageChange: HandleItemsPerPageChange = (amount) => {
    setItemsPerPageState(amount);
    setShowDropdown(false);

    if (onItemsPerPageChange) {
      onItemsPerPageChange(amount);
    }
  };

  return (
    <div className="flex items-center justify-between px-4 py-2">
      <div className="flex items-center space-x-2">
        {/* Previous page button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-10 h-10 rounded-md flex items-center justify-center bg-[#101828] text-gray-400 hover:bg-[#1A2235] transition-colors"
          aria-label="Previous page"
        >
          <IoChevronBack size={18} />
        </button>

        {/* Page numbers */}
        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-10 h-10 rounded-md flex items-center justify-center transition-colors ${
              currentPage === page
                ? "bg-purple-600 text-white"
                : "bg-[#101828] text-gray-300 hover:bg-[#1A2235]"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next page button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-10 h-10 rounded-md flex items-center justify-center bg-[#101828] text-gray-400 hover:bg-[#1A2235] transition-colors"
          aria-label="Next page"
        >
          <IoChevronForward size={18} />
        </button>
      </div>

      {/* Items per page dropdown */}
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center space-x-2 bg-[#101828] hover:bg-[#1A2235] px-4 py-2 rounded-md text-gray-300 transition-colors"
        >
          <span>
            Show {itemsPerPageState} {itemName}
          </span>
          <IoChevronDown
            size={16}
            className={`transform transition-transform ${
              showDropdown ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown menu */}
        {showDropdown && (
          <div className="absolute right-0 mt-1 w-full bg-[#1A2235] border border-[#2A3548] rounded-md shadow-lg z-10">
            {itemsPerPageOptions.map((option) => (
              <button
                key={option}
                onClick={() => handleItemsPerPageChange(option)}
                className={`block w-full text-left px-4 py-2 hover:bg-[#2A3548] ${
                  itemsPerPageState === option
                    ? "bg-[#2A3548] text-purple-400"
                    : "text-gray-300"
                }`}
              >
                {option} {itemName}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagination;
