'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NAV_LINKS, NAV_KEY_MAP } from '@/lib/constants';
import { useLocale } from '@/hooks/use-locale';
import { cn } from '@/lib/utils';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const { t } = useTranslation();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="size-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72">
        <SheetHeader>
          <SheetTitle className="text-left text-brand-700 font-bold">
            Mesfney Love Foundation
          </SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => {
              const href = link.href === '/' ? `/${locale}` : `/${locale}${link.href}`;
              return (
                <Link
                  key={link.href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-brand-50 hover:text-brand-700',
                    pathname === href
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-foreground'
                  )}
                >
                  {t(`nav.${NAV_KEY_MAP[link.href]}`)}
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto border-t p-4">
            <Button asChild className="w-full">
              <Link href={`/${locale}/donate`} onClick={() => setOpen(false)}>
                {t('home.ctaDonate')}
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
