'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from '@/lib/i18n-context';
import Link from 'next/link';
import { ArrowRight, Target, Eye, Award } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

export default function AboutSection() {
  const t = useTranslations('about');
  const locale = useLocale();

  const values = [
    {
      icon: Target,
      title: t('mission'),
      description: t('missionText'),
    },
    {
      icon: Eye,
      title: t('vision'),
      description: t('visionText'),
    },
    {
      icon: Award,
      title: t('values'),
      description: t('valuesText'),
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <AnimatedSection>
            <span className="inline-block px-4 py-2 rounded-full bg-bnb-blue-50 text-bnb-blue-700 text-sm font-semibold mb-6">
              {t('subtitle')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-bnb-gray-900 mb-6">
              {t('title')}
            </h2>
            <p className="text-lg text-bnb-gray-600 leading-relaxed mb-8">
              {t('description')}
            </p>
            
            {/* Founded Badge */}
            <div className="flex items-center gap-4 mb-8 p-4 bg-bnb-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-bnb-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-2xl">27+</span>
              </div>
              <div>
                <p className="font-semibold text-bnb-gray-900">{t('founded')}</p>
                <p className="text-bnb-gray-600">{t('foundedText')}</p>
              </div>
            </div>

            <Link
              href={`/${locale}/about-us/`}
              className={cn(
                'group inline-flex items-center gap-2 text-bnb-blue-600 font-semibold',
                'hover:text-bnb-blue-700 transition-colors'
              )}
            >
              En savoir plus
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>

          {/* Right Content - Values Cards */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ x: 8 }}
                  className={cn(
                    'flex items-start gap-4 p-6 rounded-2xl',
                    'bg-white border border-bnb-gray-100 shadow-sm',
                    'hover:shadow-md hover:border-bnb-blue-200 transition-all'
                  )}
                >
                  <div className="w-12 h-12 bg-bnb-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-bnb-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-bnb-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-bnb-gray-600">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
