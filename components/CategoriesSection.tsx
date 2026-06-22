'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n-context';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CATEGORIES = [
  {
    label: 'Alimentaire',
    href: 'food-beverages',
    image: '/images/bnb/logo/Bon Appetit (1).png',
    bg: 'linear-gradient(135deg, #fff8f0 0%, #fde8cc 100%)',
    accent: '#f97316',
    description: 'Bon Appétit, Bon Déjeuner, Bom Dia',
  },
  {
    label: 'Hygiène & Santé',
    href: 'health-and-hygiene',
    image: '/images/bnb/logo/Calcident.png',
    bg: 'linear-gradient(135deg, #f0f9ff 0%, #c7e9fb 100%)',
    accent: '#0ea5e9',
    description: 'Calcident et soins du quotidien',
  },
  {
    label: 'Entretien Maison',
    href: 'home-care',
    image: '/images/bnb/logo/Volcan.png',
    bg: 'linear-gradient(135deg, #f0fdf4 0%, #bbf7d0 100%)',
    accent: '#16a34a',
    description: 'Produits ménagers Volcan',
  },
  {
    label: 'Électronique',
    href: 'electronics-home-appliances',
    image: '/images/bnb/logo/Simba.png',
    bg: 'linear-gradient(135deg, #fdf4ff 0%, #e9d5ff 100%)',
    accent: '#9333ea',
    description: 'Électronique & électroménager Simba',
  },
  {
    label: 'Distribution',
    href: 'distribution',
    image: '/images/bnb/products/food-beverages.jpg',
    bg: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    accent: '#1a2340',
    description: 'Logistique & distribution en Afrique',
  },
];

export default function CategoriesSection() {
  const locale = useLocale();

  return (
    <section style={{ background: '#f9fafb', padding: '80px 0 88px' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 40px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ width: 28, height: 2, background: '#e41e1e' }} />
            <span style={{ color: '#e41e1e', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Nos Catégories
            </span>
            <div style={{ width: 28, height: 2, background: '#e41e1e' }} />
          </div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.4vw, 2.2rem)', fontWeight: 800, color: '#1a2340', lineHeight: 1.2 }}>
            Des produits de qualité dans des catégories clés
          </h2>
        </div>

        {/* Cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 20 }}>
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={`/${locale}/${cat.href}/`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: '#fff',
                  borderRadius: 16,
                  overflow: 'hidden',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                  border: '1px solid #f0f0f0',
                  transition: 'all 0.25s ease',
                  textDecoration: 'none',
                  height: '100%',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.transform = 'translateY(-4px)';
                  el.style.boxShadow = `0 12px 36px rgba(0,0,0,0.12), 0 0 0 2px ${cat.accent}22`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = '0 2px 12px rgba(0,0,0,0.07)';
                }}
              >
                {/* Image area */}
                <div style={{
                  background: cat.bg,
                  height: 160,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 24,
                }}>
                  <img
                    src={cat.image}
                    alt={cat.label}
                    style={{
                      maxHeight: 100,
                      maxWidth: '100%',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.12))',
                    }}
                  />
                </div>

                {/* Text area */}
                <div style={{ padding: '20px 20px 22px', flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                  }}>
                    <div style={{ width: 4, height: 4, borderRadius: '50%', background: cat.accent, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#1a2340', letterSpacing: '0.01em' }}>
                      {cat.label}
                    </span>
                  </div>
                  <p style={{ fontSize: 12.5, color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                    {cat.description}
                  </p>
                  <div style={{ marginTop: 'auto', paddingTop: 12, display: 'flex', alignItems: 'center', gap: 4, color: cat.accent, fontSize: 12, fontWeight: 600 }}>
                    Découvrir
                    <ArrowRight style={{ width: 12, height: 12 }} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
