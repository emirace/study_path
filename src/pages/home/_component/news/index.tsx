import IMAGES from "../../../../assets/images/images";
import NewsCard from "./_component/newCard";

export interface NewsCardProps {
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
  likes: number;
  comments: number;
  shares: number;
}

const NewsSection: React.FC = () => {
  const newsItems = [
    {
      title: "Preview About Future Incentives For Truck Drivers",
      category: "Truck News",
      date: "Jan 11, 2025",
      image: IMAGES.new1,
      description:
        "Learn more about upcoming incentives and opportunities for truck drivers to boost their career.",
      likes: 123,
      comments: 45,
      shares: 10,
    },
    {
      title: "Payment Options — Things You Should Know",
      category: "Finance News",
      date: "Jan 10, 2025",
      image: IMAGES.new2,
      description:
        "Discover the best payment options for managing your finances efficiently.",
      likes: 89,
      comments: 23,
      shares: 8,
    },
    {
      title: "5 Secrets To Boosting Your Employees",
      category: "Work News",
      date: "Jan 09, 2025",
      image: IMAGES.new3,
      description:
        "Unlock the potential of your workforce with these 5 proven tips for success.",
      likes: 102,
      comments: 36,
      shares: 12,
    },
  ];

  return (
    <section className="py-16 p-4 max-w-5xl mx-auto">
      <div className="w-full mx-auto">
        <p className="text-teal-500 uppercase font-semibold tracking-wide text-sm">
          LATEST UPDATE
        </p>
        <div className="flex flex-col md:flex-row md:items-center mb-12 w-full">
          <h2 className="text-3xl md:text-4xl md:w-1/2 font-bold mb-2">
            News Insights
          </h2>
          <p className="pl-4 border-l-2 md:w-1/2 mt-2">
            Stay updated with the latest news, insights, and trends. Explore
            stores that inspire, inform, and keep you connected to what matters
            most
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
