import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  RocketLaunchIcon,
  NewspaperIcon,
  GlobeAltIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import Card from "./card";
import "./Home.css";

function Home() {
  const cardDetails = [
    {
      title: "Space News",
      description:
        "Stay updated with the latest discoveries and developments in space exploration",
      icon: NewspaperIcon,
      link: "/news",
    },
    {
      title: "Planet Explorer",
      description:
        "Explore detailed information about planets in our solar system",
      icon: GlobeAltIcon,
      link: "/planet-explorer",
    },
    {
      title: "ISS Tracker",
      description: "Track the International Space Station in real-time",
      icon: RocketLaunchIcon,
      link: "/iss-tracker",
    },
    {
      title: "Astronomy Picture of the Day",
      description: "Discover stunning images from NASA's APOD collection",
      icon: PhotoIcon,
      link: "/apod",
    },
  ];

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-fixed bg-no-repeat flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=2073&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="stars"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white mb-6"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to Antariksha
        </motion.h1>
        <motion.p
          className="text-xl text-white mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Your gateway to exploring the cosmos. Discover the latest space news,
          track the ISS, explore planets, and marvel at stunning astronomical
          imagery.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {cardDetails.map((feature, index) => (
          <motion.div
            key={feature.title}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link to={feature.link}>
              <div className="bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-70 transition-all duration-300">
                <feature.icon className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-12 text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-white text-lg">Start your cosmic journey today!</p>
      </motion.div>
    </div>
  );
}

export default Home;
