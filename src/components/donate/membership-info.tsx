import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function MembershipInfo() {
  return (
    <Card>
      <CardHeader>
        <Star className="size-8 text-brand-500" />
        <CardTitle className="mt-2">Become a Member</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Join the Mesfney Love Foundation as a member and be part of our
          community of supporters. Members receive updates on our projects,
          invitations to events, and the satisfaction of making an ongoing
          difference.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <Star className="mt-0.5 size-4 shrink-0 text-brand-500" />
            <span>Regular updates on projects and impact</span>
          </li>
          <li className="flex items-start gap-2">
            <Star className="mt-0.5 size-4 shrink-0 text-brand-500" />
            <span>Invitations to fundraising events</span>
          </li>
          <li className="flex items-start gap-2">
            <Star className="mt-0.5 size-4 shrink-0 text-brand-500" />
            <span>Voting rights at the Annual General Meeting</span>
          </li>
          <li className="flex items-start gap-2">
            <Star className="mt-0.5 size-4 shrink-0 text-brand-500" />
            <span>Be part of a community making a real difference</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
