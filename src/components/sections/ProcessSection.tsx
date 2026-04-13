"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, Map as MapIcon, Activity, Zap, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Diagnostic Rigor",
    description: "A comprehensive 60-point neuro-muscular assessment. We isolate the biomechanical failure, not just the symptom, using advanced orthopedic testing protocols.",
    subtext: "Clinical Assessment Phase",
  },
  {
    icon: MapIcon,
    title: "Recovery Architecture",
    description: "Engineering a bespoke clinical roadmap. We calculate loading cycles and recovery curves specific to your physiological baseline and movement goals.",
    subtext: "Strategic Protocol Design",
  },
  {
    icon: Activity,
    title: "Clinical Intervention",
    description: "Surgical-grade manual therapy combined with corrective movement patterns. We reset the nervous system to restore functional autonomy.",
    subtext: "Active Rehabilitation",
  },
  {
    icon: Zap,
    title: "Functional Hardening",
    description: "Transitioning from recovery to resilience. We proof your body against re-injury by reinforcing structural integrity through high-fidelity motor control.",
    subtext: "Performance Evolution",
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
    <section ref={containerRef} className="section-padding bg-primary/[0.02] relative overflow-hidden">
      {/* Healing Psychology Layers */}
      <div className="vitality-glow top-0 left-0 -translate-y-1/2 -translate-x-1/2 opacity-5" />
      <div className="vitality-glow bottom-0 right-0 translate-y-1/2 translate-x-1/2 rose-glow opacity-10" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-12 bg-accent/50" />
            <span className="text-accent font-ui font-bold tracking-[0.4em] text-[10px] uppercase">
              Ishwaryam Recovery Protocol
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold text-text-primary leading-[1.1] mb-12 tracking-tight">
            A Masterclass in <br className="hidden md:block" />
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Step Number Badge */}
              <div className="w-24 h-24 rounded-[32px] bg-white border border-border shadow-sm flex items-center justify-center mb-10 group-hover:border-primary/30 group-hover:shadow-premium transition-all duration-500 relative z-10 mx-auto lg:mx-0">
                 <div className="absolute inset-2 border border-dashed border-primary/10 rounded-[24px] pointer-events-none" />
                 <step.icon className="w-9 h-9 text-primary group-hover:scale-110 transition-transform duration-500" />
                 <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-[10px] font-bold font-ui shadow-lg ring-4 ring-white">
                    0{idx + 1}
                 </div>
              </div>

              <div className="text-center lg:text-left">
                <h3 className="text-xl md:text-2xl font-display font-bold text-text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-sm font-ui text-text-secondary leading-relaxed mb-6 pr-4">
                  {step.description}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-pill border border-border shadow-sm">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                   <span className="text-[9px] font-ui font-bold text-text-muted uppercase tracking-wider">
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
