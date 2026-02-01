import type { Metadata } from 'next';
import { PageHeader } from '@/components/shared/page-header';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { ProjectTimeline } from '@/components/achievements/project-timeline';
import { FinancialSummary } from '@/components/achievements/financial-summary';
import { getTranslations } from '@/lib/get-translations';

export const metadata: Metadata = {
  title: 'Achievements',
  description:
    'Over 15 years of supporting sick children in Eritrea. See our project timeline and financial impact.',
};

export default async function AchievementsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale);

  return (
    <>
      <PageHeader
        title={t.achievements.pageTitle}
        subtitle={t.achievements.pageSubtitle}
      />

      <SectionWrapper>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-2xl font-bold text-foreground">
              {t.achievements.timelineTitle}
            </h2>
            <ProjectTimeline />
          </div>
          <div>
            <FinancialSummary />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
