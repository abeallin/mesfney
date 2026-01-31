import type { Metadata } from 'next';
import { PageHeader } from '@/components/shared/page-header';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { ProjectTimeline } from '@/components/achievements/project-timeline';
import { FinancialSummary } from '@/components/achievements/financial-summary';

export const metadata: Metadata = {
  title: 'Achievements',
  description:
    'Over 15 years of supporting sick children in Eritrea. See our project timeline and financial impact.',
};

export default function AchievementsPage() {
  return (
    <>
      <PageHeader
        title="What We Have Achieved"
        subtitle="Over 15 years of supporting sick children in Eritrea through healthcare, education, and play."
      />

      <SectionWrapper>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-2xl font-bold text-foreground">
              Project Timeline
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
