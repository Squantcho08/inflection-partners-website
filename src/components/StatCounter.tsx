import { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'motion/react';

interface StatCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

/**
 * StatCounter
 * Animates numerical values within a string (handles ranges, %, etc.)
 */
export default function StatCounter({ value, className, duration = 2 }: StatCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, 1, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        const result = value.replace(/\d+/g, (match) => {
          const target = parseInt(match);
          const val = Math.round(latest * target);
          return val.toString();
        });
        setDisplayValue(result);
      },
      onComplete: () => {
        setDisplayValue(value);
      }
    });

    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
