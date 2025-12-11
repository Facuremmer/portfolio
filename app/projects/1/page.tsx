'use client';

import Link from "next/link";
import { useI18n } from '@/components/I18nProvider';
import CodeSnippet from '@/components/CodeSnippet';
import ProjectFigure from '@/components/ProjectFigure';

export default function AgroPlatformPage() {
  const { t } = useI18n();
  const tr = (k: string) => t(`proj_1_${k}`);

  return (
    <main className="container-pro space-y-10 pb-16 pt-10">
      {/* Intro / Header */}
      <section className="card p-6 md:p-8 space-y-4">
        <div className="flex items-center gap-3">
            <span className="badge">Python</span>
            <span className="badge">PostgreSQL</span>
            <span className="badge">Qt/PyQt5</span>
        </div>

        <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">
          {tr("title")}
        </h1>

        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-3xl">
          {tr("summary")}
        </p>
      </section>

      {/* Problema y Solución (Grid) */}
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
              <li>{tr("problem_4")}</li>
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

      {/* Snippets Técnicos*/}
      <section className="space-y-8">
        <div className="mb-6">
            <h2 className="text-2xl font-bold">{tr("snippets_title")}</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mt-2">{tr("snippets_intro")}</p>
        </div>

        {/* 1. Realtime Engine */}
        <div className="space-y-3">
            <h3 className="font-semibold text-lg text-[var(--accent)]">{tr("snip_realtime_title")}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                {tr("snip_realtime_expl")}
            </p>
            <CodeSnippet
              title="app/services/realtime.py"
              language="python"
            >
{`def _pump_notifications(self):
    conn = self._conn
    if not conn: return
    while not self._stop.is_set():
        # Select con timeout para no bloquear el hilo ni quemar CPU
        if select.select([conn], [], [], 1.0) == ([], [], []):
            continue
        conn.poll()
        while conn.notifies:
            n = conn.notifies.pop(0)
            payload = _safe_json_loads(n.payload)
            
            # Filtro por empresa (SaaS Isolation)
            if not _match_company(payload.get("company_id"), self._company_id):
                continue

            # Despacho del evento a la capa de UI (Qt Signals)
            try:
                self._on_event(ev)
            except Exception as cb_err:
                logger.exception("[realtime] error en callback: %s", cb_err)`}
            </CodeSnippet>
        </div>

        {/* 2. Resilience */}
        <div className="space-y-3">
            <h3 className="font-semibold text-lg text-[var(--accent)]">{tr("snip_pool_title")}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                {tr("snip_pool_expl")}
            </p>
            <CodeSnippet
              title="app/utils/connection.py"
              language="python"
            >
{`@classmethod
@contextmanager
def get_conn(cls):
    """Entrega una conexión viva; si está cerrada, reintenta (fast-fail)."""
    # 1. Obtener conexión del pool
    conn = cls._pool.getconn()
    
    # 2. Validación de estado y reintento
    if getattr(conn, "closed", 0):
        cls._pool.putconn(conn, close=True) # Descartar muerta
        conn = cls._pool.getconn()          # Pedir nueva
        
    try:
        # 3. Configuración de timeouts de sesión (evitar deadlocks)
        with conn.cursor() as c:
            if PG_STATEMENT_TIMEOUT_MS:
                c.execute("SET statement_timeout = %s;", (PG_STATEMENT_TIMEOUT_MS,))
        yield conn
    finally:
        # 4. Devolución al pool
        cls._pool.putconn(conn)`}
            </CodeSnippet>
        </div>

        {/* 3. SaaS Permissions */}
        <div className="space-y-3">
            <h3 className="font-semibold text-lg text-[var(--accent)]">{tr("snip_perm_title")}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                {tr("snip_perm_expl")}
            </p>
            <CodeSnippet
              title="app/services/permissions.py"
              language="python"
            >
{`def user_can_access_module(company_id: int, user_id: int, module_code: str, action='read') -> bool:
    role_info = get_user_role_info(company_id, user_id)
    
    # Nivel 1: Super Admin (God Mode)
    if role_info.app_role == "super_admin":
        return True
        
    # Nivel 2: Admin de Empresa (Limitado por Paquete Contratado)
    if role_info.app_role == "admin":
        return (
            _module_is_core(module_code) or 
            company_has_module(company_id, module_code) # ¿Pagó por este módulo?
        )

    # Nivel 3: Usuario Regular (Permisos granulares)
    if not company_has_module(company_id, module_code):
        return False # Si la empresa no lo tiene, el usuario menos.

    ep = get_effective_permission(company_id, user_id, module_code)
    return ep and getattr(ep, f"can_{action}", False)`}
            </CodeSnippet>
        </div>
      </section>

      {/* Capturas */}
      <section className="card p-6 md:p-8 space-y-6">
        <h2 className="text-xl font-semibold">{tr("figures_title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectFigure
              src="/captures/proj1_rbac_card.png"
              alt={tr("fig_rbac_alt")}
              caption={tr("fig_rbac_caption")}
            />
            <ProjectFigure
              src="/captures/proj1_upd_card.png"
              alt={tr("fig_upd_alt")}
              caption={tr("fig_upd_caption")}
            />
        </div>
      </section>

      {/* Estructura */}
      <section className="card p-6 md:p-8 space-y-4">
        <h2 className="text-xl font-semibold">{tr("structure_title")}</h2>
        <pre className="overflow-x-auto text-xs sm:text-sm leading-relaxed p-4 bg-neutral-950 text-neutral-100 rounded-lg">
{`App/
  ├─ app/
  │  ├─ services/
  │  │  ├─ realtime.py        # PostgreSQL LISTEN/NOTIFY Thread
  │  │  ├─ permissions.py     # SaaS RBAC Logic
  │  │  ├─ notifications.py   # Fan-out system
  │  │  └─ update_service.py  # OTA Updater (SHA256 check)
  │  ├─ utils/
  │  │  ├─ connection.py      # Resilient Pool & Telemetry
  │  │  └─ offline_guard.py   # UI Connectivity Blocker
  │  └─ gui/
  │     └─ frames/
  │        ├─ access_management.py  # Permission Matrix UI
  │        └─ ...
  └─ ...`}
        </pre>
      </section>

      <Link href="/#proyectos" className="btn-ghost inline-flex items-center gap-2">
        ← {tr("back_to_projects")}
      </Link>
    </main>
  );
}