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
    "Meet the dedicated trustees and volunteers who make Mesfiney's Love Foundation possible.",
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

        <div className="mt-16 rounded-3xl bg-trust-950 p-8 text-center text-white sm:p-12">
          <Users className="mx-auto size-9 text-brand-300" />
          <h2 className="mt-4 font-serif text-2xl font-semibold sm:text-3xl">
            {t.team.joinTitle}
          </h2>
          <p className="mx-auto mt-2 max-w-md text-trust-100/85">
            {t.team.joinDesc}
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 rounded-xl bg-brand-600 text-white hover:bg-brand-700"
          >
            <Link href={`/${locale}/volunteer`}>{t.team.becomeVolunteer}</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
