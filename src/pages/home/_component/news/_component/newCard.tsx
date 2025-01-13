import { NewsCardProps } from "..";

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  category,
  date,
  image,
  description,
  likes,
  comments,
  shares,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="w-full h-48 relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <p className="absolute bottom-0 left-0 text-sm bg-white pt-2 px-4 rounded-tr-lg">
          <span className="text-bold text-teal-500">{category}</span> • {date}
        </p>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
        <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
          <div className="flex items-center space-x-2">
            <span>👍 {likes}</span>
            <span>💬 {comments}</span>
            <span>🔗 {shares}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
