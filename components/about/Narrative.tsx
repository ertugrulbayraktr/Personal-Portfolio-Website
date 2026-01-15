'use client';

import { useTranslations } from 'next-intl';

export default function Narrative() {
  const t = useTranslations('about');

  return (
    <section className="max-w-content mx-auto px-6 pb-16">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left: Narrative Text */}
        <div className="flex-1 text-lg text-text-secondary leading-loose space-y-6 whitespace-pre-line">
          {t('narrative')}
        </div>

        {/* Right: Photo */}
        <div className="flex-shrink-0">
          <div className="w-64 h-64 bg-surface rounded-xl border border-surface overflow-hidden">
            <img 
              src="/images/profile.jpg" 
              alt="Ertuğrul Bayraktar" 
              className="w-full h-full object-cover scale-[1.20] object-[center_75%]" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
