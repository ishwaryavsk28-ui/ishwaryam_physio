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
  city: z.string().min(2, "City/Area is required"),
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
                    <div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-primary group-hover:bg-[#25D366] group-hover:text-white transition-all shadow-sm">
                      {opt.title === "Chat on WhatsApp" ? (
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      ) : (
                        <opt.icon className="w-5 h-5" />
                      )}
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
                <h3 className="text-3xl font-display font-bold text-text-primary mb-3">Book Your Appointment</h3>
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

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-ui font-bold uppercase tracking-widest text-text-muted px-1">City / Area Name</label>
                      <input
                        {...register("city")}
                        className="w-full bg-bg border border-border px-5 py-4 rounded-xl text-sm font-ui focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all placeholder:text-text-muted/50"
                        placeholder="Gudiyatham"
                      />
                      {errors.city && <p className="text-[10px] text-red-500 font-bold px-1 uppercase">{errors.city.message}</p>}
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
                        <option value="Facial">Facial Palsy Care</option>
                        <option value="Other">Other Assessment</option>
                      </select>
                      {errors.complaint && <p className="text-[10px] text-red-500 font-bold px-1 uppercase">{errors.complaint.message}</p>}
                    </div>
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
