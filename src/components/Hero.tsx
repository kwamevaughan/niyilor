"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const CLIENT_LOGOS = [
    { name: "Samsung", icon: "simple-icons:samsung" },
    { name: "Apple", icon: "simple-icons:apple" },
    { name: "Google", icon: "simple-icons:google" },
    { name: "Nike", icon: "simple-icons:nike" },
    { name: "Adidas", icon: "simple-icons:adidas" },
    { name: "Coca-Cola", icon: "simple-icons:cocacola" },
    { name: "Pepsi", icon: "simple-icons:pepsi" },
    { name: "Amazon", icon: "simple-icons:amazon" },
    { name: "Microsoft", icon: "simple-icons:microsoft" },
    { name: "Tesla", icon: "simple-icons:tesla" },
];

export default function Hero() {
    const [step, setStep] = useState(0); // 0: Hello, 1: We Are, 2: Reveal (White), 3: Final (Dark)

    useEffect(() => {
        const timer1 = setTimeout(() => setStep(1), 1200);
        const timer2 = setTimeout(() => setStep(2), 2400);
        const timer3 = setTimeout(() => setStep(3), 4000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    // Double logos for continuous marquee
    const marqueeLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

    return (
        <div className={`relative h-screen w-full overflow-hidden transition-colors duration-1000 ${step === 2 ? 'bg-white' : 'bg-black'}`}>
            {/* Revealed Content (Logo) - Centered Overlay */}
            <div className="absolute inset-0 flex justify-center items-center z-10 px-6 md:px-10 lg:px-12 pointer-events-none">
                <div className="w-full max-w-7xl flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={step >= 2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative"
                    >
                        <Image
                            src={step === 2 ? "/assets/images/logo-regular.svg" : "/assets/images/logo-dark.svg"}
                            alt="Niyilor Logo"
                            className="object-contain"
                            width={300}
                            height={0}
                            priority
                        />
                    </motion.div>
                </div>
            </div>

            {/* Marquee (Bottom) - FULL WIDTH (Edge to Edge) */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={step >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-12 left-0 right-0 z-20 group"
            >
                {/* No inner max-w container here, so it stretches to the very ends of the screen */}
                <div className="relative flex overflow-hidden py-4 border-y border-white/5 bg-black/5 backdrop-blur-sm">
                    <motion.div
                        initial={{ x: "0%" }}
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="flex items-center gap-16 whitespace-nowrap"
                    >
                        {marqueeLogos.map((logo, idx) => (
                            <div key={`${logo.name}-${idx}`} className="flex items-center gap-4">
                                <Icon
                                    icon={logo.icon}
                                    className={`w-12 h-12 transition-colors duration-500 ${step === 2 ? 'text-black/70' : 'text-white/70'}`}
                                />
                                <span className={`text-sm font-bold tracking-tighter transition-colors duration-500 uppercase ${step === 2 ? 'text-black/60' : 'text-white/60'}`}>
                                    {logo.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            {/* Intro Text Overlay */}
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
                <motion.div
                    initial={{ x: 0 }}
                    animate={step >= 2 ? { x: "-100%" } : { x: 0 }}
                    transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
                    className="h-full w-1/2 bg-black"
                />
                <motion.div
                    initial={{ x: 0 }}
                    animate={step >= 2 ? { x: "100%" } : { x: 0 }}
                    transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
                    className="h-full w-1/2 bg-black"
                />
            </div>

            {/* Background Decorative Elements */}
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
