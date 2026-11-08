import { User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getTranslations } from '@/lib/get-translations';
import type { TeamMember } from '@/types';

const roleColors: Record<string, string> = {
  chair: 'bg-brand-100 text-brand-700',
  secretary: 'bg-trust-100 text-trust-700',
  finances: 'bg-green-100 text-green-700',
  fundraiser: 'bg-purple-100 text-purple-700',
  volunteer: 'bg-amber-100 text-amber-700',
};

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

  return (
    <Card className="text-center">
      <CardContent className="pt-6">
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-muted">
          <User className="size-8 text-muted-foreground" />
        </div>
        <h3 className="mt-4 font-semibold text-foreground">{member.name}</h3>
        <Badge className={`mt-2 ${roleColors[member.role] || ''}`}>
          {displayTitle}
        </Badge>
        {member.isFounder && (
          <p className="mt-2 text-xs text-muted-foreground">
            {t.team.foundingMember}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
