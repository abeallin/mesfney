import type { Metadata } from 'next';
import { Heart, BookOpen, GraduationCap, HandHeart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/page-header';
import { SectionWrapper } from '@/components/layout/section-wrapper';

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'Founded in memory of Mesfin Hiruy to support sick children in Eritrea through healthcare, education, and play.',
};

const missionObjects = [
  {
    icon: Heart,
    title: 'Health & Wellbeing',
    description:
      'To promote the physical and mental well being of children in need and sick children in Eritrea.',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description:
      'To promote the education of target group by providing equipment and facilities.',
  },
  {
    icon: HandHeart,
    title: 'Relief of Poverty',
    description: 'Relief of poverty of target group.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Our Story"
        subtitle="Founded in memory of Mesfin Hiruy, a brave young boy who inspired a movement of compassion."
      />

      {/* Origin Story */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground">
            The Story of Mesfin
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Mesfin Hiruy was born on 7 December 1990. Since the age of two, he
              bravely fought off Leukaemia (a blood cancer). Until his final
              hours of his life he had endured untold pain and sufferings. Mesfin
              passed away on 4 October 2000.
            </p>
            <p>
              His mother, Nebiat Yoseph, decided to help the children in Eritrea
              who suffer from various forms of illnesses. Together with her and
              Mesfin&apos;s friends, and well wishers, she is founding the charity in
              memory of her dearly loved and only child.
            </p>
          </div>

          <div className="mt-8 rounded-lg border-l-4 border-brand-500 bg-brand-50 p-6">
            <BookOpen className="size-6 text-brand-600" />
            <div className="mt-3 space-y-3 text-muted-foreground italic">
              <p>
                Sick children not only need medical and hospital care, but also
                need a diversion from the daily suffering and pain.
              </p>
              <p>
                Playing and game tools makes them feel happy and makes their life
                a little bit more bearable.
              </p>
              <p>
                In addition to appropriate medical treatment, education and fun
                plays a crucial part in their healing process.
              </p>
              <p>
                Such a noble initiative can only succeed with the support from
                individuals, businesses and organisations.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Constitutional Mission */}
      <div className="bg-muted/50">
        <SectionWrapper>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground">
              Our Constitutional Mission
            </h2>
            <p className="mt-2 text-muted-foreground">
              The three charitable objects that guide everything we do.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {missionObjects.map((obj) => (
              <Card key={obj.title}>
                <CardContent className="pt-6 text-center">
                  <obj.icon className="mx-auto size-10 text-brand-500" />
                  <h3 className="mt-4 font-semibold text-foreground">
                    {obj.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {obj.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionWrapper>
      </div>

      {/* Governance */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground">Governance</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Mesfney Love Foundation is governed by a committee of trustees,
            elected annually by members at the AGM. The charity was formally
            established with the adoption of its constitution on 4 July 2008 and
            is registered with the Charity Commission under number 1139089.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
