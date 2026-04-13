"use client";

import { motion } from "framer-motion";
import { CLINIC_DATA } from "@/lib/clinic-data";
import { CheckCircle2, Award, Users, ShieldCheck } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Visual Identity Side */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-[64px] overflow-hidden shadow-premium"
            >
              <img
                src="/images/orthopedic_physio.png"
                alt="Dr. Ishwarya in session"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </motion.div>

            {/* Experience Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -right-10 glass-panel p-10 rounded-[40px] shadow-2xl border-white/20 max-w-[280px]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-3xl font-display font-bold text-primary">200+</h4>
                  <p className="text-[10px] font-ui font-bold uppercase tracking-widest text-text-muted">Clinical Successes</p>
                </div>
              </div>
              <p className="text-xs font-ui text-text-secondary leading-relaxed">
                Consistent clinical excellence in Gudiyatham community.
              </p>
            </motion.div>

            {/* Decor Element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 blur-[80px] -z-10" />
          </div>

          {/* Narrative Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-ui font-bold tracking-[0.4em] text-[10px] uppercase mb-6 block">
                Clinical Philosophy
              </span>
              <h2 className="text-6xl md:text-[80px] font-display font-bold text-text-primary leading-[1.1] mb-12">
                Movement is Medicine. <br />
                <span className="text-primary italic">Expertise</span> is the Cure.
              </h2>
            </motion.div>

            <p className="text-lg text-text-secondary leading-relaxed font-ui mb-10">
              {CLINIC_DATA.doctor.bio}
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {[
                { icon: ShieldCheck, text: "B.P.T. Certified Professional" },
                { icon: Users, text: "Active M.I.A.P. Member" },
                { icon: CheckCircle2, text: "5.0+ Patient Success Rate" },
                { icon: Award, text: "Clinical Rehab Specialist" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-bg border border-border flex items-center justify-center text-primary">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-ui font-bold uppercase tracking-wider text-text-primary">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-8 items-center pt-8 border-t border-border">
              <div>
                <h4 className="text-xl font-display font-bold text-text-primary">{CLINIC_DATA.doctor.name}</h4>
                <p className="text-[10px] font-ui font-bold text-text-muted uppercase tracking-widest mt-1">B.P.T., M.I.A.P., Hindi B.A.</p>
              </div>
              <a 
                href="#contact"
                className="px-10 py-4 bg-primary text-white rounded-button font-ui font-bold text-xs uppercase tracking-[0.2em] hover:bg-accent transition-all shadow-lg hover:shadow-premium"
              >
                Meet the Doctor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
