"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import NewsCard from "../Ui/NewsCard";

type NewsItem = {
  imageUrl: string;
  category: string;
  title: string;
  author: string;
  date: string;
  previewText: string;
  url: string;
};

interface NewsSectionProps {
  title?: string;
  newsItems: NewsItem[];
  maxNewsItems?: number;
  viewAllUrl?: string;
}

const NewsSection: React.FC<NewsSectionProps> = ({
  title = "Gaming News",
  newsItems,
  maxNewsItems = 4,
  viewAllUrl = "/news",
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate visible items based on screen size
  const visibleItems = isMobile
    ? Math.min(newsItems.length, 2)
    : Math.min(newsItems.length, maxNewsItems);

  return (
    <section className="w-full bg-[#0A0F20] py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-xl md:text-2xl font-bold">{title}</h2>
          <Link
            href={viewAllUrl}
            className="text-sm text-gray-400 hover:text-white flex items-center"
          >
            MORE NEWS
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {newsItems.slice(0, visibleItems).map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
