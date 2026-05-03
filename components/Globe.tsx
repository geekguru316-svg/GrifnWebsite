'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function PlexusGlobe() {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  
  // Generate random points on a sphere
  const count = 1000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = 2 * Math.sin(phi) * Math.cos(theta);
      const y = 2 * Math.sin(phi) * Math.sin(theta);
      const z = 2 * Math.cos(phi);
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.1;
      groupRef.current.rotation.x = Math.sin(t * 0.05) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* The Core Digital Globe */}
      <Sphere args={[1.9, 32, 32]}>
        <meshBasicMaterial 
          color="#0ea5e9" 
          wireframe 
          transparent 
          opacity={0.05} 
        />
      </Sphere>

      {/* Pulsing Atmosphere */}
      <Sphere args={[2.1, 32, 32]}>
        <meshBasicMaterial 
          color="#8b5cf6" 
          wireframe 
          transparent 
          opacity={0.02} 
        />
      </Sphere>

      {/* Plexus Nodes */}
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#8b5cf6"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      {/* Inner Glow */}
      <Sphere args={[1.5, 32, 32]}>
        <meshBasicMaterial
          color="#06b6d4"
          transparent
          opacity={0.03}
        />
      </Sphere>
    </group>
  );
}

export default function Globe() {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '450px', background: 'transparent' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <PlexusGlobe />
        </Float>
        
        {/* Post processing-like glow background */}
        <mesh position={[0, 0, -2]}>
          <planeGeometry args={[10, 10]} />
          <meshBasicMaterial 
            transparent 
            opacity={0.1} 
            color="#8b5cf6"
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </Canvas>
    </div>
  );
}