"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Microscope, Award, ShieldCheck, Activity } from "lucide-react";

const stats = [
  { 
    value: "98%", 
    label: "Accuracy in Clinical Neuromusculoskeletal Diagnosis",
    icon: Microscope 
  },
  { 
    value: "200+", 
    label: "Verified Patient Success Stories at Ishwaryam",
    icon: Award 
  },
  { 
    value: "10000+", 
    label: "Clinical Hours Dedicated to Specialist Patient Care",
    icon: ShieldCheck 
  },
  { 
    value: "40%", 
    label: "Faster Recovery Timelines vs Traditional Protocols",
    icon: Activity 
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-white py-20 md:py-32 border-y border-border relative z-20 overflow-hidden">
      {/* Background Psychology: Subtle grid and vitality glow */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#0A6E6E 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container-custom relative z-10">
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
              <AnimatedCounter value={stat.value} label={stat.label} icon={stat.icon} />
              {/* Subtle divider (Desktop only) */}
              {idx < 3 && (
                <div className="hidden lg:block absolute -right-10 top-1/2 -translate-y-1/2 h-16 w-px bg-border/40" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
