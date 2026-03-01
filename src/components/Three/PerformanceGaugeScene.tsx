"use client";

import { Canvas } from '@react-three/fiber';
import { Environment, Text } from '@react-three/drei';
import * as THREE from 'three';
import { useRef, useState, useEffect } from 'react';

function Dial({ value, label }: { value: number, label: string }) {
    const needleRef = useRef<THREE.Group>(null);
    const activeArcRef = useRef<THREE.Mesh>(null);
    const [animatedValue, setAnimatedValue] = useState(0);

    // Initial load animation
    useEffect(() => {
        let frame: number;
        let current = 0;
        const target = value;
        const animate = () => {
            current += (target - current) * 0.04; // easing
            setAnimatedValue(Math.round(current));

            if (needleRef.current) {
                // map 0 -> 100 to angle (starts at roughly 135 deg to -135 deg)
                // Left is Math.PI * 0.75 in Z.
                const angle = THREE.MathUtils.lerp(Math.PI * 0.75, -Math.PI * 0.75, current / 100);
                needleRef.current.rotation.z = angle;
            }

            if (activeArcRef.current) {
                // recreate geometry to change thetaLength properly. Less efficient but easy for a dial.
                // Or simply scale a pre-made torus, but updating geometry works for < 100 frames.
                activeArcRef.current.geometry.dispose();
                // Arc starts at bottom left (Math.PI * 1.25)
                activeArcRef.current.geometry = new THREE.RingGeometry(1.8, 2.0, 32, 1, Math.PI * 1.25, THREE.MathUtils.lerp(0, Math.PI * 1.5, current / 100));
            }

            if (Math.abs(current - target) > 0.5) {
                frame = requestAnimationFrame(animate);
            } else {
                setAnimatedValue(target);
            }
        };

        // Delay start slightly
        const timer = setTimeout(() => { frame = requestAnimationFrame(animate); }, 500);
        return () => { clearTimeout(timer); cancelAnimationFrame(frame); };
    }, [value]);

    return (
        <group>
            {/* Outer Background Ring (Graphite layer) */}
            <mesh>
                <ringGeometry args={[1.8, 2.0, 32, 1, Math.PI * 1.25, Math.PI * 1.5]} />
                <meshStandardMaterial color="#2C2F33" roughness={0.8} />
            </mesh>

            {/* Copper Active Fill */}
            <mesh ref={activeArcRef}>
                <ringGeometry args={[1.8, 2.0, 32, 1, Math.PI * 1.25, 0]} />
                <meshStandardMaterial color="#C46A2D" roughness={0.2} metalness={0.7} />
            </mesh>

            {/* Inner Gradient or backing */}
            <mesh position={[0, 0, -0.1]}>
                <circleGeometry args={[1.9, 32]} />
                <meshBasicMaterial color="#0F1E33" opacity={0.3} transparent />
            </mesh>

            {/* Center Pin (Steel) */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.25, 0.25, 0.15, 32]} />
                <meshStandardMaterial color="#B0BEC5" metalness={1.0} roughness={0.1} />
            </mesh>

            {/* Needle Group */}
            <group ref={needleRef}>
                <mesh position={[0, 0.8, 0.1]}>
                    <coneGeometry args={[0.08, 1.8, 16]} />
                    <meshStandardMaterial color="#B0BEC5" metalness={0.8} roughness={0.4} />
                </mesh>
            </group>

            {/* Numeric display in center */}
            <Text position={[0, -0.6, 0]} fontSize={0.6} color="#0F1E33" anchorX="center" anchorY="middle" font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2">
                {animatedValue.toString()}
            </Text>
        </group>
    );
}

export function PerformanceGaugeScene({ metrics }: { metrics: readonly { label: string, value: number }[] }) {
    // Given 3 dials, we stack them horizontally.
    return (
        <div style={{ width: '100%', height: '180px' }}>
            <Canvas orthographic camera={{ position: [0, 0, 10], zoom: 45 }}>
                <ambientLight intensity={1.5} />
                <directionalLight position={[5, 10, 5]} intensity={1} castShadow={false} />
                <Environment preset="city" />

                {metrics.map((metric, i) => {
                    const xPositions = [-5, 0, 5]; // 3 columns
                    return (
                        <group key={i} position={[xPositions[i] || 0, 0.5, 0]}>
                            <Dial value={metric.value} label={metric.label} />

                            {/* Metric Label */}
                            <Text position={[0, -2.6, 0]} fontSize={0.4} color="#2C2F33" anchorX="center" anchorY="middle" maxWidth={4} textAlign="center"
                                font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2">
                                {metric.label.toUpperCase()}
                            </Text>
                        </group>
                    );
                })}
            </Canvas>
        </div>
    );
}
