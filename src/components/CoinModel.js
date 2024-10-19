// src/components/CoinModel.js
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const CoinModel = () => {
  const { scene } = useGLTF('/assets/glbs/ScottsElectricLogo.glb');
  const texture = useTexture('/assets/images/scottselectriclogo2.png');
  const meshRef = useRef();

  // Apply the texture to the GLB model
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshStandardMaterial({
        color: 'white',
        map: texture,
      });
    }
  });

  return <primitive ref={meshRef} object={scene} scale={1.5} position={[0, 0, 0]} />;
};

const CoinModelCanvas = () => {
  return (
    <Canvas style={{ width: '100%', height: '400px' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1} />
      <CoinModel />
    </Canvas>
  );
};

export default CoinModelCanvas;
