import { PoundSterling, Users, FolderHeart, CalendarDays } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { SITE } from '@/lib/constants';

const stats = [
  {
    label: 'Total Raised & Spent',
    value: `£${SITE.impact.totalRaised.toLocaleString('en-GB')}`,
    icon: PoundSterling,
    description: 'Directly supporting children in Eritrea',
    accent: 'brand' as const,
  },
  {
    label: 'Children Helped',
    value: `${SITE.impact.kidsHelped}+`,
    icon: Users,
    description: 'With autism, Down syndrome, and more',
    accent: 'teal' as const,
  },
  {
    label: 'Projects Completed',
    value: String(SITE.impact.projectCount),
    icon: FolderHeart,
    description: 'Playrooms, education, equipment',
    accent: 'brand' as const,
  },
  {
    label: 'Years of Impact',
    value: `${SITE.impact.yearsSinceFoundation}+`,
    icon: CalendarDays,
    description: 'Serving communities since 2010',
    accent: 'teal' as const,
  },
];

export function ImpactStats() {
  return (
    <SectionWrapper>
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Our Impact
        </h2>
        <p className="mt-2 text-muted-foreground">
          Every pound raised goes directly to supporting children in need.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card
            key={stat.label}
            className={
              stat.accent === 'teal'
                ? 'border-t-4 border-t-trust-600 text-center'
                : 'border-t-4 border-t-brand-500 text-center'
            }
          >
            <CardContent className="pt-6">
              <stat.icon
                className={
                  stat.accent === 'teal'
                    ? 'mx-auto size-8 text-trust-600'
                    : 'mx-auto size-8 text-brand-500'
                }
              />
              <p className="mt-4 text-3xl font-bold text-foreground">
                {stat.value}
              </p>
              <p className="mt-1 font-medium text-foreground">{stat.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
