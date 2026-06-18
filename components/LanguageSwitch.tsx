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
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-bnb-gray-700 hover:text-bnb-blue-600 transition-colors rounded-md hover:bg-bnb-blue-50"
      >
        <Globe className="w-4 h-4" />
        <span>{currentLanguage?.label}</span>
        <ChevronDown className={cn('w-4 h-4 transition-transform', isOpen && 'rotate-180')} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-xl border border-bnb-gray-100 overflow-hidden z-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLocale(lang.code)}
                className={cn(
                  'w-full px-4 py-2 text-left text-sm font-medium transition-colors',
                  locale === lang.code
                    ? 'bg-bnb-blue-50 text-bnb-blue-600'
                    : 'text-bnb-gray-700 hover:bg-bnb-blue-50 hover:text-bnb-blue-600'
                )}
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
