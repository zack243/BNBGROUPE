'use client';

import { motion } from 'framer-motion';
import { Sparkles, Package, Factory, Handshake, TrendingUp, Award } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/lib/i18n-context';

export default function FocusBrandContent() {
  const t = useTranslations('focusBrand');

  const ownBrands = [
    { name: 'BomDia', category: 'Aliments', color: 'from-yellow-400 to-orange-500' },
    { name: 'Bon Appétit', category: 'Condiments', color: 'from-red-400 to-red-600' },
    { name: 'Bon Déjeuner', category: 'Aliments', color: 'from-green-400 to-green-600' },
    { name: 'Calcident', category: 'Santé', color: 'from-blue-400 to-blue-600' },
    { name: 'Simba', category: 'Boissons', color: 'from-orange-400 to-orange-600' },
    { name: 'Volcan', category: 'Nettoyage', color: 'from-gray-400 to-gray-600' },
  ];

  const expertise = [
    {
      icon: Sparkles,
      title: 'Développement de Marques',
      description: 'De la conception à la commercialisation, nous créons des marques qui résonnent avec les consommateurs.',
    },
    {
      icon: Package,
      title: 'Design & Packaging',
      description: 'Des emballages attractifs et fonctionnels qui se démarquent sur les rayons.',
    },
    {
      icon: Factory,
      title: 'Production Locale',
      description: 'Des capacités de production modernes pour garantir qualité et disponibilité.',
    },
    {
      icon: Handshake,
      title: 'Accompagnement',
      description: 'Un soutien complet pour le lancement et le développement de votre marque.',
    },
    {
      icon: TrendingUp,
      title: 'Marketing Stratégique',
      description: 'Des campagnes marketing ciblées pour maximiser la visibilité de votre marque.',
    },
    {
      icon: Award,
      title: 'Contrôle Qualité',
      description: 'Des standards stricts pour assurer la qualité constante de nos produits.',
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
              {t('description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Own Brands */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bnb-gray-900 mb-4">
              Nos Marques Propres
            </h2>
            <p className="text-bnb-gray-600 max-w-2xl mx-auto">
              Des marques créées et développées avec passion pour répondre aux besoins des consommateurs congolais
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ownBrands.map((brand, index) => (
              <AnimatedSection key={brand.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className={cn(
                    'relative overflow-hidden rounded-2xl p-8',
                    'bg-gradient-to-br shadow-lg'
                  )}
                  style={{
                    background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))`,
                  }}
                >
                  <div className={cn(
                    'absolute inset-0 bg-gradient-to-br opacity-90',
                    brand.color
                  )} />
                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
                      {brand.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {brand.name}
                    </h3>
                    <p className="text-white/80">
                      Découvrir la gamme
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 bg-bnb-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bnb-gray-900 mb-4">
              Notre Expertise
            </h2>
            <p className="text-bnb-gray-600 max-w-2xl mx-auto">
              Des services complets pour le développement de marques de qualité
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={cn(
                    'p-8 rounded-2xl bg-white border border-bnb-gray-100',
                    'shadow-sm hover:shadow-lg transition-all'
                  )}
                >
                  <div className="w-14 h-14 bg-bnb-orange-50 rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-bnb-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-bnb-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-bnb-gray-600">
                    {item.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-24 bg-gradient-corporate">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Vous avez un projet de marque ?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Nous accompagnons les entrepreneurs et les entreprises dans le développement 
              de leurs propres marques avec notre expertise et notre réseau de distribution.
            </p>
            <a
              href="/contact/"
              className={cn(
                'inline-flex items-center gap-2 px-8 py-4 rounded-xl',
                'bg-bnb-orange-500 text-white font-semibold',
                'hover:bg-bnb-orange-600 transition-colors shadow-lg'
              )}
            >
              Discuter de votre projet
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
