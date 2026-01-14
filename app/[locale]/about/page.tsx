import { useTranslations } from 'next-intl';
import Narrative from '@/components/about/Narrative';
import Education from '@/components/about/Education';
import Certifications from '@/components/about/Certifications';
import Contact from '@/components/about/Contact';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <div className="w-full">
      <div className="max-w-content mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-text-primary">
          {t('title')}
        </h1>
      </div>

      <Narrative />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
}
