'use client';

import { useTranslations } from '@/lib/i18n-context';
import StatsCounter from './StatsCounter';

export default function StatsSection() {
  const t = useTranslations('stats');

  const stats = [
    { value: 45, suffix: '+', label: t('brands') },
    { value: 1000, suffix: '+', label: t('products') },
    { value: 27, suffix: '+', label: t('experience') },
    { value: 100, suffix: '%', label: t('coverage') },
  ];

  return (
    <section className="relative py-20 bg-gradient-corporate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
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
  );
}
