import { notFound } from 'next/navigation';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

// This would typically fetch from a database or CMS
// For now, using the same data as Projects.tsx
function getProject(slug: string, locale: string) {
  const projectsEn: Record<string, any> = {
    'skin-lesion-classification': {
      title: 'Enhancing Skin Lesion Classification Web Application with GAN-Based Augmentation and Deep Learning',
      description: 'Full-stack dermoscopy classification using Enhanced SE-ResNet and ACGAN-based augmentation (5 classes, 97.23% accuracy).',
      overview: 'An intelligent full-stack web application for classifying dermoscopy images into 5 skin lesion categories. The system combines an Enhanced SE-ResNet architecture with ACGAN-based data augmentation to address class imbalance and achieves 97.23% accuracy on the HAM10000 dataset.',
      problem: 'Skin lesion datasets suffer from severe class imbalance and image artifacts (e.g. hair), which significantly reduce model performance—especially for critical minority classes such as melanoma.',
      solution: 'Enhanced SE-ResNet50 with multi-stage SE blocks across all ResNet layers • ACGAN-based augmentation to generate class-conditional samples for minority classes (MEL, AKIEC) • Image preprocessing using black-hat transform and inpainting for hair removal • FastAPI backend + React frontend for real-time inference and visualization',
      tech: ['FastAPI', 'PyTorch', 'React', 'Vite', 'OpenCV', 'ACGAN', 'Tailwind CSS'],
      features: [
        '5-class lesion classification (NV, MEL, BKL, BCC, AKIEC)',
        'Minority class performance improvement via GAN augmentation',
        'Before/after hair removal visualization',
        'Probability distribution charts for predictions',
        'Fast inference suitable for interactive web usage',
      ],
      architecture: 'Frontend: React + Vite + Tailwind • Backend: FastAPI (REST), PyTorch inference service • ML Pipeline: Preprocessing → Enhanced SE-ResNet → Prediction • Deployment: Production-ready API with validation and auto-documentation',
      performance: [
        'Accuracy: 97.23%',
        'Macro F1: 95.39%',
        'Macro Precision: 95.83%',
        'Macro Recall: 94.99%',
      ],
      contribution: 'Full-stack web application development (React UI + FastAPI backend) • Inference API design and efficient model loading strategy • Integration of preprocessing, prediction, and visualization pipeline • Deployment, documentation, and live demo setup • (Model research & training conducted in collaboration.)',
      legalNotice: 'Educational and research purposes only. Not a medical device.',
      github: 'https://github.com/ertugrulbayraktr/Enhancing-Skin-Lesion-Classification-with-GAN-Based-Augmentation-and-Deep-Learning',
      demo: 'https://enhancing-skin-lesion-classificatio.vercel.app/',
      image: '/images/projects/skin-lesion-detail.png',
    },
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
    'airline-ticketing-system': {
      title: 'Airline Customer Support Ticketing System with AI Copilot',
      description: 'Enterprise-grade airline customer support ticketing backend with AI Copilot, Clean Architecture, and SLA-aware workflows.',
      overview: 'An enterprise-grade backend system designed to manage post-booking airline customer support operations. The platform handles passenger issues such as delays, cancellations, baggage problems, and refund requests, and is enhanced with an AI Copilot to support both passengers and customer support agents.',
      problem: 'Airline customer support teams handle high volumes of requests that require:\n\nAccurate flight and reservation context (PNR-based) • Proper prioritization and SLA tracking • Consistent and policy-compliant responses • Efficient agent workflows\n\nTraditional ticketing systems are largely manual and context-poor, resulting in slow response times and inconsistent handling.',
      solution: 'Clean Architecture–based backend with clear separation of concerns • Domain-driven ticket lifecycle with strict state transitions and audit logging • PNR-aware flight and reservation context for accurate categorization and prioritization • AI Copilot integration to assist passengers and agents with context-aware guidance • Background processing for SLA monitoring and escalation',
      tech: ['ASP.NET Core', 'Clean Architecture', 'SQL Server', 'EF Core', 'AI Copilot', 'RAG', 'JWT'],
      features: [
        'Role-based access (Passenger, Support Agent, Admin)',
        'Controlled ticket lifecycle with audit trail',
        'SLA monitoring and priority escalation',
        'AI-assisted ticket creation and response drafting',
        'Knowledge base powered by RAG for policy consistency',
      ],
      architecture: 'Backend: ASP.NET Core Web API (.NET 8/9) • Architecture: Clean Architecture + Domain-Driven Design • Data: SQL Server, Entity Framework Core • AI Layer: LLM-based Copilot with RAG-enabled knowledge base • Background Services: SLA monitoring and notifications • Security: JWT authentication, role & policy-based authorization',
      contribution: 'Designed and implemented the backend using Clean Architecture principles • Modeled the ticketing domain, lifecycle rules, and role-based permissions • Implemented PNR-based flight and reservation context handling • Integrated AI Copilot for passenger self-service and agent decision support • Built background services for SLA monitoring and escalation • Prepared seeded data and API documentation for realistic demo scenarios',
      github: '#',
      demo: null,
      image: null,
    },
    'ecommerce-platform': {
      title: 'Full-Stack E-Commerce Platform',
      description: 'Modern full-stack e-commerce application with ASP.NET Core Web API, React TypeScript, and scalable backend architecture.',
      overview: 'A modern full-stack e-commerce application designed to deliver a seamless online shopping experience. The backend is powered by ASP.NET Core Web API (.NET 8), while the frontend is built with React and TypeScript, focusing on scalability, security, and performance.',
      problem: 'E-commerce platforms must support:\n\nSecure authentication and role-based access • Efficient product discovery (search, filter, sort) • Reliable cart and order workflows • High performance under read-heavy traffic • Maintainable and well-documented APIs',
      solution: 'ASP.NET Core Web API backend with layered architecture • JWT-based authentication and role-based authorization • Redis caching for frequently accessed data • Entity Framework Core + SQL Server for data persistence • Swagger/OpenAPI for API documentation and testing • Serilog for structured logging and observability',
      tech: ['ASP.NET Core', '.NET 8', 'React', 'TypeScript', 'SQL Server', 'EF Core', 'Redis', 'JWT', 'Serilog'],
      features: [
        'Product and category management for administrators',
        'Shopping cart with quantity updates and order processing',
        'Secure user registration and login with JWT',
        'Advanced search, sorting, and filtering',
        'Redis-based caching for performance optimization',
        'Structured logging and monitoring with Serilog',
      ],
      architecture: 'Backend: ASP.NET Core Web API (.NET 8) • Frontend: React + TypeScript • Data: SQL Server, Entity Framework Core • Caching: Redis • Security: JWT authentication & role-based authorization • Docs: Swagger / OpenAPI',
      contribution: 'Developed the full-stack application using ASP.NET Core Web API and React TypeScript • Implemented authentication, authorization, and role management with JWT • Designed product, category, cart, and order workflows • Integrated Redis caching and structured logging with Serilog • Documented APIs with Swagger/OpenAPI',
      github: '#',
      demo: null,
      image: null,
    },
    'taskmaster': {
      title: 'TaskMaster Project Management Tool',
      description: 'A collaborative project management web application with Kanban boards, role-based access, and real-time interactions.',
      overview: 'A collaborative project management web application designed to help teams plan, track, and coordinate work efficiently. The system provides an interactive Kanban board, role-based access control, and real-time notifications to support day-to-day project workflows.',
      problem: 'Teams need a centralized tool to:\n\nTrack tasks and project progress visually • Collaborate with clear roles and permissions • Receive timely updates without page reloads • Manage relationships between users, teams, projects, and tasks\n\nTraditional tools often lack flexibility or require complex setups for small to mid-sized teams.',
      solution: 'Django-based web application leveraging Django ORM for complex relational models • Interactive Kanban board with drag-and-drop task management • Role-based access control for team and project permissions • AJAX-powered interactions for seamless, real-time user experience • Responsive UI for cross-platform compatibility',
      tech: ['Django', 'Python', 'PostgreSQL', 'JavaScript', 'jQuery', 'AJAX', 'Bootstrap'],
      features: [
        'Multi-user collaboration with role-based permissions',
        'Drag-and-drop Kanban board for task workflow management',
        'Team creation and project assignment',
        'Progress tracking and task monitoring',
        'Real-time notification system',
        'AJAX-driven updates without full page reloads',
      ],
      architecture: 'Backend: Django (Python), Django ORM • Frontend: HTML, CSS, JavaScript, jQuery, Bootstrap • Database: PostgreSQL • Interaction: AJAX for dynamic UI updates • Auth: Django authentication with role-based access control',
      contribution: 'Designed and developed the full web application using Django • Modeled relational data structures for users, teams, projects, and tasks • Implemented role-based access control and permission rules • Built the Kanban board with drag-and-drop and AJAX interactions • Implemented notification logic and responsive UI components',
      github: 'https://github.com/ertugrulbayraktr/cs50w-finalproject-TaskMaster',
      demo: null,
      image: '/images/projects/taskmaster-detail.png',
    },
    'crypto-trading-signals': {
      title: 'Machine Learning–Based Crypto Trading Signal Platform',
      description: 'AI-powered cryptocurrency trading platform generating real-time signals using LSTM and Random Forest models.',
      overview: 'An AI-powered cryptocurrency trading platform that generates real-time trading signals using machine learning models. The system analyzes BTC/USDT market data with LSTM neural networks and Random Forest models, and presents insights through an interactive React-based dashboard.',
      problem: 'Crypto markets are highly volatile and require:\n\nTimely analysis of price movements • Signal generation based on historical and real-time data • Clear visualization of indicators and trends • Low-latency updates for decision-making\n\nManual analysis struggles to scale across multiple assets and short timeframes.',
      solution: 'Machine learning pipeline combining LSTM (temporal patterns) and Random Forest (feature-based signals) • REST API for model inference and data delivery • WebSocket-based live updates for near real-time market refresh • React frontend with candlestick charts and technical indicators',
      tech: ['Python', 'LSTM', 'Random Forest', 'TensorFlow', 'React', 'JavaScript', 'Chart.js', 'WebSocket'],
      features: [
        'ML-based trading signal generation (LSTM + Random Forest)',
        'BTC/USDT price movement analysis and predictions',
        'Real-time market data for top 20 cryptocurrencies',
        'Automatic updates every 3 minutes',
        'Interactive candlestick charts with technical indicators',
        'Responsive React UI for desktop and mobile',
      ],
      architecture: 'Backend: Python ML services (TensorFlow), REST API • Models: LSTM for sequence modeling, Random Forest for classification/regression • Frontend: React, JavaScript, Chart.js • Realtime: WebSocket for live market updates • Data: Market price feeds and derived technical features',
      contribution: 'Designed and implemented the ML pipeline using LSTM and Random Forest • Built the REST API for signal generation and data access • Integrated WebSocket-based live data updates • Developed the React frontend with interactive charts and indicators • Connected model outputs to a user-facing trading signal dashboard',
      github: '#',
      demo: null,
      image: null,
    },
    'crt-telegram-bot': {
      title: 'Smart Money Concepts & CRT Pattern Detection Telegram Bot',
      description: 'Automated Forex and crypto trading bot that detects Candle Range Theory patterns and delivers real-time Telegram alerts.',
      overview: 'An advanced trading automation tool that scans Forex and Cryptocurrency markets to detect Candle Range Theory (CRT) patterns across multiple timeframes. The system automatically calculates entry, stop-loss, and take-profit levels with predefined risk/reward ratios and delivers instant alerts via Telegram notifications.',
      problem: 'Manual pattern detection in financial markets:\n\nIs time-consuming and error-prone • Requires constant chart monitoring • Makes consistent risk management difficult • Does not scale across multiple assets and timeframes',
      solution: 'Automated market scanning engine for CRT pattern detection • Multi-timeframe analysis (4H, Daily, Weekly) • Risk-managed signal generation with predefined R:R rules • Telegram Bot integration for instant and reliable alerts • Modular Python architecture for extensibility and data source integration',
      tech: ['Python', 'Telegram Bot API', 'Trading APIs', 'Technical Analysis', 'Pattern Recognition'],
      features: [
        'Automatic detection of Candle Range Theory patterns',
        'Multi-timeframe scanning (4H, 1D, Weekly)',
        'Entry, stop-loss, and take-profit calculation',
        'Real-time Telegram trade alerts',
        'Designed for both Forex and Cryptocurrency markets',
      ],
      architecture: 'Core Logic: Python-based pattern recognition engine • Market Data: Trading APIs (Forex & Crypto) • Signal Engine: CRT detection + risk management rules • Notification: Telegram Bot API • Design: Modular and extensible architecture',
      contribution: 'Designed and implemented the CRT pattern detection logic • Built the risk management engine for trade level calculation • Integrated Forex and crypto market data sources • Implemented Telegram Bot for real-time alert delivery • Designed the system with modular and extensible architecture',
      github: '#',
      demo: null,
      image: null,
    },
    // Add more projects as needed
  };

  const projectsTr: Record<string, any> = {
    'skin-lesion-classification': {
      title: 'Derin Öğrenme Tabanlı Cilt Lezyonu Sınıflandırma Sistemi',
      description: 'Enhanced SE-ResNet ve ACGAN tabanlı veri artırma kullanılarak geliştirilen full-stack dermoskopi sınıflandırma sistemi (5 sınıf, %97,23 doğruluk).',
      overview: 'Dermoskopi görüntülerini 5 farklı cilt lezyonu kategorisine ayırmak üzere geliştirilmiş, yapay zekâ destekli bir full-stack web uygulamasıdır. Sistem, sınıf dengesizliği problemini ele almak amacıyla Enhanced SE-ResNet mimarisi ile ACGAN tabanlı veri artırma yaklaşımını birleştirir ve HAM10000 veri seti üzerinde %97,23 doğruluk elde eder.',
      problem: 'Cilt lezyonu veri setleri, özellikle melanoma gibi kritik sınıflarda ciddi sınıf dengesizliği ve görüntü artefaktları (ör. kıl) içermektedir. Bu durum, model performansını ve özellikle azınlık sınıflardaki doğruluğu önemli ölçüde düşürmektedir.',
      solution: 'Tüm ResNet katmanlarına entegre edilmiş çok aşamalı SE blokları içeren Enhanced SE-ResNet50 • Azınlık sınıflar (MEL, AKIEC) için sınıfa koşullu örnek üretimi sağlayan ACGAN tabanlı veri artırma • Kıl artefaktlarını azaltmak için black-hat dönüşümü ve inpainting ile görüntü ön işleme • Gerçek zamanlı çıkarım ve görselleştirme için FastAPI backend + React frontend',
      tech: ['FastAPI', 'PyTorch', 'React', 'Vite', 'OpenCV', 'ACGAN', 'Tailwind CSS'],
      features: [
        '5 sınıflı cilt lezyonu sınıflandırması (NV, MEL, BKL, BCC, AKIEC)',
        'GAN tabanlı veri artırma ile azınlık sınıf performansının iyileştirilmesi',
        'Kıl giderme işlemi için önce/sonra görselleştirme',
        'Tahmin sonuçları için olasılık dağılımı grafikleri',
        'Etkileşimli kullanım için hızlı çıkarım süresi',
      ],
      architecture: 'Frontend: React + Vite + Tailwind • Backend: FastAPI (REST), PyTorch çıkarım servisi • ML Pipeline: Ön işleme → Enhanced SE-ResNet → Tahmin • Dağıtım: Doğrulama ve otomatik dokümantasyon içeren üretim-hazır API',
      performance: [
        'Doğruluk (Accuracy): %97,23',
        'Makro F1 Skoru: %95,39',
        'Makro Precision: %95,83',
        'Makro Recall: %94,99',
      ],
      contribution: 'Full-stack web uygulaması geliştirme (React arayüzü + FastAPI backend) • Çıkarım API\'sinin tasarımı ve verimli model yükleme stratejisinin uygulanması • Ön işleme, tahmin ve görselleştirme hattının entegrasyonu • Dağıtım, dokümantasyon ve canlı demo kurulumunun gerçekleştirilmesi • (Model araştırması ve eğitimi iş birliği içinde yürütülmüştür.)',
      legalNotice: 'Bu proje yalnızca eğitim ve araştırma amaçlıdır. Tıbbi bir cihaz değildir.',
      github: 'https://github.com/ertugrulbayraktr/Enhancing-Skin-Lesion-Classification-with-GAN-Based-Augmentation-and-Deep-Learning',
      demo: 'https://enhancing-skin-lesion-classificatio.vercel.app/',
      image: '/images/projects/skin-lesion-detail.png',
    },
    'distributed-task-queue': {
      title: 'Distributed Task Queue System',
      description: 'Redis ve .NET ile ölçeklenebilir arka plan iş işleme',
      overview: 'Yüksek hacimli arka plan iş işleme için tasarlanmış sağlam, ölçeklenebilir dağıtık görev kuyruğu sistemi. .NET ve Redis ile oluşturulmuş, hata toleransı ve yatay ölçeklenebilirlik ile güvenilir asenkron görev yürütme sağlar.',
      problem: 'Birçok uygulama, ana uygulama akışını engellemeden zaman alan görevler için arka plan işleme gerektirir. Geleneksel çözümler genellikle güvenilirlik, ölçeklenebilirlik ve izleme konularında zorlanır.',
      solution: 'Redis\'i mesaj aracısı olarak kullanarak mesaj odaklı mimari uygulandı, işleme için .NET worker servisleri ile birleştirildi. Sistem, yeniden deneme mantığı, dead-letter kuyrukları ve kapsamlı izleme içerir.',
      tech: ['C#', '.NET Core', 'Redis', 'Docker', 'Message Queues'],
      features: [
        'Birden fazla worker node ile yatay ölçeklenebilirlik',
        'Üstel geri çekilme ile otomatik yeniden deneme',
        'Başarısız görevler için dead-letter kuyruğu',
        'Gerçek zamanlı izleme ve metrikler',
        'Kolay dağıtım için Docker konteynerizasyonu',
      ],
      challenges: [
        'Tam bir kez işleme semantiklerini sağlama',
        'Worker hatalarını zarif bir şekilde yönetme',
        'Redis bağlantı havuzu optimizasyonu',
      ],
      github: '#',
      demo: null,
      image: null,
    },
    'airline-ticketing-system': {
      title: 'Yapay Zekâ Destekli Havayolu Müşteri Destek Ticketing Sistemi',
      description: 'AI Copilot entegrasyonlu, Clean Architecture tabanlı ve SLA farkındalığına sahip kurumsal havayolu müşteri destek ticketing sistemi.',
      overview: 'Rezervasyon sonrası (post-booking) havayolu müşteri destek süreçlerini yönetmek üzere tasarlanmış, kurumsal ölçekli bir backend sistemidir. Sistem; uçuş gecikmeleri, iptaller, bagaj problemleri ve iade talepleri gibi yolcu sorunlarını ele alır ve yolcular ile müşteri temsilcilerini desteklemek amacıyla bir AI Copilot ile güçlendirilmiştir.',
      problem: 'Havayolu müşteri destek ekipleri, aşağıdaki gereksinimlere sahip yüksek hacimli taleplerle çalışır:\n\nDoğru uçuş ve rezervasyon bağlamı (PNR bazlı) • Önceliklendirme ve SLA takibi • Politikalara uygun ve tutarlı yanıtlar • Verimli temsilci iş akışları\n\nGeleneksel ticketing sistemleri genellikle manuel ve bağlamdan yoksundur; bu da yavaş geri dönüşlere ve tutarsız çözümlere yol açar.',
      solution: 'Net katman ayrımı sağlayan Clean Architecture tabanlı backend • Katı durum geçiş kuralları ve denetim kayıtları içeren domain odaklı ticket yaşam döngüsü • Doğru önceliklendirme için PNR bazlı uçuş ve rezervasyon bağlamı • Yolcu ve temsilcilere karar destek sunan AI Copilot entegrasyonu • SLA takibi ve eskalasyon için arka plan işlemleri',
      tech: ['ASP.NET Core', 'Clean Architecture', 'SQL Server', 'EF Core', 'AI Copilot', 'RAG', 'JWT'],
      features: [
        'Rol bazlı erişim (Yolcu, Destek Temsilcisi, Admin)',
        'Denetim kayıtlı, kontrollü ticket yaşam döngüsü',
        'SLA izleme ve öncelik eskalasyonu',
        'AI destekli ticket oluşturma ve yanıt taslakları',
        'Politika tutarlılığı için RAG tabanlı bilgi bankası',
      ],
      architecture: 'Backend: ASP.NET Core Web API (.NET 8/9) • Mimari: Clean Architecture + Domain-Driven Design • Veri: SQL Server, Entity Framework Core • AI Katmanı: RAG destekli LLM tabanlı Copilot • Arka Plan Servisleri: SLA izleme ve bildirimler • Güvenlik: JWT kimlik doğrulama, rol ve politika bazlı yetkilendirme',
      contribution: 'Clean Architecture prensipleriyle backend tasarımı ve geliştirilmesi • Ticket domain modelinin, yaşam döngüsünün ve yetkilendirme kurallarının oluşturulması • PNR bazlı uçuş ve rezervasyon bağlamının sisteme entegrasyonu • Yolcu ve temsilci tarafı için AI Copilot entegrasyonu • SLA izleme ve eskalasyon süreçleri için arka plan servislerinin geliştirilmesi • Gerçekçi demo senaryoları için seed data ve API dokümantasyonunun hazırlanması',
      github: '#',
      demo: null,
      image: null,
    },
    'ecommerce-platform': {
      title: 'Full-Stack E-Ticaret Platformu',
      description: 'ASP.NET Core Web API ve React TypeScript ile geliştirilmiş, ölçeklenebilir ve modern bir full-stack e-ticaret uygulaması.',
      overview: 'Kullanıcılara kesintisiz bir çevrim içi alışveriş deneyimi sunmak amacıyla geliştirilmiş modern bir full-stack e-ticaret uygulamasıdır. Backend tarafında ASP.NET Core Web API (.NET 8), frontend tarafında ise React ve TypeScript kullanılarak ölçeklenebilir, güvenli ve performans odaklı bir yapı oluşturulmuştur.',
      problem: 'E-ticaret sistemleri aşağıdaki gereksinimleri karşılamalıdır:\n\nGüvenli kimlik doğrulama ve rol bazlı yetkilendirme • Gelişmiş ürün arama, filtreleme ve sıralama • Güvenilir sepet ve sipariş akışları • Yoğun okuma trafiği altında yüksek performans • Bakımı kolay ve iyi dokümante edilmiş API\'ler',
      solution: 'Katmanlı yapıya sahip ASP.NET Core Web API backend • JWT tabanlı kimlik doğrulama ve rol bazlı yetkilendirme • Sık erişilen veriler için Redis önbellekleme • Entity Framework Core + SQL Server ile veri yönetimi • Test ve entegrasyon için Swagger/OpenAPI dokümantasyonu • Serilog ile yapılandırılmış loglama ve izlenebilirlik',
      tech: ['ASP.NET Core', '.NET 8', 'React', 'TypeScript', 'SQL Server', 'EF Core', 'Redis', 'JWT', 'Serilog'],
      features: [
        'Yönetici tarafı için ürün ve kategori yönetimi',
        'Miktar güncellemeli alışveriş sepeti ve sipariş işlemleri',
        'JWT ile güvenli kullanıcı kayıt ve giriş sistemi',
        'Gelişmiş arama, sıralama ve filtreleme',
        'Performans için Redis önbellekleme',
        'Serilog ile loglama ve izleme',
      ],
      architecture: 'Backend: ASP.NET Core Web API (.NET 8) • Frontend: React + TypeScript • Veri: SQL Server, Entity Framework Core • Önbellek: Redis • Güvenlik: JWT ve rol bazlı yetkilendirme • Dokümantasyon: Swagger / OpenAPI',
      contribution: 'ASP.NET Core Web API ve React TypeScript kullanarak full-stack geliştirme • JWT tabanlı kimlik doğrulama ve rol yönetimi • Ürün, kategori, sepet ve sipariş akışlarının tasarımı • Redis önbellekleme ve Serilog loglama entegrasyonu • Swagger/OpenAPI ile API dokümantasyonu',
      github: '#',
      demo: null,
      image: null,
    },
    'taskmaster': {
      title: 'TaskMaster Proje Yönetim Aracı',
      description: 'Kanban panoları, rol bazlı yetkilendirme ve gerçek zamanlı etkileşimler sunan ekip odaklı proje yönetim web uygulaması.',
      overview: 'Ekiplerin projeleri planlamasını, görevleri takip etmesini ve iş birliği içinde çalışmasını sağlamak amacıyla geliştirilmiş bir proje yönetim web uygulamasıdır. Sistem; etkileşimli Kanban panosu, rol bazlı yetkilendirme ve gerçek zamanlı bildirimler sunarak günlük proje akışlarını destekler.',
      problem: 'Ekiplerin aşağıdaki ihtiyaçları vardır:\n\nGörev ve proje ilerlemesini görsel olarak takip edebilmek • Net rol ve yetkilerle ekip içi iş birliği sağlamak • Sayfa yenilemeye gerek kalmadan anlık güncellemeler almak • Kullanıcılar, ekipler, projeler ve görevler arasındaki ilişkileri yönetmek\n\nMevcut araçlar çoğu zaman küçük ve orta ölçekli ekipler için ya fazla karmaşık ya da yetersiz kalmaktadır.',
      solution: 'Karmaşık ilişkisel veri yapıları için Django ORM kullanan web uygulaması • Görevlerin sürükle-bırak ile yönetilebildiği Kanban panosu • Ekip ve proje bazlı rol tabanlı yetkilendirme • Akıcı kullanıcı deneyimi için AJAX tabanlı etkileşimler • Farklı cihazlar için responsive arayüz',
      tech: ['Django', 'Python', 'PostgreSQL', 'JavaScript', 'jQuery', 'AJAX', 'Bootstrap'],
      features: [
        'Rol bazlı yetkilendirme ile çok kullanıcılı ekip çalışması',
        'Sürükle-bırak destekli Kanban görev yönetimi',
        'Ekip oluşturma ve proje yönetimi',
        'Görev ilerleme takibi',
        'Gerçek zamanlı bildirim sistemi',
        'Sayfa yenilemeden çalışan AJAX tabanlı güncellemeler',
      ],
      architecture: 'Backend: Django (Python), Django ORM • Frontend: HTML, CSS, JavaScript, jQuery, Bootstrap • Veritabanı: PostgreSQL • Etkileşim: AJAX ile dinamik kullanıcı arayüzü • Güvenlik: Django authentication ve rol bazlı yetkilendirme',
      contribution: 'Django kullanarak uçtan uca web uygulamasının geliştirilmesi • Kullanıcı, ekip, proje ve görevler için ilişkisel veri modellerinin tasarlanması • Rol bazlı yetkilendirme ve erişim kurallarının uygulanması • Kanban panosu ve AJAX tabanlı kullanıcı etkileşimlerinin geliştirilmesi • Bildirim mekanizması ve responsive arayüz bileşenlerinin oluşturulması',
      github: 'https://github.com/ertugrulbayraktr/cs50w-finalproject-TaskMaster',
      demo: null,
      image: '/images/projects/taskmaster-detail.png',
    },
    'crypto-trading-signals': {
      title: 'Makine Öğrenmesi Tabanlı Kripto Para Alım-Satım Sinyal Platformu',
      description: 'LSTM ve Random Forest modelleri kullanarak gerçek zamanlı alım-satım sinyalleri üreten yapay zekâ destekli kripto para platformu.',
      overview: 'Makine öğrenmesi modelleri kullanarak gerçek zamanlı alım-satım sinyalleri üreten yapay zekâ destekli bir kripto para platformudur. Sistem, BTC/USDT piyasa verilerini LSTM sinir ağları ve Random Forest modelleri ile analiz eder ve sonuçları etkileşimli bir React arayüzünde sunar.',
      problem: 'Kripto para piyasaları yüksek oynaklığa sahiptir ve:\n\nFiyat hareketlerinin hızlı analizini • Tarihsel ve gerçek zamanlı veriye dayalı sinyal üretimini • Teknik indikatörlerin net görselleştirilmesini • Düşük gecikmeli veri güncellemelerini\n\ngerektirir. Manuel analiz bu ihtiyaçları sürekli ve ölçekli şekilde karşılamakta yetersiz kalır.',
      solution: 'Zaman serisi örüntülerini yakalamak için LSTM, özellik tabanlı sinyaller için Random Forest kullanan ML pipeline • Model çıktıları için REST API • Anlık piyasa güncellemeleri için WebSocket entegrasyonu • Mum grafikler ve indikatörler içeren React tabanlı arayüz',
      tech: ['Python', 'LSTM', 'Random Forest', 'TensorFlow', 'React', 'JavaScript', 'Chart.js', 'WebSocket'],
      features: [
        'LSTM ve Random Forest ile makine öğrenmesi tabanlı trade sinyalleri',
        'BTC/USDT fiyat hareketi analizi ve tahminler',
        'İlk 20 kripto para için gerçek zamanlı piyasa verisi',
        '3 dakikada bir otomatik güncellenen analizler',
        'Teknik indikatörlü etkileşimli mum grafikler',
        'Responsive ve modern kullanıcı arayüzü',
      ],
      architecture: 'Backend: Python ML servisleri (TensorFlow), REST API • Modeller: LSTM (zaman serisi), Random Forest (sınıflandırma/regresyon) • Frontend: React, JavaScript, Chart.js • Gerçek Zamanlı: WebSocket ile canlı veri akışı • Veri: Piyasa fiyatları ve türetilmiş teknik göstergeler',
      contribution: 'LSTM ve Random Forest modelleri ile ML pipeline\'ın tasarlanması ve geliştirilmesi • Alım-satım sinyalleri için REST API\'nin oluşturulması • WebSocket tabanlı canlı veri güncellemelerinin entegrasyonu • Teknik indikatörler içeren React arayüzünün geliştirilmesi • Model çıktılarının kullanıcıya yönelik sinyal panosuna bağlanması',
      github: '#',
      demo: null,
      image: null,
    },
    'crt-telegram-bot': {
      title: 'Smart Money Concepts & CRT Desen Tespit Telegram Botu',
      description: 'Forex ve kripto piyasaları için Candle Range Theory desenlerini tespit eden ve Telegram üzerinden anlık uyarılar gönderen otomatik trading botu.',
      overview: 'Forex ve kripto para piyasalarını tarayarak Candle Range Theory (CRT) desenlerini tespit eden gelişmiş bir trading otomasyon aracıdır. Sistem, tanımlı risk/ödül oranlarına göre giriş, stop-loss ve take-profit seviyelerini otomatik olarak hesaplar ve Telegram üzerinden anlık bildirimler gönderir.',
      problem: 'Finansal piyasalarda manuel desen tespiti:\n\nZaman alıcıdır ve hata payı yüksektir • Sürekli grafik takibi gerektirir • Tutarlı risk yönetimini zorlaştırır • Birden fazla varlık ve zaman diliminde ölçeklenemez',
      solution: 'CRT desenlerini tespit eden otomatik piyasa tarama motoru • 4H, Günlük ve Haftalık zaman dilimlerinde analiz • Önceden tanımlı risk/ödül kuralları ile risk yönetimli sinyal üretimi • Güvenilir ve hızlı bildirimler için Telegram Bot entegrasyonu • Genişletilebilir modüler Python mimarisi',
      tech: ['Python', 'Telegram Bot API', 'Trading API\'leri', 'Teknik Analiz', 'Desen Tanıma'],
      features: [
        'Candle Range Theory (CRT) desenlerinin otomatik tespiti',
        'Çoklu zaman dilimlerinde piyasa taraması',
        'Giriş, stop-loss ve take-profit hesaplamaları',
        'Gerçek zamanlı Telegram trade bildirimleri',
        'Forex ve kripto para piyasaları için uyumlu yapı',
      ],
      architecture: 'Çekirdek Mantık: Python tabanlı desen tanıma motoru • Piyasa Verisi: Forex ve kripto trading API\'leri • Sinyal Motoru: CRT tespiti + risk yönetimi kuralları • Bildirim: Telegram Bot API • Tasarım: Modüler ve genişletilebilir yapı',
      contribution: 'CRT desen tespit algoritmasının tasarlanması ve geliştirilmesi • Trade seviyeleri için risk yönetimi motorunun oluşturulması • Forex ve kripto veri kaynaklarının entegrasyonu • Telegram Bot üzerinden anlık uyarı sisteminin geliştirilmesi • Modüler ve sürdürülebilir sistem mimarisinin tasarlanması',
      github: '#',
      demo: null,
      image: null,
    },
  };

  const projects = locale === 'tr' ? projectsTr : projectsEn;
  return projects[slug] || null;
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = getProject(slug, locale);

  if (!project) {
    notFound();
  }

  const labels = locale === 'tr' ? {
    backToWork: 'Çalışmalara Dön',
    overview: 'Genel Bakış',
    problem: 'Problem',
    solution: 'Çözüm',
    keyFeatures: 'Temel Özellikler',
    architecture: 'Mimari',
    performance: 'Performans',
    contribution: 'Katkılarım',
    legalNotice: 'Yasal Uyarı',
    challenges: 'Teknik Zorluklar',
    techUsed: 'Kullanılan Teknolojiler',
    projectLinks: 'Proje Linkleri',
    viewGithub: 'GitHub\'da Görüntüle',
    liveDemo: 'Canlı Demo',
  } : {
    backToWork: 'Back to Work',
    overview: 'Overview',
    problem: 'The Problem',
    solution: 'The Solution',
    keyFeatures: 'Key Features',
    architecture: 'Architecture',
    performance: 'Performance',
    contribution: 'My Contribution',
    legalNotice: 'Legal Notice',
    challenges: 'Technical Challenges',
    techUsed: 'Technologies Used',
    projectLinks: 'Project Links',
    viewGithub: 'View on GitHub',
    liveDemo: 'Live Demo',
  };

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
          {labels.backToWork}
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">
            {project.title}
          </h1>
          <p className="text-xl text-text-secondary leading-loose">
            {project.description}
          </p>
        </div>

        {/* Project Image */}
        {project.image ? (
          <div className="flex justify-center mb-12">
            <div className="max-w-full rounded-lg overflow-hidden bg-surface">
              <img
                src={project.image}
                alt={project.title}
                className="max-h-96 w-auto"
              />
            </div>
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
                {labels.overview}
              </h2>
              <p className="text-text-secondary leading-loose">
                {project.overview}
              </p>
            </section>

            {/* Problem */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                {labels.problem}
              </h2>
              <p className="text-text-secondary leading-loose">
                {project.problem}
              </p>
            </section>

            {/* Solution */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                {labels.solution}
              </h2>
              <p className="text-text-secondary leading-loose whitespace-pre-line">
                {project.solution}
              </p>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                {labels.keyFeatures}
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

            {/* Architecture */}
            {project.architecture && (
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                  {labels.architecture}
                </h2>
                <p className="text-text-secondary leading-loose whitespace-pre-line">
                  {project.architecture}
                </p>
              </section>
            )}

            {/* Performance */}
            {project.performance && (
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                  {labels.performance}
                </h2>
                <ul className="space-y-3">
                  {project.performance.map((metric: string, idx: number) => (
                    <li
                      key={idx}
                      className="flex items-start text-text-secondary"
                    >
                      <span className="text-accent-gold mr-3 mt-1">▸</span>
                      <span className="font-medium">{metric}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* My Contribution */}
            {project.contribution && (
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                  {labels.contribution}
                </h2>
                <p className="text-text-secondary leading-loose whitespace-pre-line">
                  {project.contribution}
                </p>
              </section>
            )}

            {/* Legal Notice */}
            {project.legalNotice && (
              <section className="border-l-4 border-accent-gold/50 pl-6 py-4 bg-surface/30 rounded">
                <h2 className="text-xl font-semibold mb-3 text-text-primary">
                  {labels.legalNotice}
                </h2>
                <p className="text-text-secondary leading-loose italic">
                  {project.legalNotice}
                </p>
              </section>
            )}

            {/* Challenges */}
            {project.challenges && (
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                  {labels.challenges}
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
                  {labels.techUsed}
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
                  {labels.projectLinks}
                </h3>
                <div className="space-y-3">
                  {project.github && project.github !== '#' && (
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
                      {labels.viewGithub}
                    </a>
                  )}
                  {project.demo && project.demo !== '#' && (
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
                      {labels.liveDemo}
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
