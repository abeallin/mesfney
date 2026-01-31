import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import './globals.css';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
