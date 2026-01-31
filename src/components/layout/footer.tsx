import Link from 'next/link';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { SITE, NAV_LINKS } from '@/lib/constants';

export function Footer() {
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
              A UK registered charity supporting sick children in Eritrea
              through healthcare, education, and play since 2008.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-3 font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-brand-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 font-semibold text-foreground">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0" />
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="transition-colors hover:text-brand-600"
                >
                  {SITE.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0" />
                <a
                  href={`tel:${SITE.contact.phoneInternational}`}
                  className="transition-colors hover:text-brand-600"
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
            <h3 className="mb-3 font-semibold text-foreground">Legal</h3>
            <p className="text-sm text-muted-foreground">
              Registered Charity No. {SITE.registrationNumber}
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
