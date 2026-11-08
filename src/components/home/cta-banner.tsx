import Link from 'next/link';
import { Heart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getTranslations } from '@/lib/get-translations';

export function CTABanner({ locale }: { locale: string }) {
  const t = getTranslations(locale);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-700 to-trust-950">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-trust-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 size-80 rounded-full bg-brand-400/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          {t.home.ctaTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-100">
          {t.home.ctaDescription}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-12 w-full rounded-xl bg-white px-7 text-base font-semibold text-brand-900 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-brand-50 sm:w-auto"
          >
            <Link href={`/${locale}/donate`}>
              <Heart className="size-4 fill-brand-600 text-brand-600" />
              {t.home.ctaDonate}
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="h-12 w-full rounded-xl border border-white/70 px-7 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:text-white sm:w-auto"
          >
            <Link href={`/${locale}/volunteer`}>
              <Users className="size-4" />
              {t.home.ctaVolunteer}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
