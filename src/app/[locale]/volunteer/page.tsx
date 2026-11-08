import type { Metadata } from 'next';
import { Megaphone, CalendarDays, Handshake } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/page-header';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { VolunteerForm } from '@/components/forms/volunteer-form';
import { getTranslations } from '@/lib/get-translations';

export const metadata: Metadata = {
  title: 'Volunteer',
  description:
    'Join the Mesfney Love Foundation team. Volunteer in fundraising, publicity, events, and more.',
};

export default async function VolunteerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale);

  const volunteerAreas = [
    {
      icon: Handshake,
      title: t.volunteer.fundraisingTitle,
      description: t.volunteer.fundraisingDesc,
    },
    {
      icon: Megaphone,
      title: t.volunteer.publicityTitle,
      description: t.volunteer.publicityDesc,
    },
    {
      icon: CalendarDays,
      title: t.volunteer.eventsTitle,
      description: t.volunteer.eventsDesc,
    },
  ];

  return (
    <>
      <PageHeader
        title={t.volunteer.pageTitle}
        subtitle={t.volunteer.pageSubtitle}
      />

      <SectionWrapper>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground">
            {t.volunteer.howTitle}
          </h2>
          <p className="mt-2 text-muted-foreground">
            {t.volunteer.howDesc}
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {volunteerAreas.map((area, idx) => {
            const isTeal = idx % 2 === 1;
            return (
              <Card
                key={area.title}
                className={
                  isTeal
                    ? 'border-t-4 border-t-trust-600 text-center transition-all hover:-translate-y-0.5 hover:shadow-md'
                    : 'border-t-4 border-t-brand-500 text-center transition-all hover:-translate-y-0.5 hover:shadow-md'
                }
              >
                <CardHeader>
                  <area.icon
                    className={
                      isTeal
                        ? 'mx-auto size-10 text-trust-600'
                        : 'mx-auto size-10 text-brand-500'
                    }
                  />
                  <CardTitle className="mt-2">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Volunteer Sign-Up Form */}
        <Card className="mt-16">
          <CardHeader>
            <CardTitle className="text-2xl">{t.volunteer.formTitle}</CardTitle>
            <p className="text-muted-foreground">
              {t.volunteer.formDesc}
            </p>
          </CardHeader>
          <CardContent>
            <VolunteerForm />
          </CardContent>
        </Card>
      </SectionWrapper>
    </>
  );
}
