"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
    const [step, setStep] = useState(0); // 0: Hello, 1: We Are, 2: Reveal (White), 3: Final (Dark)

    useEffect(() => {
        // Sequence of animations
        const timer1 = setTimeout(() => setStep(1), 1200); // Show "We Are" after 1.2s
        const timer2 = setTimeout(() => setStep(2), 2400); // Start curtain opening after 2.4s
        const timer3 = setTimeout(() => setStep(3), 4000); // Fade to dark background after reveal

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    return (
        <div className={`relative h-screen w-full overflow-hidden transition-colors duration-1000 ${step === 2 ? 'bg-white' : 'bg-black'}`}>
            {/* Revealed Content (Logo) */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={step >= 2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative w-64 h-32 md:w-96 md:h-48"
                >
                    <Image
                        src={step === 2 ? "/assets/images/logo-regular.svg" : "/assets/images/logo-dark.svg"}
                        alt="Niyilor Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </motion.div>
            </div>

            {/* Intro Text Overlay (Before Curtain Splits) */}
            <AnimatePresence mode="wait">
                {step < 2 && (
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 z-[60] flex items-center justify-center pointer-events-none"
                    >
                        <h1 className="text-white font-display text-5xl md:text-7xl lg:text-9xl text-center">
                            {step === 0 ? "Hello" : "We Are"}
                        </h1>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Curtain Panels */}
            <div className={`absolute inset-0 flex z-50 ${step >= 2 ? "pointer-events-none" : ""}`}>
                {/* Left Panel */}
                <motion.div
                    initial={{ x: 0 }}
                    animate={step >= 2 ? { x: "-100%" } : { x: 0 }}
                    transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
                    className="h-full w-1/2 bg-black flex items-center justify-center"
                />

                {/* Right Panel */}
                <motion.div
                    initial={{ x: 0 }}
                    animate={step >= 2 ? { x: "100%" } : { x: 0 }}
                    transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
                    className="h-full w-1/2 bg-black flex items-center justify-center"
                />
            </div>

            {/* Background Decorative Elements (Blobs) */}
            <div className="fixed inset-0 z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.15, 0.1],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.15, 0.1],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[100px]"
                />
            </div>
        </div>
    );
}
