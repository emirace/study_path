import { NewsCardProps } from "..";

const NewsCard: React.FC<NewsCardProps> = ({ title, category, date, image, description }) => (
  <article className="home-news-card">
    <img src={image} alt="" loading="lazy" />
    <div><p className="home-news-meta"><span>{category}</span><time>{date}</time></p><h3>{title}</h3><p>{description}</p></div>
  </article>
);
export default NewsCard;
