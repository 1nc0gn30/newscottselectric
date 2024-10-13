// src/components/GlowEffect.js
import React from 'react';

const GlowEffect = () => {
  return (
    <>
      <pointLight position={[0, 0, 3]} intensity={0.5} color="aqua" distance={5} decay={2} />
      <pointLight position={[0, 0, -3]} intensity={0.8} color="aqua" distance={5} decay={2} />
    </>
  );
};

export default GlowEffect;
