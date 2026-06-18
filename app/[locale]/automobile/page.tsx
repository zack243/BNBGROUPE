import { getTranslations } from '@/lib/i18n';
import { routing } from '@/i18n/routing';
import AutomobileContent from './AutomobileContent';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getTranslations(locale, 'products') as any;
  return {
    title: `${t.automobile || 'Automobile'} | BNB Groupe`,
    description: 'Produits automobile et accessoires',
  };
}

export default function AutomobilePage() {
  return <AutomobileContent />;
}
