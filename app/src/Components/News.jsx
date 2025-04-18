import React, { useState, useEffect } from "react";
import axios from "axios";

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

  return (
    <div className="text-white p-8">
      <h1 className="text-center text-3xl mb-6">Latest Space News</h1>
      
      {loading && <p className="text-center">Loading news...</p>}
      
      {error && <p className="text-red-500 text-center">{error}</p>}
      
      {newsData && (
        <div className="max-w-4xl mx-auto">
          <pre className="bg-gray-800 p-4 rounded overflow-auto">
            {JSON.stringify(newsData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default News;