'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { DICS, type Lang, type Dict, type Dictionaries } from '@/data/dictionary';

type Ctx = { lang: Lang; t: (k: keyof Dict) => string; setLang: (l: Lang) => void };
const Ctx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('es');

  useEffect(() => {
    const stored = (localStorage.getItem('lang') as Lang) || 'es';
    setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('lang', l);
  };

  const t = (k: keyof Dict) => DICS[lang][k] ?? String(k);
  const value = useMemo(() => ({ lang, setLang, t }), [lang]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useI18n = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
};
