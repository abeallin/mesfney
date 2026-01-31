import type { Metadata } from 'next';
import Link from 'next/link';
import { Megaphone, CalendarDays, Handshake, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/page-header';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Volunteer',
  description:
    'Join the Mesfney Love Foundation team. Volunteer in fundraising, publicity, events, and more.',
};

const volunteerAreas = [
  {
    icon: Handshake,
    title: 'Fundraising',
    description:
      'Help us raise funds through events, campaigns, and community outreach. Every penny counts towards helping sick children.',
  },
  {
    icon: Megaphone,
    title: 'Publicity',
    description:
      'Spread the word about our mission. Help with social media, community engagement, and raising awareness.',
  },
  {
    icon: CalendarDays,
    title: 'Organising Events',
    description:
      'Help plan and run our fundraising events. From coordination to setup, your organisational skills are invaluable.',
  },
];

export default function VolunteerPage() {
  return (
    <>
      <PageHeader
        title="Volunteer With Us"
        subtitle="Join our team and help make a difference in the lives of sick children."
      />

      <SectionWrapper>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground">
            How You Can Help
          </h2>
          <p className="mt-2 text-muted-foreground">
            We are always looking for passionate individuals to join our team.
            Here are some areas where you can make a real impact.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {volunteerAreas.map((area) => (
            <Card key={area.title} className="text-center">
              <CardHeader>
                <area.icon className="mx-auto size-10 text-brand-500" />
                <CardTitle className="mt-2">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact to Volunteer */}
        <div className="mt-16 rounded-lg bg-brand-50 p-8 text-center">
          <Mail className="mx-auto size-10 text-brand-500" />
          <h2 className="mt-4 text-2xl font-bold text-foreground">
            Ready to Get Involved?
          </h2>
          <p className="mt-2 max-w-md mx-auto text-muted-foreground">
            Get in touch with us to discuss how you can contribute. We&apos;d love to
            welcome you to the team.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline">
              <a href={`mailto:${SITE.contact.email}`}>
                <Mail className="size-4" />
                {SITE.contact.email}
              </a>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
