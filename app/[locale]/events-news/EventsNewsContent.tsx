'use client';

import { useTranslations } from '@/lib/i18n-context';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, MapPin } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { cn } from '@/lib/utils';

export default function EventsNewsContent() {
  const t = useTranslations('events');

  const upcomingEvents = [
    {
      title: 'Conférence Culturelle - L\'apport de la jeune fille congolaise',
      date: '21 Mars 2026',
      location: 'Kinshasa',
      category: 'Culture',
      description: 'Une conférence sur le rôle des jeunes filles dans la construction de la paix.',
    },
    {
      title: 'Concours Les Débauteurs - 5ème Édition',
      date: '14 Mars 2026',
      location: 'Kinshasa',
      category: 'Éducation',
      description: 'Compétition d\'éloquence pour les jeunes talents.',
    },
    {
      title: 'Muasi na Makusa 2 - La Femme et la Cuisine',
      date: '8 Mars 2025',
      location: 'Kinshasa',
      category: 'Culture',
      description: 'Célébration de la femme à travers la gastronomie congolaise.',
    },
  ];

  const pastEvents = [
    {
      title: 'Accueil des Nouveaux 2025-2026',
      date: '30 Janvier 2026',
      location: 'Kinshasa',
      category: 'Éducation',
    },
    {
      title: 'Noël à l\'École',
      date: '16 Décembre 2025',
      location: 'Kinshasa',
      category: 'Social',
    },
    {
      title: '30 ans d\'existence du Collège Sainte Marie Goretti',
      date: '13 Décembre 2025',
      location: 'Kinshasa',
      category: 'Éducation',
    },
    {
      title: 'Concert INTUITION - PAPA MABOTA',
      date: '6 Décembre 2025',
      location: 'Kinshasa',
      category: 'Culture',
    },
    {
      title: 'Conférence Débat',
      date: '4 Décembre 2025',
      location: 'Kinshasa',
      category: 'Éducation',
    },
    {
      title: 'Blood Donation 2025',
      date: 'Novembre 2025',
      location: 'Kinshasa',
      category: 'Santé',
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
              Découvrez nos événements et actualités à travers la RDC
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bnb-gray-900 mb-4">
              {t('upcoming')}
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <AnimatedSection key={event.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className={cn(
                    'h-full p-8 rounded-2xl bg-white border border-bnb-gray-100',
                    'shadow-sm hover:shadow-xl transition-all'
                  )}
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-bnb-blue-100 text-bnb-blue-700 text-sm font-medium mb-4">
                    {event.category}
                  </span>
                  <h3 className="text-xl font-bold text-bnb-gray-900 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-bnb-gray-600 mb-4">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-bnb-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-24 bg-bnb-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bnb-gray-900 mb-4">
              {t('past')}
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <AnimatedSection key={event.title} delay={index * 0.05}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className={cn(
                    'flex items-center gap-4 p-6 rounded-xl bg-white',
                    'border border-bnb-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer'
                  )}
                >
                  <div className="w-16 h-16 bg-bnb-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-8 h-8 text-bnb-orange-600" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm text-bnb-blue-600 font-medium">
                      {event.category}
                    </span>
                    <h3 className="font-semibold text-bnb-gray-900 mt-1">
                      {event.title}
                    </h3>
                    <p className="text-sm text-bnb-gray-500 mt-1">
                      {event.date} • {event.location}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-bnb-gray-400" />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
