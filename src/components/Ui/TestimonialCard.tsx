// import Image from "next/image";
// import React from "react";
// import { FaStar } from "react-icons/fa";

// interface TestimonialCardProps {
//   name: string;
//   avatarUrl: string;
//   rating: number; // e.g. 5.0
//   review: string;
// }

// export const TestimonialCard: React.FC<TestimonialCardProps> = ({
//   name,
//   avatarUrl,
//   rating,
//   review,
//   reverse = false,
// }) => {
//   // round to one decimal
//   const formattedRating = rating.toFixed(1);

//   return (
//     <div className="relative bg-[#1e203c] text-gray-100 max-w-md w-full p-5 rounded-2xl shadow-lg">
//       {/* speech-bubble tail */}
//       <div
//         className="absolute left-8 -bottom-2 w-4 h-4 bg-[#1e203c] transform rotate-45"
//         aria-hidden="true"
//       />
//       {/* Header: avatar + name + stars */}
//       <div className="flex items-center justify-between mb-3">
//         <div className="flex items-center space-x-3">
//           <Image
//             height={12}
//             width={12}
//             src={avatarUrl}
//             alt={name}
//             className="w-10 h-10 rounded-full object-cover"
//           />
//           <span className="font-medium text-gray-200">{name}</span>
//         </div>
//         <div className="flex items-center space-x-1 text-purple-400">
//           {/* stars */}
//           {[...Array(5)].map((_, i) => (
//             <FaStar key={i} className="w-4 h-4" />
//           ))}
//           <span className="ml-1 font-semibold">{formattedRating}</span>
//         </div>
//       </div>

//       {/* Review text */}
//       <p className="text-gray-200 leading-relaxed">{review}</p>
//     </div>
//   );
// };
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

interface TestimonialCardProps {
  name: string;
  avatarUrl: string;
  rating: number; // e.g. 5.0
  review: string;
  reverse?: boolean; // new!
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  avatarUrl,
  rating,
  review,
  reverse = false,
}) => {
  const formattedRating = rating.toFixed(1);

  // Tail position: left by default, right if reversed
  const tailPosition = reverse
    ? "right-8 rotate-[225deg]"
    : "left-8 -rotate-45";

  // Header container: swap children when reversed
  const headerDirection = reverse ? "flex-row-reverse" : "";

  return (
    <div className="relative bg-[#1e203c] text-gray-100 max-w-md w-full p-5 rounded-2xl shadow-lg">
      {/* speech-bubble tail */}
      <div
        className={`absolute ${tailPosition} -bottom-2 w-4 h-4 bg-[#1e203c]`}
        aria-hidden="true"
      />

      {/* Header: avatar + name  &  stars + rating */}
      <div
        className={`flex items-center justify-between mb-3 ${headerDirection}`}
      >
        {/* Avatar + Name */}
        <div className="flex items-center space-x-3">
          <Image
            width={40}
            height={40}
            src={avatarUrl}
            alt={name}
            className="rounded-full object-cover"
          />
          <span className="font-medium text-gray-200">{name}</span>
        </div>

        {/* Stars + Rating */}
        <div className="flex items-center space-x-1 text-purple-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="w-4 h-4" />
          ))}
          <span className="ml-1 font-semibold">{formattedRating}</span>
        </div>
      </div>

      {/* Review text */}
      <p className="text-gray-200 leading-relaxed">{review}</p>
    </div>
  );
};
