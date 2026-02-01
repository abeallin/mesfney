import type { Metadata } from 'next';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/page-header';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { ContactForm } from '@/components/forms/contact-form';
import { SITE } from '@/lib/constants';
import { getTranslations } from '@/lib/get-translations';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with the Mesfney Love Foundation. Email, phone, or visit us in London.',
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale);

  return (
    <>
      <PageHeader
        title={t.contact.pageTitle}
        subtitle={t.contact.pageSubtitle}
      />

      <SectionWrapper>
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {t.contact.getInTouch}
            </h2>
            <p className="mt-2 text-muted-foreground">
              {t.contact.getInTouchDesc}
            </p>

            <div className="mt-8 space-y-6">
              <Card>
                <CardContent className="flex items-start gap-4 pt-6">
                  <Mail className="size-6 shrink-0 text-brand-500" />
                  <div>
                    <h3 className="font-semibold text-foreground">{t.contact.email}</h3>
                    <a
                      href={`mailto:${SITE.contact.email}`}
                      className="text-brand-700 hover:underline"
                    >
                      {SITE.contact.email}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 pt-6">
                  <Phone className="size-6 shrink-0 text-brand-500" />
                  <div>
                    <h3 className="font-semibold text-foreground">{t.contact.phone}</h3>
                    <a
                      href={`tel:${SITE.contact.phoneInternational}`}
                      className="text-brand-700 hover:underline"
                    >
                      {SITE.contact.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 pt-6">
                  <MapPin className="size-6 shrink-0 text-brand-500" />
                  <div>
                    <h3 className="font-semibold text-foreground">{t.contact.address}</h3>
                    <p className="text-muted-foreground">
                      {SITE.address.street}
                      <br />
                      {SITE.address.city}, {SITE.address.postcode}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>{t.contact.sendMessage}</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
