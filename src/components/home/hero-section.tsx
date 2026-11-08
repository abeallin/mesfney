import Image from 'next/image';
import Link from 'next/link';
import { Heart, Users, ShieldCheck, Sparkles, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getTranslations } from '@/lib/get-translations';

export function HeroSection({ locale }: { locale: string }) {
  const t = getTranslations(locale);

  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-brand-50/60 via-background to-background">
      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 size-[28rem] rounded-full bg-brand-200/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-12 size-[26rem] rounded-full bg-trust-200/25 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Editorial Left Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/90 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-brand-800 shadow-2xs">
              <span className="size-2 rounded-full bg-brand-500" />
              <span>{t.home.badge}</span>
            </div>

            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {t.home.heroTitle}{' '}
              <span className="italic text-brand-700">
                {t.home.heroTitleHighlight}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {t.home.heroDescription}
            </p>

            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-xl bg-brand-700 px-7 text-base font-semibold text-white shadow-md shadow-brand-900/15 transition-all hover:-translate-y-0.5 hover:bg-brand-800"
              >
                <Link href={`/${locale}/donate`}>
                  <Heart className="size-4 fill-white/25" />
                  {t.home.donateCta}
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-xl border-trust-700/25 bg-white px-7 text-base font-semibold text-trust-900 shadow-2xs transition-all hover:-translate-y-0.5 hover:border-trust-700/40 hover:bg-trust-50"
              >
                <Link href={`/${locale}/volunteer`}>
                  <Users className="size-4 text-trust-700" />
                  {t.home.volunteerCta}
                </Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-border pt-6 text-xs font-medium text-muted-foreground sm:text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-trust-700" />
                <span>{t.home.trustVolunteer}</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-brand-600" />
                <span>{t.home.trustSince}</span>
              </div>
            </div>
          </div>

          {/* Editorial Right Column: Memorial & Impact Composition */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background decorative frame */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brand-200/40 via-transparent to-trust-200/40 blur-xl"
              />

              <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-xl shadow-stone-900/5 sm:p-8">
                <div className="flex items-center gap-5">
                  <div className="relative size-24 shrink-0 overflow-hidden rounded-2xl border-2 border-brand-200 bg-brand-50 shadow-sm sm:size-28">
                    <Image
                      src="/images/mesfin-portrait.png"
                      alt="Mesfin Hiruy"
                      fill
                      sizes="112px"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <span className="inline-block rounded-full bg-brand-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-brand-800">
                      {t.home.memorialTag}
                    </span>
                    <h2 className="mt-1.5 font-serif text-2xl font-semibold text-foreground">
                      {t.home.memorialName}
                    </h2>
                    <p className="text-xs font-medium text-muted-foreground">
                      {t.home.memorialDates}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {t.home.memorialSummary}
                    </p>
                  </div>
                </div>

                <blockquote className="mt-6 rounded-2xl border border-stone-200/70 bg-[#f8f4ee] p-4 font-serif text-sm italic leading-relaxed text-stone-800">
                  &ldquo;{t.home.missionBody2}&rdquo;
                </blockquote>

                {/* Embedded mini impact ledger */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-trust-950 p-4 text-white">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-trust-200">
                      {t.home.initiativeTag}
                    </p>
                    <p className="mt-1 font-serif text-xl font-semibold">
                      {t.home.initiativeValue}
                    </p>
                    <p className="mt-0.5 text-xs text-trust-200/90">
                      {t.home.initiativeDesc}
                    </p>
                  </div>
                  <Link
                    href={`/${locale}/our-story`}
                    className="group flex flex-col justify-between rounded-2xl border border-brand-200 bg-brand-50/70 p-4 transition-colors hover:bg-brand-100/70"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-800">
                        {t.home.storyCardTag}
                      </span>
                      <ArrowUpRight className="size-4 text-brand-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <p className="mt-2 font-serif text-sm font-medium text-brand-950">
                      {t.home.storyCardDesc}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
