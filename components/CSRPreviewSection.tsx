'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from '@/lib/i18n-context';
import Link from 'next/link';
import { Heart, GraduationCap, Users, Leaf, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

export default function CSRPreviewSection() {
  const t = useTranslations('csr');
  const locale = useLocale();

  const initiatives = [
    {
      icon: Heart,
      title: t('health'),
      description: 'Campagnes de don de sang, chirurgies cardiaques gratuites, soutien aux hôpitaux',
    },
    {
      icon: GraduationCap,
      title: t('education'),
      description: 'Réhabilitation des écoles, fournitures scolaires, bourses d\'études',
    },
    {
      icon: Users,
      title: t('community'),
      description: 'Distribution alimentaire, aide aux personnes vulnérables, tricycles pour handicapés',
    },
    {
      icon: Leaf,
      title: t('environment'),
      description: 'Initiatives écologiques, sensibilisation environnementale',
    },
  ];

  return (
    <section className="py-24 bg-gradient-corporate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <AnimatedSection>
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-6">
              {t('subtitle')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('title')}
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              {t('description')}
            </p>
            <Link
              href={`/${locale}/csr/`}
              className={cn(
                'group inline-flex items-center gap-2 px-8 py-4 rounded-xl',
                'bg-bnb-orange-500 text-white font-semibold',
                'hover:bg-bnb-orange-600 transition-colors shadow-lg'
              )}
            >
              Découvrir nos actions
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>

          {/* Right Content - Initiatives Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {initiatives.map((initiative, index) => (
              <AnimatedSection key={initiative.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={cn(
                    'p-6 rounded-2xl bg-white/10 backdrop-blur-sm',
                    'border border-white/20 hover:bg-white/15',
                    'transition-all duration-300'
                  )}
                >
                  <div className="w-12 h-12 bg-bnb-orange-500 rounded-xl flex items-center justify-center mb-4">
                    <initiative.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {initiative.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {initiative.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
