import type { Metadata } from 'next';
import { Heart } from 'lucide-react';
import { PageHeader } from '@/components/shared/page-header';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { EventCard } from '@/components/events/event-card';
import { events } from '@/data/events';

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Upcoming fundraising events and activities from the Mesfney Love Foundation.',
};

export default function EventsPage() {
  const upcomingEvents = events.filter((e) => e.status === 'upcoming');
  const pastEvents = events.filter((e) => e.status === 'past');

  return (
    <>
      <PageHeader
        title="Events"
        subtitle="Join us at our upcoming events and help make a difference."
      />

      <SectionWrapper>
        {upcomingEvents.length > 0 && (
          <div>
            <h2 className="mb-6 text-2xl font-bold text-foreground">
              Upcoming Events
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
              No upcoming events at the moment. Check back soon!
            </p>
          </div>
        )}

        {pastEvents.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-bold text-foreground">
              Past Events
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
            Thank You to Our Supporters
          </h2>
          <p className="mt-2 max-w-md mx-auto text-muted-foreground">
            A heartfelt thank you to all our donors and volunteers who make our
            events and mission possible. Your generosity transforms lives.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
