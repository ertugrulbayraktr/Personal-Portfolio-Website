'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function LatestWriting() {
  const t = useTranslations('home.latest_writing');
  const tWriting = useTranslations('writing');
  const locale = useLocale();

  // Latest blog posts
  const postsData = locale === 'tr' ? [
    {
      id: 1,
      title: 'Stuxnet: Yazılımın Stratejik Bir Silaha Dönüştüğü An',
      excerpt: 'Bir yazılımın siber savaş ve istihbarat anlayışını nasıl değiştirdiği.',
      category: 'Stratejik Teknoloji',
      readTime: 10,
      date: '2025-01-15',
      slug: 'stuxnet-strategic-weapon',
    },
    {
      id: 2,
      title: 'Composition ve Inheritance: Değişime Uyumlu Yazılım Tasarlamak',
      excerpt: 'Neden composition çoğu durumda daha esnek ve sürdürülebilir çözümler sunar.',
      category: 'Yazılım Geliştirme',
      readTime: 8,
      date: '2025-01-12',
      slug: 'composition-vs-inheritance',
    },
  ] : [
    {
      id: 1,
      title: 'Stuxnet: When Software Became a Strategic Weapon',
      excerpt: 'How a piece of code reshaped cyber warfare and intelligence operations.',
      category: 'Strategic Technology',
      readTime: 10,
      date: '2025-01-15',
      slug: 'stuxnet-strategic-weapon',
    },
    {
      id: 2,
      title: 'Composition vs Inheritance: Designing for Change in Software Systems',
      excerpt: 'Why composition often leads to more flexible and maintainable designs.',
      category: 'Software Development',
      readTime: 8,
      date: '2025-01-12',
      slug: 'composition-vs-inheritance',
    },
  ];

  const latestPosts = postsData;

  return (
    <section className="max-w-content mx-auto px-6 py-20 border-t border-surface">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
          {t('title')}
        </h2>
        <Link
          href="/writing"
          className="text-accent-gold hover:text-accent-hover transition-colors font-medium"
        >
          {t('view_all')} →
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {latestPosts.map((post) => (
          <Link
            key={post.id}
            href={`/writing/${post.slug}`}
            className="group border border-surface rounded-lg p-6 hover:border-accent-gold/30 transition-all"
          >
            <div className="flex items-center gap-3 mb-3 text-sm text-text-secondary">
              <span className="text-accent-gold">{post.category}</span>
              <span>•</span>
              <span>{post.readTime} {tWriting('min_read')}</span>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-text-primary group-hover:text-accent-gold transition-colors">
              {post.title}
            </h3>

            <p className="text-text-secondary leading-relaxed">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
