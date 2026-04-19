import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import TrustStrip from "@/components/sections/TrustStrip";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AppointmentSection from "@/components/sections/AppointmentSection";
import FooterSection from "@/components/sections/FooterSection";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

import EnvironmentSection from "@/components/sections/EnvironmentSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustStrip />
      <AboutSection />
      <EnvironmentSection />
      <ServicesSection />
      <WhyUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <AppointmentSection />
      <FooterSection />
      <WhatsAppButton />
    </main>
  );
}
