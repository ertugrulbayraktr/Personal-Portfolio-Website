'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'tr' : 'en';
    router.push(`/${newLocale}${pathname}`);
  };

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/work', label: t('work') },
    { href: '/writing', label: t('writing') },
    { href: '/about', label: t('about') },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-surface">
      <div className="max-w-content mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-semibold tracking-tight hover:text-accent-gold transition-colors">
            Ertuğrul BAYRAKTAR
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent-gold ${
                  pathname === link.href ? 'text-accent-gold' : 'text-text-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="text-sm font-medium text-text-secondary hover:text-accent-gold transition-colors uppercase"
              aria-label="Toggle language"
            >
              {locale === 'en' ? 'TR' : 'EN'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-text-primary"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-sm font-medium transition-colors hover:text-accent-gold ${
                  pathname === link.href ? 'text-accent-gold' : 'text-text-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
              className="block text-sm font-medium text-text-secondary hover:text-accent-gold transition-colors uppercase"
            >
              {locale === 'en' ? 'Türkçe' : 'English'}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
