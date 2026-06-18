// Custom i18n utility for static export
import fr from '@/messages/fr.json';
import en from '@/messages/en.json';

const messages = { fr, en };

export function getMessages(locale: string) {
  return messages[locale as keyof typeof messages] || messages.fr;
}

export function getTranslations(localeOrParams: string | { locale: string; namespace?: string }, namespace?: string) {
  let locale: string;
  let ns: string | undefined;
  
  if (typeof localeOrParams === 'string') {
    locale = localeOrParams;
    ns = namespace;
  } else {
    locale = localeOrParams.locale;
    ns = localeOrParams.namespace;
  }
  
  const msgs = getMessages(locale);
  if (ns) {
    return msgs[ns as keyof typeof msgs] || {};
  }
  return msgs;
}
