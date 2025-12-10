'use client';

import Link from "next/link";
import { useI18n } from '@/components_temp/I18nProvider';
import CodeSnippet from '@/components_temp/CodeSnippet';
// import ProjectFigure from '@/components/ProjectFigure'; // Usamos aviso de confidencialidad

export default function IceCreamIotPage() {
  const { t } = useI18n();
  const tr = (k: string) => t(`proj_8_${k}`);

  return (
    <main className="container-pro space-y-10 pb-16 pt-10">
      {/* Intro */}
      <section className="card p-6 md:p-8 space-y-4">
        <div className="flex items-center gap-3">
            <span className="badge bg-[var(--accent)] text-white border-transparent">MySQL</span>
            <span className="badge">SCADA</span>
            <span className="badge">PLC</span>
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

        {/* 1. Tanques */}
        <div className="space-y-3">
            <h3 className="font-semibold text-lg text-[var(--accent)]">{tr("snip_tank_title")}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                {tr("snip_tank_expl")}
            </p>
            <CodeSnippet
              title="tables/tanques.sql"
              language="sql"
            >
{`CREATE TABLE tanques (
  IdTanque int(11) NOT NULL AUTO_INCREMENT,
  Descripcion varchar(45) DEFAULT NULL,
  CapacidadLitros decimal(10,2) DEFAULT NULL,
  DensidadProducto decimal(10,3) DEFAULT NULL,
  OffsetNivel decimal(10,2) DEFAULT '0.00', -- Calibración sensor
  AlarmaTempMax decimal(5,2) DEFAULT NULL,  -- Setpoint alarma
  PRIMARY KEY (IdTanque)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;`}
            </CodeSnippet>
        </div>

        {/* 2. Historico */}
        <div className="space-y-3">
            <h3 className="font-semibold text-lg text-[var(--accent)]">{tr("snip_hist_title")}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                {tr("snip_hist_expl")}
            </p>
            <CodeSnippet
              title="tables/historico_procesos.sql"
              language="sql"
            >
{`CREATE TABLE historico_procesos (
  IdRegistro bigint(20) NOT NULL AUTO_INCREMENT,
  FechaHora datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  IdTanque int(11) NOT NULL,
  NivelLitros decimal(10,2) NOT NULL,
  Temperatura decimal(5,2) NOT NULL,
  EstadoAgitador tinyint(1) DEFAULT '0',
  EstadoBomba tinyint(1) DEFAULT '0',
  IdLoteProduccion varchar(50) DEFAULT NULL,
  PRIMARY KEY (IdRegistro),
  KEY idx_fecha_tanque (FechaHora, IdTanque) -- Índice para gráficos
) ENGINE=InnoDB DEFAULT CHARSET=utf8;`}
            </CodeSnippet>
        </div>
      </section>

      {/* AVISO DE CONFIDENCIALIDAD INDUSTRIAL */}
      <section className="card p-8 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/20 text-center">
        <div className="mb-3 text-4xl">🏭</div>
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
{`IoT_System/
  ├─ PLC_Logic/
  │  └─ Gestion_Materia_Prima.project  # Codesys/IEC 61131-3
  ├─ Database/
  │  ├─ scripts_tablas.sql
  │  └─ stored_procedures.sql
  └─ Documentation/
     └─ Manual_de_Uso.docx`}
        </pre>
        <p className="text-sm text-neutral-500 mt-2">{tr("structure_note")}</p>
      </section>

      <Link href="/#proyectos" className="btn-ghost inline-flex items-center gap-2">
        ← {tr("back_to_projects")}
      </Link>
    </main>
  );
}