'use client';

import { useTranslations } from 'next-intl';

export default function Certifications() {
  const t = useTranslations('about');

  // Placeholder certifications - user will update
  const certifications = [
    {
      title: 'Microsoft Certified: Azure Developer Associate',
      issuer: 'Microsoft',
      date: '2023',
    },
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
    },
  ];

  const achievements = [
    'SunExpress Internship Program (Lufthansa/THY Joint Venture)',
    'University Financial Research Office - Technical Analyst & Editor',
    'Founder - Student Startup Initiative',
    'Competitive Kickboxing (Professional level, age 16-22)',
  ];

  return (
    <section className="max-w-content mx-auto px-6 py-16 border-t border-surface">
      <h2 className="text-2xl font-semibold mb-8 text-text-primary">
        {t('certifications_title')}
      </h2>

      <div className="max-w-3xl space-y-8">
        {/* Certifications */}
        <div>
          <h3 className="text-lg font-semibold text-accent-gold mb-4">
            Certifications
          </h3>
          <div className="space-y-3">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-surface hover:border-accent-gold/30 transition-colors"
              >
                <div className="font-medium text-text-primary">
                  {cert.title}
                </div>
                <div className="text-sm text-text-secondary">
                  {cert.issuer} • {cert.date}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-lg font-semibold text-accent-gold mb-4">
            Key Achievements
          </h3>
          <ul className="space-y-2">
            {achievements.map((achievement, idx) => (
              <li
                key={idx}
                className="flex items-start text-text-secondary"
              >
                <span className="text-accent-gold mr-3 mt-1">▸</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
