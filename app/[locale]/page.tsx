import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Hero from '@/components/home/Hero';
import BeyondEngineering from '@/components/home/BeyondEngineering';
import FeaturedWork from '@/components/home/FeaturedWork';
import LatestWriting from '@/components/home/LatestWriting';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <div className="w-full">
      <Hero />
      <BeyondEngineering />
      <FeaturedWork />
      <LatestWriting />
      <CTASection />
    </div>
  );
}
