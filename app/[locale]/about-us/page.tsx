import { getTranslations } from '@/lib/i18n';
import { routing } from '@/i18n/routing';
import AboutContent from './AboutContent';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getTranslations(locale, 'about');
  return {
    title: `${t.title} | BNB Groupe`,
    description: t.description,
  };
}

export default function AboutPage() {
  return <AboutContent />;
}
