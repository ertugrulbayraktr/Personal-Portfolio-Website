'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function LatestWriting() {
  const t = useTranslations('home.latest_writing');
  const tWriting = useTranslations('writing');

  // Placeholder posts - will be replaced with real data
  const latestPosts = [
    {
      id: 1,
      title: 'System Design Lessons from Trading',
      excerpt: 'How principles from financial markets can improve software architecture decisions',
      category: 'Engineering',
      readTime: 8,
      date: '2024-01-15',
      slug: 'system-design-from-trading',
    },
    {
      id: 2,
      title: 'Building Resilient Backend Systems',
      excerpt: 'Patterns and practices for creating fault-tolerant distributed services',
      category: 'Systems',
      readTime: 12,
      date: '2024-01-08',
      slug: 'resilient-backend-systems',
    },
  ];

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
