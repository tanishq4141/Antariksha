import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// Basic planet data
const planetData = {
  mercury: {
    name: 'Mercury',
    color: '#A0522D',
    description: 'The smallest and innermost planet in the Solar System.',
  },
  venus: {
    name: 'Venus',
    color: '#DEB887',
    description: 'Known for its thick atmosphere and extreme greenhouse effect.',
  },
  earth: {
    name: 'Earth',
    color: '#4169E1',
    description: 'Our home planet, the only known celestial body to support life.',
  },
  mars: {
    name: 'Mars',
    color: '#CD5C5C',
    description: 'The Red Planet, home to the largest volcano in the Solar System.',
  }
};

function BasicPlanet({ color }) {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function Scene({ planetColor }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <BasicPlanet color={planetColor} />
      <OrbitControls />
    </>
  );
}

function LoadingScreen() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black text-white">
      Loading...
    </div>
  );
}

function PlanetExplorer() {
  const [selectedPlanet, setSelectedPlanet] = useState('earth');

  return (
    <div className="relative h-screen bg-black">
      {/* 3D Viewport */}
      <div className="absolute inset-0">
        <Suspense fallback={<LoadingScreen />}>
          <Canvas>
            <Scene planetColor={planetData[selectedPlanet].color} />
          </Canvas>
        </Suspense>
      </div>

      {/* Controls */}
      <div className="absolute top-4 right-4 bg-black bg-opacity-50 p-4 rounded">
        {Object.keys(planetData).map((planet) => (
          <button
            key={planet}
            onClick={() => setSelectedPlanet(planet)}
            className={`block w-full px-4 py-2 mb-2 rounded ${
              selectedPlanet === planet
                ? 'bg-blue-500 text-white'
                : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
            }`}
          >
            {planetData[planet].name}
          </button>
        ))}
      </div>

      {/* Info Panel */}
      <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 p-4 rounded text-white">
        <h2 className="text-2xl font-bold mb-2">{planetData[selectedPlanet].name}</h2>
        <p>{planetData[selectedPlanet].description}</p>
      </div>
    </div>
  );
}

export default PlanetExplorer;