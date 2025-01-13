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
      title: "Study Tips to Ace Your Exams",
      category: "Study Tips",
      date: "Jan 11, 2025",
      image: IMAGES.new1,
      description:
        "Master your exams with these proven study techniques and strategies for success.",
      likes: 245,
      comments: 67,
      shares: 32,
    },
    {
      title: "Best Scholarship Opportunities in 2025",
      category: "Scholarship News",
      date: "Jan 10, 2025",
      image: IMAGES.new2,
      description:
        "Explore top scholarship programs available in 2025 to help fund your education.",
      likes: 198,
      comments: 54,
      shares: 21,
    },
    {
      title: "How to Manage Time as a Student",
      category: "Student Life",
      date: "Jan 09, 2025",
      image: IMAGES.new3,
      description:
        "Learn effective time management tips to balance studies, extracurriculars, and rest.",
      likes: 310,
      comments: 85,
      shares: 43,
    },
  ];

  return (
    <section id="blog" className="py-16 p-4 max-w-5xl mx-auto">
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
