"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/clinic-data";
import { ArrowRight, Activity, Plus } from "lucide-react";
import Image from "next/image";

const SERVICE_IMAGES: Record<string, string> = {
  "Orthopedic Physiotherapy": "/images/orthopedic_physio.png",
  "Spine & Back Pain Rehabilitation": "/images/spine_physio.png",
  "Neurological Rehabilitation": "/images/neuro_physio.png",
  "Post-Surgical Recovery": "/images/post_surgical_physio.png",
  "Sports Injury Rehabilitation": "/images/sports_physio.png",
};

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-bg relative overflow-hidden">
      {/* Background Depth */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/[0.01] -z-10" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 blur-[120px] rounded-full -z-10" />

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
              Clinical Specialities
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-display font-bold text-text-primary leading-[1.05] mb-12"
          >
            Engineering <span className="text-primary italic">Precision</span> <br /> 
            into Human Movement.
          </motion.h2>

          <p className="text-xl text-text-secondary leading-relaxed max-w-2xl font-ui">
            We operate at the intersection of medical science and therapeutic empathy. 
            Our clinical pathways are designed to restore function with surgical precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {SERVICES.map((service, idx) => {
            const hasImage = SERVICE_IMAGES[service.title];
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col h-[650px] rounded-t-[48px] rounded-b-[32px] overflow-hidden bg-white shadow-card hover:shadow-premium transition-all duration-500"
              >
                {/* Image Container (Top 50%) - Separated from text */}
                <div className="relative h-1/2 overflow-hidden bg-bg">
                  {hasImage ? (
                    <img 
                      src={hasImage}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                       <Activity className="w-16 h-16 text-primary/10" />
                    </div>
                  )}
                  {/* Subtle Gradient Hint */}
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Category Badge */}
                  <div className="absolute bottom-6 left-6">
                    <span className="px-5 py-2 rounded-pill bg-white/90 backdrop-blur-md border border-white/20 text-[9px] font-ui font-bold uppercase tracking-widest text-primary shadow-sm">
                      {service.title.split(' ')[0]} Protocol
                    </span>
                  </div>
                </div>

                {/* Content Area (Bottom 50%) - Clean and Professional */}
                <div className="flex-1 p-10 flex flex-col justify-between bg-white relative">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        <Plus className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-ui font-extrabold text-primary uppercase tracking-[0.2em]">
                        Speciality Unit 0{idx + 1}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-display font-bold text-text-primary mb-6 leading-tight group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm font-ui text-text-secondary leading-relaxed mb-8 line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-8 border-t border-border/50">
                    <button className="flex items-center gap-3 text-[10px] font-ui font-bold uppercase tracking-[0.2em] text-accent hover:text-primary transition-colors">
                      View Clinical Data
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </button>
                    <div className="w-2 h-2 rounded-full bg-border group-hover:bg-accent transition-colors duration-500" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
