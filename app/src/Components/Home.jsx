import React from "react";
import { Link } from "react-router-dom";
import Card from "./card";

function Home(){
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=2073&auto=format&fit=crop')"
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg backdrop-blur-sm">
        <h1 className="text-4xl font-bold text-white mb-4">Explore the Universe</h1>
        <p className="text-white text-lg">Discover the latest space news, track the ISS, and explore planets!</p>
      </div>
      <div className="mt-8 flex flex-row gap-6 justify-center">
        <Link to="/" className="hover:text-blue-400"> <Card 
          cardname="Space NEWS" 
          img="/src/assets/space_Background.avif"
        /></Link>
        <Link to="/news" className="hover:text-blue-400"><Card 
          cardname="Space NEWS" 
          img="/src/assets/space_Background.avif"
        /></Link>
        
      </div>
    </div>
  );
};

export default Home;