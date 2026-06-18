'use client';

import { motion } from 'framer-motion';
import { Heart, GraduationCap, Users, Leaf, Droplets, HandHeart } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/lib/i18n-context';

export default function CSRContent() {
  const t = useTranslations('csr');

  const initiatives = [
    {
      icon: Heart,
      title: t('health'),
      description: 'Campagnes de don de sang, chirurgies cardiaques gratuites pour enfants, équipement médical pour hôpitaux.',
      stats: '1000+ vies sauvées',
    },
    {
      icon: GraduationCap,
      title: t('education'),
      description: 'Réhabilitation des écoles, fournitures scolaires, bourses d\'études pour les jeunes talents.',
      stats: '5000+ enfants aidés',
    },
    {
      icon: Users,
      title: t('community'),
      description: 'Distribution alimentaire, aide aux personnes vulnérables, tricycles pour handicapés.',
      stats: '50+ communautés',
    },
    {
      icon: Leaf,
      title: t('environment'),
      description: 'Initiatives écologiques, sensibilisation environnementale, projets de reboisement.',
      stats: '10000+ arbres plantés',
    },
  ];

  const foundationInfo = {
    name: 'Zarina Foundation',
    description: 'La fondation Zarina est le bras humanitaire de BNB Groupe, œuvrant pour l\'amélioration des conditions de vie des populations en RDC.',
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-corporate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-6">
              {t('subtitle')}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {t('description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Foundation */}
      <section className="py-24 bg-bnb-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-bnb-orange-500 rounded-2xl flex items-center justify-center">
                <HandHeart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-bnb-gray-900">
                {foundationInfo.name}
              </h2>
            </div>
            <p className="text-bnb-gray-600 max-w-2xl mx-auto text-lg">
              {foundationInfo.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bnb-gray-900 mb-4">
              Nos Domaines d&apos;Action
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <AnimatedSection key={initiative.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={cn(
                    'h-full p-8 rounded-2xl bg-gradient-to-br',
                    'from-white to-bnb-gray-50 border border-bnb-gray-100',
                    'shadow-sm hover:shadow-lg transition-all'
                  )}
                >
                  <div className="w-14 h-14 bg-bnb-orange-500 rounded-xl flex items-center justify-center mb-6">
                    <initiative.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-bnb-gray-900 mb-3">
                    {initiative.title}
                  </h3>
                  <p className="text-bnb-gray-600 mb-4">
                    {initiative.description}
                  </p>
                  <div className="inline-block px-4 py-2 rounded-full bg-bnb-orange-100 text-bnb-orange-700 text-sm font-semibold">
                    {initiative.stats}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Blood Donation Highlight */}
      <section className="py-24 bg-gradient-corporate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="w-20 h-20 bg-bnb-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Droplets className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Campagnes de Don de Sang
              </h2>
              <p className="text-white/80 text-lg mb-6">
                En collaboration avec les centres de transfusion sanguine, nous organisons régulièrement 
                des campagnes de don de sang pour sauver des vies et soutenir le système de santé congolais.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/10 rounded-xl">
                  <div className="text-3xl font-bold text-white mb-1">5000+</div>
                  <div className="text-white/70">Poches collectées</div>
                </div>
                <div className="p-4 bg-white/10 rounded-xl">
                  <div className="text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-white/70">Campagnes réalisées</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative h-96 bg-white/10 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Droplets className="w-24 h-24 text-white/30 mx-auto mb-4" />
                    <p className="text-white/50">Image de campagne de don</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
