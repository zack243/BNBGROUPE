import { getTranslations } from '@/lib/i18n';
import { routing } from '@/i18n/routing';
import FurnitureContent from './FurnitureContent';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getTranslations(locale, 'products') as any;
  return {
    title: `${t.furniture || 'Mobilier'} | BNB Groupe`,
    description: 'Mobilier et aménagement',
  };
}

export default function FurniturePage() {
  return <FurnitureContent />;
}
