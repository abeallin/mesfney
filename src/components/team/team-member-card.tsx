'use client';

import { User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import type { TeamMember } from '@/types';

const roleColors: Record<string, string> = {
  chair: 'bg-brand-100 text-brand-700',
  secretary: 'bg-trust-100 text-trust-700',
  finances: 'bg-green-100 text-green-700',
  fundraiser: 'bg-purple-100 text-purple-700',
  volunteer: 'bg-amber-100 text-amber-700',
};

const roleKeyMap: Record<string, string> = {
  chair: 'team.roleChair',
  secretary: 'team.roleSecretary',
  finances: 'team.roleFinances',
  fundraiser: 'team.roleFundraiser',
  volunteer: 'team.roleVolunteer',
};

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const { t } = useTranslation();

  return (
    <Card className="text-center">
      <CardContent className="pt-6">
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-muted">
          <User className="size-8 text-muted-foreground" />
        </div>
        <h3 className="mt-4 font-semibold text-foreground">{member.name}</h3>
        <Badge className={`mt-2 ${roleColors[member.role] || ''}`}>
          {member.title || t(roleKeyMap[member.role] || 'team.roleVolunteer')}
        </Badge>
        {member.isFounder && (
          <p className="mt-2 text-xs text-muted-foreground">
            {t('team.foundingMember')}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
