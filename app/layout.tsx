import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
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
  description: 'BNB Groupe - The largest distribution company in the Democratic Republic of Congo.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-white text-bnb-gray-900">
        {children}
      </body>
    </html>
  );
}
