"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { NAV_ITEMS } from "@/data/navigation";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${isScrolled
                ? "py-4"
                : "py-6"
                }`}
        >
            <div className="w-full px-4 md:px-8 flex items-center justify-between pointer-events-none">
                {/* 
                  The Navigation Bar
                  pointer-events-auto allowed for clicks through the spacer 
                */}
                <div className="flex items-center gap-4 pointer-events-auto w-full justify-between">

                    {/* Expandable Menu Bar */}
                    <motion.div
                        layout
                        initial={false}
                        className={`relative flex items-stretch h-14 overflow-hidden rounded-sm transition-colors duration-500 ${isMenuOpen ? "bg-[#111111]" : ""
                            }`}
                    >
                        {/* 1. Brand/Logo Section (Always Visible) */}
                        <Link
                            href="/"
                            className={`flex items-center justify-center px-2 border-r border-[#000]/5 group transition-colors duration-500 ${isMenuOpen ? 'bg-transparent' : ''}`}
                            onClick={() => isMenuOpen && setIsMenuOpen(false)}
                        >
                            <div className="relative">
                                <Image
                                    src="/assets/images/logo-regular.svg"
                                    alt="Niyilor"
                                    width={140}
                                    height={0}
                                    className="object-contain transition-all duration-700"
                                    priority
                                />
                            </div>
                        </Link>

                        {/* 2. Revealed Links (Slides in from the left of the Menu button) */}
                        <motion.div
                            initial={false}
                            animate={{
                                width: isMenuOpen ? "auto" : 0,
                                opacity: isMenuOpen ? 1 : 0,
                            }}
                            transition={{
                                width: { type: "spring", stiffness: 100, damping: 20 },
                                opacity: { duration: 0.6, ease: "easeInOut" }
                            }}
                            className="overflow-hidden flex items-center"
                        >
                            <nav className="flex items-center px-10 gap-10 whitespace-nowrap">
                                {NAV_ITEMS.map((item, idx) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: isMenuOpen ? 0.3 + (idx * 0.1) : 0,
                                            ease: "easeOut"
                                        }}
                                    >
                                        <Link
                                            href={item.href}
                                            className="text-white/90 hover:text-white text-xl font-semibold transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>
                        </motion.div>

                        {/* 3. Menu / Close Button (Moves right as bar expands) */}
                        <motion.button
                            layout
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`h-full flex items-center justify-center transition-colors px-4 group cursor-pointer relative ${isMenuOpen ? "bg-white/10 hover:bg-white/20" : "bg-white hover:bg-secondary"
                                }`}
                        >
                            <AnimatePresence mode="wait">
                                {!isMenuOpen ? (
                                    <motion.span
                                        key="menu-text"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.5 }}
                                        className="font-bold text-xl group-hover:text-white transition-colors"
                                    >
                                        Menu
                                    </motion.span>
                                ) : (
                                    <motion.div
                                        key="close-icon"
                                        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                        transition={{ duration: 0.5 }}
                                        className="flex items-center justify-center"
                                    >
                                        <Icon icon="carbon:close" className="w-10 h-10 text-white" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </motion.div>

                    {/* Right Side CTA - "Let's Talk" */}
                    <AnimatePresence>
                        {(!isScrolled || isMenuOpen) && (
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 40 }}
                                className="hidden md:block"
                            >
                                <Link
                                    href="/contact"
                                    className="h-14 px-8 bg-white text-black font-bold text-lg tracking-tighter flex items-center gap-3 rounded-sm hover:bg-secondary hover:text-white transition-all shadow-2xl active:scale-95 duration-200"
                                >
                                    Let&apos;s talk
                                    <Icon icon="carbon:arrow-up-right" className="w-5 h-5" />
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
}
