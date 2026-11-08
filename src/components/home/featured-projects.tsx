import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { projects } from '@/data/projects';

export function FeaturedProjects({ locale }: { locale: string }) {
  const isTi = locale === 'ti';
  const highlighted = [projects[0], projects[2], projects[4]].filter(Boolean);

  return (
    <SectionWrapper>
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-trust-700">
            {isTi ? 'ዓወታትና' : 'Proven Track Record'}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {isTi ? 'ዝተዓወትናዮም ፕሮጀክትታት' : 'Selected Projects in Eritrea'}
          </h2>
          <p className="mt-2 text-muted-foreground">
            {isTi
              ? 'ካብ 2010 ጀሚሩ ኣብ ኤርትራ ዝተሰርሑ ቀንዲ ስራሓትና'
              : 'From hospital playrooms to educational laptops for children with special needs.'}
          </p>
        </div>
        <Button
          asChild
          variant="outline"
          className="rounded-xl border-border bg-white text-foreground hover:bg-muted"
        >
          <Link href={`/${locale}/achievements`}>
            {isTi ? 'ኩሉ ታሪኽ ርአ' : 'Explore Full Timeline'}
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {highlighted.map((project, idx) => {
          const isMiddle = idx === 1;
          const yearLabel = project.yearEnd
            ? `${project.yearStart}–${String(project.yearEnd).slice(-2)}`
            : String(project.yearStart);
          const title = (isTi && project.titleTi) || project.title;
          const description =
            (isTi && project.descriptionTi) ||
            project.description ||
            project.achievement;

          return (
            <div
              key={project.id}
              className={
                isMiddle
                  ? 'group flex flex-col justify-between rounded-3xl bg-trust-950 p-7 text-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg'
                  : 'group flex flex-col justify-between rounded-3xl border border-border bg-white p-7 shadow-2xs transition-all hover:-translate-y-1 hover:shadow-md'
              }
            >
              <div>
                <div className="flex items-baseline justify-between gap-2">
                  <span
                    className={
                      isMiddle
                        ? 'font-serif text-3xl font-semibold text-brand-300'
                        : 'font-serif text-3xl font-semibold text-brand-700'
                    }
                  >
                    {yearLabel}
                  </span>
                  {project.partner && (
                    <Badge
                      variant="outline"
                      className={
                        isMiddle
                          ? 'border-white/20 bg-white/10 text-xs text-trust-100'
                          : 'border-border bg-muted/60 text-xs text-muted-foreground'
                      }
                    >
                      {project.partner}
                    </Badge>
                  )}
                </div>

                <h3
                  className={
                    isMiddle
                      ? 'mt-5 font-serif text-xl font-semibold text-white'
                      : 'mt-5 font-serif text-xl font-semibold text-foreground'
                  }
                >
                  {title}
                </h3>
                <p
                  className={
                    isMiddle
                      ? 'mt-2.5 text-sm leading-relaxed text-trust-100/85'
                      : 'mt-2.5 text-sm leading-relaxed text-muted-foreground'
                  }
                >
                  {description}
                </p>
              </div>

              {project.amountSpent && (
                <div
                  className={
                    isMiddle
                      ? 'mt-8 flex items-center justify-between border-t border-white/15 pt-4'
                      : 'mt-8 flex items-center justify-between border-t border-border pt-4'
                  }
                >
                  <div>
                    <p
                      className={
                        isMiddle
                          ? 'text-[11px] uppercase tracking-wider text-trust-300'
                          : 'text-[11px] uppercase tracking-wider text-muted-foreground'
                      }
                    >
                      {isTi ? 'ዝተወጽአ ገንዘብ' : 'Direct Grant'}
                    </p>
                    <p
                      className={
                        isMiddle
                          ? 'font-serif text-lg font-semibold text-white'
                          : 'font-serif text-lg font-semibold text-foreground'
                      }
                    >
                      £{project.amountSpent.toLocaleString('en-GB')}
                    </p>
                  </div>
                  <Link
                    href={`/${locale}/achievements`}
                    aria-label={title}
                    className={
                      isMiddle
                        ? 'flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-white/20'
                        : 'flex size-9 items-center justify-center rounded-full bg-muted text-foreground transition-colors group-hover:bg-brand-100 group-hover:text-brand-800'
                    }
                  >
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
