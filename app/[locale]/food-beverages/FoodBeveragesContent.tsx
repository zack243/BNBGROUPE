'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/lib/i18n-context';

export default function FoodBeveragesContent() {
  const t = useTranslations('products');

  const categories = [
    {
      name: 'Produits Laitiers',
      items: ['Lait en poudre', 'Lait liquide', 'Yaourt', 'Fromage'],
      color: 'from-blue-400 to-blue-600',
    },
    {
      name: 'Boissons',
      items: ['Jus de fruits', 'Eaux minérales', 'Boissons gazeuses', 'Bières'],
      color: 'from-yellow-400 to-orange-500',
    },
    {
      name: 'Conserves',
      items: ['Petits pois', 'Maïs', 'Sardines', 'Thon'],
      color: 'from-green-400 to-green-600',
    },
    {
      name: 'Épices & Condiments',
      items: ['Mayonnaise', 'Ketchup', 'Moutarde', 'Huiles'],
      color: 'from-red-400 to-red-600',
    },
    {
      name: 'Pâtes & Céréales',
      items: ['Spaghetti', 'Macaroni', 'Riz', 'Farine'],
      color: 'from-yellow-500 to-yellow-700',
    },
    {
      name: 'Confiseries',
      items: ['Chocolats', 'Bonbons', 'Biscuits', 'Gâteaux'],
      color: 'from-pink-400 to-pink-600',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-orange-500 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('foodBeverages')}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Une sélection complète de produits alimentaires et boissons de qualité
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bnb-gray-900 mb-4">
              Nos Catégories
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <AnimatedSection key={category.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={cn(
                    'h-full rounded-2xl overflow-hidden shadow-lg'
                  )}
                >
                  <div className={cn('h-32 bg-gradient-to-br', category.color)} />
                  <div className="p-6 bg-white border border-t-0 border-bnb-gray-100 rounded-b-2xl">
                    <h3 className="text-xl font-bold text-bnb-gray-900 mb-4">
                      {category.name}
                    </h3>
                    <ul className="space-y-2">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-bnb-gray-600">
                          <ArrowRight className="w-4 h-4 text-bnb-orange-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
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
