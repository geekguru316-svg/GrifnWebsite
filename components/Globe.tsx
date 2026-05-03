'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Sphere, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function DigitalGlobe() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 1. The Particle Crust (Continent Feel) */}
      <Sphere args={[2, 64, 64]}>
        <Points stride={3}>
          <PointMaterial
            transparent
            color="#0ea5e9"
            size={0.02}
            sizeAttenuation={true}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            opacity={0.8}
          />
        </Points>
      </Sphere>

      {/* 2. The Glowing Grid Lines */}
      <Sphere args={[1.98, 24, 24]}>
        <meshBasicMaterial 
          color="#06b6d4" 
          wireframe 
          transparent 
          opacity={0.3} 
          blending={THREE.AdditiveBlending}
        />
      </Sphere>

      {/* 3. The Core Solid Glow */}
      <Sphere args={[1.95, 32, 32]}>
        <meshBasicMaterial 
          color="#030712" 
          transparent 
          opacity={0.8} 
        />
      </Sphere>

      {/* 4. Atmosphere Glow Layer 1 */}
      <Sphere args={[2.1, 32, 32]}>
        <meshBasicMaterial 
          color="#0ea5e9" 
          transparent 
          opacity={0.05} 
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>

      {/* 5. Outer Atmosphere Glow Layer 2 */}
      <Sphere args={[2.3, 32, 32]}>
        <meshBasicMaterial 
          color="#3b82f6" 
          transparent 
          opacity={0.02} 
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>
    </group>
  );
}

export default function Globe() {
  return (
    <div style={{ 
      width: '100%', 
      aspectRatio: '546 / 450', 
      minHeight: '450px', 
      background: 'transparent',
      borderRadius: '24px',
      overflow: 'hidden'
    }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#0ea5e9" />
        
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
          <DigitalGlobe />
        </Float>
        
        {/* Deep space glow background */}
        <mesh position={[0, 0, -3]}>
          <planeGeometry args={[15, 15]} />
          <meshBasicMaterial 
            transparent 
            opacity={0.08} 
            color="#0ea5e9"
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}