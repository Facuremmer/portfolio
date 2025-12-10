'use client';

import Link from "next/link";
import { useI18n } from '@/components_temp/I18nProvider';
import CodeSnippet from '@/components_temp/CodeSnippet';

export default function TraceabilityDbPage() {
  const { t } = useI18n();
  const tr = (k: string) => t(`proj_6_${k}`);

  return (
    <main className="container-pro space-y-10 pb-16 pt-10">
      {/* Intro */}
      <section className="card p-6 md:p-8 space-y-4">
        <div className="flex items-center gap-3">
            <span className="badge bg-[var(--accent)] text-white border-transparent">SQL Server</span>
            <span className="badge">T-SQL</span>
            <span className="badge">Big Data</span>
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

      {/* Snippets SQL */}
      <section className="space-y-8">
        <div className="mb-6">
            <h2 className="text-2xl font-bold">{tr("snippets_title")}</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mt-2">{tr("snippets_intro")}</p>
        </div>

        {/* 1. Main Table */}
        <div className="space-y-3">
            <h3 className="font-semibold text-lg text-[var(--accent)]">{tr("snip_main_title")}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                {tr("snip_main_expl")}
            </p>
            <CodeSnippet
              title="dbo.Caja.sql"
              language="sql"
            >
{`CREATE TABLE [dbo].[Caja](
    [Cod_Caja_ID] [bigint] NOT NULL,
    [Pallet_ID] [bigint] NULL,
    [Codigo_Barra_ID] [varchar](64) NOT NULL,
    [OP_ID] [bigint] NULL,
    [Fecha_Produccion] [datetime2](0) NULL,
    [Peso_Neto] [decimal](18, 4) NULL,
    [Ubicacion_ID] [int] NULL,
    CONSTRAINT [PK_Caja] PRIMARY KEY CLUSTERED ([Cod_Caja_ID] ASC)
);

ALTER TABLE [dbo].[Caja] WITH CHECK ADD CONSTRAINT [FK_Caja_Pallet] 
FOREIGN KEY([Pallet_ID]) REFERENCES [dbo].[Pallet] ([Pallet_ID]);`}
            </CodeSnippet>
        </div>

        {/* 2. Pallet Table */}
        <div className="space-y-3">
            <h3 className="font-semibold text-lg text-[var(--accent)]">{tr("snip_pallet_title")}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                {tr("snip_pallet_expl")}
            </p>
            <CodeSnippet
              title="dbo.Pallet.sql"
              language="sql"
            >
{`CREATE TABLE [dbo].[Pallet](
    [Pallet_ID] [bigint] NOT NULL,
    [Fecha_Creacion] [datetime2](0) NOT NULL,
    [Ubicacion_ID] [int] NULL,
    [Estado] [varchar](20) DEFAULT 'ABIERTO',
    [Nro_Pallet_Fisico] [varchar](50) NULL,
    CONSTRAINT [PK_Pallet] PRIMARY KEY CLUSTERED ([Pallet_ID] ASC)
);`}
            </CodeSnippet>
        </div>

        {/* 3. Indexing Strategy */}
        <div className="space-y-3">
            <h3 className="font-semibold text-lg text-[var(--accent)]">{tr("snip_index_title")}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                {tr("snip_index_expl")}
            </p>
            <CodeSnippet
              title="Performance_Tuning.sql"
              language="sql"
            >
{`-- Optimización para reportes de Producción por OP
-- Evita "Key Lookup" al incluir el peso en el nodo hoja del índice.
CREATE NONCLUSTERED INDEX [IX_Caja_OP_Fecha] ON [dbo].[Caja]
(
    [OP_ID] ASC,
    [Fecha_Produccion] ASC
)
INCLUDE ([Peso_Neto], [Codigo_Barra_ID])
WITH (FILLFACTOR = 90);`}
            </CodeSnippet>
        </div>
      </section>

      {/* Estructura (Sin imágenes) */}
      <section className="card p-6 md:p-8 space-y-4">
        <h2 className="text-xl font-semibold">{tr("structure_title")}</h2>
        <pre className="overflow-x-auto text-xs sm:text-sm leading-relaxed p-4 bg-neutral-950 text-neutral-100 rounded-lg">
{`DB/
  ├─ Tables/
  │  ├─ dbo.Caja.sql
  │  ├─ dbo.Pallet.sql
  │  ├─ dbo.Producto_BKP.sql
  │  └─ dbo.Ubicacion.sql
  ├─ Views/
  │  └─ dbo.v_Trazabilidad.sql
  └─ Security/
     └─ Users.sql`}
        </pre>
        <p className="text-sm text-neutral-500 mt-2">{tr("structure_note")}</p>
      </section>

      <Link href="/#proyectos" className="btn-ghost inline-flex items-center gap-2">
        ← {tr("back_to_projects")}
      </Link>
    </main>
  );
}