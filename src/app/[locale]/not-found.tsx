'use client';

import Link from 'next/link';
import { Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/hooks/use-locale';

export default function NotFound() {
  const locale = useLocale();
  const { t } = useTranslation();
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-serif text-6xl font-bold text-brand-500">404</h1>
      <h2 className="mt-4 font-serif text-2xl font-semibold text-foreground">
        {t('common.notFoundTitle')}
      </h2>
      <p className="mt-2 max-w-md text-muted-foreground">
        {t('common.notFoundDesc')}
      </p>
      <Button asChild className="mt-8">
        <Link href={`/${locale}`}>
          <Home className="size-4" />
          {t('common.backToHome')}
        </Link>
      </Button>
    </div>
  );
}
