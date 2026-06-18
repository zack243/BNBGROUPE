import { getTranslations } from '@/lib/i18n';
import { routing } from '@/i18n/routing';
import PersonalCareContent from './PersonalCareContent';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getTranslations(locale, 'products') as any;
  return {
    title: `${t.personalCare || 'Soins Personnels'} | BNB Groupe`,
    description: 'Produits de soins personnels de qualité',
  };
}

export default function PersonalCarePage() {
  return <PersonalCareContent />;
}
