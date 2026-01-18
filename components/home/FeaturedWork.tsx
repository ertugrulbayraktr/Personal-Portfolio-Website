'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

export default function FeaturedWork() {
  const t = useTranslations('home.featured_work');
  const locale = useLocale();

  // Placeholder projects - will be replaced with real data
  const projectsData = locale === 'tr' ? {
    skinLesion: {
      id: 1,
      title: 'Derin Öğrenme Tabanlı Cilt Lezyonu Sınıflandırma Sistemi',
      problem: 'Sınırlı ve dengesiz tıbbi görüntü verisi ile doğru cilt lezyonu sınıflandırması',
      approach: 'Azınlık sınıflar için ACGAN tabanlı veri artırma ile Enhanced SE-ResNet kullanan full-stack uygulama geliştirildi, %97,23 doğruluk elde edildi',
      tags: ['FastAPI', 'PyTorch', 'React', 'ACGAN'],
      slug: 'skin-lesion-classification',
      image: '/images/projects/skin-lesion.png',
      imagePosition: 'center',
    }
  } : {
    skinLesion: {
      id: 1,
      title: 'Enhanced Skin Lesion Classification Web Application with GAN-Based Augmentation and Deep Learning',
      problem: 'Accurate skin lesion classification with limited and imbalanced medical imaging data',
      approach: 'Developed full-stack application using Enhanced SE-ResNet with ACGAN-based augmentation for minority classes, achieving 97.23% accuracy',
      tags: ['FastAPI', 'PyTorch', 'React', 'ACGAN'],
      slug: 'skin-lesion-classification',
      image: '/images/projects/skin-lesion.png',
      imagePosition: 'center',
    }
  };

  const airlineData = locale === 'tr' ? {
    id: 2,
    title: 'Yapay Zekâ Destekli Havayolu Müşteri Destek Ticketing Sistemi',
    problem: 'Havayolu rezervasyon sonrası müşteri destek süreçlerinin otomasyonu ve verimliliği',
    approach: 'Clean Architecture ve domain-driven design prensipleriyle geliştirilmiş, AI Copilot ve RAG teknolojileri ile desteklenen kurumsal ticketing sistemi',
    tags: ['ASP.NET Core', 'Clean Architecture', 'SQL Server', 'AI Copilot'],
    slug: 'airline-ticketing-system',
    image: '/images/projects/airline-ticketing.png',
    imagePosition: 'top',
  } : {
    id: 2,
    title: 'Airline Customer Support Ticketing System with AI Copilot',
    problem: 'Post-booking airline customer support process automation and efficiency',
    approach: 'Enterprise ticketing system built with Clean Architecture and domain-driven design, enhanced with AI Copilot and RAG technologies',
    tags: ['ASP.NET Core', 'Clean Architecture', 'SQL Server', 'AI Copilot'],
    slug: 'airline-ticketing-system',
    image: '/images/projects/airline-ticketing.png',
    imagePosition: 'top',
  };

  const featuredProjects = [
    projectsData.skinLesion,
    airlineData,
  ];

  return (
    <section className="max-w-content mx-auto px-6 py-12">
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

      <div className="grid md:grid-cols-2 gap-8">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className="group border border-surface rounded-lg overflow-hidden hover:border-accent-gold/30 transition-all"
          >
            {/* Project Image */}
            <div className="w-full h-64 bg-surface flex items-center justify-center text-text-secondary border-b border-surface">
              {project.image ? (
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={1200}
                  height={400}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: project.imagePosition || 'center' }}
                />
              ) : (
                <span className="text-sm">[Proje Görseli]</span>
              )}
            </div>

            {/* Project Content */}
            <div className="p-8">
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
                href={`/work/${project.slug}`}
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
          </div>
        ))}
      </div>
    </section>
  );
}
