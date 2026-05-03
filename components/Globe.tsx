'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointMaterial, Float, Sphere, OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

function DigitalGlobe() {
  const groupRef = useRef<THREE.Group>(null);
  const count = 2000;
  
  // Generate random points on a sphere for the "digital crust"
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      p[i * 3 + 2] = r * Math.cos(phi);
    }
    return p;
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.12; // Smooth slow rotation
    }
  });

  return (
    <group ref={groupRef}>
      {/* 1. Digital Particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={points}
            itemSize={3}
          />
        </bufferGeometry>
        <pointMaterial
          transparent
          color="#0ea5e9"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.8}
        />
      </points>

      {/* 2. The Glowing Grid */}
      <Sphere args={[1.98, 24, 24]}>
        <meshBasicMaterial 
          color="#06b6d4" 
          wireframe 
          transparent 
          opacity={0.2} 
          blending={THREE.AdditiveBlending}
        />
      </Sphere>

      {/* 3. Atmospheric Outer Glow */}
      <Sphere args={[2.15, 32, 32]}>
        <meshBasicMaterial 
          color="#0ea5e9" 
          transparent 
          opacity={0.05} 
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
      overflow: 'hidden',
      position: 'relative'
    }}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#0ea5e9" />
        
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
          <DigitalGlobe />
        </Float>

        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}