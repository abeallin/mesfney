import { HeroSection } from '@/components/home/hero-section';
import { ImpactStats } from '@/components/home/impact-stats';
import { MissionPreview } from '@/components/home/mission-preview';
import { FeaturedProjects } from '@/components/home/featured-projects';
import { CTABanner } from '@/components/home/cta-banner';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ImpactStats />
      <MissionPreview />
      <FeaturedProjects />
      <CTABanner />
    </>
  );
}
