'use client';

import Navbar from './Navbar';
import { useUi } from './UiProvider';
import { ReactNode } from 'react';

export default function AppShell({ children }: { children: ReactNode }) {
  const { sidebarOpen } = useUi();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Navbar />
      {/* Empuje de contenido SOLO en desktop cuando el menú está abierto */}
            <div className={`transition-[padding] duration-200 ${sidebarOpen ? 'pl-72' : 'pl-0'}`}>
        {/* Importante: ¡sin overflow-hidden acá! */}
        <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
      </div>
    </div>
  );
}



