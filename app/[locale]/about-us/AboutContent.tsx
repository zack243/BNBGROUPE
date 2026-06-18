'use client';

import { useTranslations } from '@/lib/i18n-context';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Calendar, Users, Globe, TrendingUp } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { cn } from '@/lib/utils';

export default function AboutContent() {
  const t = useTranslations('about');

  const milestones = [
    { year: '1997', title: 'Création', description: 'Fondation de BNB Groupe à Kinshasa' },
    { year: '2005', title: 'Expansion', description: 'Développement du réseau de distribution' },
    { year: '2010', title: 'Diversification', description: 'Lancement des activités retail' },
    { year: '2015', title: 'Innovation', description: 'Introduction des marques propres' },
    { year: '2020', title: 'Leadership', description: 'Leader incontesté en RDC' },
    { year: '2024', title: 'Avenir', description: 'Expansion internationale' },
  ];

  const values = [
    { icon: Target, title: t('mission'), description: t('missionText') },
    { icon: Eye, title: t('vision'), description: t('visionText') },
    { icon: Award, title: t('values'), description: t('valuesText') },
  ];

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

      {/* Core Values */}
      <section className="py-24 bg-bnb-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bnb-gray-900 mb-4">
              Nos Valeurs Fondamentales
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className={cn(
                    'p-8 rounded-2xl bg-white border border-bnb-gray-100',
                    'shadow-sm hover:shadow-lg transition-all'
                  )}
                >
                  <div className="w-14 h-14 bg-bnb-blue-50 rounded-xl flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-bnb-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-bnb-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-bnb-gray-600">{value.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bnb-gray-900 mb-4">
              Notre Parcours
            </h2>
            <p className="text-bnb-gray-600 max-w-2xl mx-auto">
              Plus de 27 ans d&apos;excellence et de croissance continue
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-bnb-blue-200" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <AnimatedSection key={milestone.year} delay={index * 0.1}>
                  <div className={cn(
                    'flex flex-col md:flex-row items-center gap-8',
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  )}>
                    <div className={cn(
                      'flex-1 text-center md:text-left',
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    )}>
                      <div className={cn(
                        'inline-block p-6 rounded-2xl bg-white border border-bnb-gray-100',
                        'shadow-sm max-w-md'
                      )}>
                        <span className="text-3xl font-bold text-bnb-blue-600">
                          {milestone.year}
                        </span>
                        <h3 className="text-xl font-semibold text-bnb-gray-900 mt-2">
                          {milestone.title}
                        </h3>
                        <p className="text-bnb-gray-600 mt-1">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Center Dot */}
                    <div className="hidden md:flex w-4 h-4 rounded-full bg-bnb-blue-600 border-4 border-white shadow-lg z-10" />
                    
                    <div className="flex-1" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gradient-corporate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Calendar, value: '27+', label: 'Années d\'expérience' },
              { icon: Users, value: '2000+', label: 'Employés' },
              { icon: Globe, value: '45+', label: 'Marques partenaires' },
              { icon: TrendingUp, value: '1000+', label: 'Produits distribués' },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <stat.icon className="w-8 h-8 text-bnb-orange-500 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/70">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
