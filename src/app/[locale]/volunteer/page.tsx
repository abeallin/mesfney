import type { Metadata } from 'next';
import { PageHeader } from '@/components/shared/page-header';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { VolunteerForm } from '@/components/forms/volunteer-form';
import { getTranslations } from '@/lib/get-translations';

export const metadata: Metadata = {
  title: 'Volunteer',
  description:
    "Join Mesfiney's Love Foundation team. Volunteer in fundraising, publicity, events, and more.",
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
      num: '01',
      title: t.volunteer.fundraisingTitle,
      description: t.volunteer.fundraisingDesc,
    },
    {
      num: '02',
      title: t.volunteer.publicityTitle,
      description: t.volunteer.publicityDesc,
    },
    {
      num: '03',
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
        <div className="grid items-start gap-12 lg:grid-cols-12">
          {/* Left Column: Ways to Help */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
              {t.volunteer.kicker}
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-foreground">
              {t.volunteer.howTitle}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {t.volunteer.howDesc}
            </p>

            <div className="mt-8 space-y-4">
              {volunteerAreas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-2xl border border-border bg-white p-6 shadow-2xs"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-2xl font-semibold text-brand-600">
                      {area.num}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-foreground">
                        {area.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Volunteer Sign-Up Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border bg-white p-6 shadow-xs sm:p-10">
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                {t.volunteer.formTitle}
              </h2>
              <p className="mt-1 mb-6 text-sm text-muted-foreground">
                {t.volunteer.formDesc}
              </p>
              <VolunteerForm />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
