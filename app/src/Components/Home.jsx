import React from "react";

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
    </div>
  );
};

export default Home;