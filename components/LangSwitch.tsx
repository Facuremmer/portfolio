'use client';
import { useI18n } from './I18nProvider';

export default function LangSwitch() {
  const { lang, setLang } = useI18n();
  return (
    <div className="inline-flex overflow-hidden rounded-xl border dark:border-neutral-700">
      <button
        className={`px-3 py-1.5 text-sm ${lang === 'es' ? 'bg-[var(--accent)] text-neutral-900' : ''}`}
        onClick={() => setLang('es')}
        aria-label="Español"
      >
        ES
      </button>
      <button
        className={`px-3 py-1.5 text-sm ${lang === 'en' ? 'bg-[var(--accent)] text-neutral-900' : ''}`}
        onClick={() => setLang('en')}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
