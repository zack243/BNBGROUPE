'use client';

import { useLocale } from '@/lib/i18n-context';
import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LanguageSwitchProps {
  className?: string;
}

export default function LanguageSwitch({ className }: LanguageSwitchProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return;
    
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    
    startTransition(() => {
      router.push(newPathname);
    });
  };

  return (
    <div className={cn('flex items-center gap-1', className)}>
      <Globe className="w-4 h-4 text-bnb-blue-600" />
      <button
        onClick={() => switchLocale('fr')}
        disabled={isPending}
        className={cn(
          'px-2 py-1 text-sm font-medium transition-colors rounded',
          locale === 'fr'
            ? 'bg-bnb-blue-600 text-white'
            : 'text-bnb-gray-600 hover:text-bnb-blue-600'
        )}
      >
        FR
      </button>
      <span className="text-bnb-gray-300">|</span>
      <button
        onClick={() => switchLocale('en')}
        disabled={isPending}
        className={cn(
          'px-2 py-1 text-sm font-medium transition-colors rounded',
          locale === 'en'
            ? 'bg-bnb-blue-600 text-white'
            : 'text-bnb-gray-600 hover:text-bnb-blue-600'
        )}
      >
        EN
      </button>
    </div>
  );
}
