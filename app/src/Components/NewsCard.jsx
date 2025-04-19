import React, { useState } from "react";

function NewsCard({ title, imageUrl, newsText, timestamp, siteUrl }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Truncate text to a certain length
  const truncateText = (text, maxLength = 150) => {
    if (isExpanded) return text;
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg mb-6 h-full flex flex-col">
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
        <div className="text-gray-400 text-sm mb-2">
          {formatDate(timestamp)}
        </div>
        <div className="text-gray-300 mb-4 flex-grow overflow-y-auto max-h-40">
          {truncateText(newsText)}
        </div>
        <div className="flex justify-between items-center mt-auto">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-400 hover:text-blue-300 text-sm"
          >
            {isExpanded ? "Show Less" : "Read More"}
          </button>
          <a 
            href={siteUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-sm"
          >
            Full Article
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsCard; 