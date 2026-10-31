"use client";

import { useEffect, useRef } from "react";

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    let step = 0;
    const linesCount = 5;

    const render = () => {
      step += 0.008;

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < linesCount; i++) {
        ctx.beginPath();
        ctx.lineWidth = 1.5;

        const alpha = 0.15 - i * 0.02;
        ctx.strokeStyle = `rgba(16, 185, 129, ${Math.max(alpha, 0.03)})`;

        const baseHeight = height * 0.5 + (i - linesCount / 2) * 60;

        for (let x = 0; x <= width; x += 20) {
          const distanceToMouse = Math.abs(x - mouseX);
          const mouseFactor = Math.max(0, 1 - distanceToMouse / 400);

          const y =
            baseHeight +
            Math.sin(x * 0.003 + step + i * 0.8) * 45 +
            Math.cos(x * 0.0015 - step * 0.5) * 35 +
            (mouseY - height / 2) * 0.1 * mouseFactor;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 bg-slate-950 overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full opacity-70" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px]" />
    </div>
  );
}
