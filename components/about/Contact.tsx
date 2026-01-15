'use client';

import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('about');

  const contactLinks = [
    {
      label: 'Email',
      value: 'ertugrulbayraktar.bau@gmail.com',
      href: 'mailto:ertugrulbayraktar.bau@gmail.com',
    },
    {
      label: 'GitHub',
      value: 'github.com/ertugrulbayraktr',
      href: 'https://github.com/ertugrulbayraktr',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/ertugrulbayraktar0',
      href: 'https://www.linkedin.com/in/ertugrulbayraktar0/',
    },
    {
      label: 'Medium',
      value: 'medium.com/@ertugrulbayraktr',
      href: 'https://medium.com/@ertugrulbayraktr',
    },
  ];

  return (
    <section className="max-w-content mx-auto px-6 py-16 border-t border-surface">
      <h2 className="text-2xl font-semibold mb-4 text-text-primary">
        {t('contact_title')}
      </h2>
      
      <p className="text-text-secondary mb-8">
        {t('contact_subtitle')}
      </p>

      <div className="space-y-4 mb-8 max-w-2xl">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-lg border border-surface hover:border-accent-gold/30 transition-colors group"
          >
            <span className="font-medium text-text-primary">
              {link.label}
            </span>
            <span className="text-text-secondary group-hover:text-accent-gold transition-colors">
              {link.value}
            </span>
          </a>
        ))}
      </div>

      <a
        href="/cv/Ertugrul_Bayraktar_CV.pdf"
        download
        className="inline-block px-6 py-3 bg-accent-gold text-background font-medium rounded-lg hover:bg-accent-hover transition-colors"
      >
        {t('download_cv')}
      </a>
    </section>
  );
}
