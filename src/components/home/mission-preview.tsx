import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { getTranslations } from '@/lib/get-translations';

export function MissionPreview({ locale }: { locale: string }) {
  const t = getTranslations(locale);

  const pillars = [
    {
      num: '01',
      title: t.about.healthTitle,
      desc: t.about.healthDesc,
    },
    {
      num: '02',
      title: t.about.educationTitle,
      desc: t.about.educationDesc,
    },
    {
      num: '03',
      title: t.about.reliefTitle,
      desc: t.about.reliefDesc,
    },
  ];

  return (
    <div className="border-b border-border bg-muted/60">
      <SectionWrapper>
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
              {t.home.missionTitle}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {t.about.originTitle}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {t.home.missionBody1}
            </p>
            <div className="mt-6 rounded-2xl border-l-4 border-brand-600 bg-white p-6 shadow-2xs">
              <p className="font-serif text-lg italic leading-relaxed text-foreground">
                &ldquo;{t.home.missionBody2}&rdquo;
              </p>
            </div>
            <Button
              asChild
              variant="link"
              className="mt-5 px-0 text-base font-semibold text-trust-800 hover:text-trust-950"
            >
              <Link href={`/${locale}/our-story`}>
                {t.home.missionLink}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-border bg-white p-6 shadow-xs sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-trust-700">
                {t.home.objectsKicker}
              </p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-foreground">
                {t.about.missionTitle}
              </h3>
              <div className="mt-6 divide-y divide-border">
                {pillars.map((pillar) => (
                  <div key={pillar.num} className="flex gap-5 py-4 first:pt-0 last:pb-0">
                    <span className="font-serif text-2xl font-semibold text-brand-600">
                      {pillar.num}
                    </span>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {pillar.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
