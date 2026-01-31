import Link from 'next/link';
import { Heart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTABanner() {
  return (
    <section className="bg-brand-500">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Help Us Make a Difference
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-100">
          Whether you donate, volunteer, or simply spread the word, your support
          changes lives. Join us in supporting sick children in Eritrea.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="w-full bg-white text-brand-600 hover:bg-brand-50 sm:w-auto"
          >
            <Link href="/donate">
              <Heart className="size-5" />
              Donate Now
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full border-white text-white hover:bg-brand-600 sm:w-auto"
          >
            <Link href="/volunteer">
              <Users className="size-5" />
              Become a Volunteer
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
