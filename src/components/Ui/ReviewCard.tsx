import Image from "next/image";

interface ReviewCardProps {
  name: string;
  image: string;
  rating: number;
  comment: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  image,
  rating,
  comment,
}) => {
  return (
    <div className="bg-[#111A2F] rounded-xl p-4 flex items-start gap-4 border border-[#1F2A44]">
      {/* User Image */}
      <div className="flex-shrink-0">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
      </div>

      {/* Review Content */}
      <div className="flex-1">
        {/* User Name */}
        <div className="text-gray-400 text-sm mb-1">{name}</div>

        {/* Review Text */}
        <p className="text-white text-sm mb-2">{comment}</p>
      </div>

      {/* Rating */}
      <div className="flex-shrink-0 flex items-center">
        <div className="flex mr-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-purple-500 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
        <span className="text-purple-500 text-sm font-medium">
          {rating.toFixed(1)}
        </span>
      </div>
    </div>
  );
};

export default ReviewCard;
