'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatsCounterProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export default function StatsCounter({ 
  value, 
  suffix = '', 
  label, 
  duration = 2 
}: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * value));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-bnb-gray-300 text-sm md:text-base uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}
