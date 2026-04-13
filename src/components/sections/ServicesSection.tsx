"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES, Service } from "@/lib/clinic-data";
import { ArrowRight, Activity, Plus, X, CheckCircle2, Clock, Target, ShieldCheck } from "lucide-react";

const SERVICE_IMAGES: Record<string, string> = {
  "Orthopedic Physiotherapy": "/images/orthopedic_physio.png",
  "Spine & Back Pain Rehabilitation": "/images/spine_physio.png",
  "Neurological Rehabilitation": "/images/neuro_physio.png",
  "Post-Surgical Recovery": "/images/post_surgical_physio.png",
  "Sports Injury Treatment": "/images/sports_physio.png",
  "Neck Pain & Cervical Spondylosis": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
  "Diabetic Neuropathy Management": "/images/diabetic_physio.png",
  "Musculoskeletal Therapy": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
  "Geriatric Physiotherapy": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
  "Pediatric Physiotherapy": "https://images.unsplash.com/photo-1536704689252-ed80b6732450?auto=format&fit=crop&q=80",
  "Shoulder, Knee & Hip Joint Pain": "https://images.unsplash.com/photo-1598184273446-9446a4906579?auto=format&fit=crop&q=80",
  "Home Visit Physiotherapy": "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80",
};

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="section-padding bg-bg relative overflow-hidden">
      {/* Background Psychology Layers */}
      <div className="vitality-layer top-0 right-0 -translate-y-1/2 translate-x-1/2" />
      <div className="vitality-layer bottom-0 left-0 translate-y-1/2 -translate-x-1/2 rose-glow" />

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

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-secondary leading-relaxed max-w-2xl font-ui"
          >
            At Ishwaryam Physiotherapy Speciality Clinic, we operate at the intersection of medical science and therapeutic empathy. 
            Our protocols are designed to restore function with surgical precision.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {SERVICES.map((service, idx) => {
            const hasImage = SERVICE_IMAGES[service.title];
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group flex flex-col h-[650px] rounded-t-[48px] rounded-b-[32px] overflow-hidden bg-white shadow-card hover:shadow-premium transition-all duration-500"
              >
                {/* Image Container (Top 50%) */}
                <div className="relative h-1/2 overflow-hidden bg-bg">
                  {hasImage ? (
                    <img 
                      src={hasImage}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                       <Activity className="w-16 h-16 text-primary/10 animate-pulse" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
                  
                  <div className="absolute bottom-6 left-6">
                    <span className="px-5 py-2 rounded-pill bg-white/90 backdrop-blur-md border border-white/20 text-[9px] font-ui font-bold uppercase tracking-widest text-primary shadow-sm">
                      {service.title.split(' ')[0]} Protocol
                    </span>
                  </div>
                </div>

                {/* Content Area (Bottom 50%) */}
                <div className="flex-1 p-10 flex flex-col justify-between bg-white relative">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
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
                    <button 
                      onClick={() => setSelectedService(service)}
                      className="flex items-center gap-3 text-[10px] font-ui font-bold uppercase tracking-[0.2em] text-accent hover:text-primary transition-colors group/btn"
                    >
                      View Clinical Data
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                    <div className="w-2 h-2 rounded-full bg-border group-hover:bg-accent transition-colors duration-500" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Clinical Data Drawer */}
      <AnimatePresence>
        {selectedService && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full md:w-[600px] bg-white z-[110] shadow-2xl flex flex-col"
            >
              <div className="p-8 md:p-12 overflow-y-auto flex-1 custom-scrollbar">
                <div className="flex items-center justify-between mb-16">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/10">
                      <ShieldCheck className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-ui font-bold uppercase tracking-widest text-text-muted">Clinical Pathway</h4>
                      <p className="text-xs font-ui font-extrabold text-primary uppercase tracking-tight">Ishwaryam Speciality Clinic</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-bg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="mb-16">
                  <span className="text-accent font-ui font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">
                    {selectedService.clinicalData.focus}
                  </span>
                  <h2 className="text-5xl font-display font-bold text-text-primary leading-tight mb-8">
                    {selectedService.title}
                  </h2>
                  <p className="text-text-secondary font-ui leading-relaxed">
                    Our evidence-based approach to {selectedService.title.toLowerCase()} focuses on restoring 
                    functional autonomy through surgical-grade rehabilitation protocols.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-16">
                  <div className="bg-bg p-6 rounded-3xl border border-border/50">
                    <div className="flex items-center gap-3 mb-4 text-primary">
                      <Target className="w-4 h-4" />
                      <span className="text-[10px] font-ui font-bold uppercase tracking-widest">Key Objectives</span>
                    </div>
                    <ul className="space-y-3">
                      {selectedService.clinicalData.objectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                          <span className="text-[11px] font-ui font-medium text-text-primary">{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-bg p-6 rounded-3xl border border-border/50">
                    <div className="flex items-center gap-3 mb-4 text-accent">
                      <Clock className="w-4 h-4" />
                      <span className="text-[10px] font-ui font-bold uppercase tracking-widest">Recovery Window</span>
                    </div>
                    <p className="text-2xl font-display font-bold text-text-primary">
                      {selectedService.clinicalData.recoveryWindow}
                    </p>
                    <p className="text-[10px] font-ui font-bold text-text-muted mt-2 uppercase">Subject to Assessment</p>
                  </div>
                </div>

                <div className="mb-16">
                  <h5 className="text-[10px] font-ui font-bold uppercase tracking-[0.3em] text-primary mb-8 border-b border-border pb-4">
                    Ishwaryam Signature Protocol
                  </h5>
                  <div className="space-y-10 relative">
                    <div className="absolute left-4 top-2 bottom-2 w-px bg-border" />
                    {selectedService.clinicalData.protocol.map((step, i) => (
                      <div key={i} className="relative pl-12">
                        <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-white border-2 border-primary z-10" />
                        <h6 className="text-xs font-ui font-bold text-primary uppercase tracking-widest mb-2">
                          {step.phase}
                        </h6>
                        <p className="text-[13px] font-ui text-text-secondary leading-relaxed">
                          {step.action}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-12 border-t border-border mt-auto">
                  <a 
                    href="#contact"
                    onClick={() => setSelectedService(null)}
                    className="w-full py-6 bg-primary text-white rounded-button font-ui font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-accent transition-all shadow-xl hover:shadow-premium"
                  >
                    Initiate Clinical Assessment
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
