'use client';

import { useTranslations } from 'next-intl';

export default function Experience() {
  const t = useTranslations('work');

  // Placeholder experiences
  const experiences = [
    {
      id: 1,
      title: 'Software Engineering Intern',
      company: 'SunExpress',
      logo: '/images/companies/sunexpress.png',
      description: 'Lufthansa and Turkish Airlines joint venture',
      period: '3 months',
      highlights: [
        'Worked on backend systems for airline operations',
        'Collaborated with international development teams',
        'Gained experience in enterprise-scale applications',
      ],
    },
    {
      id: 2,
      title: 'Founder',
      company: 'LLux',
      logo: '/images/companies/llux.png',
      description: 'E-commerce business launched during university',
      period: '1 year',
      highlights: [
        'Led product development and technical architecture',
        'Managed cross-functional team operations',
        'Learned entrepreneurship and business strategy',
      ],
    },
    {
      id: 3,
      title: 'Technical Analyst & Editor',
      company: 'Bahçeşehir University',
      logo: '/images/companies/bahcesehir.png',
      description: 'Financial Research Office - Bulletin editorial and analysis',
      period: 'During university',
      highlights: [
        'Conducted technical analysis on financial markets',
        'Wrote and edited financial research bulletins',
        'Applied analytical thinking to market trends',
      ],
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
                    alt={`${exp.company} logo`}
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
                {exp.title}
              </h3>
              <div className="text-accent-gold font-medium mb-1">
                {exp.company}
              </div>
              <div className="text-sm text-text-secondary mb-4">
                {exp.description} • {exp.period}
              </div>
              
              <ul className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="text-text-secondary text-sm flex items-start"
                  >
                    <span className="text-accent-gold mr-2">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
