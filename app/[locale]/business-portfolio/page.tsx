import { getTranslations } from '@/lib/i18n';
import { routing } from '@/i18n/routing';
import BusinessPortfolioContent from './BusinessPortfolioContent';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getTranslations(locale, 'business') as any;
  return {
    title: `${t.title || 'Portefeuille'} | BNB Groupe`,
    description: t.subtitle || '',
  };
}

export default function BusinessPortfolioPage() {
  return <BusinessPortfolioContent />;
}
