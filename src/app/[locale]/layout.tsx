import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/sonner';
import { JsonLd } from '@/components/shared/json-ld';
import { Providers } from '@/components/providers';
import { SITE } from '@/lib/constants';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <Providers locale={locale}>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <Toaster richColors position="top-center" />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'NGO',
          name: SITE.name,
          alternateName: SITE.legalName,
          url: SITE.url,
          foundingDate: SITE.foundedDate,
          founder: { '@type': 'Person', name: SITE.founder },
          address: {
            '@type': 'PostalAddress',
            streetAddress: SITE.address.street,
            addressLocality: SITE.address.city,
            postalCode: SITE.address.postcode,
            addressCountry: SITE.address.country,
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: SITE.contact.phoneInternational,
            email: SITE.contact.email,
          },
          nonprofitStatus: 'Registered',
          identifier: SITE.registrationNumber,
        }}
      />
    </Providers>
  );
}
