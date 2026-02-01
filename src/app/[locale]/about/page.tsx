import type { Metadata } from 'next';
import { Heart, BookOpen, GraduationCap, HandHeart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/page-header';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { getTranslations } from '@/lib/get-translations';

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'Founded in memory of Mesfin Hiruy to support sick children in Eritrea through healthcare, education, and play.',
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale);

  const missionObjects = [
    {
      icon: Heart,
      title: t.about.healthTitle,
      description: t.about.healthDesc,
    },
    {
      icon: GraduationCap,
      title: t.about.educationTitle,
      description: t.about.educationDesc,
    },
    {
      icon: HandHeart,
      title: t.about.reliefTitle,
      description: t.about.reliefDesc,
    },
  ];

  return (
    <>
      <PageHeader
        title={t.about.pageTitle}
        subtitle={t.about.pageSubtitle}
      />

      {/* Origin Story */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground">
            {t.about.originTitle}
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>{t.about.originBody1}</p>
            <p>{t.about.originBody2}</p>
          </div>

          <div className="mt-8 rounded-lg border-l-4 border-brand-500 bg-brand-50 p-6">
            <BookOpen className="size-6 text-brand-600" />
            <div className="mt-3 space-y-3 text-muted-foreground italic">
              <p>{t.about.quote1}</p>
              <p>{t.about.quote2}</p>
              <p>{t.about.quote3}</p>
              <p>{t.about.quote4}</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Constitutional Mission */}
      <div className="bg-muted/50">
        <SectionWrapper>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground">
              {t.about.missionTitle}
            </h2>
            <p className="mt-2 text-muted-foreground">
              {t.about.missionSubtitle}
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
          <h2 className="text-2xl font-bold text-foreground">
            {t.about.governanceTitle}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {t.about.governanceBody}
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
