import { SITE } from '@/lib/constants';

const stats = [
  {
    kicker: 'Direct Funding',
    label: 'Total Raised & Spent',
    value: `£${Math.round(SITE.impact.totalRaised).toLocaleString('en-GB')}`,
    description: 'Every pound goes directly to projects on the ground in Eritrea',
  },
  {
    kicker: 'Special Needs Focus',
    label: 'Children Supported',
    value: `${SITE.impact.kidsHelped}+`,
    description: 'Supporting children with autism, Down syndrome & hearing loss',
  },
  {
    kicker: 'Tangible Outcomes',
    label: 'Major Projects',
    value: String(SITE.impact.projectCount),
    description: 'Hospital playrooms, playgrounds, assistive aid & school laptops',
  },
  {
    kicker: 'Long-Term Commitment',
    label: 'Years of Service',
    value: `${SITE.impact.yearsSinceFoundation}+`,
    description: 'Serving communities since 2010 under Charity No. 1139089',
  },
];

export function ImpactStats() {
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
