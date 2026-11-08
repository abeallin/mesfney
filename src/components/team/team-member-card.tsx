import { Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getTranslations } from '@/lib/get-translations';
import type { TeamMember } from '@/types';

const roleColors: Record<string, string> = {
  chair: 'bg-brand-100 text-brand-800 border-brand-200',
  secretary: 'bg-trust-100 text-trust-800 border-trust-200',
  finances: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  fundraiser: 'bg-amber-100 text-amber-800 border-amber-200',
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
}

export function TeamMemberCard({ member, locale }: TeamMemberCardProps) {
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

  const isLeader = member.role === 'chair' || member.isFounder;

  return (
    <Card
      className={
        isLeader
          ? 'border-t-4 border-t-brand-500 text-center transition-all hover:-translate-y-0.5 hover:shadow-md'
          : 'border-t-4 border-t-trust-600 text-center transition-all hover:-translate-y-0.5 hover:shadow-md'
      }
    >
      <CardContent className="pt-6">
        <div
          className={
            isLeader
              ? 'mx-auto flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-lg font-bold text-white shadow-sm ring-4 ring-brand-100'
              : 'mx-auto flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-trust-500 to-trust-700 text-lg font-bold text-white shadow-sm ring-4 ring-trust-100'
          }
        >
          {getInitials(member.name)}
        </div>
        <h3 className="mt-4 text-lg font-bold text-foreground">{member.name}</h3>
        <Badge variant="outline" className={`mt-2 ${roleColors[member.role] || ''}`}>
          {displayTitle}
        </Badge>
        {member.isFounder && (
          <div className="mt-3 flex items-center justify-center gap-1 text-xs font-medium text-brand-700">
            <Award className="size-3.5 text-brand-500" />
            <span>{t.team.foundingMember}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
