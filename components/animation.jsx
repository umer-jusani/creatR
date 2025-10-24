"use client";
import React, { useEffect, useRef } from 'react'

const Animation = () => {
    const blobRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0 });
    const target = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            target.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener("mousemove", handleMouseMove);

        let animationFrame;

        const animate = () => {
            // interpolate position for smoothness
            mouse.current.x += (target.current.x - mouse.current.x) * 0.1;
            mouse.current.y += (target.current.y - mouse.current.y) * 0.1;

            if (blobRef.current) {
                blobRef.current.style.left = `${mouse.current.x - 160}px`;
                blobRef.current.style.top = `${mouse.current.y - 160}px`;
            }

            animationFrame = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-green-900/20 animate-pulse" />

            <div
                ref={blobRef}
                className="fixed w-80 h-80 z-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 animate-pulse pointer-events-none rounded-full blur-3xl transition-transform"
            />
        </>
    )
}

export default Animation
