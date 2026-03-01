"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, PresentationControls, ContactShadows } from '@react-three/drei';
import { MotorModel } from './MotorModel';
import * as THREE from 'three';
import { useRef, useEffect, useState } from 'react';

export function HeroMotorScene() {
    const [scale, setScale] = useState(0.78);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 480) {
                setScale(0.5);
            } else if (window.innerWidth <= 768) {
                setScale(0.65);
            } else {
                setScale(0.78);
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0, pointerEvents: 'auto' }}>
            <Canvas
                camera={{ position: [5, 3, 6], fov: 40 }}
                gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
                dpr={[1, 2]}
            >
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" castShadow />
                <directionalLight position={[-10, 5, -5]} intensity={0.8} color="#C46A2D" /> {/* Copper rim light */}

                {/* Soft HDRI Environment */}
                <Environment preset="city" />

                <PresentationControls
                    enabled={true}
                    global={false}
                    cursor={true}
                    snap={true}
                    speed={0.5}
                    zoom={1}
                    rotation={[0, 0, 0]}
                    polar={[-0.1, 0.1]}     // minimal vertical tilt
                    azimuth={[-0.2, 0.2]}   // minimal horizontal tilt
                >
                    <group position={[0, -0.3, 0]}>
                        <MotorModel position={[0, 0, 0]} rotation={[0.4, Math.PI / 4, 0]} scale={scale} />
                    </group>
                </PresentationControls>

                {/* Soft ground shadow to ground the model */}
                <ContactShadows position={[0, -2.5, 0]} opacity={0.45} scale={12} blur={2.5} far={4} color="#0F1E33" />
            </Canvas>
        </div>
    );
}
