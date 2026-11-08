import { HeroSection } from '@/components/home/hero-section';
import { ImpactStats } from '@/components/home/impact-stats';
import { MissionPreview } from '@/components/home/mission-preview';
import { FeaturedProjects } from '@/components/home/featured-projects';
import { CTABanner } from '@/components/home/cta-banner';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <HeroSection locale={locale} />
      <ImpactStats />
      <MissionPreview locale={locale} />
      <FeaturedProjects locale={locale} />
      <CTABanner locale={locale} />
    </>
  );
}
