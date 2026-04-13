"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/clinic-data";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  // Duplicate testimonials for seamless looping
  const loopedReviews = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="about" className="pt-20 md:pt-24 pb-0 bg-white relative overflow-hidden">
      {/* Healing Psychology Layers */}
      <div className="vitality-glow top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 rose-glow" />
      <div className="vitality-glow bottom-0 right-0 translate-y-1/2 translate-x-1/2 opacity-10" />

      <div className="container-custom mb-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-ui font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">
            Healing Success Stories
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-text-primary mb-6">
            Trusted by the Community.
          </h2>
          <p className="text-lg text-text-secondary font-ui max-w-2xl mx-auto">
            Real stories of recovery from real patients in Gudiyatham.
            Our results are verified by movement science.
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative flex overflow-hidden py-10">
        <motion.div
          className="flex gap-8 px-4"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {loopedReviews.map((review, idx) => (
            <div
              key={idx}
              className="w-[350px] md:w-[450px] shrink-0 glass-panel !bg-bg/40 p-10 rounded-[40px] border-border/50 hover:border-primary/20 transition-colors group"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              <div className="relative mb-8">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary/5 -z-10" />
                <p className="text-lg font-display font-medium text-text-primary leading-relaxed italic">
                  &quot;{review.review}&quot;
                </p>
              </div>

              <div className="pt-8 border-t border-border/50 flex items-center justify-between">
                <div>
                  <h4 className="font-ui font-extrabold text-[11px] uppercase tracking-widest text-primary">
                    {review.name}
                  </h4>
                  <p className="text-[10px] font-ui font-bold text-text-muted mt-1 uppercase tracking-tight">
                    {review.location}
                  </p>
                </div>
                <div className="bg-primary/5 px-3 py-1.5 rounded-pill border border-primary/10">
                  <span className="text-[9px] font-ui font-bold text-primary uppercase">Verified Result</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient Fades */}
        <div className="absolute top-0 left-0 h-full w-40 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute top-0 right-0 h-full w-40 bg-gradient-to-l from-white to-transparent z-10" />
      </div>

      {/* Proof Badge */}
      <div className="container-custom mt-20 flex justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex flex-col sm:flex-row items-center gap-8 py-8 px-12 bg-primary text-white rounded-[32px] shadow-premium border border-white/10 relative overflow-hidden group"
        >
          {/* Power Background Accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="flex -space-x-4 relative z-10">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-14 h-14 rounded-full border-4 border-primary bg-bg flex items-center justify-center overflow-hidden shadow-xl">
                <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/30" />
              </div>
            ))}
          </div>
          <div className="relative z-10 text-center sm:text-left">
            <p className="text-sm font-ui font-extrabold uppercase tracking-[0.2em] mb-1">
              Clinical Worth Established
            </p>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-accent">
              Join 200+ Verified Patient Success Stories
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
