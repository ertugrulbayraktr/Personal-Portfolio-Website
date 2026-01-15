'use client';

import { useTranslations } from 'next-intl';

export default function Experience() {
  const t = useTranslations('work');
  const tExp = useTranslations('work.experiences');

  const experiences = [
    {
      id: 'sunexpress',
      logo: '/images/companies/sunexpress.png',
    },
    {
      id: 'llux',
      logo: '/images/companies/llux.png',
    },
    {
      id: 'bahcesehir',
      logo: '/images/companies/bahcesehir.png',
    },
  ];

  return (
    <section className="max-w-content mx-auto px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-text-primary">
        {t('experience_title')}
      </h2>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="flex gap-6 relative"
          >
            {/* Timeline Line */}
            {index < experiences.length - 1 && (
              <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-surface" />
            )}
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-lg border border-gray-700 overflow-hidden bg-white flex items-center justify-center">
                {exp.logo ? (
                  <img
                    src={exp.logo}
                    alt={`${tExp(`${exp.id}.company`)} logo`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="text-xs text-text-secondary">[Logo]</span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 pb-4">
              <h3 className="text-xl font-semibold text-text-primary mb-1">
                {tExp(`${exp.id}.title`)}
              </h3>
              <div className="text-accent-gold font-medium mb-1">
                {tExp(`${exp.id}.company`)}
              </div>
              <div className="text-sm text-text-secondary mb-2">
                {tExp(`${exp.id}.subtitle`)}
              </div>
              <div className="text-xs text-text-secondary mb-4">
                {tExp(`${exp.id}.period`)}
              </div>
              
              <div className="text-text-secondary text-sm leading-relaxed whitespace-pre-line">
                {tExp(`${exp.id}.description`)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
