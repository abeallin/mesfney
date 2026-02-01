import { Heart, CalendarHeart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getTranslations } from '@/lib/get-translations';

interface DonationOptionsProps {
  locale: string;
}

export function DonationOptions({ locale }: DonationOptionsProps) {
  const t = getTranslations(locale);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <Card>
        <CardHeader>
          <Heart className="size-8 text-brand-500" />
          <CardTitle className="mt-2">{t.donate.oneTimeTitle}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            {t.donate.oneTimeDesc}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CalendarHeart className="size-8 text-trust-500" />
          <CardTitle className="mt-2">{t.donate.regularTitle}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            {t.donate.regularDesc}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
