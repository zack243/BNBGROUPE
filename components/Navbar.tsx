'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from '@/lib/i18n-context';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import LanguageSwitch from './LanguageSwitch';

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
  );
}

export default function Navbar() {
  const locale = useLocale();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const productCategories = [
    { label: 'Alimentaire',            href: `/${locale}/food-beverages/` },
    { label: 'Hygiène & Santé',        href: `/${locale}/health-and-hygiene/` },
    { label: 'Entretien de la Maison', href: `/${locale}/home-care/` },
    { label: 'Électronique',           href: `/${locale}/electronics-home-appliances/` },
    { label: 'Distribution',           href: `/${locale}/distribution/` },
  ];

  const navItems = [
    { label: 'Accueil', href: `/${locale}/` },
    { label: 'À propos', href: `/${locale}/about-us/` },
    { label: 'Focus Brands', href: `/${locale}/focus-brand/` },
    { label: 'Responsabilité Sociétale', href: `/${locale}/csr/` },
    { label: 'Carrières', href: `/${locale}/career/` },
    { label: 'Actualités', href: `/${locale}/events-news/` },
  ];

  const socialLinks = [
    { icon: <FacebookIcon />, href: 'https://www.facebook.com/bnbgroupe', label: 'Facebook' },
    { icon: <InstagramIcon />, href: 'https://www.instagram.com/bnbgroupe', label: 'Instagram' },
    { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/company/bnbgroupe', label: 'LinkedIn' },
    { icon: <YouTubeIcon />, href: 'https://www.youtube.com/@bnbgroupe', label: 'YouTube' },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white"
        style={{ height: 72, borderBottom: '1px solid #f0f0f0' }}
      >
        {/*
          True 3-column layout:
          [Logo]  |  [Nav centered]  |  [Lang + Social]
          Each outer column has the same min-width so the nav
          is always optically centered regardless of logo width.
        */}
        <div
          className="h-full flex items-center"
          style={{ maxWidth: 1600, margin: '0 auto', padding: '0 40px' }}
        >
          {/* ── COL 1: Logo — fixed width, flush left ── */}
          <div style={{ minWidth: 200, display: 'flex', alignItems: 'center' }}>
            <Link href={`/${locale}/`} style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="/images/bnb/logo/logo bnb.avif"
                alt="BNB Groupe"
                style={{ height: 42, width: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </Link>
          </div>

          {/* ── COL 2: Nav — flex-1 centered ── */}
          <nav className="hidden xl:flex flex-1 items-center justify-center">
            {/* Accueil + À propos */}
            {navItems.slice(0, 2).map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href.replace(/\/$/, ''));
              return (
                <Link key={item.href} href={item.href} className="relative"
                  style={{ padding: '8px 16px', fontSize: 13.5, fontWeight: 500, color: isActive ? '#e41e1e' : '#1a2340', whiteSpace: 'nowrap', letterSpacing: '0.01em', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = '#e41e1e'; }}
                  onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = '#1a2340'; }}
                >
                  {item.label}
                  {isActive && <span style={{ position: 'absolute', bottom: 2, left: '16px', right: '16px', height: 2, background: '#e41e1e', borderRadius: 2 }} />}
                </Link>
              );
            })}

            {/* ── Produits dropdown ── */}
            <div ref={productsRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 4,
                  padding: '8px 16px', fontSize: 13.5, fontWeight: 500,
                  color: productCategories.some(c => pathname.startsWith(c.href.replace(/\/$/, ''))) ? '#e41e1e' : '#1a2340',
                  whiteSpace: 'nowrap', letterSpacing: '0.01em',
                  background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#e41e1e'; }}
                onMouseLeave={(e) => {
                  const active = productCategories.some(c => pathname.startsWith(c.href.replace(/\/$/, '')));
                  (e.currentTarget as HTMLButtonElement).style.color = active ? '#e41e1e' : '#1a2340';
                }}
              >
                Produits
                <ChevronDown style={{ width: 14, height: 14, transition: 'transform 0.2s', transform: productsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </button>

              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    style={{
                      position: 'absolute', top: 'calc(100% + 8px)', left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#fff', borderRadius: 10,
                      boxShadow: '0 8px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
                      border: '1px solid #f0f0f0',
                      minWidth: 220, zIndex: 100, overflow: 'hidden',
                    }}
                  >
                    <div style={{ padding: '8px 0 4px', borderBottom: '1px solid #f5f5f5' }}>
                      <span style={{ display: 'block', padding: '4px 20px 8px', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: '#9ca3af', textTransform: 'uppercase' }}>Nos Catégories</span>
                    </div>
                    {productCategories.map((cat) => {
                      const catActive = pathname.startsWith(cat.href.replace(/\/$/, ''));
                      return (
                        <Link
                          key={cat.href}
                          href={cat.href}
                          onClick={() => setProductsOpen(false)}
                          style={{
                            display: 'block', padding: '10px 20px',
                            fontSize: 13.5, fontWeight: catActive ? 600 : 400,
                            color: catActive ? '#e41e1e' : '#1a2340',
                            transition: 'all 0.15s', borderLeft: catActive ? '3px solid #e41e1e' : '3px solid transparent',
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.background = '#fef2f2';
                            (e.currentTarget as HTMLAnchorElement).style.color = '#e41e1e';
                            (e.currentTarget as HTMLAnchorElement).style.borderLeftColor = '#e41e1e';
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                            (e.currentTarget as HTMLAnchorElement).style.color = catActive ? '#e41e1e' : '#1a2340';
                            (e.currentTarget as HTMLAnchorElement).style.borderLeftColor = catActive ? '#e41e1e' : 'transparent';
                          }}
                        >
                          {cat.label}
                        </Link>
                      );
                    })}
                    <div style={{ height: 4 }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Remaining nav items */}
            {navItems.slice(2).map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href.replace(/\/$/, ''));
              return (
                <Link key={item.href} href={item.href} className="relative"
                  style={{ padding: '8px 16px', fontSize: 13.5, fontWeight: 500, color: isActive ? '#e41e1e' : '#1a2340', whiteSpace: 'nowrap', letterSpacing: '0.01em', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = '#e41e1e'; }}
                  onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = '#1a2340'; }}
                >
                  {item.label}
                  {isActive && <span style={{ position: 'absolute', bottom: 2, left: '16px', right: '16px', height: 2, background: '#e41e1e', borderRadius: 2 }} />}
                </Link>
              );
            })}
          </nav>

          {/* ── COL 3: Lang → Contact CTA → Social ── */}
          <div
            className="hidden xl:flex items-center justify-end"
            style={{ minWidth: 260, gap: 8 }}
          >
            {/* Language selector — pale red style */}
            <LanguageSwitch />

            {/* Contact CTA button */}
            <Link
              href={`/${locale}/contact/`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '8px 18px',
                background: '#e41e1e',
                color: '#fff',
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '0.04em',
                borderRadius: 6,
                whiteSpace: 'nowrap',
                boxShadow: '0 2px 12px rgba(228,30,30,0.28)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = '#c41616';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 18px rgba(228,30,30,0.42)';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = '#e41e1e';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 2px 12px rgba(228,30,30,0.28)';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              }}
            >
              Contact
            </Link>

            <div style={{ width: 1, height: 18, background: '#d1d5db', margin: '0 2px' }} />

            {/* Social icons */}
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                  border: '1px solid #e5e7eb',
                  color: '#6b7280',
                  transition: 'all 0.2s',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#e41e1e';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e41e1e';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#6b7280';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e5e7eb';
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden ml-auto p-2 text-gray-700"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl overflow-y-auto"
            >
              <div className="p-6 pt-24">
                <div className="mb-6">
                  <LanguageSwitch />
                </div>
                
                <nav className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-base font-medium rounded-lg transition-colors"
                      style={{ color: '#1a2340' }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
