"use client";

import { IconArrowLeft, IconArrowRight, IconQuote } from "@tabler/icons-react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

type Testimonial = {
    quote: string;
    name: string;
    designation: string;
    src?: string;
};

export const AnimatedTestimonials = ({
    testimonials,
    autoplay = true,
}: {
    testimonials: Testimonial[];
    autoplay?: boolean;
}) => {
    const [active, setActive] = useState(0);

    /* ---------------- Parallax Logic ---------------- */
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const sx = useSpring(mx, { stiffness: 100, damping: 30 });
    const sy = useSpring(my, { stiffness: 100, damping: 30 });

    const rotateX = useTransform(sy, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(sx, [-0.5, 0.5], [-10, 10]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        mx.set(x);
        my.set(y);
    };

    const handleMouseLeave = () => {
        mx.set(0);
        my.set(0);
    };

    /* ---------------- Autoplay ---------------- */
    useEffect(() => {
        if (!autoplay) return;
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % testimonials.length);
        }, 8000); // Slower interval for readability
        return () => clearInterval(interval);
    }, [autoplay, testimonials.length]);

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const handleNext = () => {
        setActive((prev) => (prev + 1) % testimonials.length);
    };

    return (
        <section className="relative w-full py-24 overflow-hidden flex flex-col items-center justify-center min-h-[600px]">
            {/* Background Glows (Subtle) */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center pointer-events-none opacity-40">
                <div className="w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] translate-x-32 mix-blend-screen" />
            </div>

            <div
                className="relative z-10 perspective-1000 w-full max-w-4xl mx-auto px-4 flex flex-col items-center gap-12"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {/* 3D Tilt Container */}
                <motion.div
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d",
                    }}
                    className="relative w-full max-w-[400px] h-[480px]" // Fixed size container for the card
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                            className="w-full h-full"
                        >
                            {/* THE CARD DESIGN */}
                            <div className="relative h-full w-full flex flex-col justify-between p-8 rounded-[24px] overflow-hidden leading-[1.6] border border-white/10 bg-[#09090b] shadow-2xl group">
                                {/* Hover Outline Effect */}
                                <div className="absolute inset-0 pointer-events-none transition-all duration-[480ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:shadow-[inset_0_0_0_1px_#FFD700] z-20" />

                                <div className="flex flex-col h-full justify-between gap-6 text-white w-full relative z-10">
                                    {/* Header */}
                                    <div className="flex flex-col gap-1 border-b border-white/10 pb-6">
                                        <strong className="text-2xl font-bold leading-tight tracking-tight text-white">{testimonials[active].name}</strong>
                                        <p className="text-white/60 text-sm tracking-wide uppercase">{testimonials[active].designation}</p>
                                    </div>

                                    {/* Body */}
                                    <div className="flex flex-col items-start gap-4 flex-1 overflow-hidden">
                                        <div className="mb-2">
                                            <IconQuote className="text-[#FFD700] w-8 h-8 opacity-80" />
                                        </div>
                                        <p className="opacity-90 text-lg leading-relaxed font-light text-white overflow-y-auto pr-2 custom-scrollbar">
                                            "{testimonials[active].quote}"
                                        </p>
                                    </div>

                                    {/* Footer Button */}
                                    <div className="pt-4 mt-auto">
                                        <button className="relative bg-transparent text-sm font-bold text-white cursor-pointer overflow-hidden py-2 uppercase tracking-wider transition-all duration-[480ms] ease-[cubic-bezier(0.23,1,0.32,1)] group/btn active:scale-95 flex items-center gap-2">
                                            <span>Ver historia completa</span>
                                            <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#FFD700] transition-transform duration-[640ms] ease-[cubic-bezier(0.23,1,0.32,1)] origin-right scale-x-0 group-hover/btn:scale-x-100 group-hover/btn:origin-left" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

                {/* Navigation Controls */}
                <div className="flex items-center gap-6 z-20">
                    <button
                        onClick={handlePrev}
                        className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center transition hover:bg-white/10 hover:border-white/30 backdrop-blur-sm"
                    >
                        <IconArrowLeft className="w-5 h-5 text-white" />
                    </button>

                    <div className="flex gap-2">
                        {testimonials.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-1.5 rounded-full transition-all duration-300 ${idx === active ? 'w-8 bg-primary shadow-glow' : 'w-2 bg-white/20'}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={handleNext}
                        className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center transition hover:bg-white/10 hover:border-white/30 backdrop-blur-sm"
                    >
                        <IconArrowRight className="w-5 h-5 text-white" />
                    </button>
                </div>
            </div>
        </section>
    );
};
