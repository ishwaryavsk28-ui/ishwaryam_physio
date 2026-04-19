"use client";

import { motion } from "framer-motion";
import { CLINIC_DATA } from "@/lib/clinic-data";
import { Building2, ShieldCheck, Zap, Info } from "lucide-react";

const environmentHighlights = [
  {
    icon: Building2,
    title: "Spacious Layout",
    description: "Modern, clean, and barrier-free clinical space designed for patient comfort and mobility.",
  },
  {
    icon: ShieldCheck,
    title: "Absolute Privacy",
    description: "Dedicated private cabins for every treatment session, ensuring total patient confidentiality.",
  },
  {
    icon: Zap,
    title: "Equipment Suite",
    description: "Equipped with advanced IFT, Ultrasound, Muscle Stimulators, and specialized Traction units.",
  },
];

const equipmentList = [
  "Interferential Therapy (IFT)",
  "Ultrasound Therapy",
  "Wax Therapy Unit",
  "Muscle Stimulation",
  "TENS (Pain Management)",
  "Lumbar & Cervical Traction"
];

export default function EnvironmentSection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Atmosphere */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-ui font-bold tracking-[0.4em] text-[10px] uppercase block mb-4">
              Our Infrastructure
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-text-primary mb-8 leading-tight">
              A Healing <span className="text-primary italic">Atmosphere</span>.
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed font-ui mb-12">
              At Ishwaryam, we believe the environment is part of the therapy. Our clinic is meticulously designed 
              to provide a peaceful, spacious, and highly private recovery experience in the heart of Gudiyatham.
            </p>

            <div className="space-y-8">
              {environmentHighlights.map((item, idx) => (
                <div key={idx} className="flex gap-6" id={`env-highlight-${idx}`}>
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-ui font-bold uppercase tracking-widest text-text-primary mb-2 italic">
                      {item.title}
                    </h4>
                    <p className="text-sm text-text-secondary font-ui leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Equipment Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Real Cabin Atmosphere Context */}
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-[40px] overflow-hidden border-4 border-white shadow-xl z-20 hidden xl:block rotate-[-6deg]">
              <img 
                src="/images/real/clinic_cabins.png" 
                alt="Ishwaryam Private Cabins" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
            </div>

            <div className="bg-bg border border-border p-8 md:p-12 rounded-[40px] shadow-premium relative overflow-hidden group">
              {/* Background Equipment Visual */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <img 
                  src="/images/electrotherapy_modal.png" 
                  alt="Clinical Equipment" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[60px] rounded-full group-hover:bg-primary/10 transition-colors" />
              
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-display font-bold text-text-primary">Clinical Modalities</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                {equipmentList.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 py-3 border-b border-border last:border-0 sm:[&:nth-last-child(2)]:border-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    <span className="text-[11px] font-ui font-bold uppercase tracking-wider text-text-primary">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-white/50 border border-white p-4 rounded-2xl flex items-start gap-4">
                <Info className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <p className="text-[10px] italic text-text-secondary leading-relaxed font-ui">
                  All equipment is clinically calibrated for geriatric support, pediatric safety, and sports-grade recovery.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-accent text-white px-8 py-4 rounded-2xl text-[10px] font-ui font-bold uppercase tracking-widest shadow-xl rotate-3">
              100% Privacy cabins
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
