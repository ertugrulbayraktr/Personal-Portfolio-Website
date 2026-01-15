import { notFound } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

// This would typically fetch from a CMS or markdown files
async function getPost(slug: string, locale: string) {
  // Blog post data
  const postsEn: Record<string, any> = {
    'stuxnet-strategic-weapon': {
      title: 'Stuxnet: When Software Became a Strategic Weapon',
      date: '2025-01-15',
      readTime: 10,
      category: 'Strategic Technology',
      content: `
# Stuxnet: When Software Became a Strategic Weapon

*Content coming soon...*
      `,
    },
    'composition-vs-inheritance': {
      title: 'Composition vs Inheritance: Designing for Change in Software Systems',
      date: '2025-01-12',
      readTime: 8,
      category: 'Software Development',
      content: `
# Composition vs Inheritance: Designing for Change in Software Systems

*Content coming soon...*
      `,
    },
  };

  const postsTr: Record<string, any> = {
    'stuxnet-strategic-weapon': {
      title: 'Stuxnet: Yazılımın Stratejik Bir Silaha Dönüştüğü An',
      date: '2025-01-15',
      readTime: 10,
      category: 'Stratejik Teknoloji',
      content: `
# Stuxnet: Yazılımın Stratejik Bir Silaha Dönüştüğü An

*İçerik yakında eklenecek...*
      `,
    },
    'composition-vs-inheritance': {
      title: 'Composition ve Inheritance: Değişime Uyumlu Yazılım Tasarlamak',
      date: '2025-01-12',
      readTime: 8,
      category: 'Yazılım Geliştirme',
      content: `
# Composition ve Inheritance: Değişime Uyumlu Yazılım Tasarlamak

*İçerik yakında eklenecek...*
      `,
    },
  };

  const posts = locale === 'tr' ? postsTr : postsEn;
  const post = posts[slug];
  if (!post) return null;

  return post;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = await getPost(slug, locale);

  if (!post) {
    notFound();
  }

  const backText = locale === 'tr' ? 'Yazılara Dön' : 'Back to Writing';

  return (
    <div className="w-full">
      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Back Link */}
        <Link
          href="/writing"
          className="inline-flex items-center text-text-secondary hover:text-accent-gold transition-colors mb-8"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {backText}
        </Link>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-6 text-sm text-text-secondary">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
          <span>•</span>
          <span>{post.readTime} min read</span>
          <span>•</span>
          <span className="text-accent-gold">{post.category}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-text-primary leading-tight">
          {post.title}
        </h1>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-text-primary prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:text-text-secondary prose-p:leading-relaxed prose-code:bg-surface prose-code:text-accent-gold prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-surface prose-strong:text-text-primary">
          <div
            className="text-text-secondary leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </div>
  );
}
