"use client";

import { motion } from "framer-motion";
import { CLINIC_DATA } from "@/lib/clinic-data";
import { CheckCircle2, Award, Users, ShieldCheck } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="pt-20 md:pt-24 pb-20 md:pb-32 bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Visual Identity Side */}
          <div className="relative">
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-bg shadow-premium z-10"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-bg shadow-premium z-10 group"
              >
                <img
                  src="/images/doctor_ish.png"
                  alt="Dr. Ishwarya — Lead Physiotherapist"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[url('/images/hero_excellence_v3.png')] bg-cover bg-center transition-transform duration-[20s] group-hover:scale-110" />
              </motion.div>

              {/* Signature Block Under Portrait */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.1 }}
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


            {/* Decor Element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 blur-[80px] -z-10" />
          </div>

          {/* Narrative Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <span className="text-accent font-ui font-bold tracking-[0.4em] text-[10px] uppercase block">
                  Clinical Philosophy
                </span>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-primary/5 border border-primary/10 px-4 py-2 rounded-full flex items-center gap-2"
                >
                  <Award className="w-3 h-3 text-primary" />
                  <span className="text-[9px] font-ui font-extrabold text-primary uppercase tracking-widest">200+ Clinical Success Stories</span>
                </motion.div>
              </div>
              <div className="relative">
                {/* Entry Path from Hero */}
                <div className="hidden lg:block absolute -left-12 -top-16 w-px h-32 bg-gradient-to-b from-primary to-transparent" />
                
                <h2 className="text-4xl md:text-8xl font-display font-bold text-text-primary leading-[1] tracking-tighter mb-12">
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
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
