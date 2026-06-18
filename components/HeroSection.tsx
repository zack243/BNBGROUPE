'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from '@/lib/i18n-context';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-corporate">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-bnb-blue-950/50 via-transparent to-bnb-blue-950/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-bnb-orange-500 animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Depuis 1997 en RDC
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            {t('title')}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light mb-4 max-w-4xl mx-auto">
            {t('subtitle')}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
            {t('description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/${locale}/about-us/`}
              className={cn(
                'group inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl',
                'bg-bnb-orange-500 text-white hover:bg-bnb-orange-600',
                'transition-all duration-300 shadow-lg shadow-bnb-orange-500/25',
                'hover:shadow-xl hover:shadow-bnb-orange-500/30 hover:-translate-y-1'
              )}
            >
              {t('ctaPrimary')}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={`/${locale}/contact/`}
              className={cn(
                'inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl',
                'bg-white/10 text-white border-2 border-white/30',
                'hover:bg-white/20 hover:border-white/50',
                'transition-all duration-300 backdrop-blur-sm'
              )}
            >
              {t('ctaSecondary')}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-sm font-medium uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-bnb-orange-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-bnb-blue-500/20 rounded-full blur-3xl" />
    </section>
  );
}
