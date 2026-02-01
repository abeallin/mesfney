'use client';

import { Calendar, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { MLFEvent } from '@/types';

interface EventCardProps {
  event: MLFEvent;
}

export function EventCard({ event }: EventCardProps) {
  const { t } = useTranslation();
  const dateFormatted = new Date(event.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-xl">{event.title}</CardTitle>
          <Badge
            variant={event.status === 'upcoming' ? 'default' : 'secondary'}
            className={
              event.status === 'upcoming'
                ? 'bg-brand-500 text-white'
                : ''
            }
          >
            {event.status === 'upcoming' ? t('events.upcomingBadge') : event.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="size-4" />
            <span>{dateFormatted}</span>
          </div>
          {event.location && (
            <div className="flex items-center gap-2">
              <MapPin className="size-4" />
              <span>{event.location}</span>
            </div>
          )}
        </div>
        <p className="mt-4 text-muted-foreground">{event.description}</p>
      </CardContent>
    </Card>
  );
}
