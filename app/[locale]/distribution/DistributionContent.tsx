'use client';

import { motion } from 'framer-motion';
import { Warehouse, Truck, Store, Package } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import StatsCounter from '@/components/StatsCounter';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/lib/i18n-context';

export default function DistributionContent() {
  const t = useTranslations('distribution');

  const stats = [
    { value: 55, suffix: '', label: t('warehouses') },
    { value: 110000, suffix: '', label: t('storage') },
    { value: 100, suffix: '', label: t('trucks') },
    { value: 115, suffix: '+', label: t('wholesale') },
    { value: 20000, suffix: '+', label: t('sku') },
    { value: 35, suffix: '+', label: t('stores') },
    { value: 250, suffix: '+', label: t('outlets') },
    { value: 39000, suffix: '+', label: t('retailers') },
  ];

  const features = [
    {
      icon: Warehouse,
      title: 'Réseau d\'Entrepôts',
      description: '55 entrepôts stratégiquement situés dans toute la RDC pour une couverture optimale.',
    },
    {
      icon: Truck,
      title: 'Flotte de Transport',
      description: '100 camions dédiés à la distribution nationale avec traçabilité en temps réel.',
    },
    {
      icon: Store,
      title: 'Points de Vente',
      description: '115 magasins ELS et 35 supermarchés KinMarché à travers le pays.',
    },
    {
      icon: Package,
      title: 'Gestion des Stocks',
      description: '20 000+ SKU gérés avec des systèmes informatiques de dernière génération.',
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
              Le réseau de distribution le plus étendu de la République Démocratique du Congo
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-bnb-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatsCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bnb-gray-900 mb-4">
              Notre Infrastructure
            </h2>
            <p className="text-bnb-gray-600 max-w-2xl mx-auto">
              Une logistique de pointe pour une distribution efficace
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={cn(
                    'flex gap-6 p-8 rounded-2xl bg-bnb-gray-50',
                    'border border-bnb-gray-100 hover:shadow-lg transition-all'
                  )}
                >
                  <div className="w-16 h-16 bg-bnb-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-bnb-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-bnb-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
