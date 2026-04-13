"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CLINIC_DATA } from "@/lib/clinic-data";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={CLINIC_DATA.contact.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ y: -5 }}
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:hidden"></div>
      <MessageCircle className="w-6 h-6 fill-current" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-text-primary text-xs font-bold px-3 py-1.5 rounded-pill shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
        Need Help? Chat Now
      </span>
    </motion.a>
  );
}
