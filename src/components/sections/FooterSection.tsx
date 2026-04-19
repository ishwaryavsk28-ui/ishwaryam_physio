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
                  Physiotherapy speciality clinic
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
              <div className="flex flex-wrap items-center gap-4 pt-4">
                {/* WhatsApp */}
                <Link 
                  href={CLINIC_DATA.contact.whatsappLink} 
                  target="_blank"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all duration-300 group/social"
                  aria-label="Contact us on WhatsApp"
                >
                  <svg className="w-5 h-5 group-hover/social:scale-110 transition-transform fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </Link>

                {/* Instagram */}
                <Link 
                  href={CLINIC_DATA.contact.instagram} 
                  target="_blank"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent hover:shadow-[0_0_20px_rgba(238,42,123,0.3)] transition-all duration-300 group/social"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-5 h-5 group-hover/social:scale-110 transition-transform fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>

                {/* YouTube */}
                <Link 
                  href={CLINIC_DATA.contact.youtube} 
                  target="_blank"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all duration-300 group/social"
                  aria-label="Follow us on YouTube"
                >
                  <svg className="w-6 h-6 group-hover/social:scale-110 transition-transform fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </Link>

                {/* Facebook */}
                <Link 
                  href={CLINIC_DATA.contact.facebook} 
                  target="_blank"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:shadow-[0_0_20px_rgba(24,119,242,0.3)] transition-all duration-300 group/social"
                  aria-label="Follow us on Facebook"
                >
                  <svg className="w-5 h-5 group-hover/social:scale-110 transition-transform fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Link>

                <div className="h-8 w-px bg-white/10 mx-1" />
                <p className="text-[9px] font-ui font-bold text-white/40 uppercase tracking-widest leading-none">
                  Clinical <br /> Presence
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
                  Mon – Sat: 10:00 – 1:30 | 5:00 – 8:30 <br />
                  <span className="text-accent">Sunday: 10:00 AM – 1:30 PM</span>
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
