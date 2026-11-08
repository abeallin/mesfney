import type { Metadata } from 'next';
import Image from 'next/image';
import { ShieldCheck, Scale, Calendar } from 'lucide-react';
import { PageHeader } from '@/components/shared/page-header';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { getTranslations } from '@/lib/get-translations';

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'Founded in memory of Mesfin Hiruy to support children with special needs in Eritrea through healthcare, education, and play.',
};

export default async function OurStoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale);

  const missionObjects = [
    {
      num: '01',
      title: t.about.healthTitle,
      description: t.about.healthDesc,
    },
    {
      num: '02',
      title: t.about.educationTitle,
      description: t.about.educationDesc,
    },
    {
      num: '03',
      title: t.about.reliefTitle,
      description: t.about.reliefDesc,
    },
  ];

  return (
    <>
      <PageHeader
        title={t.about.pageTitle}
        subtitle={t.about.pageSubtitle}
      />

      {/* Editorial Origin Story */}
      <SectionWrapper>
        <div className="grid items-start gap-12 lg:grid-cols-12">
          {/* Memorial Portrait Card */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-8">
              <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-2xl border-2 border-brand-200 bg-brand-50 shadow-xs sm:w-56">
                <Image
                  src="/images/mesfin-portrait.png"
                  alt="Mesfin Hiruy"
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-800">
                  In Loving Memory
                </span>
                <h2 className="mt-2 font-serif text-2xl font-semibold text-foreground">
                  Mesfin Hiruy
                </h2>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  7 December 1990 – 4 December 2000
                </p>
              </div>
            </div>
          </div>

          {/* Narrative & Orange Callout */}
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
              Our Beginning
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              {t.about.originTitle}
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>{t.about.originBody1}</p>
              {t.about.originBody2 && <p>{t.about.originBody2}</p>}
            </div>

            <div className="mt-8 rounded-2xl border-l-4 border-brand-600 bg-brand-50/80 p-6 sm:p-8">
              <p className="font-serif text-xl italic leading-relaxed text-brand-950">
                &ldquo;{t.about.quote1}&rdquo;
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-brand-800">
                — Nebiat Yoseph, Founder &amp; Chair
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Constitutional Mission (Editorial Numbered Bento) */}
      <div className="border-y border-border bg-muted/60">
        <SectionWrapper>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-trust-700">
              Charitable Objects
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              {t.about.missionTitle}
            </h2>
            <p className="mt-2 text-muted-foreground">
              {t.about.missionSubtitle}
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {missionObjects.map((obj, idx) => {
              const isFeatured = idx === 0;
              return (
                <div
                  key={obj.title}
                  className={
                    isFeatured
                      ? 'rounded-3xl bg-trust-950 p-8 text-white shadow-sm'
                      : 'rounded-3xl border border-border bg-white p-8 shadow-2xs'
                  }
                >
                  <span
                    className={
                      isFeatured
                        ? 'font-serif text-4xl font-semibold text-brand-300'
                        : 'font-serif text-4xl font-semibold text-brand-600'
                    }
                  >
                    {obj.num}
                  </span>
                  <h3
                    className={
                      isFeatured
                        ? 'mt-6 font-serif text-xl font-semibold text-white'
                        : 'mt-6 font-serif text-xl font-semibold text-foreground'
                    }
                  >
                    {obj.title}
                  </h3>
                  <p
                    className={
                      isFeatured
                        ? 'mt-3 text-sm leading-relaxed text-trust-100/85'
                        : 'mt-3 text-sm leading-relaxed text-muted-foreground'
                    }
                  >
                    {obj.description}
                  </p>
                </div>
              );
            })}
          </div>
        </SectionWrapper>
      </div>

      {/* Governance Official Credential Card */}
      <SectionWrapper>
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-xs sm:p-12">
          <div className="grid items-center gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-trust-700">
                Accountability &amp; Structure
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-foreground">
                {t.about.governanceTitle}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {t.about.governanceBody}
              </p>
            </div>

            <div className="space-y-3 rounded-2xl bg-muted/70 p-6 md:col-span-4">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-foreground">
                <ShieldCheck className="size-4 text-trust-700" />
                <span>Charity No. 1139089</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Calendar className="size-4 text-brand-600" />
                <span>Constitution: 4 July 2008</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Scale className="size-4 text-trust-700" />
                <span>England &amp; Wales</span>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
