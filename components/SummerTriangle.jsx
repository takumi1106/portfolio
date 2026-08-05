"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import * as THREE from "three";

const LINE_COLOR = "#ffebaa";

function seededRandom(value) {
    const result = Math.sin(value * 12.9898 + 78.233) * 43758.5453;
    return result - Math.floor(result);
}

function ScrollCamera() {
    const scrollProgress = useRef(0);
    const reduceMotion = useRef(false);

    useEffect(() => {
        reduceMotion.current = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        function updateScrollProgress() {
            const scrollableHeight = Math.max(
                document.documentElement.scrollHeight - window.innerHeight,
                1
            );
            scrollProgress.current = window.scrollY / scrollableHeight;
        }

        updateScrollProgress();
        window.addEventListener("scroll", updateScrollProgress, { passive: true });
        window.addEventListener("resize", updateScrollProgress);

        return () => {
            window.removeEventListener("scroll", updateScrollProgress);
            window.removeEventListener("resize", updateScrollProgress);
        };
    }, []);

    useFrame(({ camera }, delta) => {
        const progress = reduceMotion.current ? 0 : scrollProgress.current;

        camera.position.x = THREE.MathUtils.damp(
            camera.position.x,
            progress * 0.9,
            3.5,
            delta
        );
        camera.position.y = THREE.MathUtils.damp(
            camera.position.y,
            -progress * 0.55,
            3.5,
            delta
        );
        camera.position.z = THREE.MathUtils.damp(
            camera.position.z,
            10 - progress * 3.2,
            3.5,
            delta
        );
        camera.lookAt(0, -progress * 0.2, 0);
    });

    return null;
}

function RandomStars({ count }) {
    const { viewport } = useThree();
    const groupRef = useRef(null);
    const starRefs = useRef([]);

    const stars = useMemo(() => {
        return Array.from({ length: count }, (_, index) => ({
            x: seededRandom(index * 9 + 1) - 0.5,
            y: seededRandom(index * 9 + 2) - 0.5,
            z: seededRandom(index * 9 + 3) * 10 - 5,
            size: seededRandom(index * 9 + 4) * 0.012 + 0.009,//星のサイズ
            opacity: seededRandom(index * 9 + 5) * 0.3 + 0.22,
            duration: seededRandom(index * 9 + 6) * 4 + 3,
            delay: seededRandom(index * 9 + 7) * 3,
            driftX: (seededRandom(index * 9 + 8) - 0.5) * 0.06,
            driftY: (seededRandom(index * 9 + 9) - 0.5) * 0.08,
            driftZ: seededRandom(index * 9 + 10) * 0.55 + 0.25,
        }));
    }, [count]);

    useEffect(() => {
        const tweens = [];

        if (groupRef.current) {
            tweens.push(
                gsap.to(groupRef.current.rotation, {
                    z: 0.035,
                    duration: 16,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                })
            );
        }

        starRefs.current.forEach((star, index) => {
            if (!star) return;
            const settings = stars[index];

            tweens.push(
                gsap.to(star.position, {
                    x: star.position.x + settings.driftX * viewport.width,
                    y: star.position.y + settings.driftY * viewport.height,
                    z: star.position.z + settings.driftZ,
                    duration: settings.duration,
                    delay: settings.delay,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                }),
                gsap.to(star.material, {
                    opacity: Math.min(settings.opacity + 0.25, 0.78),
                    duration: settings.duration * 0.55,
                    delay: settings.delay,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                })
            );
        });

        return () => tweens.forEach((tween) => tween.kill());
    }, [stars, viewport.width, viewport.height]);

    return (
        <group ref={groupRef}>
            {stars.map((star, index) => (
                <mesh
                    key={index}
                    ref={(element) => {
                        starRefs.current[index] = element;
                    }}
                    position={[
                        star.x * viewport.width * 1.25,
                        star.y * viewport.height * 1.25,
                        star.z,
                    ]}
                    scale={star.size * (1 + (star.z + 5) * 0.14)}
                >
                    <octahedronGeometry args={[1, 0]} />
                    <meshBasicMaterial
                        color="#f6d96b"
                        transparent
                        opacity={star.opacity}
                        blending={THREE.AdditiveBlending}
                        depthWrite={false}
                        toneMapped={false}
                    />
                </mesh>
            ))}
        </group>
    );
}

