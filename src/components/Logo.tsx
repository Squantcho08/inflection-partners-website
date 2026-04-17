import { motion } from 'motion/react';

export default function Logo({ className = "h-8", showText = true }: { className?: string, showText?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 100 100" className="h-full w-auto overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Abstract "S" Shape (Midnight style) */}
        <path 
          d="M70 20 C 30 20, 20 50, 50 50 C 80 50, 70 80, 30 80" 
          stroke="white" 
          strokeWidth="8" 
          strokeLinecap="round" 
          strokeOpacity="0.1"
        />
        
        {/* Teal Swoop */}
        <motion.path 
          d="M20 80 Q 40 75, 65 30" 
          stroke="#14b8a6" 
          strokeWidth="6" 
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        {/* Brain Circuit Node */}
        <motion.g
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <circle cx="65" cy="30" r="10" fill="#14b8a6" fillOpacity="0.2" />
          <circle cx="65" cy="30" r="4" fill="#14b8a6" />
          
          {/* Circuit Lines */}
          <path d="M65 30 L 75 25" stroke="#14b8a6" strokeWidth="1.5" />
          <path d="M65 30 L 75 35" stroke="#14b8a6" strokeWidth="1.5" />
          <path d="M65 30 L 55 25" stroke="#14b8a6" strokeWidth="1.5" />
          
          {/* Glow Effect */}
          <circle cx="65" cy="30" r="6" className="animate-pulse" stroke="#14b8a6" strokeWidth="1" strokeOpacity="0.5" />
        </motion.g>
      </svg>
      
      {showText && (
        <div className="flex flex-col justify-center">
          <span className="text-white font-bold text-xl tracking-tight leading-none">Inflection</span>
          <span className="text-brand-accent font-bold text-[8px] uppercase tracking-[0.4em] leading-none mt-1">Partners</span>
        </div>
      )}
    </div>
  );
}
