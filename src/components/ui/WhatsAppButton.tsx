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
      <svg 
        viewBox="0 0 24 24" 
        className="w-7 h-7 fill-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.58-.01-.208 0-.547.078-.833.39-.286.313-1.091 1.067-1.091 2.6 0 1.533 1.115 3.016 1.264 3.214.149.199 2.196 3.353 5.32 4.704.743.321 1.325.513 1.777.657.747.237 1.427.203 1.965.123.599-.089 1.758-.718 2.006-1.41.248-.691.248-1.288.174-1.41-.074-.122-.375-.197-.572-.347zM12.021 0C5.391 0 .002 5.39 .002 12.019c0 2.115.549 4.187 1.597 6.011L0 24l6.135-1.61c1.747.953 3.715 1.458 5.881 1.458 6.63 0 12.022-5.39 12.022-12.019C24.038 5.39 18.653 0 12.021 0zM12.021 21.84c-1.796 0-3.56-.482-5.088-1.394l-.365-.216-3.784.993 1.011-3.689-.237-.377a9.762 9.762 0 01-1.498-5.14c0-5.392 4.385-9.777 9.777-9.777 5.392 0 9.778 4.385 9.778 9.777s-4.385 9.777-9.778 9.777z" />
      </svg>
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-text-primary text-xs font-bold px-3 py-1.5 rounded-pill shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
        Need Help? Chat Now
      </span>
    </motion.a>
  );
}
