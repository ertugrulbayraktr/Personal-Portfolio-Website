'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Projects() {
  const t = useTranslations('work');

  // Placeholder projects - 6 total
  const projects = [
    {
      id: 1,
      slug: 'distributed-task-queue',
      title: 'Distributed Task Queue System',
      description: 'Scalable background job processing with Redis and .NET',
      tech: ['C#', '.NET Core', 'Redis', 'Docker'],
      highlights: ['Message-driven architecture', 'Fault-tolerant design', 'High throughput'],
      github: '#',
      demo: null,
      image: null, // User will add
    },
    {
      id: 2,
      slug: 'ai-content-analyzer',
      title: 'AI Content Analyzer',
      description: 'FastAPI service for automated content categorization',
      tech: ['Python', 'FastAPI', 'OpenAI GPT-4', 'PostgreSQL'],
      highlights: ['GPT-4 integration', 'Custom preprocessing', 'RESTful API'],
      github: '#',
      demo: '#',
      image: null,
    },
    {
      id: 3,
      slug: 'ecommerce-platform',
      title: 'E-Commerce Platform',
      description: 'Full-stack marketplace with payment integration',
      tech: ['React', 'Django', 'Stripe', 'AWS'],
      highlights: ['Payment processing', 'Order management', 'Admin dashboard'],
      github: '#',
      demo: '#',
      image: null,
    },
    {
      id: 4,
      slug: 'trading-analytics',
      title: 'Trading Analytics Dashboard',
      description: 'Real-time market data visualization and analysis',
      tech: ['Next.js', 'Python', 'WebSocket', 'TradingView'],
      highlights: ['Real-time data', 'Technical indicators', 'Chart analysis'],
      github: '#',
      demo: null,
      image: null,
    },
    {
      id: 5,
      slug: 'devops-tools',
      title: 'DevOps Automation Tools',
      description: 'CLI tools for deployment and infrastructure management',
      tech: ['Python', 'Bash', 'Docker', 'Kubernetes'],
      highlights: ['CI/CD automation', 'Infrastructure as code', 'Monitoring'],
      github: '#',
      demo: null,
      image: null,
    },
    {
      id: 6,
      slug: 'api-gateway',
      title: 'API Gateway Service',
      description: 'Microservices gateway with auth and rate limiting',
      tech: ['C#', '.NET', 'JWT', 'Rate Limiting'],
      highlights: ['Authentication', 'Request routing', 'Security'],
      github: '#',
      demo: null,
      image: null,
    },
  ];


  return (
    <section className="max-w-content mx-auto px-6 py-16 border-t border-surface">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 text-text-primary">
        {t('projects_title')}
      </h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-surface rounded-lg overflow-hidden hover:border-accent-gold/30 transition-colors group"
          >
            {/* Project Image */}
            <div className="w-full h-48 bg-surface flex items-center justify-center text-text-secondary border-b border-surface">
              {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <span className="text-sm">[Project Image]</span>
              )}
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-text-primary group-hover:text-accent-gold transition-colors">
                {project.title}
              </h3>
              <p className="text-text-secondary text-sm mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-surface text-text-secondary rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <ul className="mb-6 space-y-1">
                {project.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="text-text-secondary text-xs flex items-start"
                  >
                    <span className="text-accent-gold mr-2">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Actions */}
              <div className="flex flex-col gap-3">
                <Link
                  href={`/work/${project.slug}`}
                  className="w-full px-4 py-2 bg-accent-gold text-background text-center font-medium rounded-lg hover:bg-accent-hover transition-colors"
                >
                  {t('view_details')}
                </Link>
                
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-sm text-center text-accent-gold hover:text-accent-hover transition-colors py-2 border border-surface rounded-lg hover:border-accent-gold/30"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-sm text-center text-accent-gold hover:text-accent-hover transition-colors py-2 border border-surface rounded-lg hover:border-accent-gold/30"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
