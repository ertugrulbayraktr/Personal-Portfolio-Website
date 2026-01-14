import { useTranslations } from 'next-intl';
import CareerDirection from '@/components/work/CareerDirection';
import Experience from '@/components/work/Experience';
import Projects from '@/components/work/Projects';
import TechStack from '@/components/work/TechStack';

export default function WorkPage() {
  const t = useTranslations('work');

  return (
    <div className="w-full">
      <div className="max-w-content mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-text-primary">
          {t('title')}
        </h1>
      </div>
      
      <CareerDirection />
      <Experience />
      <Projects />
      <TechStack />
    </div>
  );
}
