import { Heart, CalendarHeart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function DonationOptions() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <Card>
        <CardHeader>
          <Heart className="size-8 text-brand-500" />
          <CardTitle className="mt-2">One-Time Donation</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Make a single donation of any amount. Every pound goes directly to
            supporting sick children in Eritrea through healthcare, education,
            and play.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CalendarHeart className="size-8 text-trust-500" />
          <CardTitle className="mt-2">Regular Giving</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Set up a regular donation to provide ongoing support. Monthly or
            annual contributions help us plan ahead and sustain our projects
            long-term.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
