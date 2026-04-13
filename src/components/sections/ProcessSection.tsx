"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, Map as MapIcon, Activity, Zap, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Clinical Assessment",
    description: "Deep-dive diagnostic into your neuro-muscular root cause. We don't just look at where it hurts; we find why it hurts.",
    subtext: "Duration: 45-60 Mins",
  },
  {
    icon: MapIcon,
    title: "Recovery Architecture",
    description: "Designing a world-class protocol tailored to your unique biology, lifestyle, and recovery timeline.",
    subtext: "Bespoke Movement Plan",
  },
  {
    icon: Activity,
    title: "Active Rehabilitation",
    description: "Evidence-based manual therapy and neurological training to rebuild function and erase movement compensations.",
    subtext: "Clinical Precision",
  },
  {
    icon: Zap,
    title: "Functional Evolution",
    description: "Hardening your body against future injury and transitioning back to your optimal performance level.",
    subtext: "Future-Proofing",
  },
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-ui font-bold tracking-[0.4em] text-[10px] uppercase">
              The Protocol
            </span>
          </motion.div>
          
          <h2 className="text-6xl md:text-8xl font-display font-bold text-text-primary leading-[1.05] mb-12">
            A Masterclass in <br />
            <span className="text-primary italic">Recovery</span> Science.
          </h2>
        </div>

        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-0.5 bg-border -z-10">
            <motion.div 
              className="h-full bg-primary origin-left"
              style={{ scaleX: pathLength }}
            />
          </div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Step Number Badge */}
              <div className="w-24 h-24 rounded-[32px] bg-white border border-border shadow-sm flex items-center justify-center mb-10 group-hover:border-primary/30 group-hover:shadow-premium transition-all duration-500 relative z-10 mx-auto lg:mx-0">
                 <step.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-500" />
                 <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-[10px] font-bold font-ui">
                    0{idx + 1}
                 </div>
              </div>

              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-display font-bold text-text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-sm font-ui text-text-secondary leading-relaxed mb-6 pr-4">
                  {step.description}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-bg rounded-pill border border-border">
                   <div className="w-2 h-2 rounded-full bg-primary/40" />
                   <span className="text-[10px] font-ui font-bold text-text-muted uppercase tracking-wider">
                      {step.subtext}
                   </span>
                </div>
              </div>

              {/* Verified Badge (Last Step) */}
              {idx === 3 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                  className="absolute -bottom-16 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0"
                >
                  <div className="flex items-center gap-3 bg-primary/5 border border-primary/20 px-6 py-3 rounded-2xl">
                     <CheckCircle2 className="w-5 h-5 text-primary" />
                     <span className="text-[10px] font-ui font-bold text-primary uppercase tracking-widest whitespace-nowrap">Clinical Guarantee</span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
