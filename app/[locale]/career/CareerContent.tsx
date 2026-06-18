'use client';

import { motion } from 'framer-motion';
import { Home, Stethoscope, Utensils, Bus, TrendingUp, Users, Award } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/lib/i18n-context';

export default function CareerContent() {
  const t = useTranslations('career');

  const benefits = [
    { icon: Home, title: t('benefits'), description: t('benefitsDesc') },
    { icon: Stethoscope, title: 'Santé', description: 'Couverture médicale complète' },
    { icon: Utensils, title: 'Restauration', description: 'Repas fournis sur site' },
    { icon: Bus, title: 'Transport', description: 'Navettes domicile-travail' },
  ];

  const values = [
    { icon: TrendingUp, title: t('development'), description: t('developmentDesc') },
    { icon: Users, title: t('culture'), description: t('cultureDesc') },
    { icon: Award, title: 'Excellence', description: 'Reconnaissance des talents' },
  ];

  const positions = [
    { title: 'Responsable Commercial', department: 'Ventes', location: 'Kinshasa', type: 'CDI' },
    { title: 'Chef de Magasin', department: 'Retail', location: 'Lubumbashi', type: 'CDI' },
    { title: 'Logisticien', department: 'Supply Chain', location: 'Kinshasa', type: 'CDI' },
    { title: 'Comptable', department: 'Finance', location: 'Kinshasa', type: 'CDI' },
    { title: 'Responsable Marketing', department: 'Marketing', location: 'Kinshasa', type: 'CDI' },
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

      {/* Why Join */}
      <section className="py-24 bg-bnb-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bnb-gray-900 mb-4">
              Pourquoi rejoindre BNB Groupe ?
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <AnimatedSection>
              <h3 className="text-2xl font-bold text-bnb-gray-900 mb-6">Avantages</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={cn(
                      'flex items-center gap-4 p-4 rounded-xl bg-white',
                      'border border-bnb-gray-100 shadow-sm'
                    )}
                  >
                    <div className="w-12 h-12 bg-bnb-blue-100 rounded-xl flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-bnb-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-bnb-gray-900">{benefit.title}</h4>
                      <p className="text-bnb-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h3 className="text-2xl font-bold text-bnb-gray-900 mb-6">Culture d&apos;entreprise</h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={cn(
                      'flex items-center gap-4 p-4 rounded-xl bg-white',
                      'border border-bnb-gray-100 shadow-sm'
                    )}
                  >
                    <div className="w-12 h-12 bg-bnb-orange-100 rounded-xl flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-bnb-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-bnb-gray-900">{value.title}</h4>
                      <p className="text-bnb-gray-600 text-sm">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bnb-gray-900 mb-4">
              {t('positions')}
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {positions.map((position, index) => (
              <AnimatedSection key={position.title} delay={index * 0.05}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className={cn(
                    'flex flex-col md:flex-row md:items-center justify-between',
                    'p-6 rounded-2xl bg-bnb-gray-50 border border-bnb-gray-100',
                    'hover:bg-white hover:shadow-md transition-all cursor-pointer'
                  )}
                >
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-bnb-gray-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-bnb-gray-600">
                      <span className="px-3 py-1 rounded-full bg-bnb-blue-100 text-bnb-blue-700">
                        {position.department}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-bnb-gray-200">
                        {position.location}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-bnb-orange-100 text-bnb-orange-700">
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <button
                    className={cn(
                      'px-6 py-3 rounded-xl bg-bnb-blue-600 text-white font-semibold',
                      'hover:bg-bnb-blue-700 transition-colors'
                    )}
                  >
                    Postuler
                  </button>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
