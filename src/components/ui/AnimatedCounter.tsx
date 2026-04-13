import { useEffect, useState, useRef, ElementType } from "react";
import { useInView, motion } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  label: string;
  icon?: ElementType;
}

export default function AnimatedCounter({ value, label, icon: Icon }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  const numValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numValue;
      const duration = 2000;
      
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
    <div ref={ref} className="text-center flex flex-col items-center group">
      <div className="flex flex-col items-center mb-4">
        {Icon && (
          <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
            <Icon className="w-6 h-6" />
          </div>
        )}
        <div className="flex items-baseline">
          <motion.span 
            className="text-5xl md:text-6xl font-mono font-bold text-accent tracking-tighter"
          >
            {numValue > 1000 
              ? Math.floor(count).toLocaleString() 
              : (Number.isInteger(numValue) ? Math.floor(count) : count.toFixed(1))}
          </motion.span>
          <span className="text-3xl md:text-4xl font-mono font-bold text-accent ml-1">
            {suffix}
          </span>
        </div>
      </div>
      <p className="text-[10px] md:text-[11px] font-ui font-bold text-text-secondary uppercase tracking-[0.2em] leading-relaxed text-center max-w-[180px]">
        {label}
      </p>
    </div>
  );
}
