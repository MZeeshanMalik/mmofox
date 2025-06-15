import CustomerReviews from "@/components/game/CustomerReviews";
import NewsSection from "@/components/game/NewsSection";
import Pagination from "@/components/Ui/Pagination";

const newsItems = [
  {
    imageUrl: "/NewsImages/img1.png",
    category: "GAMING NEWS",
    title: "FF14 Sophia's Assault Strategy Guide",
    author: "Cici",
    date: "2024-05-24",
    previewText:
      "Looking To Take On The Challenge Of Sophia's Assault In FF14? Here's A Comprehensive Strategy Guide To Help You Conquer This Difficult Content.",
    url: "/news/ff14-sophias-assault-strategy",
  },
  {
    imageUrl: "/NewsImages/img2.png",
    category: "GAMING NEWS",
    title: "FF14 Sophia's Assault Strategy Guide",
    author: "Cici",
    date: "2024-05-24",
    previewText:
      "Looking To Take On The Challenge Of Sophia's Assault In FF14? Here's A Comprehensive Strategy Guide To Help You Conquer This Difficult Content.",
    url: "/news/ff14-sophias-assault-strategy-2",
  },
  {
    imageUrl: "/NewsImages/img3.png",
    category: "GAMING NEWS",
    title: "FF14 Sophia's Assault Strategy Guide",
    author: "Cici",
    date: "2024-05-24",
    previewText:
      "Looking To Take On The Challenge Of Sophia's Assault In FF14? Here's A Comprehensive Strategy Guide To Help You Conquer This Difficult Content.",
    url: "/news/ff14-sophias-assault-strategy-3",
  },
  {
    imageUrl: "/NewsImages/img4.png",
    category: "GAMING NEWS",
    title: "FF14 Sophia's Assault Strategy Guide",
    author: "Cici",
    date: "2024-05-24",
    previewText:
      "Looking To Take On The Challenge Of Sophia's Assault In FF14? Here's A Comprehensive Strategy Guide To Help You Conquer This Difficult Content.",
    url: "/news/ff14-sophias-assault-strategy-4",
  },
];
const reviews = [
  {
    id: 1,
    name: "Lucy",
    image: "/reviews/img1.png",
    rating: 5.0,
    comment: "Very Wonderful Experience!Very Wonderful Experience!",
  },
  {
    id: 2,
    name: "Lucy",
    image: "/reviews/img2.png",
    rating: 5.0,
    comment: "Very Wonderful Experience!Very Wonderful Experience!",
  },
  {
    id: 3,
    name: "Lucy",
    image: "/reviews/img3.png",
    rating: 5.0,
    comment: "Very Wonderful Experience!Very Wonderful Experience!",
  },
  {
    id: 4,
    name: "Lucy",
    image: "/reviews/img4.png",
    rating: 5.0,
    comment: "Very Wonderful Experience!Very Wonderful Experience!",
  },
  {
    id: 5,
    name: "Lucy",
    image: "/reviews/img5.png",
    rating: 5.0,
    comment: "Very Wonderful Experience!Very Wonderful Experience!",
  },
  {
    id: 6,
    name: "Lucy",
    image: "/reviews/img6.png",
    rating: 5.0,
    comment: "Very Wonderful Experience!Very Wonderful Experience!",
  },
];
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <div className="p-4 md:p-6 bg-[#0F1524] text-white">
          <NewsSection newsItems={newsItems} />
        </div>
        <div className="p-4 md:p-6 bg-[#0F1524] text-white flex justify-center items-center">
          <CustomerReviews reviews={reviews} />
        </div>
        <div className="flex  justify-center p-4 md:p-1 bg-[#0F1524] text-white">
          <Pagination
            initialPage={1}
            totalPages={5}
            itemsPerPage={12}
            itemName="News"
          />
        </div>
      </body>
    </html>
  );
}
