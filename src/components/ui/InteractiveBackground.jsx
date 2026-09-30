import React, { useEffect, useRef } from "react";

export function InteractiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      alpha: true,
    });

    if (!ctx) return;

    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Cap DPR for better performance on high-resolution displays.
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // -----------------------------
    // CONFIGURATION
    // -----------------------------

    const spacing = 30;

    const baseRadius = 1.15;
    const maxRadius = 3.2;

    const interactionRadius = 160;

    // Maximum distance a dot can move away from cursor.
    const maxPushDistance = 18;

    // Smoothness of dot movement.
    const dotEase = 0.12;

    // Smoothness of mouse movement.
    const mouseEase = 0.12;

    // Colors / opacity.
    const baseOpacity = 0.18;
    const maxOpacity = 0.9;

    // -----------------------------
    // REDUCED MOTION
    // -----------------------------

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // -----------------------------
    // MOUSE
    // -----------------------------

    const mouse = {
      x: -1000,
      y: -1000,
    };

    const targetMouse = {
      x: -1000,
      y: -1000,
    };

    let isMouseActive = false;

    // -----------------------------
    // DOTS
    // -----------------------------

    let dots = [];

    const createDots = () => {
      dots = [];

      for (let x = 0; x <= width; x += spacing) {
        for (let y = 0; y <= height; y += spacing) {
          dots.push({
            baseX: x,
            baseY: y,

            x,
            y,

            radius: baseRadius,

            opacity: baseOpacity,
          });
        }
      }
    };

    // -----------------------------
    // CANVAS SETUP
    // -----------------------------

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // IMPORTANT:
      // Reset the transform before applying DPI scaling.
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createDots();
    };

    resizeCanvas();

    // -----------------------------
    // EVENTS
    // -----------------------------

    const handleMouseMove = (event) => {
      targetMouse.x = event.clientX;
      targetMouse.y = event.clientY;

      isMouseActive = true;
    };

    const handleMouseLeave = () => {
      isMouseActive = false;

      targetMouse.x = -1000;
      targetMouse.y = -1000;
    };

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    window.addEventListener("mouseleave", handleMouseLeave);

    window.addEventListener("resize", handleResize);

    // -----------------------------
    // DRAW
    // -----------------------------

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // --------------------------------
      // Smooth mouse movement
      // --------------------------------

      mouse.x += (targetMouse.x - mouse.x) * mouseEase;
      mouse.y += (targetMouse.y - mouse.y) * mouseEase;

      // --------------------------------
      // Draw dots
      // --------------------------------

      dots.forEach((dot) => {
        let targetX = dot.baseX;
        let targetY = dot.baseY;

        let targetRadius = baseRadius;
        let targetOpacity = baseOpacity;

        if (isMouseActive && !prefersReducedMotion) {
          const dx = mouse.x - dot.baseX;
          const dy = mouse.y - dot.baseY;

          const distanceSquared = dx * dx + dy * dy;
          const interactionRadiusSquared =
            interactionRadius * interactionRadius;

          if (distanceSquared < interactionRadiusSquared) {
            // Avoid sqrt when calculating whether a dot is inside the radius.
            const distance = Math.sqrt(distanceSquared);

            // 0 at edge, 1 at cursor.
            let force =
              1 - distance / interactionRadius;

            // Make the center stronger and softer toward the edge.
            force = Math.pow(force, 1.8);

            // Direction from cursor → dot.
            const angle = Math.atan2(dy, dx);

            const pushDistance =
              force * maxPushDistance;

            // Push dots away from cursor.
            targetX =
              dot.baseX -
              Math.cos(angle) * pushDistance;

            targetY =
              dot.baseY -
              Math.sin(angle) * pushDistance;

            // Increase size.
            targetRadius =
              baseRadius +
              force * (maxRadius - baseRadius);

            // Increase opacity.
            targetOpacity =
              baseOpacity +
              force * (maxOpacity - baseOpacity);
          }
        }

        // --------------------------------
        // Smooth dot movement
        // --------------------------------

        dot.x += (targetX - dot.x) * dotEase;
        dot.y += (targetY - dot.y) * dotEase;

        dot.radius +=
          (targetRadius - dot.radius) * dotEase;

        dot.opacity +=
          (targetOpacity - dot.opacity) * dotEase;

        // --------------------------------
        // Draw
        // --------------------------------

        ctx.beginPath();

        ctx.fillStyle = `rgba(
          6,
          182,
          212,
          ${dot.opacity}
        )`;

        ctx.arc(
          dot.x,
          dot.y,
          dot.radius,
          0,
          Math.PI * 2
        );

        ctx.fill();
      });

      animationFrameId =
        requestAnimationFrame(draw);
    };

    draw();

    // -----------------------------
    // CLEANUP
    // -----------------------------

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 block h-screen w-screen"
    />
  );
}