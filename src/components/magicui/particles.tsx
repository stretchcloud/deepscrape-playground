"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
  color?: string;
  vx?: number;
  vy?: number;
}

export default function Particles({
  className = "",
  quantity = 30,
  staticity = 50,
  ease = 50,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<any[]>([]);
  const animationFrame = useRef<number>();
  const [canvasSize, setCanvasSize] = useState({ w: 0, h: 0 });

  const initCanvas = () => {
    const canvas = canvasRef.current;
    const container = canvasContainerRef.current;
    if (!canvas || !container) return;

    context.current = canvas.getContext("2d");
    const rect = container.getBoundingClientRect();
    const { width: w, height: h } = rect;
    setCanvasSize({ w, h });
    canvas.width = w;
    canvas.height = h;
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    const container = canvasContainerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const { width: w, height: h } = rect;
    setCanvasSize({ w, h });
    canvas.width = w;
    canvas.height = h;
  };

  const circleParams = () => {
    const x = Math.floor(Math.random() * canvasSize.w);
    const y = Math.floor(Math.random() * canvasSize.h);
    const translateX = 0;
    const translateY = 0;
    const size = Math.floor(Math.random() * 2) + 1;
    const alpha = 0;
    const targetAlpha = parseFloat((Math.random() * 0.6).toFixed(1));
    const dx = (Math.random() - 0.5) * 0.2;
    const dy = (Math.random() - 0.5) * 0.2;
    const magnetism = 0.1 + Math.random() * 4;
    return {
      x,
      y,
      translateX,
      translateY,
      size,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism,
    };
  };

  const drawCircle = (circle: any, update = false) => {
    const { x, y, translateX, translateY, size, alpha } = circle;
    const ctx = context.current;
    if (!ctx) return;

    ctx.translate(translateX, translateY);
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fillStyle = `${color}${Math.floor(alpha * 255).toString(16).padStart(2, "0")}`;
    ctx.fill();
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    if (!update) {
      circles.current.push(circle);
    }
  };

  const clearContext = () => {
    const ctx = context.current;
    if (!ctx) return;
    ctx.clearRect(0, 0, canvasSize.w, canvasSize.h);
  };

  const drawParticles = () => {
    clearContext();
    const particleCount = quantity;
    const existingCircles = circles.current.slice(0, particleCount);

    existingCircles.forEach((circle) => {
      drawCircle(circle, true);
    });
  };

  const remapValue = (
    value: number,
    start1: number,
    end1: number,
    start2: number,
    end2: number,
  ): number => {
    const remapped =
      ((value - start1) / (end1 - start1)) * (end2 - start2) + start2;
    return remapped > 0 ? remapped : 0;
  };

  const animate = () => {
    drawParticles();
    animationFrame.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    initCanvas();
    const handleResize = () => resizeCanvas();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (canvasSize.w > 0 && canvasSize.h > 0) {
      circles.current.length = 0;
      for (let i = 0; i < quantity; i++) {
        const circle = circleParams();
        drawCircle(circle);
      }
      animate();
    }

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [canvasSize, quantity, color, refresh]);

  return (
    <div className={className} ref={canvasContainerRef} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}