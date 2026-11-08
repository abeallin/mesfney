import type { Metadata } from 'next';
import { Mail, Phone } from 'lucide-react';
import { PageHeader } from '@/components/shared/page-header';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { ContactForm } from '@/components/forms/contact-form';
import { SITE } from '@/lib/constants';
import { getTranslations } from '@/lib/get-translations';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Get in touch with Mesfiney's Love Foundation via email or phone.",
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
        <div className="grid items-start gap-12 lg:grid-cols-12">
          {/* Contact Details */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
              Direct Enquiries
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-foreground">
              {t.contact.getInTouch}
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {t.contact.getInTouchDesc}
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-6 shadow-2xs">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Mail className="size-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t.contact.email}
                  </h3>
                  <a
                    href={`mailto:${SITE.contact.email}`}
                    className="mt-1 inline-block font-serif text-lg font-semibold text-foreground hover:text-brand-700"
                  >
                    {SITE.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-6 shadow-2xs">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-trust-50 text-trust-700">
                  <Phone className="size-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t.contact.phone}
                  </h3>
                  <a
                    href={`tel:${SITE.contact.phoneInternational}`}
                    className="mt-1 inline-block font-serif text-lg font-semibold text-foreground hover:text-trust-700"
                  >
                    {SITE.contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border bg-white p-6 shadow-xs sm:p-10">
              <h2 className="mb-6 font-serif text-2xl font-semibold text-foreground">
                {t.contact.sendMessage}
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
