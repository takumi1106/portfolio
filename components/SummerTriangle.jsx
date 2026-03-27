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
            const smallCount = isDesktop ? 65 : 45;
            const brightCount = isDesktop ? 10 : 6;

            for (let i = 0; i < smallCount; i++) {
                smallStars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    r: Math.random() * 1.2 + 0.85,
                    alpha: Math.random() * 0.35 + 0.15,
                });
            }

            for (let i = 0; i < brightCount; i++) {
                brightStars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    r: Math.random() * 1.6 + 1,
                    phase: Math.random() * Math.PI * 2,
                });
            }
        }

        function drawSkyStars(time) {
            smallStars.forEach((star) => {
                ctx.beginPath();
                ctx.fillStyle = `rgba(255,240,180,${star.alpha})`;
                ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
                ctx.fill();
            });

            brightStars.forEach((star) => {
                const twinkle = 0.45 + Math.sin(time * 0.002 + star.phase) * 0.2;

                ctx.beginPath();
                ctx.fillStyle = `rgba(255,245,220,${twinkle})`;
                ctx.shadowBlur = 10;
                ctx.shadowColor = "rgba(255,245,220,0.65)";
                ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
            });
        }

        function drawTriangleStars() {
            triangleStars.forEach((star) => {
                ctx.beginPath();
                ctx.strokeStyle = "rgba(255,235,170,0.14)";
                ctx.lineWidth = 1;
                ctx.shadowBlur = 14;
                ctx.shadowColor = "rgba(255,235,170,0.6)";
                ctx.moveTo(star.x - 12, star.y);
                ctx.lineTo(star.x + 12, star.y);
                ctx.moveTo(star.x, star.y - 12);
                ctx.lineTo(star.x, star.y + 12);
                ctx.stroke();

                ctx.beginPath();
                ctx.strokeStyle = "rgba(255,235,170,0.5)";
                ctx.lineWidth = 1;
                ctx.shadowBlur = 0;
                ctx.moveTo(star.x - 8, star.y);
                ctx.lineTo(star.x + 8, star.y);
                ctx.moveTo(star.x, star.y - 8);
                ctx.lineTo(star.x, star.y + 8);
                ctx.stroke();

                ctx.beginPath();
                ctx.fillStyle = "rgba(255,245,200,0.45)";
                ctx.arc(star.x, star.y, 3.8, 0, Math.PI * 2);
                ctx.fill();
            });
        }

        function drawTriangleLines() {
            ctx.beginPath();
            ctx.moveTo(triangleStars[0].x, triangleStars[0].y);
            ctx.lineTo(triangleStars[1].x, triangleStars[1].y);
            ctx.lineTo(triangleStars[2].x, triangleStars[2].y);
            ctx.closePath();
            ctx.strokeStyle = "rgba(255,235,170,0.35)";
            ctx.lineWidth = 1;
            ctx.shadowBlur = 6;
            ctx.shadowColor = "rgba(255,235,170,0.22)";
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

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return <canvas ref={canvasRef} className="bg-canvas" />;
}