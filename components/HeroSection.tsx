'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n-context';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const TOTAL_SLIDES = 6;
const AUTOPLAY_INTERVAL = 4000;

/* ── Standalone card component (outside render fn to avoid remounts) ── */
function PanelCard({
  width, height, rotate, left, right, bottom, opacity, zIndex, delay, initX, side,
}: {
  width: number; height: number; rotate: number;
  left?: number | string; right?: number | string; bottom: number | string;
  opacity: number; zIndex: number; delay: number; initX: number; side: 'left' | 'right';
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: initX }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'absolute',
        width,
        height,
        bottom,
        ...(left !== undefined ? { left } : {}),
        ...(right !== undefined ? { right } : {}),
        borderRadius: 20,
        transform: `rotate(${rotate}deg)`,
        zIndex,
        opacity,
        background: 'linear-gradient(175deg, #cdd6e4 0%, #a2b2c6 30%, #8294aa 60%, #657484 85%, #505e6e 100%)',
        boxShadow: '0 32px 80px rgba(0,4,20,0.80), 0 8px 24px rgba(0,4,20,0.55), inset 0 1px 0 rgba(255,255,255,0.22)',
        overflow: 'hidden',
      }}
    >
      {/* Top-left specular */}
      <div style={{ position: 'absolute', inset: 0, borderRadius: 20, background: 'linear-gradient(145deg, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.06) 35%, transparent 60%)' }} />
      {/* Edge catch-light — left for left-side cards, right for right-side */}
      {side === 'left' ? (
        <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '20%', background: 'linear-gradient(to right, rgba(255,255,255,0.20) 0%, transparent 100%)' }} />
      ) : (
        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '20%', background: 'linear-gradient(to left, rgba(255,255,255,0.20) 0%, transparent 100%)' }} />
      )}
      {/* Bottom depth fade */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '45%', borderRadius: '0 0 20px 20px', background: 'linear-gradient(to top, rgba(4,12,40,0.65) 0%, transparent 100%)' }} />
      {/* Outer rim */}
      <div style={{ position: 'absolute', inset: 0, borderRadius: 20, border: '1px solid rgba(255,255,255,0.28)' }} />
    </motion.div>
  );
}

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

  return (
    <div className="w-full">
      {/* ── HERO ── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: '80vh', minHeight: 560 }}
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

        {/* Dark scrim — preserves light beams, improves text legibility */}
        <div className="absolute inset-0" style={{ background: 'rgba(2,8,28,0.32)' }} />

        {/* ═══════════════════════════════════════════════
            LEFT CARD GROUP
            3 cards overlapping, fanning toward center.
            Positioned using absolute coords so they truly
            overlap and sit anchored at the bottom.
        ════════════════════════════════════════════════ */}

        {/* Card A — outermost / furthest back */}
        <PanelCard
          width={140} height={310}
          rotate={-18}
          left={20} bottom={60}
          opacity={0.45} zIndex={2} delay={0.1} initX={-120} side="left"
        />
        {/* Card B — middle */}
        <PanelCard
          width={162} height={355}
          rotate={-9}
          left={80} bottom={60}
          opacity={0.70} zIndex={3} delay={0.22} initX={-90} side="left"
        />
        {/* Card C — front / closest to camera */}
        <PanelCard
          width={184} height={400}
          rotate={-2}
          left={162} bottom={60}
          opacity={0.95} zIndex={4} delay={0.36} initX={-60} side="left"
        />

        {/* ═══════════════════════════════════════════════
            RIGHT CARD GROUP — mirror of left
        ════════════════════════════════════════════════ */}

        {/* Card C — front / closest */}
        <PanelCard
          width={184} height={400}
          rotate={2}
          right={162} bottom={60}
          opacity={0.95} zIndex={4} delay={0.36} initX={60} side="right"
        />
        {/* Card B — middle */}
        <PanelCard
          width={162} height={355}
          rotate={9}
          right={80} bottom={60}
          opacity={0.70} zIndex={3} delay={0.22} initX={90} side="right"
        />
        {/* Card A — outermost / furthest back */}
        <PanelCard
          width={140} height={310}
          rotate={18}
          right={20} bottom={60}
          opacity={0.45} zIndex={2} delay={0.1} initX={120} side="right"
        />

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
