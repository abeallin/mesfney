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
      <Card className="border-t-4 border-t-brand-500 transition-all hover:shadow-md">
        <CardHeader>
          <div className="flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
            <Heart className="size-6" />
          </div>
          <CardTitle className="mt-3">{t.donate.oneTimeTitle}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            {t.donate.oneTimeDesc}
          </p>
        </CardContent>
      </Card>

      <Card className="border-t-4 border-t-trust-600 transition-all hover:shadow-md">
        <CardHeader>
          <div className="flex size-12 items-center justify-center rounded-xl bg-trust-50 text-trust-600">
            <CalendarHeart className="size-6" />
          </div>
          <CardTitle className="mt-3">{t.donate.regularTitle}</CardTitle>
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
