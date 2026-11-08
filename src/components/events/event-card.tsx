import { Calendar, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getTranslations } from '@/lib/get-translations';
import type { MLFEvent } from '@/types';

interface EventCardProps {
  event: MLFEvent;
  locale: string;
}

export function EventCard({ event, locale }: EventCardProps) {
  const t = getTranslations(locale);
  const isTi = locale === 'ti';
  const dateFormatted = new Date(event.date).toLocaleDateString(
    isTi ? 'ti-ER' : 'en-GB',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }
  );
  const title = (isTi && event.titleTi) || event.title;
  const description = (isTi && event.descriptionTi) || event.description;
  const location = (isTi && event.locationTi) || event.location;

  return (
    <div className="rounded-3xl border border-border bg-white p-6 shadow-2xs transition-all hover:shadow-md sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <h3 className="font-serif text-2xl font-semibold text-foreground">
          {title}
        </h3>
        <Badge
          variant={event.status === 'upcoming' ? 'default' : 'secondary'}
          className={
            event.status === 'upcoming'
              ? 'bg-brand-700 text-white'
              : 'bg-muted text-muted-foreground'
          }
        >
          {event.status === 'upcoming' ? t.events.upcomingBadge : event.status}
        </Badge>
      </div>

      <div className="mt-4 flex flex-wrap gap-5 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Calendar className="size-4 text-brand-600" />
          <span>{dateFormatted}</span>
        </div>
        {location && (
          <div className="flex items-center gap-2">
            <MapPin className="size-4 text-trust-600" />
            <span>{location}</span>
          </div>
        )}
      </div>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
