import Image from "next/image";
import Link from "next/link";

type NewsCardProps = {
  imageUrl: string;
  category?: string;
  title: string;
  author: string;
  date: string | Date;
  previewText: string;
  url?: string;
};

const NewsCard = ({
  imageUrl,
  category = "GAMING NEWS",
  title,
  author,
  date,
  previewText,
  url = "#",
}: NewsCardProps) => {
  // Format date if provided as timestamp
  const formattedDate =
    date instanceof Date
      ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
          2,
          "0"
        )}-${String(date.getDate()).padStart(2, "0")}`
      : date;

  return (
    <Link href={url}>
      <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-[#141C2F] border border-[#1F2A44] transition-transform hover:-translate-y-1 hover:shadow-md">
        {/* Image container with fixed aspect ratio */}
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content area */}
        <div className="flex flex-col flex-grow p-4">
          {/* Category badge */}
          <div className="inline-flex mb-2">
            <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-md uppercase tracking-wider font-medium">
              {category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
            {title}
          </h3>

          {/* Author and date */}
          <div className="flex items-center text-sm text-gray-400 mb-3 space-x-4">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
              <span>{author}</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              <span>{formattedDate}</span>
            </div>
          </div>

          {/* Preview text with truncation */}
          <p className="text-gray-300 text-sm line-clamp-2 mt-auto">
            {previewText}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
