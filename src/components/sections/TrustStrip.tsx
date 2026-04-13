"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: "5.0★", label: "Patient Satisfaction — Google Reviews" },
  { value: "15+", label: "Successful Patient Recoveries" },
  { value: "100%", label: "Evidence-Based Treatment Plans" },
  { value: "1", label: "Goal: Your Complete Function" },
];

export default function TrustStrip() {
  return (
    <section className="bg-white py-16 md:py-24 border-y border-border relative z-20 overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 flex justify-between pointer-events-none opacity-5 px-6 md:px-32">
        <div className="w-px h-full bg-primary" />
        <div className="w-px h-full bg-primary hidden md:block" />
        <div className="w-px h-full bg-primary hidden md:block" />
        <div className="w-px h-full bg-primary" />
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <AnimatedCounter value={stat.value} label={stat.label} />
              {/* Subtle divider (Desktop only) */}
              {idx < 3 && (
                <div className="hidden lg:block absolute -right-10 top-1/2 -translate-y-1/2 h-8 w-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
