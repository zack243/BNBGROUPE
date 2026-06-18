'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from '@/lib/i18n-context';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: t('nav.about'), href: `/${locale}/about-us/` },
      { label: t('nav.businessPortfolio'), href: `/${locale}/business-portfolio/` },
      { label: t('nav.career'), href: `/${locale}/career/` },
      { label: t('nav.csr'), href: `/${locale}/csr/` },
    ],
    products: [
      { label: t('products.foodBeverages'), href: `/${locale}/food-beverages/` },
      { label: t('products.healthHygiene'), href: `/${locale}/health-and-hygiene/` },
      { label: t('products.personalCare'), href: `/${locale}/personal-care-products/` },
      { label: t('products.homeCare'), href: `/${locale}/home-care/` },
      { label: t('products.electronics'), href: `/${locale}/electronics-home-appliances/` },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/bnbgroupe', label: 'Facebook' },
    { icon: Linkedin, href: 'https://linkedin.com/company/bnbgroupe', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/bnbgroupe', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/bnbgroupe', label: 'Twitter' },
  ];

  return (
    <footer className="bg-bnb-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-bnb-orange-500 to-bnb-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">BNB</span>
              </div>
              <span className="text-2xl font-bold">Groupe</span>
            </div>
            <p className="text-bnb-gray-300 text-sm leading-relaxed mb-6">
              Société Biso Na Biso Sarl - La plus grande entreprise de distribution 
              en République Démocratique du Congo depuis 1997.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-bnb-orange-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6">{t('company')}</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-bnb-gray-300 hover:text-bnb-orange-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">{t('products')}</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-bnb-gray-300 hover:text-bnb-orange-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6">{t('contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-bnb-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-bnb-gray-300 text-sm">
                  123 Avenue de la Libération<br />
                  Kinshasa, RDC
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-bnb-orange-500 flex-shrink-0" />
                <span className="text-bnb-gray-300 text-sm">+243 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-bnb-orange-500 flex-shrink-0" />
                <span className="text-bnb-gray-300 text-sm">contact@bnbgroupe.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-bnb-gray-400 text-sm">
              © {currentYear} BNB Groupe. {t('rights')}
            </p>
            <div className="flex items-center gap-6 text-sm text-bnb-gray-400">
              <Link href={`/${locale}/privacy-policy/`} className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href={`/${locale}/terms-of-service/`} className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
