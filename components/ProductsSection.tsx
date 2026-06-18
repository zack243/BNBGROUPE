'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from '@/lib/i18n-context';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

export default function ProductsSection() {
  const t = useTranslations('products');
  const locale = useLocale();

  const categories = [
    {
      name: t('foodBeverages'),
      href: `/${locale}/food-beverages/`,
      image: '/images/bnb/products/food-beverages.jpg',
      color: 'from-orange-500 to-red-500',
    },
    {
      name: t('healthHygiene'),
      href: `/${locale}/health-and-hygiene/`,
      image: '/images/bnb/products/health-hygiene.jpg',
      color: 'from-green-500 to-teal-500',
    },
    {
      name: t('personalCare'),
      href: `/${locale}/personal-care-products/`,
      image: '/images/bnb/products/personal-care.jpg',
      color: 'from-pink-500 to-rose-500',
    },
    {
      name: t('homeCare'),
      href: `/${locale}/home-care/`,
      image: '/images/bnb/products/home-care.jpg',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      name: t('babyCare'),
      href: `/${locale}/baby-care/`,
      image: '/images/bnb/products/baby-care.jpg',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      name: t('electronics'),
      href: `/${locale}/electronics-home-appliances/`,
      image: '/images/bnb/products/electronics.jpg',
      color: 'from-purple-500 to-violet-500',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-bnb-orange-100 text-bnb-orange-700 text-sm font-semibold mb-6">
            {t('subtitle')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-bnb-gray-900 mb-6">
            {t('title')}
          </h2>
        </AnimatedSection>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <AnimatedSection key={category.name} delay={index * 0.1}>
              <Link href={category.href}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={cn(
                    'group relative h-64 rounded-2xl overflow-hidden',
                    'shadow-lg'
                  )}
                >
                  {/* Background Image */}
                  <img
                    src={category.image}
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={cn(
                    'absolute inset-0 bg-gradient-to-br opacity-80',
                    category.color
                  )} />

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {category.name}
                    </h3>
                    <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                      <span className="text-sm font-medium">Explorer</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
