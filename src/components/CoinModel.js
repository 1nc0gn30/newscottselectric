// src/components/CoinModel.js
import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const CoinModel = () => {
  const { scene } = useGLTF('/assets/ScottsElectricLogo.glb');
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



  return <primitive ref={meshRef} object={scene} scale={0.5} position={[0, 0, 0]} />;
};

export default CoinModel;
