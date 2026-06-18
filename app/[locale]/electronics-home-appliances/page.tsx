import { getTranslations } from '@/lib/i18n';
import { routing } from '@/i18n/routing';
import ElectronicsContent from './ElectronicsContent';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getTranslations(locale, 'products') as any;
  return {
    title: `${t.electronics || 'Électronique'} | BNB Groupe`,
    description: 'Électronique et électroménager',
  };
}

export default function ElectronicsPage() {
  return <ElectronicsContent />;
}
