import React from 'react';

const ISSFallback = ({ issData }) => {
  if (!issData) return null;
  
  const latitude = parseFloat(issData.iss_position.latitude).toFixed(4);
  const longitude = parseFloat(issData.iss_position.longitude).toFixed(4);
  
  return (
    <div className="iss-fallback">
      <h3 className="text-xl font-semibold mb-4">ISS Current Position</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-400">Latitude</p>
          <p className="text-2xl font-bold">{latitude}°</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-400">Longitude</p>
          <p className="text-2xl font-bold">{longitude}°</p>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-400">
          The International Space Station is currently orbiting at these coordinates.
          <br />
          It completes one orbit around Earth approximately every 90 minutes.
        </p>
      </div>
    </div>
  );
};

export default ISSFallback; 