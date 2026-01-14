'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Link } from '@/i18n/routing';

type Category = 'all' | 'engineering' | 'markets' | 'systems' | 'career';

export default function WritingPage() {
  const t = useTranslations('writing');
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  // Placeholder blog posts
  const posts = [
    {
      id: 1,
      title: 'System Design Lessons from Trading',
      excerpt: 'How principles from financial markets can improve software architecture decisions and risk management in distributed systems.',
      category: 'engineering' as Category,
      readTime: 8,
      date: '2024-01-15',
      slug: 'system-design-from-trading',
    },
    {
      id: 2,
      title: 'Building Resilient Backend Systems',
      excerpt: 'Patterns and practices for creating fault-tolerant distributed services that handle failure gracefully.',
      category: 'systems' as Category,
      readTime: 12,
      date: '2024-01-08',
      slug: 'resilient-backend-systems',
    },
    {
      id: 3,
      title: 'Price Action and Code Quality',
      excerpt: 'What market structure teaches us about clean code, refactoring decisions, and technical debt.',
      category: 'markets' as Category,
      readTime: 6,
      date: '2023-12-20',
      slug: 'price-action-code-quality',
    },
    {
      id: 4,
      title: 'From Kickboxing to Engineering',
      excerpt: 'How competitive sports shaped my approach to problem-solving, discipline, and continuous improvement.',
      category: 'career' as Category,
      readTime: 7,
      date: '2023-12-10',
      slug: 'kickboxing-to-engineering',
    },
  ];

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: t('categories.all') },
    { key: 'engineering', label: t('categories.engineering') },
    { key: 'markets', label: t('categories.markets') },
    { key: 'systems', label: t('categories.systems') },
    { key: 'career', label: t('categories.career') },
  ];

  const filteredPosts =
    activeCategory === 'all'
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full">
      <div className="max-w-content mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-text-primary">
          {t('title')}
        </h1>
        <p className="text-xl text-text-secondary mb-12 max-w-2xl">
          {t('subtitle')}
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12 pb-8 border-b border-surface">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                activeCategory === cat.key
                  ? 'bg-accent-gold text-background'
                  : 'bg-surface text-text-secondary hover:text-text-primary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Posts List */}
        <div className="space-y-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/writing/${post.slug}`}
              className="block group"
            >
              <article className="border-b border-surface pb-8 last:border-b-0">
                <div className="flex items-center gap-3 mb-3 text-sm text-text-secondary">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                  <span>•</span>
                  <span>{post.readTime} {t('min_read')}</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-text-primary group-hover:text-accent-gold transition-colors">
                  {post.title}
                </h2>

                <p className="text-text-secondary leading-loose mb-4">
                  {post.excerpt}
                </p>

                <div className="text-accent-gold group-hover:text-accent-hover transition-colors font-medium">
                  {t('read_more')} →
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
