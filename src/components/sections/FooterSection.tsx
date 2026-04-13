import Link from "next/link";
import { CLINIC_DATA } from "@/lib/clinic-data";
import { MapPin, Phone, Mail, Clock, ArrowUpRight, PlayCircle, Camera } from "lucide-react";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: "Navigation", links: ["Home", "About", "Services", "Why Us", "Reviews", "Contact"] },
    { title: "Specialities", links: ["Spine Rehab", "Neurological", "Sports Medicine", "Pediatric"] },
    { title: "Patient Care", links: ["Book Appointment", "Home Visits", "Recovery Plans", "Case Studies"] },
  ];

  return (
    <footer className="bg-primary text-white overflow-hidden relative border-t border-white/5 pt-32 pb-12">
      {/* Premium Depth Atmosphere */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-accent/10 blur-[150px] rounded-full" />
      <div className="absolute -bottom-[10%] -left-[10%] w-[30vw] h-[30vw] bg-white/5 blur-[100px] rounded-full" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* Brand Identity Column */}
          <div className="lg:col-span-4 max-w-sm">
            <Link href="/" className="flex items-center gap-5 mb-10 group">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 bg-white shadow-premium flex items-center justify-center aspect-square p-1.5 flex-shrink-0">
                <img 
                  src="/logo.png" 
                  alt={CLINIC_DATA.shortName}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-4xl font-bold tracking-tight group-hover:text-accent transition-colors">
                  {CLINIC_DATA.shortName}
                </span>
                <span className="text-[10px] font-ui font-bold text-accent tracking-[0.3em] uppercase mt-2">
                  Rehabilitation Center
                </span>
              </div>
            </Link>
            <p className="text-white/60 font-ui text-xs leading-relaxed mb-10 pr-6">
              Gudiyatham&apos;s surgical-precision rehabilitation center. 
              We don&apos;t just manage pain; we architect your recovery 
              with evidence-based movement science.
            </p>
            <div className="space-y-6 pt-2">
              <div className="font-tamil text-accent text-3xl font-bold italic leading-tight">
                {CLINIC_DATA.doctor.taglineTamil}
              </div>
              {/* Advanced Social Presence */}
              <div className="flex items-center gap-6 pt-4">
                <Link 
                  href={CLINIC_DATA.contact.youtube} 
                  target="_blank"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all duration-300 group/social"
                  aria-label="Follow us on YouTube"
                >
                  <PlayCircle className="w-6 h-6 group-hover/social:scale-110 transition-transform" />
                </Link>
                <Link 
                  href="#" 
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-white hover:border-accent hover:shadow-[0_0_20px_rgba(200,151,58,0.3)] transition-all duration-300 group/social"
                  aria-label="Follow us on Instagram"
                >
                  <Camera className="w-6 h-6 group-hover/social:scale-110 transition-transform" />
                </Link>
                <div className="h-10 w-px bg-white/10 mx-2" />
                <p className="text-[10px] font-ui font-bold text-white/40 uppercase tracking-widest leading-none">
                  Advanced <br /> Clinical Content
                </p>
              </div>
            </div>
          </div>

          {/* Quick Nav Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="text-[10px] font-ui font-bold uppercase tracking-[0.2em] text-white/40 mb-8 px-1">
                  {group.title}
                </h4>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link}>
                      <Link 
                        href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                        className="text-xs font-ui font-bold text-white/60 hover:text-accent flex items-center group transition-colors px-1"
                      >
                         {link}
                         <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Direct Column */}
          <div className="lg:col-span-3 glass-panel !bg-white/5 !border-white/10 p-8 rounded-[32px]">
            <h4 className="text-[10px] font-ui font-bold uppercase tracking-[0.2em] text-accent mb-8">
              Immediate Assistance
            </h4>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span className="text-xs font-ui text-white/80 leading-relaxed font-bold">
                  {CLINIC_DATA.address.full}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="text-xl font-display font-bold text-white">
                  {CLINIC_DATA.contact.primary}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="w-5 h-5 text-accent shrink-0" />
                <div className="text-[10px] font-ui font-bold text-white/70 uppercase tracking-widest leading-loose">
                  Mon – Sat: 09:00 – 19:00 <br />
                  <span className="text-red-400">Sunday Recovery Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cinematic Bottom bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-baseline gap-6 order-2 md:order-1">
            <p className="text-[9px] font-ui font-bold text-white/30 uppercase tracking-[0.4em]">
              © {currentYear} {CLINIC_DATA.name}
            </p>
            <div className="h-4 w-px bg-white/10" />
            <p className="text-[9px] font-ui font-bold text-white/20 uppercase tracking-[0.4em]">
              Surgical Precision Rehab
            </p>
          </div>
          
          <div className="flex gap-10 order-1 md:order-2">
            {["Case Studies", "Terms", "Privacy"].map((link) => (
              <Link 
                key={link} 
                href="#" 
                className="text-[10px] font-ui font-bold text-white/30 uppercase tracking-[0.2em] hover:text-white transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
