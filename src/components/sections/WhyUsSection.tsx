"use client";

import { motion } from "framer-motion";
import { CLINIC_DATA } from "@/lib/clinic-data";
import { ShieldCheck, Zap, Heart, MapPin } from "lucide-react";

const features = [
  {
    title: "Clinical Precision",
    description: "Every assessment follows evidence-based physiotherapy protocols. Nothing is guessed. Everything is measured.",
    icon: ShieldCheck,
  },
  {
    title: "No Generic Plans — Ever",
    description: "Your body is not average. Your treatment plan will not be either. Dr. Ishwarya personally evaluates every patient.",
    icon: Zap,
  },
  {
    title: "Zero Dependency Philosophy",
    description: "We do not create patients who need us forever. We build bodies that heal independently. That is our real success metric.",
    icon: Heart,
  },
  {
    title: "Rooted in Gudiyatham",
    description: "We are not a chain clinic. We are your neighbor. We know this community, its people, and its needs.",
    icon: MapPin,
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 bg-bg">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent font-ui font-bold tracking-[0.2em] text-xs uppercase mb-4 block"
          >
            The Difference
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6"
          >
            You Have Choices. Here Is Why Patients Choose Us.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-6 p-8 rounded-2xl bg-white border border-border shadow-sm group hover:shadow-hover transition-all"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <feature.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary font-ui leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
