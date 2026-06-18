import { getTranslations } from '@/lib/i18n';
import { routing } from '@/i18n/routing';
import DistributionContent from './DistributionContent';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getTranslations(locale, 'distribution') as any;
  return {
    title: `${t.title || 'Distribution'} | BNB Groupe`,
    description: t.subtitle || '',
  };
}

export default function DistributionPage() {
  return <DistributionContent />;
}
