'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n-context';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const TOTAL_SLIDES = 6;
const AUTOPLAY_INTERVAL = 4000;

export default function HeroSection() {
  const locale = useLocale();
  const [activeSlide, setActiveSlide] = useState(0);

  const goTo = useCallback((index: number) => {
    setActiveSlide((index + TOTAL_SLIDES) % TOTAL_SLIDES);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => goTo(activeSlide + 1), AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [activeSlide, goTo]);

  /* ── card helper ── */
  const Card = ({ w, h, rotate, tx, ty, opacity, zIndex, delay, shadow, initX }: {
    w: number; h: number; rotate: number; tx: number; ty: number;
    opacity: number; zIndex: number; delay: number; shadow: string; initX: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, x: initX }}
      animate={{ opacity, x: 0 }}
      transition={{ delay, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        position: 'absolute',
        bottom: 0,
        width: w,
        height: h,
        borderRadius: 18,
        background: 'linear-gradient(175deg, #d0d8e8 0%, #a8b8cc 25%, #8898ae 55%, #6a7a90 80%, #586070 100%)',
        boxShadow: shadow,
        transform: `rotate(${rotate}deg) translate(${tx}px, ${ty}px)`,
        zIndex,
        overflow: 'hidden',
      }}
    >
      {/* Top specular highlight */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(170deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.06) 40%, transparent 70%)', borderRadius: 18 }} />
      {/* Left edge glow */}
      <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '22%', background: 'linear-gradient(to right, rgba(255,255,255,0.18) 0%, transparent 100%)' }} />
      {/* Bottom fade */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, rgba(0,10,40,0.55) 0%, transparent 100%)', borderRadius: '0 0 18px 18px' }} />
      {/* Outer border */}
      <div style={{ position: 'absolute', inset: 0, borderRadius: 18, border: '1px solid rgba(255,255,255,0.35)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)' }} />
    </motion.div>
  );

  return (
    <div className="w-full">
      {/* ── HERO ── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: '78vh', minHeight: 520 }}
      >
        {/* ── BACKGROUND IMAGE ── */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/bnb/hero/hero-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Thin dark overlay to deepen contrast and help text legibility */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(2,8,28,0.38)' }}
        />

        {/* Centre spotlight — lifts the glow behind text */}
        <div
          className="absolute"
          style={{
            top: '10%', left: '50%',
            transform: 'translateX(-50%)',
            width: '44%', height: '65%',
            background: 'radial-gradient(ellipse 55% 70% at 50% 20%, rgba(40,100,255,0.18) 0%, transparent 70%)',
            filter: 'blur(6px)',
            pointerEvents: 'none',
          }}
        />

        {/* ── LEFT CARDS ── */}
        {/* Container anchored bottom-left so cards sit on the floor */}
        <div
          className="absolute"
          style={{
            left: 0,
            bottom: '8%',
            width: '30vw',
            minWidth: 220,
            maxWidth: 380,
            height: '72%',
          }}
        >
          {/* Card 1 — outermost, smallest, heavily rotated */}
          <Card
            w={130} h={290}
            rotate={-22} tx={-18} ty={0}
            opacity={0.42} zIndex={1} delay={0.15} initX={-100}
            shadow="0 30px 70px rgba(0,0,20,0.85), 0 6px 20px rgba(0,0,20,0.6)"
          />
          {/* Card 2 — middle */}
          <Card
            w={155} h={330}
            rotate={-12} tx={50} ty={-10}
            opacity={0.68} zIndex={2} delay={0.28} initX={-80}
            shadow="0 35px 80px rgba(0,0,20,0.8), 0 8px 24px rgba(0,0,20,0.55)"
          />
          {/* Card 3 — front, largest, slight inward lean */}
          <Card
            w={178} h={370}
            rotate={-3} tx={130} ty={-24}
            opacity={0.92} zIndex={3} delay={0.42} initX={-60}
            shadow="0 40px 90px rgba(0,0,20,0.75), 0 10px 30px rgba(0,0,20,0.5), 0 0 60px rgba(20,60,180,0.25)"
          />

          {/* Floor reflection — left group */}
          <div style={{
            position: 'absolute',
            bottom: -32,
            left: 0,
            right: 0,
            height: 32,
            background: 'linear-gradient(to bottom, rgba(180,200,230,0.12) 0%, transparent 100%)',
            filter: 'blur(4px)',
            transform: 'scaleY(-1)',
            pointerEvents: 'none',
          }} />
        </div>

        {/* ── RIGHT CARDS — mirror ── */}
        <div
          className="absolute"
          style={{
            right: 0,
            bottom: '8%',
            width: '30vw',
            minWidth: 220,
            maxWidth: 380,
            height: '72%',
          }}
        >
          {/* Card 3 — front, largest */}
          <Card
            w={178} h={370}
            rotate={3} tx={-130} ty={-24}
            opacity={0.92} zIndex={3} delay={0.42} initX={60}
            shadow="0 40px 90px rgba(0,0,20,0.75), 0 10px 30px rgba(0,0,20,0.5), 0 0 60px rgba(20,60,180,0.25)"
          />
          {/* Card 2 — middle */}
          <Card
            w={155} h={330}
            rotate={12} tx={-50} ty={-10}
            opacity={0.68} zIndex={2} delay={0.28} initX={80}
            shadow="0 35px 80px rgba(0,0,20,0.8), 0 8px 24px rgba(0,0,20,0.55)"
          />
          {/* Card 1 — outermost */}
          <Card
            w={130} h={290}
            rotate={22} tx={18} ty={0}
            opacity={0.42} zIndex={1} delay={0.15} initX={100}
            shadow="0 30px 70px rgba(0,0,20,0.85), 0 6px 20px rgba(0,0,20,0.6)"
          />

          {/* Floor reflection — right group */}
          <div style={{
            position: 'absolute',
            bottom: -32,
            left: 0,
            right: 0,
            height: 32,
            background: 'linear-gradient(to bottom, rgba(180,200,230,0.12) 0%, transparent 100%)',
            filter: 'blur(4px)',
            transform: 'scaleY(-1)',
            pointerEvents: 'none',
          }} />
        </div>

        {/* ── CENTER CONTENT ── */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          {/* BNB GROUPE label with red separators */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div style={{ width: 48, height: 2, background: '#e41e1e' }} />
            <span
              style={{
                color: '#e41e1e',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
              }}
            >
              BNB GROUPE
            </span>
            <div style={{ width: 48, height: 2, background: '#e41e1e' }} />
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-white font-bold mb-6"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', lineHeight: 1.18, maxWidth: 620 }}
          >
            Des marques{' '}
            <br />
            de{' '}
            <span style={{ color: '#e41e1e' }}>confiance,</span>
            <br />
            au cœur du quotidien
            <br />
            des{' '}
            <span style={{ color: '#3b82f6' }}>Africains.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ color: 'rgba(255,255,255,0.72)', fontSize: 15, maxWidth: 480, lineHeight: 1.65, marginBottom: 36 }}
          >
            Nous créons, développons et distribuons des marques
            qui améliorent le quotidien de millions de personnes
            à travers l&apos;Afrique.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            style={{ marginBottom: 32 }}
          >
            <Link
              href={`/${locale}/focus-brand/`}
              className="group inline-flex items-center gap-3"
              style={{
                background: '#e41e1e',
                color: '#fff',
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '16px 32px',
                borderRadius: 4,
                boxShadow: '0 4px 24px rgba(228,30,30,0.4)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px rgba(228,30,30,0.55)';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 24px rgba(228,30,30,0.4)';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              }}
            >
              Découvrir nos Focus Brands
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Carousel dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex items-center gap-2"
          >
            {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: i === activeSlide ? 10 : 9,
                  height: i === activeSlide ? 10 : 9,
                  borderRadius: '50%',
                  background: i === activeSlide ? '#e41e1e' : 'rgba(255,255,255,0.65)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* ── CAROUSEL ARROWS ── */}
        <button
          onClick={() => goTo(activeSlide - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center"
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: 'rgba(5,20,60,0.55)',
            border: '1px solid rgba(255,255,255,0.2)',
            backdropFilter: 'blur(8px)',
            color: '#fff',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(10,40,120,0.8)'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(5,20,60,0.55)'; }}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => goTo(activeSlide + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center"
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: 'rgba(5,20,60,0.55)',
            border: '1px solid rgba(255,255,255,0.2)',
            backdropFilter: 'blur(8px)',
            color: '#fff',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(10,40,120,0.8)'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(5,20,60,0.55)'; }}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </section>

      {/* ── STATS BAR ── */}
      <section className="w-full bg-white" style={{ borderTop: '1px solid #f0f0f0' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8" style={{ color: '#e41e1e' }}>
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                  </svg>
                ),
                value: '20+',
                label: 'Pays de présence',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8" style={{ color: '#e41e1e' }}>
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                ),
                value: '10 000+',
                label: 'Collaborateurs',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8" style={{ color: '#e41e1e' }}>
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                ),
                value: '500+',
                label: 'Marques distribuées',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8" style={{ color: '#e41e1e' }}>
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                ),
                value: '30+',
                label: "Années d'expérience",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-center gap-4 py-8 px-6"
                style={{
                  borderRight: i < 3 ? '1px solid #f0f0f0' : 'none',
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    border: '2px solid #e41e1e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {stat.icon}
                </div>
                <div>
                  <div style={{ fontSize: 26, fontWeight: 800, color: '#1a2340', lineHeight: 1.1 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: 13, color: '#6b7280', marginTop: 2 }}>
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