function TriangleStar({ position, delay }) {
    const starRef = useRef(null);
    const sparkleShape = useMemo(() => {
        const shape = new THREE.Shape();
        shape.moveTo(0, 0.24);
        shape.lineTo(0.025, 0.035);
        shape.lineTo(0.24, 0);
        shape.lineTo(0.025, -0.035);
        shape.lineTo(0, -0.24);
        shape.lineTo(-0.025, -0.035);
        shape.lineTo(-0.24, 0);
        shape.lineTo(-0.025, 0.035);
        shape.closePath();
        return shape;
    }, []);

    useFrame(({ clock }) => {
        if (!starRef.current) return;

        const pulse = 1 + Math.sin(clock.elapsedTime * 2.2 + delay) * 0.16;
        starRef.current.scale.setScalar(pulse);
    });

    return (
        <group ref={starRef} position={position}>
            <mesh scale={0.85}>
                <shapeGeometry args={[sparkleShape]} />
                <meshBasicMaterial
                    color={LINE_COLOR}
                    transparent
                    opacity={0.16}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                    side={THREE.DoubleSide}
                    toneMapped={false}
                />
            </mesh>
            <mesh position={[0, 0, 0.01]} scale={0.5}>
                <shapeGeometry args={[sparkleShape]} />
                <meshBasicMaterial
                    color="#fff3a8"
                    transparent
                    opacity={0.85}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                    side={THREE.DoubleSide}
                    toneMapped={false}
                />
            </mesh>
            <mesh position={[0, 0, 0.02]}>
                <octahedronGeometry args={[0.04, 0]} />
                <meshBasicMaterial color="#fffbd8" toneMapped={false} />
            </mesh>
        </group>
    );
}

function GrowingLine({ start, end, delay }) {
    const positionRef = useRef(null);

    const positions = useMemo(
        () => new Float32Array([...start, ...start]),
        [start]
    );

    useFrame(({ clock }) => {
        const attribute = positionRef.current;
        if (!attribute) return;

        const duration = 1.15;
        const progress = THREE.MathUtils.clamp(
            (clock.elapsedTime - delay) / duration,
            0,
            1
        );
        const eased = 1 - Math.pow(1 - progress, 3);

        attribute.setXYZ(
            1,
            THREE.MathUtils.lerp(start[0], end[0], eased),
            THREE.MathUtils.lerp(start[1], end[1], eased),
            THREE.MathUtils.lerp(start[2], end[2], eased)
        );
        attribute.needsUpdate = true;
    });

    return (
        <line>
            <bufferGeometry>
                <bufferAttribute
                    ref={positionRef}
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <lineBasicMaterial
                color={LINE_COLOR}
                transparent
                opacity={0.8}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
                toneMapped={false}
            />
        </line>
    );
}

function StarScene() {
    const { size, viewport } = useThree();

    const triangleStars = useMemo(() => {
        const desktop = size.width >= 1024;
        const ratios = desktop
            ? [[0.2, 0.32], [0.75, 0.86], [0.05, 0.8]]//デスクトップ版
            : [[0.3, 0.34], [0.9, 0.68], [0.07, 0.6]];//モバイル版

        return ratios.map(([x, y]) => [
            (x - 0.5) * viewport.width,
            (0.5 - y) * viewport.height,
            0,
        ]);
    }, [size.width, viewport.width, viewport.height]);

    return (
        <>
            {/* 星の数 */}
            <RandomStars count={size.width >= 1024 ? 370 : 150} />

            <group scale={0.82}>
                <GrowingLine start={triangleStars[0]} end={triangleStars[1]} delay={0.35} />
                <GrowingLine start={triangleStars[1]} end={triangleStars[2]} delay={1.5} />
                <GrowingLine start={triangleStars[2]} end={triangleStars[0]} delay={2.65} />

                {triangleStars.map((position, index) => (
                    <TriangleStar
                        key={index}
                        position={position}
                        delay={index * 0.8}
                    />
                ))}
            </group>
        </>
    );
}

export default function SummerTriangle() {
    return (
        <div className="bg-canvas" aria-hidden="true">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 45, near: 0.1, far: 100 }}
                dpr={[1, 1.75]}
                gl={{ alpha: true, antialias: true }}
            >
                <ScrollCamera />
                <StarScene />
            </Canvas>
        </div>
    );
}
