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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? "bg-black/50 backdrop-blur-md border-b border-white/10 py-4 shadow-lg"
                        : "bg-transparent py-6"
                    }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative z-50 group">
                        <div className="relative w-32 h-10 md:w-40 md:h-12 transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src="/assets/images/logo-regular.svg"
                                alt="Niyilor Advertising"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {NAV_ITEMS.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`relative text-sm font-medium transition-colors hover:text-white group ${isActive ? "text-white" : "text-white/70"
                                        }`}
                                >
                                    {item.label}
                                    {/* Hover/Active Underline Animation */}
                                    <span
                                        className={`absolute -bottom-1 left-0 h-0.5 bg-accent rounded-full transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                            }`}
                                    />
                                </Link>
                            );
                        })}

                        {/* CTA Button */}
                        <Link
                            href="/contact"
                            className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-slate-200 transition-colors shadow-lg shadow-white/10 active:scale-95 duration-200"
                        >
                            Start a Project
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden relative z-50 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                        aria-label="Toggle Menu"
                    >
                        <Icon
                            icon={isMobileMenuOpen ? "carbon:close" : "carbon:menu"}
                            className="w-6 h-6"
                        />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-6 lg:hidden"
                    >
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="absolute top-[-20%] right-[-20%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px]" />
                            <div className="absolute bottom-[-20%] left-[-20%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px]" />
                        </div>

                        <nav className="flex flex-col items-center gap-6 w-full max-w-sm relative z-10">
                            {NAV_ITEMS.map((item, index) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="w-full text-center"
                                >
                                    <Link
                                        href={item.href}
                                        className="block text-3xl font-bold text-white/50 hover:text-white transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-8 w-full"
                            >
                                <Link
                                    href="/contact"
                                    className="block w-full py-4 rounded-full bg-white text-black text-center font-bold text-lg hover:bg-slate-200 transition-transformation active:scale-95"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Start a Project
                                </Link>
                            </motion.div>
                        </nav>

                        <div className="absolute bottom-12 flex gap-8">
                            {["instagram", "twitter", "linkedin"].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="text-white/40 hover:text-white transition-colors"
                                >
                                    <Icon icon={`simple-icons:${social}`} className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
