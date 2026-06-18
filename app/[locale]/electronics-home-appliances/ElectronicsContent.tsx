'use client';

import { motion } from 'framer-motion';
import { Tv, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export default function ElectronicsContent() {
  const categories = [
    { name: 'TV & Audio', items: ['Samsung', 'LG', 'Sony', 'Hisense'] },
    { name: 'Réfrigération', items: ['Samsung', 'LG', 'Whirlpool', 'Midea'] },
    { name: 'Climatisation', items: ['Samsung', 'LG', 'Carrier', 'Midea'] },
    { name: 'Smartphones', items: ['Samsung', 'iPhone', 'Huawei', 'Xiaomi'] },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-32 bg-gradient-to-br from-purple-500 to-violet-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Tv className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Électronique & Électroménager</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">Les meilleures marques pour votre confort</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bnb-gray-900 mb-4">Nos Gammes</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <AnimatedSection key={category.name} delay={index * 0.1}>
                <motion.div whileHover={{ y: -4 }} className="p-8 rounded-2xl bg-bnb-gray-50 border border-bnb-gray-100 shadow-sm hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-bnb-gray-900 mb-4">{category.name}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-bnb-gray-600">
                        <ArrowRight className="w-4 h-4 text-purple-500" />{item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
