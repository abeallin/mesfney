import Link from 'next/link';
import { Heart, Users, ShieldCheck, Sparkles, Globe2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getTranslations } from '@/lib/get-translations';

export function HeroSection({ locale }: { locale: string }) {
  const t = getTranslations(locale);

  return (
    <section className="relative overflow-hidden border-b border-brand-100/80 bg-gradient-to-br from-brand-50/90 via-white to-trust-50/90">
      {/* Decorative background orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 size-96 rounded-full bg-brand-200/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 size-96 rounded-full bg-trust-200/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200/80 bg-white/90 px-4 py-1.5 text-sm font-medium text-brand-800 shadow-xs backdrop-blur">
            <Heart className="size-4 fill-brand-500 text-brand-500" />
            <span>{t.home.badge}</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {t.home.heroTitle}{' '}
            <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-trust-600 bg-clip-text text-transparent">
              {t.home.heroTitleHighlight}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {t.home.heroDescription}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="w-full bg-brand-600 text-white shadow-md shadow-brand-600/20 transition-all hover:-translate-y-0.5 hover:bg-brand-700 sm:w-auto"
            >
              <Link href={`/${locale}/donate`}>
                <Heart className="size-5 fill-white/20" />
                {t.home.donateCta}
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full border-trust-300 bg-white/90 text-trust-800 shadow-xs transition-all hover:-translate-y-0.5 hover:border-trust-400 hover:bg-trust-50 hover:text-trust-900 sm:w-auto"
            >
              <Link href={`/${locale}/volunteer`}>
                <Users className="size-5 text-trust-600" />
                {t.home.volunteerCta}
              </Link>
            </Button>
          </div>

          {/* Trust highlights */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-brand-200/50 pt-8 text-xs font-medium text-muted-foreground sm:text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-trust-600" />
              <span>100% Volunteer-Run</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-brand-500" />
              <span>Serving Communities Since 2010</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe2 className="size-4 text-trust-600" />
              <span>Direct Impact in Eritrea</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
