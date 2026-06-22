'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n-context';
import Link from 'next/link';
import { ArrowRight, Heart, GraduationCap, Users, Leaf } from 'lucide-react';

const CSR_CARDS = [
  {
    title: 'Éducation',
    description: 'Réhabilitation des écoles, fournitures scolaires, bourses d\'études pour les jeunes Africains.',
    image: '/images/bnb/social/social1.jpg',
    icon: GraduationCap,
    accent: '#e41e1e',
    accentLight: '#fef2f2',
  },
  {
    title: 'Santé & Bien-être',
    description: 'Campagnes de don de sang, chirurgies gratuites, soutien aux structures de santé locales.',
    image: '/images/bnb/social/social2.jpg',
    icon: Heart,
    accent: '#16a34a',
    accentLight: '#f0fdf4',
  },
  {
    title: 'Environnement',
    description: 'Initiatives de reboisement, sensibilisation écologique et développement durable.',
    image: '/images/bnb/social/social4.jpg',
    icon: Leaf,
    accent: '#0ea5e9',
    accentLight: '#f0f9ff',
  },
  {
    title: 'Développement Communautaire',
    description: 'Distribution alimentaire, aide aux personnes vulnérables et soutien aux communautés.',
    image: '/images/bnb/social/social3.jpg',
    icon: Users,
    accent: '#f97316',
    accentLight: '#fff7ed',
  },
];

export default function CSRPreviewSection() {
  const locale = useLocale();

  return (
    <>
      {/* ═══════════════════════════════════════════
          CSR HERO — warm gradient, 2-col layout
      ═══════════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '88px 0 80px',
        }}
      >
        {/* Background image */}
        <img
          src="/images/bnb/bg-csr.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            zIndex: 0, pointerEvents: 'none', display: 'block',
          }}
        />
        {/* Very light overlay for text readability */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.18)', zIndex: 1, pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 64 }}>

            {/* LEFT 40% */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{ flex: '0 0 40%', maxWidth: '40%' }}
            >
              {/* Label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div style={{ width: 28, height: 2, background: '#e41e1e' }} />
                <span style={{ color: '#e41e1e', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  Notre Engagement
                </span>
              </div>

              {/* Title */}
              <h2 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
                <span style={{ color: '#1a2340', display: 'block' }}>Responsabilité</span>
                <span style={{ color: '#e41e1e', display: 'block' }}>Sociétale</span>
              </h2>

              <p style={{ color: '#4b5563', fontSize: 15.5, lineHeight: 1.8, marginBottom: 36, maxWidth: 520 }}>
                BNB Groupe s&apos;engage activement dans le développement des communautés africaines.
                Éducation, santé, environnement et développement économique sont au cœur de
                nos actions à travers tout le continent.
              </p>

              <Link
                href={`/${locale}/csr/`}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: '#e41e1e', color: '#fff',
                  fontWeight: 700, fontSize: 14, letterSpacing: '0.04em',
                  padding: '14px 28px', borderRadius: 6,
                  boxShadow: '0 4px 20px rgba(228,30,30,0.32)',
                  transition: 'all 0.25s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = '#c41616';
                  el.style.transform = 'translateY(-2px)';
                  el.style.boxShadow = '0 8px 28px rgba(228,30,30,0.44)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = '#e41e1e';
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = '0 4px 20px rgba(228,30,30,0.32)';
                }}
              >
                Découvrir nos initiatives
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* RIGHT 60% — image */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              style={{ flex: '0 0 60%', maxWidth: '60%' }}
            >
              <div style={{
                borderRadius: 20,
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.14), 0 4px 16px rgba(0,0,0,0.08)',
                position: 'relative',
              }}>
                <img
                  src="/images/bnb/social/social3.jpg"
                  alt="Responsabilité Sociétale BNB"
                  style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
                />
                {/* Warm overlay tint */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(228,30,30,0.04) 0%, rgba(249,115,22,0.06) 100%)', pointerEvents: 'none' }} />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CSR CARDS — 4 axes d'action
      ═══════════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: '72px 0 88px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 40px' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ width: 28, height: 2, background: '#e41e1e' }} />
              <span style={{ color: '#e41e1e', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                Nos Axes d&apos;Action
              </span>
              <div style={{ width: 28, height: 2, background: '#e41e1e' }} />
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.4vw, 2.2rem)', fontWeight: 800, color: '#1a2340' }}>
              Agir aujourd&apos;hui pour un impact durable
            </h2>
          </div>

          {/* 4 cards grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {CSR_CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{
                    background: '#fff',
                    borderRadius: 16,
                    overflow: 'visible',
                    boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
                    border: '1px solid #f0f0f0',
                    transition: 'all 0.25s ease',
                    cursor: 'default',
                  }}
                  whileHover={{
                    y: -6,
                    boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
                  }}
                >
                  {/* Image + icon badge */}
                  <div style={{ position: 'relative', borderRadius: '16px 16px 0 0', overflow: 'hidden' }}>
                    <img
                      src={card.image}
                      alt={card.title}
                      style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.28) 0%, transparent 60%)', pointerEvents: 'none' }} />
                    {/* Icon badge */}
                    <div style={{
                      position: 'absolute', bottom: -18, left: 20,
                      width: 44, height: 44, borderRadius: 12,
                      background: card.accent,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: `0 4px 16px ${card.accent}55`,
                      border: '3px solid #fff',
                    }}>
                      <Icon style={{ width: 20, height: 20, color: '#fff' }} />
                    </div>
                  </div>

                  {/* Text */}
                  <div style={{ padding: '32px 20px 24px' }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1a2340', marginBottom: 8 }}>
                      {card.title}
                    </h3>
                    <p style={{ fontSize: 13.5, color: '#6b7280', lineHeight: 1.65, marginBottom: 18 }}>
                      {card.description}
                    </p>
                    <Link
                      href={`/${locale}/csr/`}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 13, fontWeight: 600, color: card.accent, textDecoration: 'none', transition: 'gap 0.2s' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = '8px'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = '4px'; }}
                    >
                      En savoir plus <ArrowRight style={{ width: 13, height: 13 }} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
