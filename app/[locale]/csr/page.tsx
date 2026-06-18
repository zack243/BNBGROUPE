import { getTranslations } from '@/lib/i18n';
import { routing } from '@/i18n/routing';
import CSRContent from './CSRContent';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getTranslations(locale, 'csr') as any;
  return {
    title: `${t.title || 'RSE'} | BNB Groupe`,
    description: t.description || '',
  };
}

export default function CSRPage() {
  return <CSRContent />;
}
