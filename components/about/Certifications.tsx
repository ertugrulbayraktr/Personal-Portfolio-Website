'use client';

import { useTranslations, useLocale } from 'next-intl';

export default function Certifications() {
  const t = useTranslations('about');
  const locale = useLocale();

  // Certifications data
  const certificationsData = locale === 'tr' ? [
    {
      title: 'Python ve JavaScript ile Web Programlama (CS50\'s Web Programming)',
      issuer: 'Harvard University',
      date: '2025',
    },
    {
      title: 'Java ile Programlamaya Giriş',
      issuer: 'BTK Akademi',
      date: '2025',
    },
    {
      title: 'Kullanıcı Deneyimi (UX) Tasarımına Giriş',
      issuer: 'Georgia Institute of Technology',
      date: '2024',
    },
    {
      title: 'Kullanıcı Deneyimi İlkeleri ve Süreçlerine Giriş',
      issuer: 'University of Michigan',
      date: '2024',
    },
    {
      title: 'Proje Yönetimi Temelleri',
      issuer: 'Google',
      date: '2024',
    },
    {
      title: 'KOSGEB Girişimcilik Eğitimi',
      issuer: 'KOSGEB',
      date: '2023',
    },
    {
      title: 'Diğer Havacılık Personeli – Diploma Lisans Belgesi',
      issuer: 'Sivil Havacılık Genel Müdürlüğü (SHGM)',
      date: '2025',
    },
  ] : [
    {
      title: 'CS50\'s Web Programming with Python and JavaScript',
      issuer: 'Harvard University',
      date: '2025',
    },
    {
      title: 'Introduction to Programming with Java',
      issuer: 'BTK Akademi',
      date: '2025',
    },
    {
      title: 'Introduction to User Experience Design',
      issuer: 'Georgia Institute of Technology',
      date: '2024',
    },
    {
      title: 'Introduction to User Experience Principles and Processes',
      issuer: 'University of Michigan',
      date: '2024',
    },
    {
      title: 'Foundations of Project Management',
      issuer: 'Google',
      date: '2024',
    },
    {
      title: 'KOSGEB Entrepreneurship Training',
      issuer: 'KOSGEB',
      date: '2023',
    },
    {
      title: 'Other Aviation Personnel – Degree License Certificate',
      issuer: 'Directorate General of Civil Aviation',
      date: '2025',
    },
  ];

  const certifications = certificationsData;

  return (
    <section className="max-w-content mx-auto px-6 py-16 border-t border-surface">
      <h2 className="text-2xl font-semibold mb-8 text-text-primary">
        {t('certifications_title')}
      </h2>

      <div className="max-w-3xl">
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
    </section>
  );
}
