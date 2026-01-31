import { teamMembers } from '@/data/team';
import { TeamMemberCard } from './team-member-card';

export function TeamGrid() {
  const currentMembers = teamMembers
    .filter((m) => m.isCurrent)
    .sort((a, b) => a.order - b.order);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {currentMembers.map((member) => (
        <TeamMemberCard key={member.id} member={member} />
      ))}
    </div>
  );
}
