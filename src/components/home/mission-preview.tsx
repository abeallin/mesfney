'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { useLocale } from '@/hooks/use-locale';

export function MissionPreview() {
  const locale = useLocale();
  const { t } = useTranslation();

  return (
    <div className="border-y border-brand-100/60 bg-gradient-to-br from-brand-50/50 via-white to-trust-50/50">
      <SectionWrapper>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-800">
              <BookOpen className="size-3.5 text-brand-600" />
              <span>{t('home.missionTitle')}</span>
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t('about.originTitle')}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {t('home.missionBody1')}
            </p>
            <Button
              asChild
              variant="link"
              className="mt-4 px-0 text-base font-semibold text-trust-700 hover:text-trust-800"
            >
              <Link href={`/${locale}/our-story`}>
                {t('home.missionLink')}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-brand-200/80 bg-gradient-to-br from-brand-50 to-white p-8 shadow-sm">
              <div className="absolute -right-6 -top-6 size-24 rounded-full bg-trust-200/30 blur-2xl" />
              <Quote className="size-8 text-brand-500" />
              <p className="mt-4 text-lg font-medium italic leading-relaxed text-foreground">
                &ldquo;{t('home.missionBody2')}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-brand-200/60 pt-4">
                <div className="h-2 w-2 rounded-full bg-trust-600" />
                <span className="text-xs font-semibold uppercase tracking-wider text-trust-800">
                  Mesfiney&apos;s Love Foundation
                </span>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
