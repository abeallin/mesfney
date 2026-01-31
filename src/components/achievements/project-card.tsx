import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const yearLabel =
    project.yearEnd
      ? `${project.yearStart} - ${project.yearEnd}`
      : String(project.yearStart);

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-brand-100 text-brand-700">
                {yearLabel}
              </Badge>
              {project.partner && (
                <Badge variant="outline">with {project.partner}</Badge>
              )}
            </div>
            <h3 className="mt-3 text-lg font-semibold text-foreground">
              {project.title}
            </h3>
            <p className="mt-1 text-muted-foreground">
              {project.description || project.achievement}
            </p>
            {project.amountSpent && (
              <p className="mt-2 text-sm font-medium text-brand-600">
                £{project.amountSpent.toLocaleString('en-GB')} spent
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
