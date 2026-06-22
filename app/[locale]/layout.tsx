import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { I18nProvider } from '@/lib/i18n-context';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Resolve params and get locale
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Load messages directly for the locale
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <I18nProvider messages={messages} locale={locale}>
      <Navbar />
      <main className="min-h-screen pt-[72px]">
        {children}
      </main>
      <Footer />
    </I18nProvider>
  );
}
