import { getTranslations } from '@/lib/i18n';
import { routing } from '@/i18n/routing';
import BabyCareContent from './BabyCareContent';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getTranslations(locale, 'products') as any;
  return {
    title: `${t.babyCare || 'Soins Bébé'} | BNB Groupe`,
    description: 'Produits pour bébé de qualité',
  };
}

export default function BabyCarePage() {
  return <BabyCareContent />;
}
