import { Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getTranslations } from '@/lib/get-translations';
import type { TeamMember } from '@/types';

const roleColors: Record<string, string> = {
  chair: 'bg-brand-50 text-brand-800 border-brand-200',
  secretary: 'bg-trust-50 text-trust-800 border-trust-200',
  finances: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  fundraiser: 'bg-amber-50 text-amber-800 border-amber-200',
  volunteer: 'bg-trust-50 text-trust-700 border-trust-200',
};

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

interface TeamMemberCardProps {
  member: TeamMember;
  locale: string;
  featured?: boolean;
}

export function TeamMemberCard({ member, locale, featured = false }: TeamMemberCardProps) {
  const t = getTranslations(locale);

  const roleLabels: Record<string, string> = {
    chair: t.team.roleChair,
    secretary: t.team.roleSecretary,
    finances: t.team.roleFinances,
    fundraiser: t.team.roleFundraiser,
    volunteer: t.team.roleVolunteer,
  };

  const titleLabels: Record<string, string> = {
    'Chair & Founder': t.team.roleChairFounder,
    'Co-Chair': t.team.roleCoChair,
  };

  const displayTitle = member.title
    ? titleLabels[member.title] || roleLabels[member.role] || member.title
    : roleLabels[member.role] || t.team.roleVolunteer;

  if (featured) {
    return (
      <div className="flex items-center gap-5 rounded-3xl border border-border bg-white p-6 shadow-xs sm:p-8">
        <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-trust-950 font-serif text-xl font-semibold text-brand-300 sm:size-20 sm:text-2xl">
          {getInitials(member.name)}
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className={roleColors[member.role] || ''}>
              {displayTitle}
            </Badge>
            {member.isFounder && (
              <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-700">
                <Award className="size-3.5 text-brand-600" />
                {t.team.foundingMember}
              </span>
            )}
          </div>
          <h3 className="mt-2 font-serif text-2xl font-semibold text-foreground">
            {member.name}
          </h3>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-2xs transition-all hover:shadow-sm">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-muted font-serif text-base font-semibold text-foreground">
        {getInitials(member.name)}
      </div>
      <div>
        <h3 className="font-serif text-lg font-semibold text-foreground">
          {member.name}
        </h3>
        <Badge variant="outline" className={`mt-1 text-xs ${roleColors[member.role] || ''}`}>
          {displayTitle}
        </Badge>
      </div>
    </div>
  );
}
