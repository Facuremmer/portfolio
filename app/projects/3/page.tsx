'use client';

import Link from "next/link";
import { useI18n } from '@/components_temp/I18nProvider';
import CodeSnippet from '@/components_temp/CodeSnippet';
// import ProjectFigure from '@/components/ProjectFigure'; // <--- No se usa

export default function InternalMgmtPage() {
  const { t } = useI18n();
  const tr = (k: string) => t(`proj_3_${k}`);

  return (
    <main className="container-pro space-y-10 pb-16 pt-10">
      {/* Intro */}
      <section className="card p-6 md:p-8 space-y-4">
        <div className="flex items-center gap-3">
            <span className="badge bg-[var(--accent)] text-white border-transparent">Python</span>
            <span className="badge">PyQt5</span>
            <span className="badge">Automation</span>
        </div>

        <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">
          {tr("title")}
        </h1>

        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-3xl">
          {tr("summary")}
        </p>
      </section>

      {/* Problema y Solución */}
      <div className="grid gap-6 md:grid-cols-2">
          <section className="card p-6 md:p-8 space-y-4 h-full">
            <h2 className="text-xl font-semibold flex items-center gap-2">
                🛑 {tr("problem_title")}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">{tr("problem_intro")}</p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>{tr("problem_1")}</li>
              <li>{tr("problem_2")}</li>
              <li>{tr("problem_3")}</li>
            </ul>
          </section>

          <section className="card p-6 md:p-8 space-y-4 h-full bg-neutral-50 dark:bg-neutral-900/30 border-neutral-200 dark:border-neutral-800">
            <h2 className="text-xl font-semibold flex items-center gap-2">
                ✅ {tr("solution_title")}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">{tr("solution_intro")}</p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>{tr("solution_1")}</li>
              <li>{tr("solution_2")}</li>
              <li>{tr("solution_3")}</li>
              <li>{tr("solution_4")}</li>
            </ul>
          </section>
      </div>

      {/* Snippets */}
      <section className="space-y-8">
        <div className="mb-6">
            <h2 className="text-2xl font-bold">{tr("snippets_title")}</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mt-2">{tr("snippets_intro")}</p>
        </div>

        {/* 1. Worker */}
        <div className="space-y-3">
            <h3 className="font-semibold text-lg text-[var(--accent)]">{tr("snip_worker_title")}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                {tr("snip_worker_expl")}
            </p>
            <CodeSnippet
              title="app/services/permission_reminder_worker.py"
              language="python"
            >
{`class PermissionReminderWorker(QThread):
    def run(self):
        try:
            # Consulta fechas de vencimiento próximas
            query = """
            SELECT p.id, e.email, p.end_date
            FROM permissions p
            JOIN employees e ON p.employee_id = e.id
            WHERE p.end_date = DATEADD(day, 2, CAST(GETDATE() AS DATE))
            """
            rows = self.db.fetch_all(query)
            
            for row in rows:
                # Envío de mail automático
                send_email(
                    to=row['email'],
                    subject="Vencimiento de Licencia",
                    body=f"Su licencia vence el {row['end_date']}."
                )
        except Exception as e:
            self.log_error(e)`}
            </CodeSnippet>
        </div>

        {/* 2. Session Logic */}
        <div className="space-y-3">
            <h3 className="font-semibold text-lg text-[var(--accent)]">{tr("snip_session_title")}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                {tr("snip_session_expl")}
            </p>
            <CodeSnippet
              title="app/main.py"
              language="python"
            >
{`def check_session_timeout(self):
    """Monitor de inactividad para proteger datos."""
    current_time = QDateTime.currentDateTime()
    elapsed = self.last_interaction.secsTo(current_time)

    # Advertencia a los 10 minutos
    if elapsed >= 600 and not self.warning_shown:
        self.show_session_warning()
        
    # Cierre forzoso a los 15 minutos
    if elapsed >= 900:
        self.session_timer.stop()
        self.logout(reason="timeout")`}
            </CodeSnippet>
        </div>
      </section>

      {/* AVISO DE CONFIDENCIALIDAD (RRHH) */}
      <section className="card p-8 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/20 text-center">
        <div className="mb-3 text-4xl">🛡️</div>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
            {tr("confidential_title")}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed">
            {tr("confidential_desc")}
        </p>
      </section>

      {/* Estructura Lógica */}
      <section className="card p-6 md:p-8 space-y-4">
        <h2 className="text-xl font-semibold">{tr("structure_title")}</h2>
        <pre className="overflow-x-auto text-xs sm:text-sm leading-relaxed p-4 bg-neutral-950 text-neutral-100 rounded-lg">
{`App/
  ├─ main.py                # Core application logic & UI
  ├─ login.py               # Authentication module
  ├─ services/
  │  └─ permission_worker.py # Background reminders
  ├─ utils/
  │  └─ connection_bd.py    # Database interface
  └─ assets/`}
        </pre>
        <p className="text-sm text-neutral-500 mt-2">{tr("structure_note")}</p>
      </section>

      <Link href="/#proyectos" className="btn-ghost inline-flex items-center gap-2">
        ← {tr("back_to_projects")}
      </Link>
    </main>
  );
}