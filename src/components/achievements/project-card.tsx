import { FileText, Video } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getTranslations } from '@/lib/get-translations';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  locale: string;
  accent?: 'brand' | 'teal';
}

export function ProjectCard({ project, locale, accent = 'brand' }: ProjectCardProps) {
  const t = getTranslations(locale);
  const isTi = locale === 'ti';
  const isTeal = accent === 'teal';
  const yearLabel =
    project.yearEnd
      ? `${project.yearStart}–${project.yearEnd}`
      : String(project.yearStart);
  const title = (isTi && project.titleTi) || project.title;
  const description = (isTi && project.descriptionTi) || project.description;
  const achievement = (isTi && project.achievementTi) || project.achievement;

  return (
    <div className="rounded-3xl border border-border bg-white p-6 shadow-2xs transition-all hover:shadow-md sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={
              isTeal
                ? 'font-serif text-2xl font-semibold text-trust-700'
                : 'font-serif text-2xl font-semibold text-brand-700'
            }
          >
            {yearLabel}
          </span>
          {project.partner && (
            <Badge
              variant="outline"
              className="border-trust-200 bg-trust-50/70 text-trust-800"
            >
              {t.achievements.withPartner} {project.partner}
            </Badge>
          )}
        </div>

        {project.amountSpent && (
          <span className="rounded-full bg-muted px-3.5 py-1 font-serif text-sm font-semibold text-foreground">
            £{project.amountSpent.toLocaleString('en-GB')} {t.achievements.spent}
          </span>
        )}
      </div>

      <h3 className="mt-3 font-serif text-xl font-semibold text-foreground">
        {title}
      </h3>
      <p className="mt-2 leading-relaxed text-muted-foreground">
        {description || achievement}
      </p>

      {project.thankYouLetter && (
        <div className="mt-5 rounded-2xl border border-trust-200 bg-trust-50/60 p-4">
          <div className="flex items-center gap-2 text-sm font-medium text-trust-800">
            <FileText className="size-4 text-trust-600" />
            <span>
              {(isTi && project.thankYouLetter.titleTi) ||
                project.thankYouLetter.title}
            </span>
          </div>
          {project.thankYouLetter.type === 'image' ? (
            <a
              href={project.thankYouLetter.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block overflow-hidden rounded-xl border bg-white"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.thankYouLetter.url}
                alt={project.thankYouLetter.title}
                className="max-h-96 w-full object-contain"
              />
            </a>
          ) : (
            <div className="mt-3">
              <iframe
                src={project.thankYouLetter.url}
                title={project.thankYouLetter.title}
                className="h-96 w-full rounded-xl border bg-white"
              />
              <a
                href={project.thankYouLetter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-xs font-medium text-trust-700 hover:underline"
              >
                Open full document
              </a>
            </div>
          )}
        </div>
      )}

      {project.videos && project.videos.length > 0 && (
        <div className="mt-5 space-y-4">
          {project.videos.map((video) => (
            <div
              key={video.id}
              className="rounded-2xl border border-brand-200 bg-brand-50/40 p-4"
            >
              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-brand-800">
                <Video className="size-4 text-brand-600" />
                <span>{(isTi && video.titleTi) || video.title}</span>
              </div>
              <video
                controls
                preload="metadata"
                className="w-full rounded-xl bg-black"
                src={video.url}
              />
              {(video.transcriptTi || video.transcriptEn) && (
                <details className="mt-3 rounded-xl border bg-white p-3 text-sm text-muted-foreground">
                  <summary className="cursor-pointer font-medium text-foreground">
                    {isTi ? 'ጽሑፍ ቪድዮ (ትግርኛ)' : 'Video Transcript (Tigrinya / English)'}
                  </summary>
                  <div className="mt-2 space-y-2 whitespace-pre-line">
                    {video.transcriptTi && <p>{video.transcriptTi}</p>}
                    {video.transcriptEn && <p className="italic">{video.transcriptEn}</p>}
                  </div>
                </details>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
