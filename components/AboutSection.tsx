'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n-context';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const BRANDS = [
  { name: 'Calcident',    src: '/images/bnb/logo/Calcident.png' },
  { name: 'Bon Appétit',  src: '/images/bnb/logo/Bon Appetit (1).png' },
  { name: 'Bon Déjeuner', src: '/images/bnb/logo/Bon Dejeuner.png' },
  { name: 'Bom Dia',      src: '/images/bnb/logo/Bom Dia  - Logo vert.png' },
  { name: 'Simba',        src: '/images/bnb/logo/Simba.png' },
  { name: 'Volcan',       src: '/images/bnb/logo/Volcan.png' },
];


export default function AboutSection() {
  const locale = useLocale();
  const trackRef = useRef<HTMLDivElement>(null);

  const tripled = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <>
      {/* ═══════════════════════════════════════════
          ABOUT — 2-col layout
      ═══════════════════════════════════════════ */}
      <section
        className="w-full"
        style={{ background: 'linear-gradient(180deg, #f9fafb 0%, #ffffff 100%)', padding: '80px 0 60px' }}
      >
        <div style={{ maxWidth: 1600, margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 56 }}>

            {/* ── LEFT: 38% ── */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{ flex: '0 0 38%', maxWidth: '38%' }}
            >
              {/* Label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div style={{ width: 32, height: 2, background: '#e41e1e' }} />
                <span style={{ color: '#e41e1e', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  À propos de BNB Groupe
                </span>
              </div>

              {/* Title */}
              <h2 style={{ fontSize: 'clamp(1.9rem, 2.8vw, 2.6rem)', fontWeight: 800, color: '#1a2340', lineHeight: 1.2, marginBottom: 24 }}>
                Une entreprise africaine,<br />
                des marques qui{' '}
                <span style={{ color: '#e41e1e' }}>inspirent</span>
              </h2>

              {/* Paragraphs */}
              <p style={{ color: '#4b5563', fontSize: 15, lineHeight: 1.75, marginBottom: 16 }}>
                BNB Groupe est un groupe panafricain dédié à la création,
                au développement et à la distribution de marques fortes qui
                améliorent le quotidien de millions de personnes à travers l&apos;Afrique.
              </p>
              <p style={{ color: '#4b5563', fontSize: 15, lineHeight: 1.75, marginBottom: 36 }}>
                Notre mission est simple : offrir des produits et services de qualité,
                accessibles et innovants, tout en ayant un impact positif et durable
                sur nos communautés.
              </p>

              {/* CTA */}
              <Link
                href={`/${locale}/about-us/`}
                className="group"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  background: '#e41e1e',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: '0.04em',
                  padding: '14px 28px',
                  borderRadius: 6,
                  boxShadow: '0 4px 20px rgba(228,30,30,0.32)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = '#c41616';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 28px rgba(228,30,30,0.44)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = '#e41e1e';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 20px rgba(228,30,30,0.32)';
                }}
              >
                Découvrir notre histoire
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* ── RIGHT: 62% — mosaic ── */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              style={{ flex: '0 0 62%', maxWidth: '62%' }}
            >
              <div className="about-mosaic-single">
                <img
                  src="/images/bnb/local bnb2.png"
                  alt="BNB Groupe — bureaux et siège"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BRANDS CAROUSEL
      ═══════════════════════════════════════════ */}
      <section style={{ background: '#fff', borderTop: '1px solid #f0f0f0', padding: '56px 0 64px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ width: 28, height: 2, background: '#e41e1e' }} />
            <span style={{ color: '#e41e1e', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Nos Marques Associées
            </span>
            <div style={{ width: 28, height: 2, background: '#e41e1e' }} />
          </div>
          <h2 style={{ fontSize: 'clamp(1.4rem, 2vw, 1.9rem)', fontWeight: 800, color: '#1a2340' }}>
            Un portefeuille de marques de confiance
          </h2>
        </div>

        {/* Carousel track */}
        <div className="brands-carousel-outer">
          <div className="brands-carousel-track" ref={trackRef}>
            {tripled.map((brand: { name: string; src: string }, i: number) => (
              <div key={i} className="brands-carousel-item">
                <img src={brand.src} alt={brand.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
