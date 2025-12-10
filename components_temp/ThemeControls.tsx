'use client';

import { useThemeCtx } from './ThemeProvider';

const COLORS = ['#0ea5e9', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6'] as const;

export default function ThemeControls() {
  const { theme, setTheme, accent, setAccent } = useThemeCtx();

  const isDark: boolean = theme === 'dark';

  const toggleDark = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <div className="flex items-center gap-3">
      {/* Colores */}
      <div className="flex items-center gap-2">
        {COLORS.map((c) => (
          <button
            key={c}
            aria-label={`Accent ${c}`}
            onClick={() => setAccent(c)}
            className="h-7 w-7 rounded-full ring-2 ring-transparent transition hover:opacity-90"
            style={{
              backgroundColor: c,
              boxShadow:
                accent === c ? '0 0 0 2px rgba(0,0,0,.15) inset' : undefined,
            }}
          />
        ))}
      </div>

      {/* Tema */}
      <button
        type="button"
        onClick={toggleDark}
        className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm"
      >
        <span className="text-lg">{isDark ? '🌙' : '🌞'}</span>
        <span className="hidden sm:inline">{isDark ? 'Oscuro' : 'Claro'}</span>
      </button>
    </div>
  );
}
