import Link from 'next/link';
import { Heart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getTranslations } from '@/lib/get-translations';

export function CTABanner({ locale }: { locale: string }) {
  const t = getTranslations(locale);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-700 to-trust-900">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-trust-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 size-80 rounded-full bg-brand-400/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t.home.ctaTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-100">
          {t.home.ctaDescription}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="w-full bg-white text-brand-800 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-brand-50 sm:w-auto"
          >
            <Link href={`/${locale}/donate`}>
              <Heart className="size-5 fill-brand-500 text-brand-500" />
              {t.home.ctaDonate}
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="w-full border border-white/70 text-white transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:text-white sm:w-auto"
          >
            <Link href={`/${locale}/volunteer`}>
              <Users className="size-5" />
              {t.home.ctaVolunteer}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
