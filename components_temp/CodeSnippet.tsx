'use client';

import { useState } from 'react';
import { useI18n } from './I18nProvider';

type Props = {
  title?: string;
  filename?: string;
  language?: string;
  children: string;
};

export default function CodeSnippet({ title, filename, language = 'txt', children }: Props) {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      // Usamos un timeout simple para resetear el estado visual
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  }

  return (
    <div className="card p-0 overflow-hidden mb-6">
      {(title || filename) && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60">
          <div className="text-sm text-neutral-700 dark:text-neutral-300">
            {title && <strong>{title}</strong>}{" "}
            {filename && <span className="ml-2 opacity-80">{filename}</span>}
          </div>
          <button onClick={onCopy} className="btn-ghost text-xs">
            {copied ? (t('copy_toast') || 'Copied!') : (t('copy_btn') || 'Copy')}
          </button>
        </div>
      )}
      <pre className="overflow-x-auto text-sm leading-relaxed p-4 bg-neutral-950 text-neutral-100">
        <code className={`language-${language}`}>{children}</code>
      </pre>
    </div>
  );
}