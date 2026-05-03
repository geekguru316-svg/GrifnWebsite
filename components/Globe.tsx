'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointMaterial, Float, Sphere, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function CompactDigitalGlobe() {
  const groupRef = useRef<THREE.Group>(null);
  const count = 4000; // High density for that rich look
  
  // Generate random points on a SMALLER sphere (1.6 radius) to avoid clipping
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.6; // Reduced from 2.0 to 1.6 to ensure no "cutting"
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
      groupRef.current.rotation.y = t * 0.1; // Elegant slow rotation
      groupRef.current.rotation.x = Math.sin(t * 0.05) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 1. High Density Blue Particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={points}
            itemSize={3}
          />
        </bufferGeometry>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.025}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.7}
        />
      </points>

      {/* 2. Inner Grid Structure (Subtle) */}
      <Sphere args={[1.58, 20, 20]}>
        <meshBasicMaterial 
          color="#1e40af" 
          wireframe 
          transparent 
          opacity={0.15} 
          blending={THREE.AdditiveBlending}
        />
      </Sphere>

      {/* 3. Core Glow */}
      <Sphere args={[1.5, 32, 32]}>
        <meshBasicMaterial 
          color="#1e3a8a" 
          transparent 
          opacity={0.1} 
        />
      </Sphere>

      {/* 4. Atmospheric Halo */}
      <Sphere args={[1.75, 32, 32]}>
        <meshBasicMaterial 
          color="#3b82f6" 
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
        
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
          <CompactDigitalGlobe />
        </Float>

        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}