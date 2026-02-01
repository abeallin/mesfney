import type { Metadata } from 'next';
import Link from 'next/link';
import { Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/page-header';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { TeamGrid } from '@/components/team/team-grid';
import { getTranslations } from '@/lib/get-translations';

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the dedicated volunteers who make the Mesfney Love Foundation possible.',
};

export default async function TeamPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale);

  return (
    <>
      <PageHeader
        title={t.team.pageTitle}
        subtitle={t.team.pageSubtitle}
      />

      <SectionWrapper>
        <TeamGrid locale={locale} />

        <div className="mt-16 rounded-lg bg-brand-50 p-8 text-center">
          <Users className="mx-auto size-10 text-brand-500" />
          <h2 className="mt-4 text-2xl font-bold text-foreground">
            {t.team.joinTitle}
          </h2>
          <p className="mt-2 max-w-md mx-auto text-muted-foreground">
            {t.team.joinDesc}
          </p>
          <Button asChild className="mt-6">
            <Link href={`/${locale}/volunteer`}>{t.team.becomeVolunteer}</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
