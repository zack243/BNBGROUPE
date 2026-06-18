import { getTranslations } from '@/lib/i18n';
import { routing } from '@/i18n/routing';
import HomeCareContent from './HomeCareContent';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getTranslations(locale, 'products') as any;
  return {
    title: `${t.homeCare || 'Soins Maison'} | BNB Groupe`,
    description: 'Produits d\'entretien pour la maison',
  };
}

export default function HomeCarePage() {
  return <HomeCareContent />;
}
