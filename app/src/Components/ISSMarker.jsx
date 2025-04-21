import React from 'react';
import { Marker } from 'react-leaflet';
import L from 'leaflet';

// Create a custom icon for the ISS
const createISSIcon = () => {
  return L.divIcon({
    className: 'iss-marker',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15],
  });
};

const ISSMarker = ({ position }) => {
  // Ensure position is valid
  if (!position || !Array.isArray(position) || position.length !== 2) {
    console.error('Invalid position provided to ISSMarker:', position);
    return null;
  }

  // Ensure position values are numbers
  const [lat, lng] = position.map(val => {
    const num = parseFloat(val);
    return isNaN(num) ? 0 : num;
  });

  return (
    <Marker 
      position={[lat, lng]} 
      icon={createISSIcon()}
    />
  );
};

export default ISSMarker; 