// src/components/CircuitBreakerModel.js
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const positions = [
  [5, 30, -100],    // Position A (Initial)
  [3, 30, -100],    // Position B
  [3, 30, -80],   // Position C
  [5, 25, -80],   // Position D
];

const CircuitBreakerModel = () => {
  const { scene } = useGLTF('/assets/CircuitBreaker.glb');
  const meshRef = useRef();
  const speed = 0.5;
  let currentIndex = 0;

  useFrame(() => {
    const currentPos = meshRef.current.position;
    const targetPos = new THREE.Vector3(...positions[currentIndex]);
    const distance = currentPos.distanceTo(targetPos);

    if (distance < 0.1) {
      currentIndex = (currentIndex + 1) % positions.length;
    }

    meshRef.current.position.lerp(targetPos, speed * 0.1);
  });

  return <primitive ref={meshRef} object={scene} rotation={[39, 0, 0]}/>;
};

export default CircuitBreakerModel;
