'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n-context';
import Link from 'next/link';
import { ArrowRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Grâce au soutien de BNB Groupe, notre école a pu réhabiliter ses salles de classe et offrir des fournitures à plus de 300 élèves. Cet investissement dans l'éducation change réellement des vies.",
    name: 'Marie-Claire Mulamba',
    role: 'Directrice d\'école — Kinshasa',
    category: 'Community Impact',
  },
  {
    quote: "Les campagnes de santé organisées par BNB Groupe ont permis à des milliers de familles d'accéder à des soins médicaux gratuits. Leur engagement pour la santé communautaire est exemplaire.",
    name: 'Dr. Jean-Baptiste Kanda',
    role: 'Médecin — Centre de santé de Lubumbashi',
    category: 'Education Support',
  },
  {
    quote: "BNB Groupe ne se contente pas de distribuer des produits. Leur vision du développement social et économique de l'Afrique nous inspire et renforce notre confiance en l'avenir.",
    name: 'Samuel Ilunga',
    role: 'Coordinateur ONG — Développement local',
    category: 'Social Development',
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
                  src="/images/bnb/social/social1.jpg"
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
          TESTIMONIALS
      ═══════════════════════════════════════════ */}
      <section style={{ background: '#fafafa', padding: '80px 0 96px', borderTop: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 40px' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ width: 28, height: 2, background: '#e41e1e' }} />
              <span style={{ color: '#e41e1e', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                Témoignages
              </span>
              <div style={{ width: 28, height: 2, background: '#e41e1e' }} />
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.4vw, 2.2rem)', fontWeight: 800, color: '#1a2340', marginBottom: 12 }}>
              Ils témoignent de notre impact
            </h2>
            <p style={{ color: '#6b7280', fontSize: 15, maxWidth: 480, margin: '0 auto', lineHeight: 1.65 }}>
              Des partenaires et bénéficiaires partagent leur expérience avec BNB Groupe.
            </p>
          </div>

          {/* 3 testimonial cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                style={{
                  background: '#fff',
                  borderRadius: 20,
                  padding: '36px 32px 32px',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                  border: '1px solid #f0f0f0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0,
                  transition: 'all 0.25s ease',
                  borderTop: '4px solid #e41e1e',
                }}
                whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(0,0,0,0.11)' }}
              >
                {/* Quote icon */}
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'linear-gradient(135deg, #e41e1e 0%, #c41616 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 24,
                  boxShadow: '0 4px 14px rgba(228,30,30,0.28)',
                }}>
                  <Quote style={{ width: 20, height: 20, color: '#fff' }} />
                </div>

                {/* Category pill */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center',
                  background: '#fef2f2', color: '#e41e1e',
                  fontSize: 10, fontWeight: 700, letterSpacing: '0.14em',
                  textTransform: 'uppercase', padding: '4px 12px', borderRadius: 20,
                  marginBottom: 18, width: 'fit-content',
                }}>
                  {t.category}
                </div>

                {/* Quote text */}
                <p style={{
                  fontSize: 14.5, color: '#374151', lineHeight: 1.75,
                  fontStyle: 'italic', flexGrow: 1, marginBottom: 28,
                }}>
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Divider */}
                <div style={{ width: '100%', height: 1, background: '#f0f0f0', marginBottom: 20 }} />

                {/* Author */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1a2340 0%, #2d3a5e 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <span style={{ color: '#fff', fontSize: 16, fontWeight: 700 }}>
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#1a2340', lineHeight: 1.2 }}>
                      {t.name}
                    </div>
                    <div style={{ fontSize: 12.5, color: '#9ca3af', marginTop: 2, lineHeight: 1.3 }}>
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
