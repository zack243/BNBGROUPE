import { getTranslations } from '@/lib/i18n';
import { routing } from '@/i18n/routing';
import EventsNewsContent from './EventsNewsContent';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getTranslations(locale, 'events');
  return {
    title: `${t.title} | BNB Groupe`,
    description: t.subtitle,
  };
}

export default function EventsNewsPage() {
  return <EventsNewsContent />;
}
