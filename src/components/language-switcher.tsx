'use client';

import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

const locales = [
  { code: 'en', label: 'EN' },
  { code: 'ti', label: 'ትግ' },
] as const;

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  // Extract current locale from pathname (e.g. /en/about -> en)
  const currentLocale = pathname.split('/')[1] || 'en';

  const switchLocale = (locale: string) => {
    if (locale === currentLocale) return;
    // Replace the locale segment in the path
    const segments = pathname.split('/');
    segments[1] = locale;
    router.push(segments.join('/'));
  };

  return (
    <div className="flex items-center rounded-md border border-input bg-background p-0.5">
      {locales.map((locale) => (
        <button
          key={locale.code}
          onClick={() => switchLocale(locale.code)}
          className={cn(
            'rounded-sm px-2 py-1 text-xs font-medium transition-colors',
            currentLocale === locale.code
              ? 'bg-brand-500 text-white'
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          {locale.label}
        </button>
      ))}
    </div>
  );
}
