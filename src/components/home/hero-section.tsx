'use client';

import Link from 'next/link';
import { Heart, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/hooks/use-locale';

export function HeroSection() {
  const locale = useLocale();
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-trust-50">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
            <Heart className="size-4 fill-brand-500 text-brand-500" />
            {t('home.badge')}
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {t('home.heroTitle')}{' '}
            <span className="text-brand-500">{t('home.heroTitleHighlight')}</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {t('home.heroDescription')}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href={`/${locale}/donate`}>
                <Heart className="size-5" />
                {t('home.donateCta')}
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link href={`/${locale}/volunteer`}>
                <Users className="size-5" />
                {t('home.volunteerCta')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
