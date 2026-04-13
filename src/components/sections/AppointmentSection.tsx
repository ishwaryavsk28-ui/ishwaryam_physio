"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, MessageCircle, Clock, Send, Loader2, ArrowRight } from "lucide-react";
import { CLINIC_DATA } from "@/lib/clinic-data";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  complaint: z.string().min(1, "Please select a complaint"),
  date: z.string().min(1, "Preferred date is required"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function AppointmentSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactOptions = [
    { icon: MapPin, title: "Clinic Address", value: CLINIC_DATA.address.full },
    { icon: Phone, title: "Direct Contact", value: CLINIC_DATA.contact.primary },
    { icon: MessageCircle, title: "Chat on WhatsApp", value: "Instant Reply" },
    { icon: Clock, title: "Consultation Hours", value: CLINIC_DATA.hours },
  ];

  return (
    <section id="contact" className="section-padding bg-bg relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/[0.01] -z-10" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 blur-[100px] rounded-full -z-10" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-20 xl:gap-32">
          {/* Left Column: Contact & Map */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-display font-bold text-text-primary mb-8 leading-tight">
                Your First Step <br /> 
                Toward <span className="text-primary italic">Recovery</span>.
              </h2>
              <p className="text-lg text-text-secondary font-ui leading-relaxed max-w-md">
                Do not wait for the pain to pass. Take action today and let us 
                help you reclaim the life you deserve.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-10 mb-16">
              {contactOptions.map((opt, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                      <opt.icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-[10px] font-ui font-bold uppercase tracking-[0.2em] text-text-muted">
                      {opt.title}
                    </h4>
                  </div>
                  <p className="text-sm font-ui font-bold text-text-primary leading-relaxed max-w-[200px]">
                    {opt.value}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Map Integration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[40px] overflow-hidden border border-border shadow-premium aspect-[16/10] relative group"
            >
              <iframe
                src={CLINIC_DATA.address.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.1) contrast(1.1)" }}
                allowFullScreen={true}
                loading="lazy"
                title="Clinic Location"
              />
              <div className="absolute inset-0 pointer-events-none border-[12px] border-white/10 rounded-[40px]" />
            </motion.div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-10 md:p-16 rounded-[48px] border-white/40 sticky top-32"
            >
              <div className="mb-12">
                <h3 className="text-3xl font-display font-bold text-text-primary mb-3">Request Appointment</h3>
                <p className="text-sm font-ui text-text-secondary">Fill the form below, and we will contact you within 2 hours.</p>
              </div>

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-primary/5 border border-primary/20 p-12 rounded-[32px] text-center"
                >
                  <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-text-primary mb-3">Assessment Request Sent</h4>
                  <p className="text-sm font-ui text-text-secondary leading-relaxed">
                    Dr. Ishwarya's team has received your details. Expect a call shortly to confirm your consultation time.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-ui font-bold uppercase tracking-widest text-text-muted px-1">Full Name</label>
                      <input
                        {...register("name")}
                        className="w-full bg-bg border border-border px-5 py-4 rounded-xl text-sm font-ui focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all placeholder:text-text-muted/50"
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-[10px] text-red-500 font-bold px-1 uppercase">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-ui font-bold uppercase tracking-widest text-text-muted px-1">Phone Number</label>
                      <input
                        {...register("phone")}
                        className="w-full bg-bg border border-border px-5 py-4 rounded-xl text-sm font-ui focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all placeholder:text-text-muted/50"
                        placeholder="+91"
                      />
                      {errors.phone && <p className="text-[10px] text-red-500 font-bold px-1 uppercase">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-ui font-bold uppercase tracking-widest text-text-muted px-1">Primary Condition</label>
                    <select
                      {...register("complaint")}
                      className="w-full bg-bg border border-border px-5 py-4 rounded-xl text-sm font-ui focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select Speciality</option>
                      <option value="Spine">Spine & Back Pain</option>
                      <option value="Neuro">Neurological Rehab</option>
                      <option value="Sports">Sports Injury</option>
                      <option value="Orthopedic">Orthopedic Physio</option>
                      <option value="Other">Other Assessment</option>
                    </select>
                    {errors.complaint && <p className="text-[10px] text-red-500 font-bold px-1 uppercase">{errors.complaint.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-ui font-bold uppercase tracking-widest text-text-muted px-1">Preferred Date</label>
                    <input
                      type="date"
                      {...register("date")}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-bg border border-border px-5 py-4 rounded-xl text-sm font-ui focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all"
                    />
                    {errors.date && <p className="text-[10px] text-red-500 font-bold px-1 uppercase">{errors.date.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-ui font-bold uppercase tracking-widest text-text-muted px-1">Pain History (Optional)</label>
                    <textarea
                      {...register("message")}
                      rows={3}
                      className="w-full bg-bg border border-border px-5 py-4 rounded-xl text-sm font-ui focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all resize-none placeholder:text-text-muted/50"
                      placeholder="Briefly describe your symptoms..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-premium bg-primary text-white py-5 flex items-center justify-center group overflow-hidden"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <div className="flex items-center gap-3">
                        <span className="text-sm uppercase tracking-[0.2em]">Send Request</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                      </div>
                    )}
                  </button>
                  
                  <p className="text-[10px] font-ui font-bold text-center text-text-muted uppercase tracking-widest pt-4 opacity-70">
                    Regional Leader in Specialized Clinical Outcomes
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
