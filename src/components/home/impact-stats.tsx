import { SITE } from '@/lib/constants';
import { getTranslations } from '@/lib/get-translations';

export function ImpactStats({ locale }: { locale: string }) {
  const t = getTranslations(locale);

  const stats = [
    {
      kicker: t.home.stat1Kicker,
      label: t.home.stat1Label,
      value: `£${Math.round(SITE.impact.totalRaised).toLocaleString('en-GB')}`,
      description: t.home.stat1Desc,
    },
    {
      kicker: t.home.stat2Kicker,
      label: t.home.stat2Label,
      value: `${SITE.impact.kidsHelped}+`,
      description: t.home.stat2Desc,
    },
    {
      kicker: t.home.stat3Kicker,
      label: t.home.stat3Label,
      value: String(SITE.impact.projectCount),
      description: t.home.stat3Desc,
    },
    {
      kicker: t.home.stat4Kicker,
      label: t.home.stat4Label,
      value: `${SITE.impact.yearsSinceFoundation}+`,
      description: t.home.stat4Desc,
    },
  ];

  return (
    <section className="bg-trust-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={idx === 0 ? 'lg:pr-6' : 'lg:px-6'}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-300">
                {stat.kicker}
              </p>
              <p className="mt-2 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-base font-semibold text-trust-100">
                {stat.label}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-trust-200/80">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
