'use client';

import { useTranslations } from 'next-intl';

export default function BeyondEngineering() {
  const t = useTranslations('home.beyond_engineering');

  const pillars = [
    {
      key: 'markets',
      icon: (
        <svg className="w-12 h-12 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v4m-4-7v7m-4-3v3"/>
        </svg>
      ),
    },
    {
      key: 'entrepreneurship',
      icon: (
        <svg className="w-12 h-12 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      ),
    },
    {
      key: 'athlete',
      icon: (
        <svg className="w-12 h-12 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="max-w-content mx-auto px-6 py-32 border-t border-surface">
      {/* Section Header - Centered */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-text-primary">
          {t('title')}
        </h2>
        <p className="text-xl text-text-secondary leading-loose max-w-3xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      {/* Three Pillars - Subtle Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {pillars.map((pillar) => (
          <div
            key={pillar.key}
            className="group border border-surface rounded-lg p-8 hover:border-accent-gold/30 transition-all"
          >
            <div className="mb-6">{pillar.icon}</div>
            <h3 className="text-xl font-semibold mb-4 text-text-primary group-hover:text-accent-gold transition-colors">
              {t(`${pillar.key}.title`)}
            </h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              {t(`${pillar.key}.description`)}
            </p>
            <p className="text-text-secondary leading-relaxed text-sm">
              {t(`${pillar.key}.impact`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
