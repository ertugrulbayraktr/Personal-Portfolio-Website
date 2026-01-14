import { notFound } from 'next/navigation';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

// This would typically fetch from a database or CMS
// For now, using the same data as Projects.tsx
function getProject(slug: string) {
  const projects: Record<string, any> = {
    'distributed-task-queue': {
      title: 'Distributed Task Queue System',
      description: 'Scalable background job processing with Redis and .NET',
      overview: 'This project implements a robust, scalable distributed task queue system designed to handle high-volume background job processing. Built with .NET and Redis, it provides reliable asynchronous task execution with fault tolerance and horizontal scalability.',
      problem: 'Many applications require background processing for time-consuming tasks without blocking the main application flow. Traditional solutions often struggle with reliability, scalability, and monitoring.',
      solution: 'Implemented a message-driven architecture using Redis as a message broker, combined with .NET worker services for processing. The system includes retry logic, dead-letter queues, and comprehensive monitoring.',
      tech: ['C#', '.NET Core', 'Redis', 'Docker', 'Message Queues'],
      features: [
        'Horizontal scalability with multiple worker nodes',
        'Automatic retry with exponential backoff',
        'Dead-letter queue for failed tasks',
        'Real-time monitoring and metrics',
        'Docker containerization for easy deployment',
      ],
      challenges: [
        'Ensuring exactly-once processing semantics',
        'Handling worker failures gracefully',
        'Optimizing Redis connection pooling',
      ],
      github: '#',
      demo: null,
      image: null,
    },
    'ai-content-analyzer': {
      title: 'AI Content Analyzer',
      description: 'FastAPI service for automated content categorization',
      overview: 'An intelligent content analysis service built with FastAPI and OpenAI GPT-4, designed to automatically categorize, analyze sentiment, and extract insights from large volumes of text content.',
      problem: 'Manual content categorization is time-consuming and inconsistent. Organizations need automated solutions to process and understand large amounts of textual data.',
      solution: 'Developed a RESTful API service that integrates GPT-4 with custom preprocessing pipelines to provide accurate content analysis at scale.',
      tech: ['Python', 'FastAPI', 'OpenAI GPT-4', 'PostgreSQL', 'Redis'],
      features: [
        'Multi-category content classification',
        'Sentiment analysis with confidence scores',
        'Key phrase extraction',
        'Batch processing capabilities',
        'Caching layer for improved performance',
      ],
      challenges: [
        'Managing API rate limits and costs',
        'Optimizing prompt engineering for accuracy',
        'Implementing effective caching strategies',
      ],
      github: '#',
      demo: '#',
      image: null,
    },
    // Add more projects as needed
  };

  return projects[slug] || null;
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-full">
      <div className="max-w-content mx-auto px-6 py-16">
        {/* Back Link */}
        <Link
          href="/work"
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
          Back to Work
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-text-primary">
            {project.title}
          </h1>
          <p className="text-xl text-text-secondary leading-loose">
            {project.description}
          </p>
        </div>

        {/* Project Image */}
        {project.image ? (
          <div className="w-full h-96 mb-12 rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-full h-96 bg-surface rounded-lg flex items-center justify-center mb-12 border border-surface">
            <span className="text-text-secondary">[Project Image Placeholder]</span>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                Overview
              </h2>
              <p className="text-text-secondary leading-loose">
                {project.overview}
              </p>
            </section>

            {/* Problem */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                The Problem
              </h2>
              <p className="text-text-secondary leading-loose">
                {project.problem}
              </p>
            </section>

            {/* Solution */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                The Solution
              </h2>
              <p className="text-text-secondary leading-loose">
                {project.solution}
              </p>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature: string, idx: number) => (
                  <li
                    key={idx}
                    className="flex items-start text-text-secondary"
                  >
                    <span className="text-accent-gold mr-3 mt-1">▸</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Challenges */}
            {project.challenges && (
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                  Technical Challenges
                </h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge: string, idx: number) => (
                    <li
                      key={idx}
                      className="flex items-start text-text-secondary"
                    >
                      <span className="text-accent-gold mr-3 mt-1">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Tech Stack */}
              <div className="border border-surface rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-text-primary">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm bg-surface text-text-secondary rounded border border-surface"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="border border-surface rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-text-primary">
                  Project Links
                </h3>
                <div className="space-y-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-accent-gold hover:text-accent-hover transition-colors"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      View on GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-accent-gold hover:text-accent-hover transition-colors"
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
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
