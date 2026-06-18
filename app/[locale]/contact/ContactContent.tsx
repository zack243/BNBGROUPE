'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/lib/i18n-context';

export default function ContactContent() {
  const t = useTranslations('contact');
  const tf = useTranslations('contact.form');

  const contactInfo = [
    {
      icon: MapPin,
      title: t('address'),
      content: '123 Avenue de la Libération, Kinshasa, RDC',
    },
    {
      icon: Phone,
      title: t('phone'),
      content: '+243 123 456 789',
    },
    {
      icon: Mail,
      title: t('email'),
      content: 'contact@bnbgroupe.com',
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Lun - Ven: 8h00 - 17h00',
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
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-bnb-gray-900 mb-8">
                Informations de contact
              </h2>
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-bnb-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-bnb-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-bnb-gray-900 mb-1">
                        {info.title}
                      </h3>
                      <p className="text-bnb-gray-600">{info.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="h-64 bg-bnb-gray-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-bnb-gray-400 mx-auto mb-2" />
                  <p className="text-bnb-gray-500">Carte de localisation</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.2}>
              <div className="p-8 bg-bnb-gray-50 rounded-2xl border border-bnb-gray-100">
                <h2 className="text-2xl font-bold text-bnb-gray-900 mb-6">
                  Envoyez-nous un message
                </h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-bnb-gray-700 mb-2">
                        {tf('name')}
                      </label>
                      <input
                        type="text"
                        className={cn(
                          'w-full px-4 py-3 rounded-xl border border-bnb-gray-200',
                          'focus:ring-2 focus:ring-bnb-blue-500 focus:border-transparent',
                          'outline-none transition-all'
                        )}
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-bnb-gray-700 mb-2">
                        {tf('email')}
                      </label>
                      <input
                        type="email"
                        className={cn(
                          'w-full px-4 py-3 rounded-xl border border-bnb-gray-200',
                          'focus:ring-2 focus:ring-bnb-blue-500 focus:border-transparent',
                          'outline-none transition-all'
                        )}
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-bnb-gray-700 mb-2">
                      {tf('phone')}
                    </label>
                    <input
                      type="tel"
                      className={cn(
                        'w-full px-4 py-3 rounded-xl border border-bnb-gray-200',
                        'focus:ring-2 focus:ring-bnb-blue-500 focus:border-transparent',
                        'outline-none transition-all'
                      )}
                      placeholder="+243 ..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-bnb-gray-700 mb-2">
                      {tf('subject')}
                    </label>
                    <input
                      type="text"
                      className={cn(
                        'w-full px-4 py-3 rounded-xl border border-bnb-gray-200',
                        'focus:ring-2 focus:ring-bnb-blue-500 focus:border-transparent',
                        'outline-none transition-all'
                      )}
                      placeholder="Sujet de votre message"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-bnb-gray-700 mb-2">
                      {tf('message')}
                    </label>
                    <textarea
                      rows={5}
                      className={cn(
                        'w-full px-4 py-3 rounded-xl border border-bnb-gray-200',
                        'focus:ring-2 focus:ring-bnb-blue-500 focus:border-transparent',
                        'outline-none transition-all resize-none'
                      )}
                      placeholder="Votre message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className={cn(
                      'w-full flex items-center justify-center gap-2 px-8 py-4',
                      'rounded-xl bg-bnb-blue-600 text-white font-semibold',
                      'hover:bg-bnb-blue-700 transition-colors shadow-lg'
                    )}
                  >
                    <Send className="w-5 h-5" />
                    {tf('submit')}
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
