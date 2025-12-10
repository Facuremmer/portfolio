'use client';

import Link from 'next/link';
import { useI18n } from './I18nProvider';
import { useUi } from './UiProvider';

export default function Offcanvas() {
  const { t } = useI18n();
  const { sidebarOpen, toggleSidebar } = useUi();
  const toggle = toggleSidebar;

  return (
    <>
      {/* Botón hamburguesa (si lo usás dentro del Navbar) */}
      {!sidebarOpen && (
        <button
          type="button"
          aria-label="Open menu"
          onClick={toggle}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border"
        >
          <span className="text-xl">≡</span>
        </button>
      )}


      {/* IMPORTANTE: SIN BACKDROP para permitir scroll y clicks en el contenido */}
      {/* Sidebar fijo; en mobile entra/sale, en desktop empuja el contenido (AppShell md:pl-72) */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-72 border-r bg-white p-4 transition-transform dark:bg-neutral-950 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}
      >
        <div className="mb-3 flex items-center justify-between px-1">
          <h3 className="text-base font-semibold">Menu</h3>
          {sidebarOpen && (
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={toggle}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border"
            >
              <span className="text-xl">≡</span>
            </button>
          )}
        </div>


        <nav className="mt-2 space-y-1 text-[15px]">
          <Item href="/#about" label={t('nav_about') ?? 'About'} />
          <Item href="/#skills" label={t('nav_skills') ?? 'Skills'} />

          {/* Submenú proyectos */}
          <details className="group rounded-lg">
            <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900">
              <span>{t('nav_projects') ?? 'Projects'}</span>
              <span className="transition group-open:rotate-90">›</span>
            </summary>
            <div className="ml-3 mt-1 space-y-1">
              <Item href="/#projects-desktop" label={t('nav_projects_desktop') ?? 'Desktop apps'} />
              <Item href="/#projects-web" label={t('nav_projects_web') ?? 'Web apps'} />
              <Item href="/#projects-db" label={t('nav_projects_db') ?? 'Database design'} />
              <Item href="/#projects-other" label={t('nav_projects_other') ?? 'Other / Automation'} />
            </div>
          </details>

          <Item href="/#contacto" label={t('nav_contact') ?? 'Contact'} />
        </nav>
      </aside>
    </>
  );
}

function Item({ href, label }: { href: string; label: string }) {
  // NO cerramos el menú al navegar (link de ancla)
  return (
    <Link href={href} className="block rounded-lg px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900" scroll>
      {label}
    </Link>
  );
}

