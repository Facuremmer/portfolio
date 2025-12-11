
import type { Metadata } from 'next';
import './globals.css';
import { UiProvider } from '@/components/UiProvider';
import { ThemeProvider } from '@/components/ThemeProvider';
import AppShell from '@/components/AppShell';
import { I18nProvider } from '@/components/I18nProvider';


export const metadata: Metadata = {
  title: 'Facundo — Portfolio',
  description: 'Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <UiProvider>
          <ThemeProvider>
            <I18nProvider>
              <AppShell>{children}</AppShell>
            </I18nProvider>
          </ThemeProvider>
        </UiProvider>
      </body>
    </html>
  );
}



