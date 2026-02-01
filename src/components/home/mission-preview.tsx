'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { useLocale } from '@/hooks/use-locale';

export function MissionPreview() {
  const locale = useLocale();
  const { t } = useTranslation();

  return (
    <div className="bg-muted/50">
      <SectionWrapper>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            {t('home.missionTitle')}
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>{t('home.missionBody1')}</p>
            <p>{t('home.missionBody2')}</p>
          </div>
          <Button asChild variant="link" className="mt-6 text-brand-700">
            <Link href={`/${locale}/about`}>
              {t('home.missionLink')}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
