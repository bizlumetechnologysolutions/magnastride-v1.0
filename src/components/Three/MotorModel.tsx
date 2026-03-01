"use client";

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function MotorModel({ explodeTarget = 0, ...props }: any) {
    const group = useRef<THREE.Group>(null);

    const rotorRef = useRef<THREE.Mesh>(null);
    const frontCapRef = useRef<THREE.Mesh>(null);
    const backCapRef = useRef<THREE.Mesh>(null);
    const coilGroupRef = useRef<THREE.Group>(null);

    const currentExplode = useRef(0);

    useFrame((state, delta) => {
        if (group.current) {
            group.current.rotation.y += delta * 0.25;
        }

        // Smooth damp towards explodeTarget
        currentExplode.current = THREE.MathUtils.lerp(currentExplode.current, explodeTarget, delta * 5);

        const e = currentExplode.current;
        if (rotorRef.current) rotorRef.current.position.y = e * 3;
        if (frontCapRef.current) frontCapRef.current.position.y = 2 + (e * 1.5);
        if (backCapRef.current) backCapRef.current.position.y = - (2 + (e * 1.5));
        if (coilGroupRef.current) {
            coilGroupRef.current.scale.set(1 + e * 0.1, 1, 1 + e * 0.1);
        }
    });

    // Materials aligned with Metal + Copper palette (Light Industrial Theme)
    const materials = useMemo(() => ({
        casing: new THREE.MeshPhysicalMaterial({ color: "#E2E8F0", metalness: 0.5, roughness: 0.4, clearcoat: 0.3 }),
        stator: new THREE.MeshPhysicalMaterial({ color: "#CBD5E1", metalness: 0.6, roughness: 0.3, clearcoat: 0.2 }),
        copper: new THREE.MeshPhysicalMaterial({ color: "#D97736", metalness: 0.8, roughness: 0.2, clearcoat: 0.5 }), // Brighter Copper
        rotor: new THREE.MeshPhysicalMaterial({ color: "#94A3B8", metalness: 0.9, roughness: 0.2 }),
    }), []);

    return (
        <group ref={group} {...props} dispose={null} rotation={[Math.PI / 2, 0, 0]}>
            {/* Outer Casing Main */}
            <mesh material={materials.casing} castShadow receiveShadow>
                <cylinderGeometry args={[2.2, 2.2, 3.8, 32]} />
            </mesh>

            {/* Stator Core */}
            <mesh material={materials.stator} scale={[1, 1.02, 1]} castShadow receiveShadow>
                <cylinderGeometry args={[2.0, 2.0, 4.0, 32]} />
            </mesh>

            {/* Copper Coils */}
            <group ref={coilGroupRef}>
                {[-1.2, -0.4, 0.4, 1.2].map((y, index) => (
                    <mesh key={index} material={materials.copper} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
                        <torusGeometry args={[2.05, 0.12, 16, 64]} />
                    </mesh>
                ))}
            </group>

            {/* Internal Rotor */}
            <mesh ref={rotorRef} material={materials.rotor} position={[0, 0, 0]} castShadow receiveShadow>
                <cylinderGeometry args={[0.5, 0.5, 7, 32]} />
            </mesh>

            {/* Caps */}
            <mesh ref={frontCapRef} material={materials.casing} position={[0, 2, 0]} castShadow receiveShadow>
                <cylinderGeometry args={[2.2, 2.2, 0.3, 32]} />
            </mesh>
            <mesh ref={backCapRef} material={materials.casing} position={[0, -2, 0]} castShadow receiveShadow>
                <cylinderGeometry args={[2.2, 2.2, 0.3, 32]} />
            </mesh>

            {/* Mounting Base */}
            <mesh material={materials.stator} position={[0, 0, 2.3]} castShadow receiveShadow>
                <boxGeometry args={[2.5, 3, 0.6]} />
            </mesh>
        </group>
    );
}
