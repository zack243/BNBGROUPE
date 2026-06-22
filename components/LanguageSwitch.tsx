'use client';

import { useState } from 'react';
import { useLocale } from '@/lib/i18n-context';
import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LanguageSwitchProps {
  className?: string;
}

export default function LanguageSwitch({ className }: LanguageSwitchProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'fr', label: 'Français' },
    { code: 'en', label: 'English' },
  ];

  const currentLanguage = languages.find((l) => l.code === locale);

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) {
      setIsOpen(false);
      return;
    }

    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);

    startTransition(() => {
      router.push(newPathname);
    });
    setIsOpen(false);
  };

  return (
    <div className={cn('relative', className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="flex items-center gap-1.5 transition-colors"
        style={{
          padding: '6px 12px',
          borderRadius: 6,
          border: '1px solid rgba(228,30,30,0.35)',
          background: 'rgba(228,30,30,0.06)',
          color: '#e41e1e',
          fontSize: 13,
          fontWeight: 600,
          cursor: 'pointer',
          letterSpacing: '0.04em',
        }}
      >
        <Globe className="w-3.5 h-3.5" style={{ color: '#e41e1e' }} />
        <span style={{ textTransform: 'uppercase' }}>{locale}</span>
        <ChevronDown
          className="w-3 h-3"
          style={{
            color: '#6b7280',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s',
          }}
        />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div
            className="absolute right-0 z-50"
            style={{
              top: 'calc(100% + 6px)',
              minWidth: 130,
              background: 'white',
              borderRadius: 8,
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              border: '1px solid #e5e7eb',
              overflow: 'hidden',
            }}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLocale(lang.code)}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '9px 14px',
                  textAlign: 'left',
                  fontSize: 13,
                  fontWeight: locale === lang.code ? 600 : 400,
                  color: locale === lang.code ? '#e41e1e' : '#1a2340',
                  background: locale === lang.code ? '#fff5f5' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.15s',
                }}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
