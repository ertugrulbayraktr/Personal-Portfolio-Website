'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Projects() {
  const t = useTranslations('work');
  const locale = useLocale();

  // Placeholder projects - 6 total
  const projectsData = locale === 'tr' ? {
    skinLesion: {
      id: 1,
      slug: 'skin-lesion-classification',
      title: 'Derin Öğrenme Tabanlı Cilt Lezyonu Sınıflandırma Sistemi',
      description: 'Enhanced SE-ResNet ve ACGAN tabanlı veri artırma ile 5 sınıflı dermoskopi görüntü sınıflandırması (%97,23 doğruluk).',
      tech: ['FastAPI', 'PyTorch', 'React', 'Vite', 'OpenCV', 'ACGAN'],
      highlights: [
        'Çok aşamalı SE blokları içeren Enhanced SE-ResNet mimarisi',
        'Azınlık sınıflar için ACGAN tabanlı veri artırma (MEL, AKIEC)',
        'Kıl giderme ve olasılık görselleştirme destekli analiz akışı'
      ],
      github: 'https://github.com/ertugrulbayraktr/Enhancing-Skin-Lesion-Classification-with-GAN-Based-Augmentation-and-Deep-Learning',
      demo: 'https://enhancing-skin-lesion-classificatio.vercel.app/',
      image: '/images/projects/skin-lesion.png',
    }
  } : {
    skinLesion: {
      id: 1,
      slug: 'skin-lesion-classification',
      title: 'Enhancing Skin Lesion Classification Web Application with GAN-Based Augmentation and Deep Learning',
      description: 'Full-stack dermoscopy classification using Enhanced SE-ResNet and ACGAN-based augmentation (5 classes, 97.23% accuracy).',
      tech: ['FastAPI', 'PyTorch', 'React', 'Vite', 'OpenCV', 'ACGAN'],
      highlights: [
        'Enhanced SE-ResNet (multi-stage SE + residual SE connections)',
        'ACGAN augmentation for minority classes (MEL, AKIEC)',
        'Hair artifact removal (black-hat + inpainting) + probability visualization'
      ],
      github: 'https://github.com/ertugrulbayraktr/Enhancing-Skin-Lesion-Classification-with-GAN-Based-Augmentation-and-Deep-Learning',
      demo: 'https://enhancing-skin-lesion-classificatio.vercel.app/',
      image: '/images/projects/skin-lesion.png',
    }
  };

  const airlineData = locale === 'tr' ? {
    id: 2,
    slug: 'airline-ticketing-system',
    title: 'Yapay Zekâ Destekli Havayolu Müşteri Destek Ticketing Sistemi',
    description: 'AI Copilot entegrasyonlu, Clean Architecture tabanlı ve SLA farkındalığına sahip kurumsal havayolu müşteri destek ticketing sistemi.',
    tech: ['ASP.NET Core', 'Clean Architecture', 'SQL Server', 'EF Core', 'AI Copilot', 'RAG'],
    highlights: [
      'Rezervasyon sonrası (post-booking) müşteri destek süreçleri',
      'Domain odaklı Clean Architecture yapısı',
      'Yolcu ve destek ekibi için AI Copilot entegrasyonu'
    ],
    github: '#',
    demo: null,
    image: '/images/projects/airline-ticketing.png',
    imagePosition: 'top',
  } : {
    id: 2,
    slug: 'airline-ticketing-system',
    title: 'Airline Customer Support Ticketing System with AI Copilot',
    description: 'Enterprise-grade airline customer support ticketing backend with AI Copilot, Clean Architecture, and SLA-aware workflows.',
    tech: ['ASP.NET Core', 'Clean Architecture', 'SQL Server', 'EF Core', 'AI Copilot', 'RAG'],
    highlights: [
      'Post-booking airline customer support ticketing system',
      'Clean Architecture with domain-driven design principles',
      'AI Copilot for passenger self-service and agent assistance'
    ],
    github: '#',
    demo: null,
    image: '/images/projects/airline-ticketing.png',
    imagePosition: 'top',
  };

  const ecommerceData = locale === 'tr' ? {
    id: 3,
    slug: 'ecommerce-platform',
    title: 'Full-Stack E-Ticaret Platformu',
    description: 'ASP.NET Core Web API ve React TypeScript ile geliştirilmiş, ölçeklenebilir ve modern bir full-stack e-ticaret uygulaması.',
    tech: ['ASP.NET Core', '.NET 8', 'React', 'TypeScript', 'SQL Server', 'Redis', 'JWT'],
    highlights: [
      'Rol bazlı yetkilendirme ile ürün, kategori ve sipariş yönetimi',
      'JWT tabanlı güvenli kimlik doğrulama ve yetkilendirme',
      'Redis önbellekleme ve Serilog ile performans ve izlenebilirlik'
    ],
    github: '#',
    demo: null,
    image: '/images/projects/ecommerce.png',
  } : {
    id: 3,
    slug: 'ecommerce-platform',
    title: 'Full-Stack E-Commerce Platform',
    description: 'Modern full-stack e-commerce application with ASP.NET Core Web API, React TypeScript, and scalable backend architecture.',
    tech: ['ASP.NET Core', '.NET 8', 'React', 'TypeScript', 'SQL Server', 'Redis', 'JWT'],
    highlights: [
      'Product, category, and order management with role-based access',
      'Secure authentication and authorization using JWT',
      'Performance optimization with Redis caching and structured logging'
    ],
    github: '#',
    demo: null,
    image: '/images/projects/ecommerce.png',
  };

  const taskmasterData = locale === 'tr' ? {
    id: 4,
    slug: 'taskmaster',
    title: 'TaskMaster Proje Yönetim Aracı',
    description: 'Kanban panoları, rol bazlı yetkilendirme ve gerçek zamanlı etkileşimler sunan ekip odaklı proje yönetim web uygulaması.',
    tech: ['Django', 'Python', 'PostgreSQL', 'JavaScript', 'AJAX', 'Bootstrap'],
    highlights: [
      'Rol bazlı yetkilendirme ile çok kullanıcılı ekip çalışması',
      'Sürükle-bırak destekli etkileşimli Kanban panosu',
      'Gerçek zamanlı bildirimler ve AJAX tabanlı kullanıcı deneyimi'
    ],
    github: '#',
    demo: null,
    image: '/images/projects/taskmaster.png',
  } : {
    id: 4,
    slug: 'taskmaster',
    title: 'TaskMaster Project Management Tool',
    description: 'A collaborative project management web application with Kanban boards, role-based access, and real-time interactions.',
    tech: ['Django', 'Python', 'PostgreSQL', 'JavaScript', 'AJAX', 'Bootstrap'],
    highlights: [
      'Multi-user collaboration with role-based access control',
      'Interactive Kanban board with drag-and-drop workflow',
      'Real-time notifications and AJAX-powered user experience'
    ],
    github: '#',
    demo: null,
    image: '/images/projects/taskmaster.png',
  };

  const cryptoTradingData = locale === 'tr' ? {
    id: 5,
    slug: 'crypto-trading-signals',
    title: 'Makine Öğrenmesi Tabanlı Kripto Para Alım-Satım Sinyal Platformu',
    description: 'LSTM ve Random Forest modelleri kullanarak gerçek zamanlı alım-satım sinyalleri üreten yapay zekâ destekli kripto para platformu.',
    tech: ['Python', 'LSTM', 'Random Forest', 'TensorFlow', 'React', 'WebSocket', 'Chart.js'],
    highlights: [
      'LSTM ve Random Forest ile makine öğrenmesi tabanlı trade sinyalleri',
      'WebSocket ile gerçek zamanlı piyasa verileri',
      'Teknik indikatörlü etkileşimli mum grafikler'
    ],
    github: '#',
    demo: null,
    image: '/images/projects/crypto-trading.png',
  } : {
    id: 5,
    slug: 'crypto-trading-signals',
    title: 'Machine Learning–Based Crypto Trading Signal Platform',
    description: 'AI-powered cryptocurrency trading platform generating real-time signals using LSTM and Random Forest models.',
    tech: ['Python', 'LSTM', 'Random Forest', 'TensorFlow', 'React', 'WebSocket', 'Chart.js'],
    highlights: [
      'ML-based trading signal generation (LSTM + Random Forest)',
      'Real-time market data and live updates via WebSocket',
      'Interactive candlestick charts with technical indicators'
    ],
    github: '#',
    demo: null,
    image: '/images/projects/crypto-trading.png',
  };

  const crtBotData = locale === 'tr' ? {
    id: 6,
    slug: 'crt-telegram-bot',
    title: 'Smart Money Concepts & CRT Desen Tespit Telegram Botu',
    description: 'Forex ve kripto piyasaları için Candle Range Theory desenlerini tespit eden ve Telegram üzerinden anlık uyarılar gönderen otomatik trading botu.',
    tech: ['Python', 'Telegram Bot API', 'Trading API\'leri', 'Teknik Analiz', 'Desen Tanıma'],
    highlights: [
      'Candle Range Theory (CRT) desenlerinin otomatik tespiti',
      '4H, 1D ve Weekly zaman dilimlerinde tarama',
      'Giriş, stop-loss ve take-profit içeren risk yönetimli sinyaller'
    ],
    github: '#',
    demo: null,
    image: '/images/projects/crt-bot.png',
  } : {
    id: 6,
    slug: 'crt-telegram-bot',
    title: 'Smart Money Concepts & CRT Pattern Detection Telegram Bot',
    description: 'Automated Forex and crypto trading bot that detects Candle Range Theory patterns and delivers real-time Telegram alerts.',
    tech: ['Python', 'Telegram Bot API', 'Trading APIs', 'Technical Analysis', 'Pattern Recognition'],
    highlights: [
      'Automated detection of Candle Range Theory (CRT) patterns',
      'Multi-timeframe market scanning (4H, 1D, Weekly)',
      'Risk-managed trade alerts with entry, SL, and TP levels'
    ],
    github: '#',
    demo: null,
    image: '/images/projects/crt-bot.png',
  };

  const projects = [
    projectsData.skinLesion,
    airlineData,
    ecommerceData,
    taskmasterData,
    cryptoTradingData,
    crtBotData,
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
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  style={{ objectPosition: project.imagePosition || 'center' }}
                />
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
