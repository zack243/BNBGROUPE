import { getTranslations } from '@/lib/i18n';
import { routing } from '@/i18n/routing';
import FocusBrandContent from './FocusBrandContent';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getTranslations(locale, 'focusBrand') as any;
  return {
    title: `${t.title || 'Marques Propres'} | BNB Groupe`,
    description: t.description || '',
  };
}

export default function FocusBrandPage() {
  return <FocusBrandContent />;
}

