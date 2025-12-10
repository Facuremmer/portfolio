'use client';

import Link from "next/link";
import { useI18n } from '@/components/I18nProvider';
import CodeSnippet from '@/components/CodeSnippet';
// import ProjectFigure from '@/components/ProjectFigure'; // Usamos aviso de confidencialidad

export default function InternalDbPage() {
  const { t } = useI18n();
  const tr = (k: string) => t(`proj_7_${k}`);

  return (
    <main className="container-pro space-y-10 pb-16 pt-10">
      {/* Intro */}
      <section className="card p-6 md:p-8 space-y-4">
        <div className="flex items-center gap-3">
            <span className="badge bg-[var(--accent)] text-white border-transparent">SQL Server</span>
            <span className="badge">T-SQL</span>
            <span className="badge">RRHH</span>
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

        {/* 1. Employees */}
        <div className="space-y-3">
            <h3 className="font-semibold text-lg text-[var(--accent)]">{tr("snip_emp_title")}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                {tr("snip_emp_expl")}
            </p>
            <CodeSnippet
              title="dbo.Employees.sql"
              language="sql"
            >
{`CREATE TABLE [dbo].[Employees](
    [EmployeeID] [int] IDENTITY(1,1) NOT NULL,
    [FirstName] [varchar](100) NOT NULL,
    [LastName] [varchar](100) NOT NULL,
    [Email] [varchar](150) NULL,
    [HireDate] [date] NOT NULL,
    [IsActive] [bit] NOT NULL DEFAULT ((1)),
    CONSTRAINT [PK_Employees] PRIMARY KEY CLUSTERED ([EmployeeID] ASC)
);`}
            </CodeSnippet>
        </div>

        {/* 2. Projects */}
        <div className="space-y-3">
            <h3 className="font-semibold text-lg text-[var(--accent)]">{tr("snip_proj_title")}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                {tr("snip_proj_expl")}
            </p>
            <CodeSnippet
              title="dbo.Projects.sql"
              language="sql"
            >
{`CREATE TABLE [dbo].[Projects](
    [ProjectID] [int] IDENTITY(1,1) NOT NULL,
    [Name] [varchar](200) NOT NULL,
    [ClientID] [int] NOT NULL,
    [StartDate] [date] NULL,
    [Status] [varchar](20) DEFAULT ('Active'),
    CONSTRAINT [PK_Projects] PRIMARY KEY CLUSTERED ([ProjectID] ASC),
    CONSTRAINT [FK_Projects_Clients] FOREIGN KEY([ClientID]) 
        REFERENCES [dbo].[Clients] ([ClientID])
);`}
            </CodeSnippet>
        </div>

        {/* 3. WorkHours */}
        <div className="space-y-3">
            <h3 className="font-semibold text-lg text-[var(--accent)]">{tr("snip_hours_title")}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                {tr("snip_hours_expl")}
            </p>
            <CodeSnippet
              title="dbo.WorkHours.sql"
              language="sql"
            >
{`CREATE TABLE [dbo].[WorkHours](
    [RecordID] [bigint] IDENTITY(1,1) NOT NULL,
    [EmployeeID] [int] NOT NULL,
    [ProjectID] [int] NOT NULL,
    [WorkDate] [date] NOT NULL,
    [Hours] [decimal](5, 2) NOT NULL,
    [Description] [varchar](500) NULL,
    [CreatedDate] [datetime] DEFAULT (getdate()),
    CONSTRAINT [PK_WorkHours] PRIMARY KEY CLUSTERED ([RecordID] ASC),
    CONSTRAINT [FK_WorkHours_Employees] FOREIGN KEY([EmployeeID]) 
        REFERENCES [dbo].[Employees] ([EmployeeID]),
    CONSTRAINT [CK_Hours_Limit] CHECK ([Hours] > 0 AND [Hours] <= 24)
);`}
            </CodeSnippet>
        </div>
      </section>

      {/* Estructura (Sin imágenes) */}
      <section className="card p-6 md:p-8 space-y-4">
        <h2 className="text-xl font-semibold">{tr("structure_title")}</h2>
        <pre className="overflow-x-auto text-xs sm:text-sm leading-relaxed p-4 bg-neutral-950 text-neutral-100 rounded-lg">
{`DB/
  ├─ Tables/
  │  ├─ dbo.Employees.sql
  │  ├─ dbo.Projects.sql
  │  ├─ dbo.Tasks.sql
  │  └─ dbo.WorkHours.sql
  ├─ Views/
  │  └─ dbo.v_MonthlyReport.sql
  └─ Security/
     └─ Roles.sql`}
        </pre>
        <p className="text-sm text-neutral-500 mt-2">{tr("structure_note")}</p>
      </section>

      <Link href="/#proyectos" className="btn-ghost inline-flex items-center gap-2">
        ← {tr("back_to_projects")}
      </Link>
    </main>
  );
}