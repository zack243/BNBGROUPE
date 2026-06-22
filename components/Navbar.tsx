'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from '@/lib/i18n-context';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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

  const navItems = [
    { label: 'Accueil', href: `/${locale}/` },
    { label: 'À propos', href: `/${locale}/about-us/` },
    { label: 'Notre portefeuille', href: `/${locale}/business-portfolio/` },
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
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href.replace(/\/$/, ''));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative"
                  style={{
                    padding: '8px 16px',
                    fontSize: 13.5,
                    fontWeight: 500,
                    color: isActive ? '#e41e1e' : '#1a2340',
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.01em',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = '#e41e1e'; }}
                  onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = '#1a2340'; }}
                >
                  {item.label}
                  {isActive && (
                    <span style={{
                      position: 'absolute',
                      bottom: 2,
                      left: '16px',
                      right: '16px',
                      height: 2,
                      background: '#e41e1e',
                      borderRadius: 2,
                    }} />
                  )}
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
