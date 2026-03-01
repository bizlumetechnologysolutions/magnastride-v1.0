"use client";

import { Canvas } from '@react-three/fiber';
import { Environment, Float, OrbitControls } from '@react-three/drei';
import { MotorModel } from './MotorModel';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function ExplodedMotorScene() {
    const container = useRef<HTMLDivElement>(null);
    const [explodeValue, setExplodeValue] = useState(0);

    useGSAP(() => {
        // We bind a proxy object to scrollTrigger so we can read its value in onUpdate
        const proxy = { explode: 0 };

        gsap.to(proxy, {
            explode: 1,
            scrollTrigger: {
                trigger: container.current,
                start: "top 60%",
                end: "bottom 30%",
                scrub: 1, // Smooth damp on scroll scrub
                onUpdate: () => {
                    setExplodeValue(proxy.explode);
                }
            }
        });

    }, { scope: container });

    return (
        <div ref={container} style={{ width: '100%', height: '500px', position: 'relative' }}>
            <Canvas
                camera={{ position: [6, 4, 8], fov: 40 }}
                gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
                dpr={[1, 2]}
                style={{ pointerEvents: 'auto', zIndex: 1 }}
            >
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" castShadow />
                <directionalLight position={[-10, 5, -5]} intensity={0.8} color="#C46A2D" />
                <Environment preset="city" />

                <Float speed={1} rotationIntensity={0} floatIntensity={0.2}>
                    <MotorModel explodeTarget={explodeValue} position={[0, -0.5, 0]} rotation={[0.4, Math.PI / 4, 0]} scale={0.7} />
                </Float>
                <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2 + 0.5} minPolarAngle={0} />
            </Canvas>

            {/* Floating Labels during explosion */}
            <div style={{
                position: 'absolute', top: '20%', left: '10%', zIndex: 2,
                opacity: explodeValue, transform: `translateY(${(1 - explodeValue) * 20}px)`,
                transition: 'opacity 0.3s, transform 0.3s', pointerEvents: 'none'
            }}>
                <h4 style={{ color: 'var(--primary-color)', margin: 0 }}>Housing</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', margin: 0 }}>Rugged Steel Framework</p>
            </div>
            <div style={{
                position: 'absolute', bottom: '25%', right: '15%', zIndex: 2,
                opacity: explodeValue, transform: `translateY(${(1 - explodeValue) * 20}px)`,
                transition: 'opacity 0.3s, transform 0.3s', pointerEvents: 'none'
            }}>
                <h4 style={{ color: 'var(--accent-color)', margin: 0, textAlign: 'right' }}>Coil Group</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', margin: 0, textAlign: 'right' }}>H-Class Copper Wiring</p>
            </div>
            <div style={{
                position: 'absolute', top: '45%', right: '20%', zIndex: 2,
                opacity: explodeValue, transform: `translateY(${(1 - explodeValue) * 20}px)`,
                transition: 'opacity 0.3s, transform 0.3s', pointerEvents: 'none'
            }}>
                <h4 style={{ color: 'var(--primary-color)', margin: 0, textAlign: 'right' }}>Stator Core</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', margin: 0, textAlign: 'right' }}>Laminated Graphite Matrix</p>
            </div>
        </div>
    );
}
