import { teamMembers } from '@/data/team';
import { getTranslations } from '@/lib/get-translations';
import { TeamMemberCard } from './team-member-card';

interface TeamGridProps {
  locale: string;
}

export function TeamGrid({ locale }: TeamGridProps) {
  const t = getTranslations(locale);
  const currentMembers = teamMembers
    .filter((m) => m.isCurrent)
    .sort((a, b) => a.order - b.order);

  const leaders = currentMembers.filter((m) => m.role === 'chair' || m.isFounder);
  const committee = currentMembers.filter((m) => !(m.role === 'chair' || m.isFounder));

  return (
    <div className="space-y-12">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
          {t.team.leadershipKicker}
        </p>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          {leaders.map((member) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              locale={locale}
              featured
            />
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-trust-700">
          {t.team.committeeKicker}
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {committee.map((member) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
