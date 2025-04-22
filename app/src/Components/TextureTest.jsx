import React from 'react';
import { useTexture } from '@react-three/drei';

function TextureTest() {
  const texture = useTexture('/textures/earth.jpg');
  
  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

export default TextureTest; 