import { Heart, CalendarHeart } from 'lucide-react';
import { getTranslations } from '@/lib/get-translations';

interface DonationOptionsProps {
  locale: string;
}

export function DonationOptions({ locale }: DonationOptionsProps) {
  const t = getTranslations(locale);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="rounded-3xl border border-border bg-white p-8 shadow-2xs">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
          <Heart className="size-6" />
        </div>
        <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">
          {t.donate.oneTimeTitle}
        </h3>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          {t.donate.oneTimeDesc}
        </p>
      </div>

      <div className="rounded-3xl border border-border bg-white p-8 shadow-2xs">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-trust-50 text-trust-700">
          <CalendarHeart className="size-6" />
        </div>
        <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">
          {t.donate.regularTitle}
        </h3>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          {t.donate.regularDesc}
        </p>
      </div>
    </div>
  );
}
