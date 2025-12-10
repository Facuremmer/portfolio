'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useI18n } from './I18nProvider';
import LangSwitch from './LangSwitch';
import ThemeControls from './ThemeControls';
import Offcanvas from './Offcanvas';
import { useUi } from './UiProvider';

export default function Navbar() {
  const { t } = useI18n();
  const { sidebarOpen } = useUi();
  
  // Estado para controlar si el cartelito está abierto
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-neutral-200/60 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:border-neutral-800/60 dark:bg-neutral-950/60">
        <div className={`mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 transition-[padding] duration-200 ${sidebarOpen ? 'pl-72' : 'pl-0'}`}>

          {/* Izquierda: botón de menú + Botón CV */}
          <div className="flex items-center gap-1 -ml-4">
            <Offcanvas />

            {/* BOTÓN: Ahora abre el modal en lugar de descargar directo */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-medium text-neutral-900 transition hover:opacity-90"
            >
              {t('cta_download_cv') ?? 'Download CV'}
            </button>
          </div>

          {/* Derecha: Idioma → Colores → Tema */}
          <div className="flex items-center gap-3">
            <LangSwitch />
            <ThemeControls />
          </div>
        </div>
      </header>

      {/* --- MODAL DE SELECCIÓN DE IDIOMA --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl p-6 w-full max-w-sm border border-neutral-200 dark:border-neutral-800 scale-100 animate-in zoom-in-95 duration-200"
          >
            {/* Título del Modal */}
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
              {t('cv_modal_title') ?? 'Descargar CV'}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 text-sm">
              {t('cv_modal_desc') ?? 'Elige el idioma / Choose language:'}
            </p>

            {/* Opciones de descarga */}
            <div className="space-y-3">
              {/* Opción Español */}
              <a
                href="/cv_es.pdf"  // <--- Asegurate que este archivo exista en /public
                download="CV_Facundo_ES.pdf"
                className="flex items-center justify-center w-full p-3 rounded-xl border-2 border-[var(--accent)]/20 hover:border-[var(--accent)] bg-[var(--accent)]/5 hover:bg-[var(--accent)]/10 transition text-[var(--accent)] font-semibold cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              >
                🇪🇸 {t('cv_option_es') ?? 'Español'}
              </a>

              {/* Opción Inglés */}
              <a
                href="/cv_en.pdf"  // <--- Asegurate que este archivo exista en /public
                download="CV_Facundo_EN.pdf"
                className="flex items-center justify-center w-full p-3 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition text-neutral-700 dark:text-neutral-300 font-medium cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              >
                🇺🇸 {t('cv_option_en') ?? 'English'}
              </a>
            </div>

            {/* Botón Cancelar */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-6 w-full text-center text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition underline-offset-2 hover:underline"
            >
              {t('cv_cancel') ?? 'Cancelar'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

