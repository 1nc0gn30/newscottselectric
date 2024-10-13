// src/components/KleinsModel.js
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';


const positions = [
  [0, 5, 10],
  [-5, 0, -10],
  [0, -5, -10],
  [5, 0, 10],
];

const KleinsModel = () => {
  const { scene } = useGLTF('/assets/Kleins.glb');
  const meshRef = useRef();
  let currentIndex = 0;
  const speed = 0.6;

  useFrame(() => {
    const currentPos = meshRef.current.position;
    const targetPos = new THREE.Vector3(...positions[currentIndex]);
    const distance = currentPos.distanceTo(targetPos);

    if (distance < 0.1) {
      currentIndex = (currentIndex + 1) % positions.length;
    }

    meshRef.current.position.lerp(targetPos, speed * 0.1);
  });

  return <primitive ref={meshRef} object={scene} scale={20} />;
};

export default KleinsModel;
