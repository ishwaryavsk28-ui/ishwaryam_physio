"use client";

import { motion } from "framer-motion";
import { CLINIC_DATA } from "@/lib/clinic-data";
import { CheckCircle2, Award, Users, ShieldCheck } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="pt-20 md:pt-24 pb-0 bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Visual Identity Side */}
          <div className="relative">
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-bg shadow-premium z-10"
              >
                <img
                  src="/images/doctor_ish.png"
                  alt="Dr. Ishwarya — Lead Physiotherapist"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </motion.div>

              {/* Signature Block Under Portrait */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center mt-8 relative z-10"
              >
                <h4 className="text-2xl md:text-3xl font-display font-bold text-text-primary tracking-tight">
                  {CLINIC_DATA.doctor.name}
                </h4>
                <p className="text-[10px] md:text-xs font-ui font-bold text-primary uppercase tracking-[0.2em] mt-2 border-t border-primary/10 pt-2 inline-block">
                  B.P.T., M.I.A.P., Hindi B.A.
                </p>
              </motion.div>
            </div>

            {/* Experience Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-[-20px] left-[-60px] glass-panel p-6 rounded-[16px] shadow-2xl border-white/20 max-w-[220px] z-20"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-primary">200+</h4>
                  <p className="text-[9px] font-ui font-bold uppercase tracking-widest text-text-muted">Clinical Successes</p>
                </div>
              </div>
              <p className="text-[9px] font-ui text-text-secondary leading-tight uppercase font-bold tracking-wider">
                Consistent clinical excellence in Gudiyatham.
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
              <div className="relative">
                {/* Entry Path from Hero */}
                <div className="hidden lg:block absolute -left-12 -top-16 w-px h-32 bg-gradient-to-b from-primary to-transparent" />
                
                <h2 className="text-6xl md:text-8xl font-display font-bold text-text-primary leading-[1] tracking-tighter mb-12">
                  Transforming Pain <br />
                  into <span className="text-primary italic">Purpose</span>.
                </h2>
              </div>
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

            <div className="flex items-center pt-8 border-t border-border">
              <a 
                href="#contact"
                className="px-10 py-4 bg-primary text-white rounded-button font-ui font-bold text-xs uppercase tracking-[0.2em] hover:bg-accent transition-all shadow-lg hover:shadow-premium"
              >
                Consult with Our Expert
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
