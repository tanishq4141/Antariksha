import React, { useState, useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ISSMarker from "./ISSMarker";
import ISSFallback from "./ISSFallback";
import "./ISS.css";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import L from "leaflet";

function ISS() {
  const [issData, setIssData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [mapReady, setMapReady] = useState(false);
  const [mapError, setMapError] = useState(false);

  // Fix for Leaflet default icon issue in React
  useEffect(() => {
    try {
      // Fix for Leaflet default icon
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
      });
    } catch (err) {
      console.error("Error setting up Leaflet icons:", err);
      setMapError(true);
    }
  }, []);

  // Function to fetch ISS position data
  const fetchISSData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://api.open-notify.org/iss-now.json");
      setIssData(response.data);
      setLastUpdated(new Date());
    } catch (err) {
      setError("Failed to fetch ISS data. Please try again later.");
      console.error("Error fetching ISS data:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchISSData();
    
    // Set up auto-refresh every 30 seconds
    const intervalId = setInterval(fetchISSData, 30000);
    
    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Format timestamp to readable date/time
  const formatTimestamp = (timestamp) => {
    if (!timestamp) return "N/A";
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  };

  // Calculate time since last update
  const getTimeSinceUpdate = () => {
    if (!lastUpdated) return "N/A";
    
    const now = new Date();
    const diffInSeconds = Math.floor((now - lastUpdated) / 1000);
    
    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    }
  };

  return (
    <div className="iss-container">
      <h1 className="text-3xl font-bold text-center mb-6">Track the International Space Station</h1>
      
      {error && <div className="iss-error">{error}</div>}
      
      <div className="iss-info-card">
        <h3>ISS Information</h3>
        {issData ? (
          <>
            <div className="iss-info-item">
              <span className="iss-info-label">Latitude:</span>
              <span className="iss-info-value">{parseFloat(issData.iss_position.latitude).toFixed(4)}°</span>
            </div>
            <div className="iss-info-item">
              <span className="iss-info-label">Longitude:</span>
              <span className="iss-info-value">{parseFloat(issData.iss_position.longitude).toFixed(4)}°</span>
            </div>
            <div className="iss-info-item">
              <span className="iss-info-label">Last Updated:</span>
              <span className="iss-info-value">{formatTimestamp(issData.timestamp)}</span>
            </div>
            <div className="iss-info-item">
              <span className="iss-info-label">Time Since Update:</span>
              <span className="iss-info-value">{getTimeSinceUpdate()}</span>
            </div>
          </>
        ) : (
          <p>Loading ISS data...</p>
        )}
        
        <button 
          className="iss-refresh-button mt-4"
          onClick={fetchISSData}
          disabled={loading}
        >
          <ArrowPathIcon className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
          {loading ? 'Refreshing...' : 'Refresh ISS Position'}
        </button>
      </div>
      
      <div className="iss-map-container">
        {loading ? (
          <div className="iss-loading">Loading map data...</div>
        ) : issData ? (
          mapError ? (
            <ISSFallback issData={issData} />
          ) : (
            <MapContainer
              key={`map-${issData.timestamp}`} // Force re-render when data changes
              center={[
                parseFloat(issData.iss_position.latitude),
                parseFloat(issData.iss_position.longitude)
              ]}
              zoom={4}
              style={{ height: "100%", width: "100%" }}
              whenReady={() => setMapReady(true)}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {mapReady && (
                <ISSMarker 
                  position={[
                    parseFloat(issData.iss_position.latitude),
                    parseFloat(issData.iss_position.longitude)
                  ]} 
                />
              )}
              <Popup>
                International Space Station
                <br />
                Last updated: {formatTimestamp(issData.timestamp)}
              </Popup>
            </MapContainer>
          )
        ) : (
          <div className="iss-loading">Unable to load map data</div>
        )}
      </div>
      
      <div className="iss-info-card">
        <h3>About the ISS</h3>
        <p className="mb-4">
          The International Space Station (ISS) is a multinational collaborative project involving five participating space agencies: NASA (United States), Roscosmos (Russia), JAXA (Japan), ESA (Europe), and CSA (Canada).
        </p>
        <p className="mb-4">
          The ISS orbits Earth at an altitude of approximately 400 kilometers (250 miles) and travels at a speed of about 28,000 kilometers per hour (17,500 miles per hour). It completes one orbit around Earth every 90 minutes.
        </p>
        <p>
          The station has been continuously occupied for over 20 years, making it the longest continuous human presence in low Earth orbit.
        </p>
      </div>
    </div>
  );
}

export default ISS;