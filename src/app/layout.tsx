import type { Metadata } from 'next';
import { Outfit, DM_Sans, Noto_Sans_Ethiopic } from 'next/font/google';
import './[locale]/globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

const notoEthiopic = Noto_Sans_Ethiopic({
  subsets: ['ethiopic'],
  display: 'swap',
  variable: '--font-ethiopic',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.URL ||
      'https://stellular-entremet-e54dbe.netlify.app'
  ),
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
      <body className={`${dmSans.variable} ${outfit.variable} ${notoEthiopic.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
