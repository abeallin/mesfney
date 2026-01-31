import type { Metadata } from 'next';
import Link from 'next/link';
import { Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/page-header';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { TeamGrid } from '@/components/team/team-grid';

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the dedicated volunteers who make the Mesfney Love Foundation possible.',
};

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Meet Our Team"
        subtitle="The dedicated volunteers who drive our mission forward."
      />

      <SectionWrapper>
        <TeamGrid />

        <div className="mt-16 rounded-lg bg-brand-50 p-8 text-center">
          <Users className="mx-auto size-10 text-brand-500" />
          <h2 className="mt-4 text-2xl font-bold text-foreground">
            Join Our Team
          </h2>
          <p className="mt-2 max-w-md mx-auto text-muted-foreground">
            We are always looking for passionate people to help us make a
            difference. Whether you can help with fundraising, events, or
            spreading the word, we&apos;d love to hear from you.
          </p>
          <Button asChild className="mt-6">
            <Link href="/volunteer">Become a Volunteer</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
