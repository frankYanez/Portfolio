'use client';
/* eslint-disable react/no-unknown-property */

import { Canvas, useFrame } from '@react-three/fiber';
import { PointMaterial, Points } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function GlintPoints() {
  const positions = useMemo(() => {
    const array = new Float32Array(3000);
    for (let i = 0; i < array.length; i += 3) {
      array[i] = (Math.random() - 0.5) * 8;
      array[i + 1] = (Math.random() - 0.5) * 4;
      array[i + 2] = Math.random() * -6;
    }
    return array;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <Points positions={positions} ref={ref} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#f0c674"
        size={0.08}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export function GlintCanvas() {
  return (
    <Canvas
      gl={{ antialias: false }}
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      className="absolute inset-0"
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 2, 2]} intensity={0.6} color="#f0c674" />
      <GlintPoints />
    </Canvas>
  );
}
