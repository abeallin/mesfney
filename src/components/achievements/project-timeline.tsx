import { projects } from '@/data/projects';
import { ProjectCard } from './project-card';

interface ProjectTimelineProps {
  locale: string;
}

export function ProjectTimeline({ locale }: ProjectTimelineProps) {
  return (
    <div className="relative">
      {/* Vertical gradient line */}
      <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-gradient-to-b from-brand-300 via-trust-300 to-brand-300 md:block" />

      <div className="space-y-6">
        {projects.map((project, index) => {
          const isTeal = index % 2 === 1;
          return (
            <div key={project.id} className="relative md:pl-12">
              {/* Timeline dot */}
              <div
                className={
                  isTeal
                    ? 'absolute left-2.5 top-8 hidden size-3.5 rounded-full bg-trust-600 ring-4 ring-trust-100 md:block'
                    : 'absolute left-2.5 top-8 hidden size-3.5 rounded-full bg-brand-500 ring-4 ring-brand-100 md:block'
                }
              />

              <ProjectCard project={project} locale={locale} accent={isTeal ? 'teal' : 'brand'} />
            </div>
          );
        })}
      </div>
    </div>
  );
}