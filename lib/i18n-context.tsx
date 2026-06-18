'use client';

import React, { createContext, useContext, ReactNode } from 'react';

type Messages = Record<string, any>;

const I18nContext = createContext<Messages | null>(null);
const LocaleContext = createContext<string>('fr');

export function I18nProvider({ messages, locale = 'fr', children }: { messages: Messages; locale?: string; children: ReactNode }) {
  return (
    <LocaleContext.Provider value={locale}>
      <I18nContext.Provider value={messages}>{children}</I18nContext.Provider>
    </LocaleContext.Provider>
  );
}

export function useTranslations(namespace?: string) {
  const messages = useContext(I18nContext);
  
  if (!messages) {
    throw new Error('useTranslations must be used within I18nProvider');
  }
  
  const data = namespace ? messages[namespace] : messages;
  
  return (key: string) => {
    const keys = key.split('.');
    let value = data;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };
}

export function useLocale() {
  return useContext(LocaleContext);
}
