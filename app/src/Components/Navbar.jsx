import React from "react";
import { Link } from "react-router-dom";

function Navbar () {
  return (
    <nav className="bg-black text-white p-4 flex justify-center space-x-6">
      <Link to="/" className="hover:text-blue-400">Home</Link>
      <Link to="/news" className="hover:text-blue-400">News</Link>
      <Link to="/planet-explorer" className="hover:text-blue-400">Planet Explorer</Link>
      <Link to="/apod" className="hover:text-blue-400">APOD</Link>
    </nav>
  );
};

export default Navbar;