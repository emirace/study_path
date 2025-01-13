import { useState } from "react";
import { FiPlus } from "react-icons/fi";

function ReadMore({ text }: { text: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 65;
  return (
    <div className="relative w-full">
      {isExpanded ? (
        <p className="md:absolute md:top-0 md:left-0 text-gray-200 mb-4 bg-teal-600 md:p-2 w-full z-10 md:shadow-md">
          {text}
        </p>
      ) : (
        <p className="text-gray-200 mb-4  "> {`${text.slice(0, limit)}...`}</p>
      )}
      <div
        onClick={() => setIsExpanded(true)}
        className="text-white text-xl cursor-pointer"
      >
        <FiPlus />
      </div>
      {isExpanded && (
        <div className="fixed inset-0" onClick={() => setIsExpanded(false)} />
      )}
    </div>
  );
}

export default ReadMore;
