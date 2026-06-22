import { getTranslations } from '@/lib/i18n';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import BusinessPortfolioSection from '@/components/BusinessPortfolioSection';
import ProductsSection from '@/components/ProductsSection';
import CSRPreviewSection from '@/components/CSRPreviewSection';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getTranslations(locale, 'metadata') as any;
  
  return {
    title: t.title || 'BNB Groupe',
    description: t.description || '',
    keywords: t.keywords || '',
  };
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <BusinessPortfolioSection />
      <ProductsSection />
      <CSRPreviewSection />
    </>
  );
}
