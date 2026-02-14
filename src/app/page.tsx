"use client";

import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* Scrollable content can be added here later */}
      <section className="h-screen flex items-center justify-center bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-display mb-6">Innovative Advertising Solutions</h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-400">
            We bridge the gap between imagination and reality, delivering impactful creative experiences that resonate with your audience.
          </p>
        </div>
      </section>
    </main>
  );
}
