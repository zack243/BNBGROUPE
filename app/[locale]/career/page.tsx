import { getTranslations } from '@/lib/i18n';
import { routing } from '@/i18n/routing';
import CareerContent from './CareerContent';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getTranslations(locale, 'career') as any;
  return {
    title: `${t.title || 'Carrière'} | BNB Groupe`,
    description: t.description || '',
  };
}

export default function CareerPage() {
  return <CareerContent />;
}
