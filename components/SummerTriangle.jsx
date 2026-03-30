"use client";

import { useEffect, useRef } from "react";

export default function SummerTriangle() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        let triangleStars = [];
        let smallStars = [];
        let brightStars = [];
        let animationId;
        let scrollY = 0;

        function setTriangleStars() {
            if (window.innerWidth >= 1024) {
                triangleStars = [
                    { x: canvas.width * 0.2, y: canvas.height * 0.33 },
                    { x: canvas.width * 0.73, y: canvas.height * 0.83 },
                    { x: canvas.width * 0.05, y: canvas.height * 0.74 },
                ];
            } else {
                triangleStars = [
                    { x: canvas.width * 0.3, y: canvas.height * 0.37 },
                    { x: canvas.width * 0.95, y: canvas.height * 0.65 },
                    { x: canvas.width * 0.04, y: canvas.height * 0.57 },
                ];
            }
        }

        function createSkyStars() {
            smallStars = [];
            brightStars = [];

            const isDesktop = window.innerWidth >= 1024;
            const smallCount = isDesktop ? 35 : 25;
            const brightCount = isDesktop ? 40 : 32;

            for (let i = 0; i < smallCount; i++) {
                smallStars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    r: Math.random() * 1.2 + 0.5,
                    alpha: Math.random() * 0.25 + 0.12,
                });
            }

            for (let i = 0; i < brightCount; i++) {
                brightStars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    r: Math.random() * 1.4 + 0.9,
                    phase: Math.random() * Math.PI * 2,
                    speed: Math.random() * 0.18 + 0.04,
                    glow: Math.random() * 4 + 8,
                });
            }
        }

        function handleScroll() {
            scrollY = window.scrollY;
        }

        function drawSkyStars(time) {
            smallStars.forEach((star) => {
                ctx.beginPath();
                ctx.fillStyle = `rgba(255,240,180,${star.alpha})`;
                ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
                ctx.fill();
            });

            brightStars.forEach((star) => {
                const y = star.y + scrollY * 0.035;
                const twinkle = 0.55 + Math.sin(time * 0.008 + star.phase) * 0.12;//星をピカピカ

                ctx.beginPath();
                ctx.fillStyle = `rgba(255,248,230,${twinkle})`;
                ctx.shadowBlur = star.glow;
                ctx.shadowColor = `rgba(255,245,220,${twinkle * 0.7})`;
                ctx.arc(star.x, y, star.r, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
            });
        }

        function drawTriangleStars(time) {
            triangleStars.forEach((star, i) => {
                const twinkle = 0.6 + Math.sin(time * 0.001 + i) * 0.1;

                ctx.beginPath();
                ctx.strokeStyle = `rgba(255,235,170,${0.2 * twinkle})`;
                ctx.lineWidth = 1;
                ctx.shadowBlur = 14 * twinkle;
                ctx.shadowColor = "rgba(255,255,170,0.8)";
                ctx.moveTo(star.x - 12, star.y);
                ctx.lineTo(star.x + 12, star.y);
                ctx.moveTo(star.x, star.y - 12);
                ctx.lineTo(star.x, star.y + 12);
                ctx.stroke();

                ctx.beginPath();
                ctx.strokeStyle = `rgba(255,235,170,${0.8 * twinkle})`;
                ctx.lineWidth = 1;
                ctx.shadowBlur = 0;
                ctx.moveTo(star.x - 8, star.y);
                ctx.lineTo(star.x + 8, star.y);
                ctx.moveTo(star.x, star.y - 8);
                ctx.lineTo(star.x, star.y + 8);
                ctx.stroke();

                ctx.beginPath();
                ctx.fillStyle = `rgba(255,245,200,${0.4 * twinkle})`;
                ctx.arc(star.x, star.y, 4.5, 0, Math.PI * 2);
                ctx.fill();
            });
        }

        function drawTriangleLines() {
            ctx.beginPath();
            ctx.moveTo(triangleStars[0].x, triangleStars[0].y);
            ctx.lineTo(triangleStars[1].x, triangleStars[1].y);
            ctx.lineTo(triangleStars[2].x, triangleStars[2].y);
            ctx.closePath();
            ctx.strokeStyle = "rgba(255,235,170,0.65)";
            ctx.lineWidth = 1;
            ctx.shadowBlur = 6;
            ctx.shadowColor = "rgba(255,235,170,0.32)";
            ctx.stroke();
            ctx.shadowBlur = 0;
        }

        function draw(time = 0) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawSkyStars(time);
            drawTriangleLines();
            drawTriangleStars();
        }

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            setTriangleStars();
            createSkyStars();
            draw();
        }

        function animate(time) {
            draw(time);
            animationId = requestAnimationFrame(animate);
        }

        resizeCanvas();
        animate();

        window.addEventListener("resize", resizeCanvas);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("scroll", handleScroll);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return <canvas ref={canvasRef} className="bg-canvas" />;
}