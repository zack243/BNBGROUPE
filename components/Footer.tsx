'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from '@/lib/i18n-context';
import { ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';

const NAV_HREFS = (locale: string) => [
  { key: 'home',        href: `/${locale}/` },
  { key: 'about',       href: `/${locale}/about-us/` },
  { key: 'products',    href: `/${locale}/food-beverages/` },
  { key: 'focusBrands', href: `/${locale}/focus-brand/` },
  { key: 'csr',         href: `/${locale}/csr/` },
  { key: 'career',      href: `/${locale}/career/` },
  { key: 'news',        href: `/${locale}/events-news/` },
  { key: 'contact',     href: `/${locale}/contact/` },
];

const BRAND_LOGOS = [
  { name: 'Calcident',    src: '/images/bnb/logo/Calcident.png' },
  { name: 'Bon Appétit',  src: '/images/bnb/logo/Bon Appetit (1).png' },
  { name: 'Bon Déjeuner', src: '/images/bnb/logo/Bon Dejeuner.png' },
  { name: 'Bom Dia',      src: '/images/bnb/logo/Bom Dia  - Logo vert.png' },
  { name: 'Simba',        src: '/images/bnb/logo/Simba.png' },
  { name: 'Volcan',       src: '/images/bnb/logo/Volcan.png' },
];

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
  );
}

export default function Footer() {
  const locale = useLocale();
  const tf = useTranslations('footer');
  const year = new Date().getFullYear();
  const navLinks = NAV_HREFS(locale);

  return (
    <footer>
      {/* ── CTA BANNER ── */}
      <div style={{
        background: 'linear-gradient(135deg, #e41e1e 0%, #c41616 100%)',
        padding: '44px 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -60, right: -60, width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -40, left: -40, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32 }}>
          <div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: 10 }}>
              {tf('ctaHeading')}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 15, lineHeight: 1.65, maxWidth: 480 }}>
              {tf('ctaSub')}
            </p>
          </div>
          <Link
            href={`/${locale}/contact/`}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#fff', color: '#e41e1e',
              fontWeight: 700, fontSize: 15, padding: '15px 32px',
              borderRadius: 6, whiteSpace: 'nowrap', flexShrink: 0,
              boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
              transition: 'all 0.22s ease', textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = '#fef2f2';
              el.style.transform = 'translateY(-2px)';
              el.style.boxShadow = '0 8px 28px rgba(0,0,0,0.22)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = '#fff';
              el.style.transform = 'translateY(0)';
              el.style.boxShadow = '0 4px 20px rgba(0,0,0,0.18)';
            }}
          >
            {tf('ctaBtn')} <ArrowRight style={{ width: 18, height: 18 }} />
          </Link>
        </div>
      </div>

      {/* ── MAIN FOOTER ── */}
      <div style={{ position: 'relative', padding: '56px 0 40px', overflow: 'hidden' }}>
        {/* Hero-style background */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/images/bnb/hero/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }} />
        {/* Deep blue overlay — keeps BNB identity + readability */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,28,80,0.88)', zIndex: 1 }} />
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1.3fr', gap: 56 }}>

            {/* COL 1 — Brand */}
            <div>
              <Link href={`/${locale}/`} style={{ display: 'inline-block', marginBottom: 20, textDecoration: 'none' }}>
                <span style={{ fontSize: 28, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>BNB Groupe</span>
              </Link>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13.5, lineHeight: 1.75, marginBottom: 24, maxWidth: 260 }}>
                {tf('description')}
              </p>
              <div style={{ display: 'flex', gap: 10 }}>
                {[
                  { icon: <FacebookIcon />, href: 'https://www.facebook.com/bnbgroupe', label: 'Facebook' },
                  { icon: <InstagramIcon />, href: 'https://www.instagram.com/bnbgroupe', label: 'Instagram' },
                  { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/company/bnbgroupe', label: 'LinkedIn' },
                  { icon: <YouTubeIcon />, href: 'https://www.youtube.com/@bnbgroupe', label: 'YouTube' },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    style={{
                      width: 38, height: 38, borderRadius: '50%',
                      border: '1.5px solid rgba(255,255,255,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'rgba(255,255,255,0.7)', transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.background = '#e41e1e';
                      el.style.borderColor = '#e41e1e';
                      el.style.color = '#fff';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.background = 'transparent';
                      el.style.borderColor = 'rgba(255,255,255,0.25)';
                      el.style.color = 'rgba(255,255,255,0.7)';
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* COL 2 — Navigation */}
            <div>
              <h4 style={{ color: '#fff', fontSize: 12, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 20 }}>
                {tf('navTitle')}
              </h4>
              <div style={{ width: 28, height: 2, background: '#e41e1e', marginBottom: 20 }} />
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13.5, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, transition: 'color 0.2s' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.65)'; }}
                    >
                      <span style={{ color: '#e41e1e', fontSize: 11 }}>›</span>
                      {tf(`nav.${link.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COL 3 — Contact */}
            <div>
              <h4 style={{ color: '#fff', fontSize: 12, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 20 }}>
                {tf('contactTitle')}
              </h4>
              <div style={{ width: 28, height: 2, background: '#e41e1e', marginBottom: 20 }} />
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
                {[
                  { icon: <MapPin style={{ width: 16, height: 16, flexShrink: 0 }} />, label: 'Adresse', value: 'Future Tower, Kinshasa' },
                  { icon: <Phone style={{ width: 16, height: 16, flexShrink: 0 }} />, label: 'Téléphone', value: '+243 XXX XXX XXX' },
                  { icon: <Mail style={{ width: 16, height: 16, flexShrink: 0 }} />, label: 'Email', value: 'contact@bnbgroupe.com' },
                  { icon: <Clock style={{ width: 16, height: 16, flexShrink: 0 }} />, label: 'Horaires', value: 'Lun - Ven\n08h00 - 17h00' },
                ].map((item) => (
                  <li key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <div style={{
                      width: 34, height: 34, borderRadius: '50%',
                      border: '1.5px solid rgba(255,255,255,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'rgba(255,255,255,0.7)', flexShrink: 0,
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ color: '#fff', fontSize: 13, fontWeight: 600, marginBottom: 2 }}>{item.label}</div>
                      <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, whiteSpace: 'pre-line' }}>{item.value}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ── COPYRIGHT BAR ── */}
      <div style={{ background: '#132f7a', borderTop: '1px solid rgba(255,255,255,0.10)', padding: '14px 0' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>
            © {year} BNB Groupe. {tf('rights')}
          </span>
          <div style={{ display: 'flex', gap: 24 }}>
            {[
              { label: 'Politique de confidentialité', href: `/${locale}/privacy-policy/` },
              { label: "Conditions d'utilisation", href: `/${locale}/terms-of-service/` },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.45)'; }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
