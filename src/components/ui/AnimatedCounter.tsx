"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, motion } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  label: string;
}

export default function AnimatedCounter({ value, label }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  // Extract number and suffix (e.g., "5.0★" -> 5, "★"; "15+" -> 15, "+")
  const numValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numValue;
      const duration = 2000;
      const stepTime = Math.max(duration / end, 20);
      
      const timer = setInterval(() => {
        start += (end - start) * 0.1;
        if (Math.abs(end - start) < 0.1) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 50);

      return () => clearInterval(timer);
    }
  }, [isInView, numValue]);

  return (
    <div ref={ref} className="text-center flex flex-col items-center">
      <div className="flex items-baseline mb-1">
        <motion.span 
          className="text-4xl md:text-5xl font-mono font-bold text-accent"
        >
          {Number.isInteger(numValue) ? Math.floor(count) : count.toFixed(1)}
        </motion.span>
        <span className="text-2xl md:text-3xl font-mono font-bold text-accent ml-1">
          {suffix}
        </span>
      </div>
      <p className="text-[12px] md:text-sm font-ui font-medium text-text-secondary uppercase tracking-wider text-center max-w-[150px]">
        {label}
      </p>
    </div>
  );
}
