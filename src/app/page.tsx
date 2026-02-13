"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const countdown = [
    { label: "Days", value: "12" },
    { label: "Hours", value: "08" },
    { label: "Mins", value: "45" },
    { label: "Secs", value: "12" },
  ];

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-10 bg-[#020617]">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/20 blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-600/20 blur-[150px]"
        />
      </div>

      <div className="max-w-4xl w-full">
        <main id="main-content" className="text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center gap-4 mb-12"
          >
            <div className="relative w-48 h-16">
              <Image
                src="/logo.png"
                alt="Niyilor Logo - Creative Advertising Agency"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm font-medium text-accent mb-8 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Something big is brewing
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-8">
              #WeAre<span className="text-gradient">Niyilor</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
              A full-service advertising agency that specializes in creative solutions for businesses of all sizes.
              We're your one-stop shop for all things creative.
            </p>
          </motion.div>

          {/* Countdown Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-2xl mx-auto">
            {countdown.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-3xl glass border border-white/5 flex flex-col items-center justify-center group hover:border-accent/30 transition-colors"
              >
                <span className="text-3xl md:text-4xl font-bold text-white mb-1">{item.value}</span>
                <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">{item.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="max-w-md mx-auto"
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative p-1 rounded-full bg-white/5 border border-white/10 flex items-center focus-within:border-accent/50 transition-all shadow-2xl"
            >
              <label htmlFor="email-input" className="sr-only">Email address for waitlist</label>
              <input
                id="email-input"
                type="email"
                placeholder="Join the waitlist"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent px-6 py-3 text-white placeholder:text-slate-500 outline-none w-full font-medium"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-accent text-white font-bold text-sm hover:opacity-90 transition-opacity whitespace-nowrap shadow-lg shadow-blue-500/20 active:scale-95 duration-200"
              >
                Notify Me
              </button>
            </form>
            <p className="mt-4 text-xs text-slate-500 font-medium">
              Get an exclusive first look when we launch.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-20 flex justify-center gap-8"
          >
            {[
              { id: "instagram", name: "Instagram" },
              { id: "twitter", name: "Twitter" },
              { id: "linkedin", name: "LinkedIn" },
              { id: "facebook", name: "Facebook" }
            ].map((social) => (
              <a
                key={social.id}
                href={`https://${social.id}.com/niyilor`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors group"
                aria-label={`Follow Niyilor Advertising on ${social.name}`}
              >
                <Icon
                  icon={`simple-icons:${social.id}`}
                  className="w-6 h-6 transition-transform group-hover:scale-110"
                />
              </a>
            ))}
          </motion.div>
        </main>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-8 left-0 right-0 text-center">
        <p className="text-xs text-slate-600 font-bold tracking-[0.2em] uppercase">
          © {new Date().getFullYear()} NIYILOR ADVERTISING. EST. IN CREATIVITY.
        </p>
      </footer>
    </div>
  );
}
