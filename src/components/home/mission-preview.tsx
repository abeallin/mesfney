import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/layout/section-wrapper';

export function MissionPreview() {
  return (
    <div className="bg-muted/50">
      <SectionWrapper>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Our Mission
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Mesfin Hiruy was born on 7 December 1990. Since the age of two, he
              bravely fought off Leukaemia. His mother, Nebiat Yoseph, founded
              this charity in his memory to help children in Eritrea who suffer
              from various illnesses.
            </p>
            <p>
              We believe that sick children not only need medical and hospital
              care, but also need play, education, and moments of joy to make
              their lives a little more bearable.
            </p>
          </div>
          <Button asChild variant="link" className="mt-6 text-brand-600">
            <Link href="/about">
              Read our full story
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
