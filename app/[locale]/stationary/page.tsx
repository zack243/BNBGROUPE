import { getTranslations } from '@/lib/i18n';
import { routing } from '@/i18n/routing';
import StationaryContent from './StationaryContent';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getTranslations(locale, 'products') as any;
  return {
    title: `${t.stationary || 'Papeterie'} | BNB Groupe`,
    description: 'Fournitures de bureau et papeterie',
  };
}

export default function StationaryPage() {
  return <StationaryContent />;
}
