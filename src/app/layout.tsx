import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Inter } from 'next/font/google';
import './[locale]/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mesfneylove.org'),
  title: {
    default: 'Mesfney Love Foundation | Supporting Sick Children in Eritrea',
    template: '%s | Mesfney Love Foundation',
  },
  description:
    'UK registered charity #1139089 supporting sick children in Eritrea through healthcare, education, and play since 2008.',
  keywords: [
    'charity',
    'Eritrea',
    'children',
    'healthcare',
    'education',
    'Mesfney Love Foundation',
    'MLF',
    'donate',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Mesfney Love Foundation',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const locale = headersList.get('x-locale') || 'en';

  return (
    <html lang={locale}>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
