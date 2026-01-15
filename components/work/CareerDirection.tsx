'use client';

import { useTranslations } from 'next-intl';

export default function CareerDirection() {
  const t = useTranslations('work');

  return (
    <section className="max-w-content mx-auto px-6 pt-0 pb-16">
      <div className="text-lg text-text-secondary leading-loose max-w-4xl space-y-6 whitespace-pre-line">
        {t('career_direction_text')}
      </div>
    </section>
  );
}
