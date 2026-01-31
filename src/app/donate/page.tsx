import type { Metadata } from 'next';
import Link from 'next/link';
import { Landmark, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { PageHeader } from '@/components/shared/page-header';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { DonationOptions } from '@/components/donate/donation-options';
import { MembershipInfo } from '@/components/donate/membership-info';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Donate',
  description:
    'Support sick children in Eritrea. Donate to the Mesfney Love Foundation or become a member.',
};

export default function DonatePage() {
  return (
    <>
      <PageHeader
        title="Donate"
        subtitle="Your generosity directly supports sick children in Eritrea."
      />

      <SectionWrapper>
        <DonationOptions />

        <Separator className="my-12" />

        {/* Bank Details */}
        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <Landmark className="size-8 text-trust-500" />
              <CardTitle className="mt-2">Bank Transfer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                To make a donation via bank transfer, please use the following
                details:
              </p>
              <div className="space-y-3 rounded-lg bg-muted p-4">
                <div>
                  <p className="text-sm text-muted-foreground">Account Name</p>
                  <p className="font-medium text-foreground">
                    {SITE.legalName}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  Please contact us for our bank account details, sort code, and
                  account number.
                </p>
              </div>
            </CardContent>
          </Card>

          <MembershipInfo />
        </div>

        <Separator className="my-12" />

        {/* Contact CTA */}
        <div className="rounded-lg bg-brand-50 p-8 text-center">
          <Mail className="mx-auto size-10 text-brand-500" />
          <h2 className="mt-4 text-2xl font-bold text-foreground">
            Want to Set Up Regular Giving?
          </h2>
          <p className="mt-2 max-w-md mx-auto text-muted-foreground">
            Contact us to set up a standing order or discuss the best way to
            support our work.
          </p>
          <Button asChild className="mt-6">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
