'use client';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type Theme = 'light' | 'dark';
type Accent =
  | '#0ea5e9'  // sky-500
  | '#22c55e'  // green-500
  | '#f59e0b'  // amber-500
  | '#ef4444'  // red-500
  | '#8b5cf6'; // violet-500

type Ctx = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  accent: Accent;
  setAccent: (c: Accent) => void;
};

const Ctx = createContext<Ctx | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');
  const [accent, setAccentState] = useState<Accent>('#0ea5e9');

  useEffect(() => {
    const storedTheme = (localStorage.getItem('theme') as Theme) || null;
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    const t = storedTheme ?? (prefersDark ? 'dark' : 'light');
    setThemeState(t);
    document.documentElement.classList.toggle('dark', t === 'dark');

    const storedAccent = (localStorage.getItem('accent') as Accent) || '#0ea5e9';
    setAccentState(storedAccent);
    document.documentElement.style.setProperty('--accent', storedAccent);
  }, []);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem('theme', t);
    document.documentElement.classList.toggle('dark', t === 'dark');
  };

  const setAccent = (c: Accent) => {
    setAccentState(c);
    localStorage.setItem('accent', c);
    document.documentElement.style.setProperty('--accent', c);
  };

  const value = useMemo(() => ({ theme, setTheme, accent, setAccent }), [theme, accent]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useThemeCtx = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useThemeCtx must be used within ThemeProvider');
  return ctx;
};
