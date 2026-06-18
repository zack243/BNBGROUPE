'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from '@/lib/i18n-context';
import Link from 'next/link';
import { 
  ShoppingCart, 
  Monitor, 
  Pill, 
  Building2, 
  Store, 
  Factory, 
  Music 
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

export default function BusinessPortfolioSection() {
  const t = useTranslations('business');
  const locale = useLocale();

  const businesses = [
    {
      icon: ShoppingCart,
      title: t('fmcg'),
      description: t('fmcgDesc'),
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Monitor,
      title: t('fmcd'),
      description: t('fmcdDesc'),
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Pill,
      title: t('pharma'),
      description: t('pharmaDesc'),
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Building2,
      title: t('realEstate'),
      description: t('realEstateDesc'),
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Store,
      title: t('retail'),
      description: t('retailDesc'),
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Factory,
      title: t('manufacturing'),
      description: t('manufacturingDesc'),
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Music,
      title: t('entertainment'),
      description: t('entertainmentDesc'),
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <section className="py-24 bg-bnb-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-bnb-blue-100 text-bnb-blue-700 text-sm font-semibold mb-6">
            {t('subtitle')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-bnb-gray-900 mb-6">
            {t('title')}
          </h2>
        </AnimatedSection>

        {/* Business Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((business, index) => (
            <AnimatedSection key={business.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className={cn(
                  'group p-8 rounded-2xl bg-white border border-bnb-gray-100',
                  'shadow-sm hover:shadow-xl transition-all duration-300'
                )}
              >
                <div className={cn(
                  'w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6',
                  business.color
                )}>
                  <business.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-bnb-gray-900 mb-3">
                  {business.title}
                </h3>
                <p className="text-bnb-gray-600">
                  {business.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* View All Button */}
        <AnimatedSection delay={0.5} className="text-center mt-12">
          <Link
            href={`/${locale}/business-portfolio/`}
            className={cn(
              'inline-flex items-center gap-2 px-8 py-4 rounded-xl',
              'bg-bnb-blue-600 text-white font-semibold',
              'hover:bg-bnb-blue-700 transition-colors shadow-lg'
            )}
          >
            Voir tout le portefeuille
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
