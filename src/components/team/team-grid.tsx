import { teamMembers } from '@/data/team';
import { TeamMemberCard } from './team-member-card';

interface TeamGridProps {
  locale: string;
}

export function TeamGrid({ locale }: TeamGridProps) {
  const currentMembers = teamMembers
    .filter((m) => m.isCurrent)
    .sort((a, b) => a.order - b.order);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {currentMembers.map((member) => (
        <TeamMemberCard key={member.id} member={member} locale={locale} />
      ))}
    </div>
  );
}
