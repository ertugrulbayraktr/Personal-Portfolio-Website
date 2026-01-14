'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function FeaturedWork() {
  const t = useTranslations('home.featured_work');

  // Placeholder projects - will be replaced with real data
  const featuredProjects = [
    {
      id: 1,
      title: 'Distributed Task Queue System',
      problem: 'Building a reliable background job processing system for high-volume data operations',
      approach: 'Implemented message-driven architecture with Redis and .NET for fault-tolerant task execution',
      tags: ['C#', '.NET', 'Redis', 'Distributed Systems'],
      slug: 'distributed-task-queue',
    },
    {
      id: 2,
      title: 'AI-Powered Content Analyzer',
      problem: 'Automating content categorization and sentiment analysis for large datasets',
      approach: 'Built FastAPI service integrating GPT-4 with custom preprocessing pipeline',
      tags: ['Python', 'FastAPI', 'OpenAI', 'PostgreSQL'],
      slug: 'ai-content-analyzer',
    },
  ];

  return (
    <section className="max-w-content mx-auto px-6 py-20">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
          {t('title')}
        </h2>
        <Link
          href="/work"
          className="text-accent-gold hover:text-accent-hover transition-colors font-medium"
        >
          {t('view_all')} →
        </Link>
      </div>

      <div className="space-y-12">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className="group border border-surface rounded-lg p-8 hover:border-accent-gold/30 transition-all"
          >
            <h3 className="text-2xl font-semibold mb-4 text-text-primary group-hover:text-accent-gold transition-colors">
              {project.title}
            </h3>
            
            <div className="space-y-3 mb-6">
              <div>
                <span className="text-sm font-medium text-accent-gold">Problem: </span>
                <span className="text-text-secondary">{project.problem}</span>
              </div>
              <div>
                <span className="text-sm font-medium text-accent-gold">Approach: </span>
                <span className="text-text-secondary">{project.approach}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-surface text-text-secondary rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href={`/work#${project.slug}`}
              className="inline-flex items-center text-accent-gold hover:text-accent-hover transition-colors font-medium"
            >
              {t('read_case')}
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
