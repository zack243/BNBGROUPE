import { getTranslations } from '@/lib/i18n';
import { routing } from '@/i18n/routing';
import HealthContent from './HealthContent';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getTranslations(locale, 'products') as any;
  return {
    title: `${t.healthHygiene || 'Santé & Hygiène'} | BNB Groupe`,
    description: 'Produits de santé et hygiène de qualité',
  };
}

export default function HealthHygienePage() {
  return <HealthContent />;
}
