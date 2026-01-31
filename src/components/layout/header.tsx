import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MobileNav } from './mobile-nav';
import { NAV_LINKS } from '@/lib/constants';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Heart className="size-7 fill-brand-500 text-brand-500" />
          <div className="flex flex-col">
            <span className="text-base font-bold leading-tight text-foreground sm:text-lg">
              Mesfney Love Foundation
            </span>
            <span className="hidden text-xs text-muted-foreground sm:block">
              Supporting sick children in Eritrea
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.filter((link) => link.href !== '/').map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-brand-50 hover:text-brand-600"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-2">
            <Link href="/donate">Donate</Link>
          </Button>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
