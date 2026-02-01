'use client';

import Link from 'next/link';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/hooks/use-locale';

export default function NotFound() {
  const locale = useLocale();
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-brand-500">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-foreground">
        Page Not Found
      </h2>
      <p className="mt-2 max-w-md text-muted-foreground">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have
        been moved or doesn&apos;t exist.
      </p>
      <Button asChild className="mt-8">
        <Link href={`/${locale}`}>
          <Home className="size-4" />
          Back to Home
        </Link>
      </Button>
    </div>
  );
}
