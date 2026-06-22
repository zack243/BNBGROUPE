'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  return (
    <div className="w-full">
      {/* ── HERO ── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: '78vh', minHeight: 480 }}
      >
        {/* ── BACKGROUND LAYERS ── */}

        {/* Base: deep navy */}
        <div className="absolute inset-0" style={{ background: '#04102a' }} />

        {/* Mid-blue radial glow behind centre */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 70% at 50% 45%, rgba(14,52,140,0.9) 0%, rgba(6,18,55,0.4) 55%, transparent 80%)',
          }}
        />

        {/* Top-left light beam — wide fan from upper-left corner */}
        <div
          className="absolute"
          style={{
            top: 0, left: 0,
            width: '52%', height: '100%',
            background:
              'linear-gradient(115deg, rgba(40,100,220,0.22) 0%, rgba(20,60,160,0.12) 30%, transparent 65%)',
            filter: 'blur(18px)',
          }}
        />

        {/* Top-right subtle glow */}
        <div
          className="absolute"
          style={{
            top: 0, right: 0,
            width: '48%', height: '85%',
            background:
              'linear-gradient(245deg, rgba(40,90,200,0.16) 0%, rgba(15,50,130,0.08) 35%, transparent 65%)',
            filter: 'blur(24px)',
          }}
        />

        {/* Bright centre spotlight — narrow vertical beam */}
        <div
          className="absolute"
          style={{
            top: '-5%', left: '50%',
            transform: 'translateX(-50%)',
            width: '38%', height: '75%',
            background:
              'radial-gradient(ellipse 50% 80% at 50% 0%, rgba(60,120,255,0.15) 0%, transparent 70%)',
            filter: 'blur(8px)',
          }}
        />

        {/* Floor reflection — bright streak on the ground */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: '28%',
            background:
              'linear-gradient(to top, rgba(15,40,120,0.65) 0%, rgba(10,28,90,0.3) 50%, transparent 100%)',
          }}
        />

        {/* Horizontal ground line glow */}
        <div
          className="absolute left-0 right-0"
          style={{
            bottom: '26%',
            height: '1px',
            background:
              'linear-gradient(to right, transparent 0%, rgba(60,120,255,0.25) 25%, rgba(100,160,255,0.4) 50%, rgba(60,120,255,0.25) 75%, transparent 100%)',
          }}
        />

        {/* Fog / atmosphere at horizon */}
        <div
          className="absolute left-0 right-0"
          style={{
            bottom: '20%',
            height: '18%',
            background:
              'radial-gradient(ellipse 80% 100% at 50% 100%, rgba(20,55,160,0.28) 0%, transparent 70%)',
            filter: 'blur(12px)',
          }}
        />

        {/* ── LEFT CARDS — overlapping fan, largest closest to center ── */}
        <div
          className="absolute"
          style={{
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            width: '26vw',
            minWidth: 200,
            maxWidth: 340,
            height: '70%',
            perspective: 1200,
          }}
        >
          {[
            /* outermost: small, heavy rotate, far back */
            { widthPct: 58, heightPct: 72, rotateY: 48, rotateZ: -8, translateX: '-10%', translateY: '8%', translateZ: -180, opacity: 0.38, zIndex: 1 },
            /* middle */
            { widthPct: 72, heightPct: 86, rotateY: 28, rotateZ: -4, translateX: '12%', translateY: '3%', translateZ: -80, opacity: 0.62, zIndex: 2 },
            /* front: largest, least rotated */
            { widthPct: 88, heightPct: 100, rotateY: 10, rotateZ: -1, translateX: '30%', translateY: '0%', translateZ: 0, opacity: 0.90, zIndex: 3 },
          ].map((card, i) => (
            <motion.div
              key={`left-${i}`}
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: card.opacity, x: 0 }}
              transition={{ delay: 0.2 + i * 0.14, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                position: 'absolute',
                width: `${card.widthPct}%`,
                height: `${card.heightPct}%`,
                top: '50%',
                left: 0,
                transform: `translateY(-50%) translateX(${card.translateX}) translateY(${card.translateY}) perspective(1200px) rotateY(${card.rotateY}deg) rotateZ(${card.rotateZ}deg) translateZ(${card.translateZ}px)`,
                zIndex: card.zIndex,
                borderRadius: 16,
                background: 'linear-gradient(160deg, #c8d0de 0%, #9aaabb 35%, #7a8fa4 70%, #606e82 100%)',
                boxShadow: `0 20px 60px rgba(0,0,20,0.7), 0 4px 16px rgba(0,0,20,0.5), inset 0 1px 0 rgba(255,255,255,0.25)`,
                overflow: 'hidden',
              }}
            >
              {/* Top-edge highlight */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, transparent 100%)', borderRadius: '16px 16px 0 0' }} />
              {/* Left-edge specular */}
              <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '18%', background: 'linear-gradient(to right, rgba(255,255,255,0.14) 0%, transparent 100%)' }} />
              {/* Bottom reflection */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%', background: 'linear-gradient(to top, rgba(255,255,255,0.08) 0%, transparent 100%)', borderRadius: '0 0 16px 16px' }} />
              {/* Border */}
              <div style={{ position: 'absolute', inset: 0, borderRadius: 16, border: '1px solid rgba(255,255,255,0.3)' }} />
            </motion.div>
          ))}
        </div>

        {/* ── RIGHT CARDS — mirror ── */}
        <div
          className="absolute"
          style={{
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            width: '26vw',
            minWidth: 200,
            maxWidth: 340,
            height: '70%',
            perspective: 1200,
          }}
        >
          {[
            /* front: closest to center */
            { widthPct: 88, heightPct: 100, rotateY: -10, rotateZ: 1, translateX: '-30%', translateY: '0%', translateZ: 0, opacity: 0.90, zIndex: 3 },
            /* middle */
            { widthPct: 72, heightPct: 86, rotateY: -28, rotateZ: 4, translateX: '-12%', translateY: '3%', translateZ: -80, opacity: 0.62, zIndex: 2 },
            /* outermost */
            { widthPct: 58, heightPct: 72, rotateY: -48, rotateZ: 8, translateX: '10%', translateY: '8%', translateZ: -180, opacity: 0.38, zIndex: 1 },
          ].map((card, i) => (
            <motion.div
              key={`right-${i}`}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: card.opacity, x: 0 }}
              transition={{ delay: 0.2 + i * 0.14, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                position: 'absolute',
                width: `${card.widthPct}%`,
                height: `${card.heightPct}%`,
                top: '50%',
                right: 0,
                transform: `translateY(-50%) translateX(${card.translateX}) translateY(${card.translateY}) perspective(1200px) rotateY(${card.rotateY}deg) rotateZ(${card.rotateZ}deg) translateZ(${card.translateZ}px)`,
                zIndex: card.zIndex,
                borderRadius: 16,
                background: 'linear-gradient(160deg, #c8d0de 0%, #9aaabb 35%, #7a8fa4 70%, #606e82 100%)',
                boxShadow: `0 20px 60px rgba(0,0,20,0.7), 0 4px 16px rgba(0,0,20,0.5), inset 0 1px 0 rgba(255,255,255,0.25)`,
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, transparent 100%)', borderRadius: '16px 16px 0 0' }} />
              <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '18%', background: 'linear-gradient(to left, rgba(255,255,255,0.14) 0%, transparent 100%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%', background: 'linear-gradient(to top, rgba(255,255,255,0.08) 0%, transparent 100%)', borderRadius: '0 0 16px 16px' }} />
              <div style={{ position: 'absolute', inset: 0, borderRadius: 16, border: '1px solid rgba(255,255,255,0.3)' }} />
            </motion.div>
          ))}
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
