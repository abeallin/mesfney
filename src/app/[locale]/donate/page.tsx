import type { Metadata } from 'next';
import Link from 'next/link';
import { Landmark, Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/page-header';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { DonationOptions } from '@/components/donate/donation-options';
import { JsonLd } from '@/components/shared/json-ld';
import { SITE } from '@/lib/constants';
import { getTranslations } from '@/lib/get-translations';

export const metadata: Metadata = {
  title: 'Donate',
  description:
    "Support children with special needs in Eritrea. Donate to Mesfiney's Love Foundation or become a member.",
};

export default async function DonatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale);
  const isTi = locale === 'ti';

  const impactTiers = [
    {
      amount: '£25',
      title: isTi ? 'ናይ ጸወታን ትምህርትን መሳርሒ' : 'Sensory & Play Materials',
      desc: isTi
        ? 'ንፍሉይ ድሌት ዘለዎም ቆልዑ መጻወትን መምሃርን ይድግፍ።'
        : 'Provides educational games, books, and sensory play items for children in Eritrea.',
    },
    {
      amount: '£100',
      title: isTi ? 'ኣገደስቲ ናይ ሓገዝ ኣቕሓ' : 'Assistive & Comfort Aid',
      desc: isTi
        ? 'በትሪ ምስጓም፡ ኮቦርታታትን መዓልታዊ ናውትን ይቕርብ።'
        : 'Funds walking sticks, warm blankets, and essential equipment for boarding schools.',
    },
    {
      amount: '£385',
      title: isTi ? 'ሓንቲ ናይ ትምህርቲ ላፕቶፕ' : 'Sponsor a School Laptop',
      desc: isTi
        ? 'ንተመሃሮ ሓንቲ ምሉእ ላፕቶፕ ይሽፍን (ከም ናይ 2025 ፕሮጀክትና)።'
        : 'Covers the full cost of one educational laptop, based on our 2025 16-laptop rollout.',
    },
  ];

  const memberBenefits = [
    t.donate.memberBenefit1,
    t.donate.memberBenefit2,
    t.donate.memberBenefit3,
    t.donate.memberBenefit4,
  ];

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
            "Support children with special needs in Eritrea through Mesfiney's Love Foundation.",
        }}
      />
      <PageHeader
        title={t.donate.pageTitle}
        subtitle={t.donate.pageSubtitle}
      />

      <SectionWrapper>
        {/* Tangible Impact Tiers */}
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
            {isTi ? 'ጽልዋ ልግስኹም' : 'Tangible Impact'}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-foreground">
            {isTi ? 'ልግስኹም እንታይ ይገብር' : 'What Your Generosity Makes Possible'}
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {impactTiers.map((tier, idx) => {
              const isHighlighted = idx === 2;
              return (
                <div
                  key={tier.amount}
                  className={
                    isHighlighted
                      ? 'rounded-3xl bg-trust-950 p-7 text-white shadow-sm'
                      : 'rounded-3xl border border-border bg-white p-7 shadow-2xs'
                  }
                >
                  <span
                    className={
                      isHighlighted
                        ? 'font-serif text-4xl font-semibold text-brand-300'
                        : 'font-serif text-4xl font-semibold text-brand-700'
                    }
                  >
                    {tier.amount}
                  </span>
                  <h3
                    className={
                      isHighlighted
                        ? 'mt-4 font-serif text-xl font-semibold text-white'
                        : 'mt-4 font-serif text-xl font-semibold text-foreground'
                    }
                  >
                    {tier.title}
                  </h3>
                  <p
                    className={
                      isHighlighted
                        ? 'mt-2 text-sm leading-relaxed text-trust-100/85'
                        : 'mt-2 text-sm leading-relaxed text-muted-foreground'
                    }
                  >
                    {tier.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <DonationOptions locale={locale} />

        {/* Bank Details & Membership */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-white p-8 shadow-2xs">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-trust-50 text-trust-700">
              <Landmark className="size-6" />
            </div>
            <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">
              {t.donate.bankTitle}
            </h3>
            <p className="mt-2 text-muted-foreground">
              {t.donate.bankDesc}
            </p>
            <div className="mt-6 space-y-3 rounded-2xl border border-border bg-muted/60 p-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t.donate.accountName}
                </p>
                <p className="mt-1 font-serif text-lg font-semibold text-foreground">
                  {SITE.legalName}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                {t.donate.bankContact}
              </p>
            </div>
            <Button asChild variant="outline" className="mt-6 rounded-xl">
              <a href={`mailto:${SITE.contact.email}?subject=Bank%20Transfer%20Donation%20Enquiry`}>
                Request Sort Code &amp; Account Details
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>

          <div className="rounded-3xl border border-border bg-white p-8 shadow-2xs">
            <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-800">
              Community
            </span>
            <h3 className="mt-4 font-serif text-2xl font-semibold text-foreground">
              {t.donate.memberTitle}
            </h3>
            <p className="mt-2 text-muted-foreground">
              {t.donate.memberDesc}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground">
              {memberBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-trust-600" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 rounded-3xl bg-gradient-to-br from-brand-800 via-brand-700 to-trust-900 p-8 text-center text-white sm:p-12">
          <Mail className="mx-auto size-9 text-brand-200" />
          <h2 className="mt-4 font-serif text-2xl font-semibold sm:text-3xl">
            {t.donate.regularGivingTitle}
          </h2>
          <p className="mx-auto mt-2 max-w-md text-brand-100">
            {t.donate.regularGivingDesc}
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 rounded-xl bg-white text-brand-900 hover:bg-brand-50"
          >
            <Link href={`/${locale}/contact`}>{t.donate.getInTouch}</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
