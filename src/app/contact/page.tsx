import type { Metadata } from 'next';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/page-header';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with the Mesfney Love Foundation. Email, phone, or visit us in London.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Get in touch with us."
      />

      <SectionWrapper>
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Get in Touch
            </h2>
            <p className="mt-2 text-muted-foreground">
              Whether you have a question, want to donate, or are interested in
              volunteering, we&apos;re here to help.
            </p>

            <div className="mt-8 space-y-6">
              <Card>
                <CardContent className="flex items-start gap-4 pt-6">
                  <Mail className="size-6 shrink-0 text-brand-500" />
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a
                      href={`mailto:${SITE.contact.email}`}
                      className="text-brand-600 hover:underline"
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
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a
                      href={`tel:${SITE.contact.phoneInternational}`}
                      className="text-brand-600 hover:underline"
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
                    <h3 className="font-semibold text-foreground">Address</h3>
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

          {/* Contact Form Placeholder */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg bg-muted p-8 text-center">
                  <Mail className="mx-auto size-10 text-muted-foreground" />
                  <p className="mt-4 text-muted-foreground">
                    Contact form coming soon. In the meantime, please reach out
                    to us directly via email or phone.
                  </p>
                  <a
                    href={`mailto:${SITE.contact.email}`}
                    className="mt-4 inline-block font-medium text-brand-600 hover:underline"
                  >
                    {SITE.contact.email}
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
