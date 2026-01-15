'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';
import { Link } from '@/i18n/routing';

type Category = 'all' | 'software' | 'trading' | 'strategic';

export default function WritingPage() {
  const t = useTranslations('writing');
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const locale = useLocale();

  // Blog posts
  const postsData = locale === 'tr' ? [
    {
      id: 1,
      title: 'Stuxnet: Yazılımın Stratejik Bir Silaha Dönüştüğü An',
      excerpt: 'Bir yazılımın siber savaş ve istihbarat anlayışını nasıl değiştirdiği.',
      category: 'strategic' as Category,
      readTime: 10,
      date: '2025-01-15',
      slug: 'stuxnet-strategic-weapon',
    },
    {
      id: 2,
      title: 'Composition ve Inheritance: Değişime Uyumlu Yazılım Tasarlamak',
      excerpt: 'Neden composition çoğu durumda daha esnek ve sürdürülebilir çözümler sunar.',
      category: 'software' as Category,
      readTime: 8,
      date: '2025-01-12',
      slug: 'composition-vs-inheritance',
    },
  ] : [
    {
      id: 1,
      title: 'Stuxnet: When Software Became a Strategic Weapon',
      excerpt: 'How a piece of code reshaped cyber warfare and intelligence operations.',
      category: 'strategic' as Category,
      readTime: 10,
      date: '2025-01-15',
      slug: 'stuxnet-strategic-weapon',
    },
    {
      id: 2,
      title: 'Composition vs Inheritance: Designing for Change in Software Systems',
      excerpt: 'Why composition often leads to more flexible and maintainable designs.',
      category: 'software' as Category,
      readTime: 8,
      date: '2025-01-12',
      slug: 'composition-vs-inheritance',
    },
  ];

  const posts = postsData;

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: t('categories.all') },
    { key: 'software', label: t('categories.software') },
    { key: 'trading', label: t('categories.trading') },
    { key: 'strategic', label: t('categories.strategic') },
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
