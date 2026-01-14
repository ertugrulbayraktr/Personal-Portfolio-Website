'use client';

import { useTranslations } from 'next-intl';

export default function Education() {
  const t = useTranslations('about');

  // Placeholder education data
  const education = [
    {
      degree: 'Bachelor of Science in Software Engineering',
      school: 'Bahçeşehir University',
      period: '2018 - 2022',
      details: [
        'Focus on backend systems and distributed architectures',
        'Active member of Financial Research Office',
        'Founded and led student startup initiative',
      ],
    },
  ];

  return (
    <section className="max-w-content mx-auto px-6 py-16 border-t border-surface">
      <h2 className="text-2xl font-semibold mb-8 text-text-primary">
        {t('education_title')}
      </h2>

      <div className="space-y-8 max-w-3xl">
        {education.map((edu, idx) => (
          <div key={idx} className="border-l-2 border-accent-gold pl-6">
            <h3 className="text-xl font-semibold text-text-primary mb-1">
              {edu.degree}
            </h3>
            <div className="text-accent-gold font-medium mb-1">
              {edu.school}
            </div>
            <div className="text-sm text-text-secondary mb-4">
              {edu.period}
            </div>
            <ul className="space-y-2">
              {edu.details.map((detail, i) => (
                <li
                  key={i}
                  className="text-text-secondary flex items-start text-sm"
                >
                  <span className="text-accent-gold mr-2">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
