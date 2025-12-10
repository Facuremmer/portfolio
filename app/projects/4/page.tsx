'use client';

import Link from 'next/link';
import { useI18n } from '@/components/I18nProvider';
import CodeSnippet from '@/components/CodeSnippet';

export default function PortfolioPage() {
  const { t } = useI18n();
  // Helper para acortar las llamadas
  const tr = (k: string) => t(`proj_portfolio_${k}`);

  // Reemplazá esto con la URL real de tu repositorio
  const GITHUB_REPO_URL = "https://github.com/Facuremmer/portfolio"; 

  return (
    <main className="container-pro space-y-10 pb-16 pt-10">
      
      {/* 1. Header del Proyecto + Link al Repo */}
      <section className="card p-6 md:p-8 space-y-6">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
              <span className="badge bg-[var(--accent)] text-white border-transparent">Next.js 14</span>
              <span className="badge">TypeScript</span>
              <span className="badge">Tailwind CSS</span>
              <span className="badge">Open Source</span>
          </div>

          <h1 className="text-3xl font-bold text-[var(--foreground)]">
            {t('proj_portfolio_title')}
          </h1>

          <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-3xl">
            {tr('summary')}
          </p>
        </div>

        {/* BOTÓN AL REPOSITORIO (La clave de esta página) */}
        <div>
          <a 
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-6 py-3 text-base font-bold shadow-lg transition hover:scale-[1.02] hover:opacity-90"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            {/* Texto hardcodeado o podés agregarlo al dict como 'cta_view_code' */}
            Ver Código Fuente en GitHub
          </a>
          <p className="mt-2 text-sm text-neutral-500">
            Explorá la arquitectura, los hooks y la configuración de este portfolio.
          </p>
        </div>
      </section>

      {/* 2. Problema y Solución */}
      <div className="grid gap-6 md:grid-cols-2">
          <section className="card p-6 md:p-8 space-y-4 h-full">
            <h2 className="text-xl font-semibold flex items-center gap-2 text-red-600 dark:text-red-400">
                🛑 {tr('problem_title')}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">{tr('problem_intro')}</p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>{tr('problem_1')}</li>
              <li>{tr('problem_2')}</li>
              <li>{tr('problem_3')}</li>
            </ul>
          </section>

          <section className="card p-6 md:p-8 space-y-4 h-full bg-neutral-50 dark:bg-neutral-900/30 border-neutral-200 dark:border-neutral-800">
            <h2 className="text-xl font-semibold flex items-center gap-2 text-green-600 dark:text-green-400">
                ✅ {tr('solution_title')}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">{tr('solution_intro')}</p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>{tr('solution_1')}</li>
              <li>{tr('solution_2')}</li>
              <li>{tr('solution_3')}</li>
              <li>{tr('solution_4')}</li>
            </ul>
          </section>
      </div>

      {/* 3. Snippets de Código (Auto-reflexivo) */}
      <section className="space-y-8">
        <div className="mb-6">
            <h2 className="text-2xl font-bold">{t('snippets_title')}</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mt-2">{t('snippets_intro')}</p>
        </div>

        {/* Snippet 1: Theme Provider */}
        <div className="space-y-3">
            <h3 className="font-semibold text-lg text-[var(--accent)]">{tr('snip_hook_title')}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                {tr('snip_hook_expl')}
            </p>
            <CodeSnippet
              title="components/ThemeProvider.tsx"
              language="tsx"
            >
{`// Lógica de detección de tema (Dark/Light)
useEffect(() => {
  const stored = localStorage.getItem('theme') as Theme;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Prioridad: 1. Guardado manual, 2. Preferencia de SO, 3. Light por defecto
  const t = stored ?? (prefersDark ? 'dark' : 'light');
  
  setThemeState(t);
  document.documentElement.classList.toggle('dark', t === 'dark');
}, []);`}
            </CodeSnippet>
        </div>

        {/* Snippet 2: i18n System */}
        <div className="space-y-3">
            <h3 className="font-semibold text-lg text-[var(--accent)]">{tr('snip_i18n_title')}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                {tr('snip_i18n_expl')}
            </p>
            <CodeSnippet
              title="components/I18nProvider.tsx"
              language="tsx"
            >
{`import { DICS, type Lang } from '@/data/dictionary';

// Hook personalizado para traducciones
export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used within I18nProvider');
  return context;
}

// Función de traducción simple O(1)
const t = (key: string) => DICS[lang][key] ?? key;`}
            </CodeSnippet>
        </div>
      </section>

      {/* Botón Volver */}
      <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <Link href="/#proyectos" className="btn-ghost inline-flex items-center gap-2">
          ← {t('back_to_projects')}
        </Link>
      </div>
    </main>
  );
}