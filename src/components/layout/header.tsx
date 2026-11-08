'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { MobileNav } from './mobile-nav';
import { NAV_LINKS, NAV_KEY_MAP } from '@/lib/constants';
import { useLocale } from '@/hooks/use-locale';
import LanguageSwitcher from '@/components/language-switcher';
import { cn } from '@/lib/utils';

export function Header() {
  const locale = useLocale();
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={`/${locale}`} className="group flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-xs transition-transform group-hover:scale-105">
            <Heart className="size-5 fill-white text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold leading-tight text-foreground sm:text-lg">
              Mesfiney&apos;s Love Foundation
            </span>
            <span className="hidden text-xs text-muted-foreground sm:block">
              Supporting children with special needs in Eritrea
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          <nav className="flex items-center gap-1">
            {NAV_LINKS.filter((link) => link.href !== '/').map((link) => {
              const fullHref = `/${locale}${link.href}`;
              const isActive = pathname === fullHref;
              return (
                <Link
                  key={link.href}
                  href={fullHref}
                  className={cn(
                    'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-brand-50 text-brand-700 font-semibold'
                      : 'text-muted-foreground hover:bg-trust-50 hover:text-trust-800'
                  )}
                >
                  {t(`nav.${NAV_KEY_MAP[link.href]}`)}
                </Link>
              );
            })}
          </nav>
          <Button
            asChild
            size="sm"
            className="ml-2 bg-brand-600 text-white shadow-xs hover:bg-brand-700"
          >
            <Link href={`/${locale}/donate`}>
              <Heart className="size-3.5 fill-white/30" />
              {t('Header.donate')}
            </Link>
          </Button>
          <div className="ml-2">
            <LanguageSwitcher />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
