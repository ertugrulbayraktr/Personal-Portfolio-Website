'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function CTASection() {
  const t = useTranslations('home.cta_section');

  return (
    <section className="max-w-content mx-auto px-6 py-16">
      <div className="border border-surface rounded-lg p-12 text-center">
        <p className="text-xl md:text-2xl text-text-primary font-serif font-light mb-8 max-w-2xl mx-auto leading-loose">
          {t('title')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/work"
            className="px-8 py-4 bg-accent-gold text-background font-medium rounded-lg hover:bg-accent-hover transition-colors"
          >
            {t('button')}
          </Link>
          <a
            href="/cv/Ertugrul_Bayraktar_CV.pdf"
            download
            className="px-8 py-4 border-2 border-accent-gold text-accent-gold font-medium rounded-lg hover:bg-accent-gold hover:text-background transition-colors"
          >
            {t('download_cv')}
          </a>
        </div>
      </div>
    </section>
  );
}
