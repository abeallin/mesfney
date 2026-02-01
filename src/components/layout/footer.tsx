'use client';

import Link from 'next/link';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Separator } from '@/components/ui/separator';
import { SITE, NAV_LINKS, NAV_KEY_MAP } from '@/lib/constants';
import { useLocale } from '@/hooks/use-locale';

export function Footer() {
  const locale = useLocale();
  const { t } = useTranslation();

  return (
    <footer className="border-t bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Heart className="size-5 fill-brand-500 text-brand-500" />
              <span className="font-bold text-foreground">{SITE.name}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('footer.about')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-3 font-semibold text-foreground">{t('footer.quickLinks')}</h3>
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => {
                const href = link.href === '/' ? `/${locale}` : `/${locale}${link.href}`;
                return (
                  <li key={link.href}>
                    <Link
                      href={href}
                      className="inline-block py-1 text-sm text-muted-foreground transition-colors hover:text-brand-700"
                    >
                      {t(`nav.${NAV_KEY_MAP[link.href]}`)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 font-semibold text-foreground">{t('footer.contactUs')}</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li className="flex items-center gap-2 py-1">
                <Mail className="size-4 shrink-0" />
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="transition-colors hover:text-brand-700"
                >
                  {SITE.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2 py-1">
                <Phone className="size-4 shrink-0" />
                <a
                  href={`tel:${SITE.contact.phoneInternational}`}
                  className="transition-colors hover:text-brand-700"
                >
                  {SITE.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>
                  {SITE.address.street}, {SITE.address.city},{' '}
                  {SITE.address.postcode}
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-3 font-semibold text-foreground">{t('footer.legal')}</h3>
            <p className="text-sm text-muted-foreground">
              {t('common.charityRegistration')}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {SITE.legalName}
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
