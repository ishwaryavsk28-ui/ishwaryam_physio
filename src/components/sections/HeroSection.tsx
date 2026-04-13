"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { CLINIC_DATA } from "@/lib/clinic-data";

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 1, 
        ease: [0.19, 1, 0.22, 1] 
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden gradient-hero text-white">
      {/* Healing Psychology Layers — Vitality Glows */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="vitality-glow top-0 right-0 -translate-y-1/2 translate-x-1/2 opacity-20" />
          <div className="vitality-glow bottom-0 left-0 translate-y-1/2 -translate-x-1/2 rose-glow opacity-30" />
          <div className="absolute top-[20%] right-[10%] w-[80vw] h-[80vw] rounded-full bg-accent/20 blur-[150px] animate-heart-beat" />
        </div>
      )}

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Medical Trust Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-pill px-6 py-2.5 mb-8"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_15px_rgba(200,151,58,0.5)] animate-pulse" />
              <span className="text-[10px] md:text-xs font-ui font-extrabold uppercase tracking-[0.3em] text-white/90">
                Regional Leader in Specialized Rehabilitation
              </span>
            </motion.div>

            {/* Cinematic Headline */}
            <motion.div variants={itemVariants} className="mb-10">
              <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.85] mb-2">
                Where Pain <br />
                <span className="text-accent underline decoration-white/10 underline-offset-[12px]">Ends</span> and <br />
                Life Begins.
              </h1>
            </motion.div>

            {/* Psychological Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-white/70 font-ui font-medium leading-relaxed mb-12 max-w-2xl"
            >
              Clinical precision meets human empathy. Reclaiming your mobility 
              isn&apos;t just our job—it&apos;s our mission. Let&apos;s rebuild what 
              pain has taken away.
            </motion.p>

            {/* Tamil Culture Accent */}
            <motion.div
              variants={itemVariants}
              className="mb-16 flex items-center gap-6"
            >
               <div className="h-px w-12 bg-accent/40" />
               <span className="font-tamil text-2xl md:text-3xl font-bold text-accent">
                 {CLINIC_DATA.doctor.taglineTamil}
               </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6"
            >
              <Link
                href={CLINIC_DATA.contact.whatsappLink}
                target="_blank"
                className="btn-premium bg-accent hover:bg-white hover:text-primary text-white text-sm uppercase tracking-[0.2em] group"
              >
                Expert Consultation
                <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2" />
              </Link>
              
              <Link
                href={`tel:${CLINIC_DATA.contact.primary.replace(/\s/g, "")}`}
                className="flex items-center gap-4 text-white hover:text-accent transition-colors group"
              >
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent transition-colors shadow-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold mb-0.5">Call Our Clinic</p>
                  <p className="text-lg font-ui font-bold">{CLINIC_DATA.contact.primary}</p>
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual Excellence Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-[60px] overflow-hidden border border-white/10 shadow-premium aspect-[4/5] group">
              <div className="absolute inset-0 bg-[url('/images/orthopedic_physio.png')] bg-cover bg-center transition-transform duration-[20s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
              
              {/* Doctor Status Badge */}
              <div className="absolute bottom-12 left-12 right-12 glass-panel p-8 rounded-[32px] border-white/20">
                <p className="font-display text-3xl font-bold text-white mb-2 leading-tight italic">
                  &quot;Your recovery is the only metric that matters.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-1bg-accent rounded-full" />
                  <p className="font-ui text-sm font-bold uppercase tracking-widest text-accent">
                    {CLINIC_DATA.doctor.name}
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative background depth */}
            <div className="absolute -inset-10 -z-10 bg-gradient-to-br from-accent/20 to-transparent blur-[100px] rounded-full" />
            
            {/* Floating Review Summary */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass-panel p-6 rounded-3xl shadow-premium border-white/40 z-20"
            >
              <p className="text-primary font-display text-4xl font-bold leading-none mb-1">5.0★</p>
              <p className="text-[10px] font-ui font-bold uppercase tracking-widest text-text-secondary">
                Verified Patient Rating
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Visual weight at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg to-transparent" />
    </section>
  );
}
