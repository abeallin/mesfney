import type { Metadata } from 'next';
import Link from 'next/link';
import { Landmark, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { PageHeader } from '@/components/shared/page-header';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { DonationOptions } from '@/components/donate/donation-options';
import { MembershipInfo } from '@/components/donate/membership-info';
import { JsonLd } from '@/components/shared/json-ld';
import { SITE } from '@/lib/constants';
import { getTranslations } from '@/lib/get-translations';

export const metadata: Metadata = {
  title: 'Donate',
  description:
    'Support sick children in Eritrea. Donate to the Mesfney Love Foundation or become a member.',
};

export default async function DonatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale);

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'DonateAction',
          recipient: {
            '@type': 'Organization',
            name: SITE.name,
            url: SITE.url,
          },
          description:
            'Support sick children in Eritrea through the Mesfney Love Foundation.',
        }}
      />
      <PageHeader
        title={t.donate.pageTitle}
        subtitle={t.donate.pageSubtitle}
      />

      <SectionWrapper>
        <DonationOptions />

        <Separator className="my-12" />

        {/* Bank Details */}
        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <Landmark className="size-8 text-trust-500" />
              <CardTitle className="mt-2">{t.donate.bankTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                {t.donate.bankDesc}
              </p>
              <div className="space-y-3 rounded-lg bg-muted p-4">
                <div>
                  <p className="text-sm text-muted-foreground">{t.donate.accountName}</p>
                  <p className="font-medium text-foreground">
                    {SITE.legalName}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  {t.donate.bankContact}
                </p>
              </div>
            </CardContent>
          </Card>

          <MembershipInfo />
        </div>

        <Separator className="my-12" />

        {/* Contact CTA */}
        <div className="rounded-lg bg-brand-50 p-8 text-center">
          <Mail className="mx-auto size-10 text-brand-500" />
          <h2 className="mt-4 text-2xl font-bold text-foreground">
            {t.donate.regularGivingTitle}
          </h2>
          <p className="mt-2 max-w-md mx-auto text-muted-foreground">
            {t.donate.regularGivingDesc}
          </p>
          <Button asChild className="mt-6">
            <Link href={`/${locale}/contact`}>{t.donate.getInTouch}</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
