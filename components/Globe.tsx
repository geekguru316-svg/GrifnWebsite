'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointMaterial, Float, Points, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function NeuralPlexus() {
  const groupRef = useRef<THREE.Group>(null);
  const count = 400; // Fewer, more deliberate points
  
  // Create an abstract cluster (not a hard sphere)
  const [points, lines] = useMemo(() => {
    const p = new Float32Array(count * 3);
    const l: number[] = [];
    
    // Generate points in a slightly flattened cloud
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 6;
      p[i * 3 + 1] = (Math.random() - 0.5) * 4;
      p[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }

    // Connect points that are close to each other
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = p[i * 3] - p[j * 3];
        const dy = p[i * 3 + 1] - p[j * 3 + 1];
        const dz = p[i * 3 + 2] - p[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        if (dist < 1.2) {
          l.push(p[i * 3], p[i * 3 + 1], p[i * 3 + 2]);
          l.push(p[j * 3], p[j * 3 + 1], p[j * 3 + 2]);
        }
      }
    }

    return [p, new Float32Array(l)];
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.08;
      groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 1. The Nodes (Dots) */}
      <Points positions={points}>
        <PointMaterial
          transparent
          color="#0ea5e9"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.6}
        />
      </Points>

      {/* 2. The Connections (Lines) */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={lines.length / 3}
            array={lines}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#0ea5e9"
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
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
        camera={{ position: [0, 0, 6], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
          <NeuralPlexus />
        </Float>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}