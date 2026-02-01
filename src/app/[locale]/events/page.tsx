import type { Metadata } from 'next';
import { Heart } from 'lucide-react';
import { PageHeader } from '@/components/shared/page-header';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { EventCard } from '@/components/events/event-card';
import { JsonLd } from '@/components/shared/json-ld';
import { events } from '@/data/events';
import { SITE } from '@/lib/constants';
import { getTranslations } from '@/lib/get-translations';

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Upcoming fundraising events and activities from the Mesfney Love Foundation.',
};

export default async function EventsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale);
  const upcomingEvents = events.filter((e) => e.status === 'upcoming');
  const pastEvents = events.filter((e) => e.status === 'past');

  return (
    <>
      {upcomingEvents.map((event) => (
        <JsonLd
          key={`ld-${event.id}`}
          data={{
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: event.title,
            startDate: event.date,
            ...(event.endDate && { endDate: event.endDate }),
            ...(event.location && {
              location: {
                '@type': 'Place',
                name: event.location,
              },
            }),
            description: event.description,
            organizer: {
              '@type': 'Organization',
              name: SITE.name,
              url: SITE.url,
            },
          }}
        />
      ))}
      <PageHeader
        title={t.events.pageTitle}
        subtitle={t.events.pageSubtitle}
      />

      <SectionWrapper>
        {upcomingEvents.length > 0 && (
          <div>
            <h2 className="mb-6 text-2xl font-bold text-foreground">
              {t.events.upcoming}
            </h2>
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}

        {upcomingEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {t.events.noUpcoming}
            </p>
          </div>
        )}

        {pastEvents.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-bold text-foreground">
              {t.events.past}
            </h2>
            <div className="space-y-6">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 rounded-lg bg-brand-50 p-8 text-center">
          <Heart className="mx-auto size-10 text-brand-500" />
          <h2 className="mt-4 text-2xl font-bold text-foreground">
            {t.events.thankYouTitle}
          </h2>
          <p className="mt-2 max-w-md mx-auto text-muted-foreground">
            {t.events.thankYouDesc}
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
