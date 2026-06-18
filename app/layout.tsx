import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { I18nProvider } from '@/lib/i18n-context';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BNB Groupe | Leading Distribution Company in DRC',
  description: 'BNB Groupe - The largest distribution company in the Democratic Republic of Congo. Discover our services, products and international presence.',
  keywords: ['BNB Groupe', 'Biso Na Biso', 'distribution', 'DRC', 'Congo', 'Kinshasa', 'FMCG'],
  authors: [{ name: 'BNB Groupe' }],
  openGraph: {
    title: 'BNB Groupe | Leading Distribution Company in DRC',
    description: 'BNB Groupe - The largest distribution company in the Democratic Republic of Congo.',
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: 'en_US',
    url: 'https://www.bnbgroupe.com',
    siteName: 'BNB Groupe',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BNB Groupe | Leading Distribution Company in DRC',
    description: 'BNB Groupe - The largest distribution company in the Democratic Republic of Congo.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Load messages directly for the locale
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <html lang={locale} className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-white text-bnb-gray-900">
        <I18nProvider messages={messages} locale={locale}>
          <Navbar />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
