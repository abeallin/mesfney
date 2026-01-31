import Link from 'next/link';
import { Heart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-trust-50">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
            <Heart className="size-4 fill-brand-500 text-brand-500" />
            UK Registered Charity No. 1139089
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Supporting Sick Children{' '}
            <span className="text-brand-500">in Eritrea</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Founded in memory of Mesfin Hiruy, we provide healthcare support,
            education, and play for children in need. Because every child
            deserves a chance to heal, learn, and smile.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/donate">
                <Heart className="size-5" />
                Make a Donation
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link href="/volunteer">
                <Users className="size-5" />
                Join Our Team
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
