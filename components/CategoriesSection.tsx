'use client';

import { motion } from 'framer-motion';
import { useLocale, useTranslations } from '@/lib/i18n-context';
import Link from 'next/link';
import { ArrowRight, ShoppingCart, Heart, Home, Monitor, Truck } from 'lucide-react';

const CATEGORIES = [
  {
    key: 'alimentaire',
    href: 'food-beverages',
    image: '/images/bnb/products/cat-alimentaire.png',
    accent: '#e41e1e',
    icon: ShoppingCart,
  },
  {
    key: 'hygiene',
    href: 'health-and-hygiene',
    image: '/images/bnb/products/cat-hygiene.png',
    accent: '#16a34a',
    icon: Heart,
  },
  {
    key: 'entretien',
    href: 'home-care',
    image: '/images/bnb/products/cat-entretien.png',
    accent: '#1a2340',
    icon: Home,
  },
  {
    key: 'electronique',
    href: 'electronics-home-appliances',
    image: '/images/bnb/products/cat-electronique.png',
    accent: '#7c3aed',
    icon: Monitor,
  },
  {
    key: 'distribution',
    href: 'distribution',
    image: '/images/bnb/products/cat-distribution.png',
    accent: '#f97316',
    icon: Truck,
  },
];

export default function CategoriesSection() {
  const locale = useLocale();
  const t = useTranslations('categories');

  return (
    <section style={{
      position: 'relative',
      padding: '80px 0 88px',
      overflow: 'hidden',
    }}>
      {/* Background image — full cover */}
      <img
        src="/images/bnb/bg-categories.png"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
          zIndex: 0, pointerEvents: 'none',
          display: 'block',
        }}
      />

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ width: 24, height: 2, background: '#e41e1e' }} />
            <span style={{ color: '#e41e1e', fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              {t('label')}
            </span>
            <div style={{ width: 24, height: 2, background: '#e41e1e' }} />
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 3rem)', fontWeight: 900, color: '#1a2340', lineHeight: 1.15, marginBottom: 16 }}>
            {t('heading')} <span style={{ color: '#e41e1e' }}>{t('headingAccent')}</span>
          </h2>
          <p style={{ color: '#4b5563', fontSize: 15.5, lineHeight: 1.7, maxWidth: 520, margin: '0 auto' }}>
            {t('subtitle')}
          </p>
        </div>

        {/* ── 5 Cards ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 18 }}>
          {CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.href}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
              >
                <Link
                  href={`/${locale}/${cat.href}/`}
                  style={{
                    display: 'flex', flexDirection: 'column',
                    borderRadius: 16, overflow: 'hidden',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
                    textDecoration: 'none',
                    transition: 'all 0.28s ease',
                    height: '100%',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.transform = 'translateY(-8px)';
                    el.style.boxShadow = '0 20px 48px rgba(0,0,0,0.18)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.transform = 'translateY(0)';
                    el.style.boxShadow = '0 4px 24px rgba(0,0,0,0.10)';
                  }}
                >
                  {/* Product image — top 70% */}
                  <div style={{ position: 'relative', flex: '0 0 240px', overflow: 'hidden', background: '#f5f5f5' }}>
                    <img
                      src={cat.image}
                      alt={t(cat.key)}
                      style={{ width: '100%', height: 240, objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                    />
                  </div>

                  {/* Colored band — bottom */}
                  <div style={{
                    background: cat.accent,
                    padding: '18px 20px 20px',
                    display: 'flex', flexDirection: 'column', gap: 10,
                    flex: 1,
                  }}>
                    {/* Icon circle */}
                    <div style={{
                      width: 44, height: 44, borderRadius: '50%',
                      background: 'rgba(255,255,255,0.22)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon style={{ width: 20, height: 20, color: '#fff' }} />
                    </div>

                    {/* Title */}
                    <span style={{ color: '#fff', fontSize: 16, fontWeight: 700, lineHeight: 1.2 }}>
                      {t(cat.key)}
                    </span>

                    {/* Arrow */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'rgba(255,255,255,0.85)', fontSize: 13, fontWeight: 500 }}>
                      <ArrowRight style={{ width: 16, height: 16 }} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
