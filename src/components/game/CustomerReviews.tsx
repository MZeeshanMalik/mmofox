// import ReviewCard from './ReviewCard';

import ReviewCard from "../Ui/ReviewCard";

interface Review {
  id: string | number;
  name: string;
  image: string;
  rating: number;
  comment: string;
}

interface CustomerReviewsProps {
  title?: string;
  reviews: Review[];
}

const CustomerReviews: React.FC<CustomerReviewsProps> = ({
  title = "Customer Reviews",
  reviews,
}) => {
  return (
    <section className="w-full bg-[#0A0F20] py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-xl md:text-2xl font-bold mb-6">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              name={review.name}
              image={review.image}
              rating={review.rating}
              comment={review.comment}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
