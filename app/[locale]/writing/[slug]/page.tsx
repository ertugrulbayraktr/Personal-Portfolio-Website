import { notFound } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

// This would typically fetch from a CMS or markdown files
// For now, using placeholder content
async function getPost(slug: string) {
  // Placeholder post data
  const posts: Record<string, any> = {
    'system-design-from-trading': {
      title: 'System Design Lessons from Trading',
      date: '2024-01-15',
      readTime: 8,
      category: 'Engineering',
      content: `
# System Design Lessons from Trading

Trading in financial markets has taught me invaluable lessons about building reliable software systems. The parallels between market behavior and distributed systems are striking.

## Risk Management

In trading, you never risk more than you can afford to lose. In system design, this translates to:

- **Circuit breakers**: Prevent cascading failures
- **Bulkheads**: Isolate critical components
- **Graceful degradation**: Maintain core functionality

## Probability Thinking

Markets operate on probabilities, not certainties. This mindset helps in:

- Making architectural decisions under uncertainty
- Planning for edge cases and failure modes
- Building resilient systems that expect and handle failure

## Monitoring and Adaptation

Just as traders constantly monitor positions and adapt to market conditions, engineers must:

- Implement comprehensive monitoring
- Use metrics to make informed decisions
- Be ready to pivot when data suggests a different approach

The key is to embrace uncertainty and build systems that can thrive in unpredictable environments.
      `,
    },
    'resilient-backend-systems': {
      title: 'Building Resilient Backend Systems',
      date: '2024-01-08',
      readTime: 12,
      category: 'Systems',
      content: `
# Building Resilient Backend Systems

Resilience is not about avoiding failures—it's about handling them gracefully. Here are key patterns I've learned.

## Core Principles

1. **Expect failure**: Systems will fail. Plan for it.
2. **Fail fast**: Detect problems quickly and recover
3. **Isolate failures**: Don't let one component take down the entire system

## Practical Patterns

### Retries with Exponential Backoff

\`\`\`csharp
public async Task<T> RetryAsync<T>(Func<Task<T>> operation, int maxAttempts = 3)
{
    for (int i = 0; i < maxAttempts; i++)
    {
        try
        {
            return await operation();
        }
        catch (Exception ex) when (i < maxAttempts - 1)
        {
            await Task.Delay(TimeSpan.FromSeconds(Math.Pow(2, i)));
        }
    }
    throw new Exception("Max retry attempts reached");
}
\`\`\`

### Circuit Breaker Pattern

Prevent repeated calls to failing services. Monitor failure rate and "open" the circuit when threshold is exceeded.

## Monitoring

You can't fix what you can't see:

- Track error rates and latencies
- Set up alerts for anomalies
- Use distributed tracing for debugging

Building resilient systems is a continuous process of learning, monitoring, and improving.
      `,
    },
  };

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
  const post = await getPost(slug);

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
