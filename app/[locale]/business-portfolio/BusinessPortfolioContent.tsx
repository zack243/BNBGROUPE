'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Monitor, Pill, Building2, Store, Factory, Music, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/lib/i18n-context';

export default function BusinessPortfolioContent() {
  const t = useTranslations('business');

  const businesses = [
    {
      icon: ShoppingCart,
      title: t('fmcg'),
      description: t('fmcgDesc'),
      details: 'Distribution de produits de grande consommation : alimentation, boissons, produits d\'entretien.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Monitor,
      title: t('fmcd'),
      description: t('fmcdDesc'),
      details: 'Distribution d\'électronique et d\'électroménager : téléviseurs, réfrigérateurs, téléphones.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Pill,
      title: t('pharma'),
      description: t('pharmaDesc'),
      details: 'Distribution de médicaments et produits pharmaceutiques dans toute la RDC.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Building2,
      title: t('realEstate'),
      description: t('realEstateDesc'),
      details: 'Développement et gestion de propriétés commerciales et résidentielles.',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Store,
      title: t('retail'),
      description: t('retailDesc'),
      details: 'Réseau de supermarchés KinMarché et points de vente ELS à travers la RDC.',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
    },
    {
      icon: Factory,
      title: t('manufacturing'),
      description: t('manufacturingDesc'),
      details: 'Production locale de produits alimentaires et de consommation courante.',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
    },
    {
      icon: Music,
      title: t('entertainment'),
      description: t('entertainmentDesc'),
      details: 'Organisation d\'événements culturels et promotion de talents locaux.',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
    },
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
              Une diversification stratégique pour mieux servir le marché congolais
            </p>
          </motion.div>
        </div>
      </section>

      {/* Business Cards */}
      <section className="py-24 bg-bnb-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businesses.map((business, index) => (
              <AnimatedSection key={business.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className={cn(
                    'group h-full p-8 rounded-2xl bg-white border border-bnb-gray-100',
                    'shadow-sm hover:shadow-xl transition-all duration-300'
                  )}
                >
                  <div className={cn(
                    'w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6',
                    business.color
                  )}>
                    <business.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-bnb-gray-900 mb-3">
                    {business.title}
                  </h3>
                  <p className="text-bnb-gray-600 mb-4">
                    {business.description}
                  </p>
                  <p className="text-bnb-gray-500 text-sm leading-relaxed">
                    {business.details}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-bnb-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>En savoir plus</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-bnb-gray-900 mb-6">
              Vous souhaitez collaborer avec nous ?
            </h2>
            <p className="text-bnb-gray-600 text-lg mb-8">
              Que vous soyez une marque internationale ou un partenaire local, 
              nous sommes ouverts aux opportunités de collaboration.
            </p>
            <a
              href="/contact/"
              className={cn(
                'inline-flex items-center gap-2 px-8 py-4 rounded-xl',
                'bg-bnb-blue-600 text-white font-semibold',
                'hover:bg-bnb-blue-700 transition-colors shadow-lg'
              )}
            >
              Contactez-nous
              <ArrowRight className="w-5 h-5" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
