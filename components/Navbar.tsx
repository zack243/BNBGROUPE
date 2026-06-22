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
    { label: 'Contact', href: `/${locale}/contact/` },
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
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm"
        style={{ height: 72 }}
      >
        <div className="max-w-[1380px] mx-auto px-8 h-full flex items-center justify-between">

          {/* Logo */}
          <Link href={`/${locale}/`} className="flex-shrink-0 flex items-center">
            <img
              src="/images/bnb/logo/logo bnb.avif"
              alt="BNB Groupe"
              style={{ height: 44, width: 'auto', objectFit: 'contain', display: 'block' }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center" style={{ gap: 4 }}>
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href.replace(/\/$/, ''));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-5 py-2 text-sm font-medium transition-colors"
                  style={{
                    color: isActive ? '#e41e1e' : '#1a2340',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = '#e41e1e'; }}
                  onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = '#1a2340'; }}
                >
                  {item.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: -4,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '60%',
                        height: 2,
                        background: '#e41e1e',
                        borderRadius: 2,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Language + Social */}
          <div className="hidden xl:flex items-center gap-3">
            <LanguageSwitch />
            <div style={{ width: 1, height: 20, background: '#e5e7eb', margin: '0 8px' }} />
            <div className="flex items-center gap-1">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center transition-colors"
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    border: '1px solid #e5e7eb',
                    color: '#374151',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#e41e1e';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e41e1e';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#374151';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e5e7eb';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 text-gray-700"
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
