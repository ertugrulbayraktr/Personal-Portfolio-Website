'use client';

import { useTranslations, useLocale } from 'next-intl';

export default function Education() {
  const t = useTranslations('about');
  const locale = useLocale();

  // Education data
  const educationData = locale === 'tr' ? [
    {
      degree: 'Yazılım Mühendisliği Lisans Derecesi (B.S.)',
      school: 'Bahçeşehir Üniversitesi, İstanbul',
      period: 'Eylül 2021 – Kasım 2025',
      badge: 'İngilizce Eğitim | Burslu',
      courseworkLabel: 'Öne Çıkan Dersler:',
      coursework: [
        'AWS Academy Bulut Bilişim Temelleri',
        'Python ile İleri Düzey Programlama',
        'Veri Yapıları ve Algoritmalar',
        'Yapay Zekâ ve Uzman Sistemlere Giriş',
        'Kuantum Bilişime Giriş',
        'Yazılım Mühendisliği Analizi ve Tasarımı',
      ],
    },
    {
      degree: 'İngilizce Hazırlık Programı',
      school: 'Bahçeşehir Üniversitesi, İstanbul',
      period: 'Eylül 2020 – Ocak 2021',
    },
  ] : [
    {
      degree: 'Bachelor of Science (B.S.) in Software Engineering',
      school: 'Bahçeşehir University, Istanbul',
      period: 'September 2021 – November 2025',
      badge: 'English Curriculum | Scholarship',
      courseworkLabel: 'Key Coursework:',
      coursework: [
        'AWS Academy Cloud Computing Foundations',
        'Advanced Programming with Python',
        'Data Structures and Algorithms',
        'Introduction to Artificial Intelligence & Expert Systems',
        'Introduction to Quantum Computing',
        'Software Engineering Analysis and Design',
      ],
    },
    {
      degree: 'English Preparatory Program',
      school: 'Bahçeşehir University, Istanbul',
      period: 'September 2020 – January 2021',
    },
  ];

  const education = educationData;

  return (
    <section className="max-w-content mx-auto px-6 py-16 border-t border-surface">
      <h2 className="text-2xl font-semibold mb-8 text-text-primary">
        {t('education_title')}
      </h2>

      <div className="space-y-8 max-w-3xl">
        {education.map((edu, idx) => (
          <div key={idx} className="border-l-2 border-accent-gold pl-6 pb-4">
            <h3 className="text-xl font-semibold text-text-primary mb-1">
              {edu.degree}
            </h3>
            <div className="text-accent-gold font-medium mb-1">
              {edu.school}
            </div>
            <div className="text-sm text-text-secondary mb-2">
              {edu.period}
            </div>
            {edu.badge && (
              <div className="text-sm text-text-primary mb-4 font-medium">
                {edu.badge}
              </div>
            )}
            {edu.coursework && (
              <div className="mt-4">
                <div className="text-sm font-medium text-text-primary mb-2">
                  {edu.courseworkLabel}
                </div>
                <ul className="space-y-1">
                  {edu.coursework.map((course, i) => (
                    <li
                      key={i}
                      className="text-text-secondary flex items-start text-sm"
                    >
                      <span className="text-accent-gold mr-2">▸</span>
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
