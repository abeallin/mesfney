import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { projects } from '@/data/projects';

export function FeaturedProjects({ locale }: { locale: string }) {
  const isTi = locale === 'ti';
  const highlighted = [projects[0], projects[2], projects[4]].filter(Boolean);

  return (
    <SectionWrapper>
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-trust-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-trust-800 border border-trust-200">
            <Sparkles className="size-3.5 text-trust-600" />
            <span>{isTi ? 'ዓወታትና' : 'Key Milestones'}</span>
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
            {isTi ? 'ዝተዓወትናዮም ፕሮጀክትታት' : 'Recent & Milestone Projects'}
          </h2>
          <p className="mt-1 text-muted-foreground">
            {isTi
              ? 'ካብ 2010 ጀሚሩ ኣብ ኤርትራ ዝተሰርሑ ቀንዲ ስራሓትና'
              : 'From hospital playrooms to educational laptops for children in Eritrea.'}
          </p>
        </div>
        <Button
          asChild
          variant="outline"
          className="border-trust-300 text-trust-800 hover:bg-trust-50"
        >
          <Link href={`/${locale}/achievements`}>
            {isTi ? 'ኩሉ ታሪኽ ርአ' : 'View Full Timeline'}
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {highlighted.map((project, idx) => {
          const isTeal = idx % 2 === 1;
          const yearLabel = project.yearEnd
            ? `${project.yearStart} – ${project.yearEnd}`
            : String(project.yearStart);
          const title = (isTi && project.titleTi) || project.title;
          const description =
            (isTi && project.descriptionTi) ||
            project.description ||
            project.achievement;

          return (
            <Card
              key={project.id}
              className={
                isTeal
                  ? 'border-t-4 border-t-trust-600 transition-all hover:-translate-y-1 hover:shadow-md'
                  : 'border-t-4 border-t-brand-500 transition-all hover:-translate-y-1 hover:shadow-md'
              }
            >
              <CardContent className="flex h-full flex-col justify-between pt-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge
                      variant="secondary"
                      className={
                        isTeal
                          ? 'bg-trust-100 text-trust-800'
                          : 'bg-brand-100 text-brand-800'
                      }
                    >
                      {yearLabel}
                    </Badge>
                    {project.partner && (
                      <Badge variant="outline" className="text-xs">
                        {project.partner}
                      </Badge>
                    )}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>

                {project.amountSpent && (
                  <div className="mt-6 border-t pt-4">
                    <p
                      className={
                        isTeal
                          ? 'text-sm font-bold text-trust-700'
                          : 'text-sm font-bold text-brand-700'
                      }
                    >
                      £{project.amountSpent.toLocaleString('en-GB')}{' '}
                      <span className="font-normal text-muted-foreground">
                        {isTi ? 'ተወጺኡ' : 'invested'}
                      </span>
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
