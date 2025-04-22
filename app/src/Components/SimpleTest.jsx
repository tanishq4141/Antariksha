import React from 'react';
import { Canvas } from '@react-three/fiber';

function SimpleTest() {
  return (
    <div className="h-screen w-full bg-black flex items-center justify-center">
      <div className="w-full h-full">
        <Canvas>
          <ambientLight intensity={0.5} />
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="red" />
          </mesh>
        </Canvas>
      </div>
      <div className="absolute top-4 left-4 text-white text-xl">
        Simple Three.js Test
      </div>
    </div>
  );
}

export default SimpleTest; 