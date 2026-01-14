'use client';

import { useTranslations } from 'next-intl';

export default function TechStack() {
  const t = useTranslations('work');

  const stack = {
    'Backend': ['C#', '.NET Core', 'Python', 'Django', 'FastAPI', 'Node.js'],
    'Databases': ['PostgreSQL', 'MongoDB', 'Redis', 'SQL Server'],
    'Cloud & DevOps': ['Docker', 'Kubernetes', 'AWS', 'Azure', 'CI/CD'],
    'Tools & Others': ['Git', 'Linux', 'REST API', 'GraphQL', 'Message Queues'],
  };

  return (
    <section className="max-w-content mx-auto px-6 py-16 border-t border-surface">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-text-primary">
        {t('tech_stack_title')}
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(stack).map(([category, technologies]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold mb-4 text-accent-gold">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm bg-surface text-text-secondary rounded border border-surface hover:border-accent-gold/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
