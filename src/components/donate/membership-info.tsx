import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getTranslations } from '@/lib/get-translations';

interface MembershipInfoProps {
  locale: string;
}

export function MembershipInfo({ locale }: MembershipInfoProps) {
  const t = getTranslations(locale);

  return (
    <Card>
      <CardHeader>
        <Star className="size-8 text-brand-500" />
        <CardTitle className="mt-2">{t.donate.memberTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          {t.donate.memberDesc}
        </p>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <Star className="mt-0.5 size-4 shrink-0 text-brand-500" />
            <span>{t.donate.memberBenefit1}</span>
          </li>
          <li className="flex items-start gap-2">
            <Star className="mt-0.5 size-4 shrink-0 text-brand-500" />
            <span>{t.donate.memberBenefit2}</span>
          </li>
          <li className="flex items-start gap-2">
            <Star className="mt-0.5 size-4 shrink-0 text-brand-500" />
            <span>{t.donate.memberBenefit3}</span>
          </li>
          <li className="flex items-start gap-2">
            <Star className="mt-0.5 size-4 shrink-0 text-brand-500" />
            <span>{t.donate.memberBenefit4}</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
