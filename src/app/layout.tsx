import type { Metadata } from 'next';
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
    default: "Mesfiney's Love Foundation | Supporting Children with Special Needs in Eritrea",
    template: "%s | Mesfiney's Love Foundation",
  },
  description:
    "Mesfiney's Love Foundation: A UK registered charity #1139089 supporting children with special needs in Eritrea through healthcare, education, and play since 2010.",
  keywords: [
    'charity',
    'Eritrea',
    'children',
    'special needs',
    'healthcare',
    'education',
    "Mesfiney's Love Foundation",
    'MLF',
    'donate',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: "Mesfiney's Love Foundation",
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
