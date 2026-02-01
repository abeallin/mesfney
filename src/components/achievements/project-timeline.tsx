import { projects } from '@/data/projects';
import { ProjectCard } from './project-card';

export function ProjectTimeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-brand-200 md:block" />

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={project.id} className="relative md:pl-12">
            {/* Timeline dot */}
            <div className="absolute left-2.5 top-8 hidden size-3 rounded-full bg-brand-500 ring-4 ring-brand-100 md:block" />

            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}