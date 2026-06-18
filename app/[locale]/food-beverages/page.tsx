import { getTranslations } from '@/lib/i18n';
import { routing } from '@/i18n/routing';
import FoodBeveragesContent from './FoodBeveragesContent';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getTranslations(locale, 'products') as any;
  return {
    title: `${t.foodBeverages || 'Alimentation & Boissons'} | BNB Groupe`,
    description: 'Découvrez notre gamme complète de produits alimentaires et boissons',
  };
}

export default function FoodBeveragesPage() {
  return <FoodBeveragesContent />;
}
