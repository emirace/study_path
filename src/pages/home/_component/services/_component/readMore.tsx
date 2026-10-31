import { useId, useState } from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

export default function ReadMore({ text }: { text: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentId = useId();
  const limit = 105;
  return (
    <div className="home-read-more">
      <p id={contentId}>{isExpanded || text.length <= limit ? text : `${text.slice(0, text.lastIndexOf(" ", limit))}…`}</p>
      {text.length > limit && <button type="button" aria-expanded={isExpanded} aria-controls={contentId} onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? "Read less" : "Read more"} {isExpanded ? <FiArrowUp /> : <FiArrowDown />}</button>}
    </div>
  );
}
