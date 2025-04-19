import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";

function News() {
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://spacenews.p.rapidapi.com/newstoday',
          headers: {
            'x-rapidapi-key': 'c81d7bd113msh1de697e4447d5e1p1387d6jsn55156298931e',
            'x-rapidapi-host': 'spacenews.p.rapidapi.com'
          }
        };
        
        const response = await axios.request(options);
        setNewsData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch news. Please try again later.");
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Function to format date
  const formatDate = (dateString) => {
    if (!dateString) return "Unknown date";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center p-8"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2073&auto=format&fit=crop')",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="bg-black bg-opacity-70 p-8 rounded-lg backdrop-blur-sm w-full max-w-6xl">
        <h1 className="text-center text-4xl font-bold text-white mb-8">Latest Space News</h1>
        
        {loading && <p className="text-center text-white text-xl">Loading news...</p>}
        
        {error && <p className="text-red-500 text-center text-xl">{error}</p>}
        
        {newsData && (
          <div>
            
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
                {newsData.map((news) => (
                  <NewsCard 
                    key={news.id}
                    title={news.title}
                    imageUrl={news.image_url}
                    newsText={news.news_text}
                    timestamp={news.timestamp}
                    siteUrl={news.site_url}
                  />
                ))}
              </div>
            
          </div>
        )}
      </div>
    </div>
  );
}

export default News;