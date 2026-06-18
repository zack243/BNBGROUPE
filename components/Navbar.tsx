'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from '@/lib/i18n-context';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import LanguageSwitch from './LanguageSwitch';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('about'), href: `/${locale}/about-us/` },
    { label: t('businessPortfolio'), href: `/${locale}/business-portfolio/` },
    {
      label: t('products'),
      href: '#',
      children: [
        { label: t('products') + ' - ' + t('foodBeverages'), href: `/${locale}/food-beverages/` },
        { label: t('products') + ' - ' + t('healthHygiene'), href: `/${locale}/health-and-hygiene/` },
        { label: t('products') + ' - ' + t('personalCare'), href: `/${locale}/personal-care-products/` },
        { label: t('products') + ' - ' + t('homeCare'), href: `/${locale}/home-care/` },
        { label: t('products') + ' - ' + t('babyCare'), href: `/${locale}/baby-care/` },
        { label: t('products') + ' - ' + t('electronics'), href: `/${locale}/electronics-home-appliances/` },
        { label: t('products') + ' - ' + t('automobile'), href: `/${locale}/automobile/` },
        { label: t('products') + ' - ' + t('stationary'), href: `/${locale}/stationary/` },
        { label: t('products') + ' - ' + t('furniture'), href: `/${locale}/furniture-fittings/` },
      ],
    },
    { label: t('focusBrand'), href: `/${locale}/focus-brand/` },
    { label: t('distribution'), href: `/${locale}/distribution/` },
    { label: t('eventsNews'), href: `/${locale}/events-news/` },
    { label: t('csr'), href: `/${locale}/csr/` },
    { label: t('career'), href: `/${locale}/career/` },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white/80 backdrop-blur-sm'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href={`/${locale}/`} className="flex items-center gap-2">
              <img
                src="/images/bnb/logo/bnb-logo.png"
                alt="BNB Groupe"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md',
                      'text-bnb-gray-700 hover:text-bnb-blue-600 hover:bg-bnb-blue-50'
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown className={cn(
                        'w-4 h-4 transition-transform',
                        activeDropdown === item.label && 'rotate-180'
                      )} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-bnb-gray-100 overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-bnb-gray-700 hover:bg-bnb-blue-50 hover:text-bnb-blue-600 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <LanguageSwitch className="hidden md:flex" />
              
              <Link
                href={`/${locale}/contact/`}
                className={cn(
                  'hidden md:inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg',
                  'bg-bnb-blue-600 text-white hover:bg-bnb-blue-700 transition-colors'
                )}
              >
                {t('contact')}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-bnb-gray-700 hover:text-bnb-blue-600 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

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
                
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <div key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-3 text-base font-medium text-bnb-gray-700 hover:bg-bnb-blue-50 hover:text-bnb-blue-600 rounded-lg transition-colors"
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <div className="ml-4 mt-1 flex flex-col gap-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block px-4 py-2 text-sm text-bnb-gray-600 hover:bg-bnb-blue-50 hover:text-bnb-blue-600 rounded-lg transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <Link
                    href={`/${locale}/contact/`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mt-4 px-4 py-3 text-base font-medium bg-bnb-blue-600 text-white rounded-lg text-center hover:bg-bnb-blue-700 transition-colors"
                  >
                    {t('contact')}
                  </Link>
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
