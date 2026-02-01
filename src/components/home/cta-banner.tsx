'use client';

import Link from 'next/link';
import { Heart, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/hooks/use-locale';

export function CTABanner() {
  const locale = useLocale();
  const { t } = useTranslation();

  return (
    <section className="bg-brand-500">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          {t('home.ctaTitle')}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-100">
          {t('home.ctaDescription')}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="w-full bg-white text-brand-600 hover:bg-brand-50 sm:w-auto"
          >
            <Link href={`/${locale}/donate`}>
              <Heart className="size-5" />
              {t('home.ctaDonate')}
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full border-white text-white hover:bg-brand-600 sm:w-auto"
          >
            <Link href={`/${locale}/volunteer`}>
              <Users className="size-5" />
              {t('home.ctaVolunteer')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
