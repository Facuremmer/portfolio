'use client';

import Link from "next/link";
import { useI18n } from '@/components/I18nProvider';
import CodeSnippet from '@/components/CodeSnippet';

export default function DatabaseAgroPage() {
  const { t } = useI18n();
  const tr = (k: string) => t(`proj_5_${k}`);

  return (
    <main className="container-pro space-y-10 pb-16 pt-10">
      {/* Intro */}
      <section className="card p-6 md:p-8 space-y-4">
        <div className="flex items-center gap-3">
            <span className="badge">SQL</span>
            <span className="badge">PostgreSQL</span>
            <span className="badge">Data Modeling</span>
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

        {/* 1. Identity Core */}
        <div className="space-y-3">
            <h3 className="font-semibold text-lg text-[var(--accent)]">{tr("snip_core_title")}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                {tr("snip_core_expl")}
            </p>
            <CodeSnippet
              title="schema/01_identity.sql"
              language="sql"
            >
{`-- Entidad Base: Personas (Físicas o Jurídicas)
CREATE TABLE public.person (
    person_id bigint NOT NULL,
    company_id bigint NOT NULL,
    first_name character varying(100),
    last_name character varying(100),
    email character varying(200),
    is_active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now(),
    CONSTRAINT pk_person PRIMARY KEY (person_id)
);

-- Extensión: Usuarios del Sistema (Logins)
CREATE TABLE public.user_login (
    user_id bigint NOT NULL,
    company_id bigint NOT NULL,
    person_id bigint NOT NULL, -- FK a person
    username character varying(50) NOT NULL,
    password_hash character varying(255) NOT NULL,
    app_level_role_id integer,
    CONSTRAINT pk_user_login PRIMARY KEY (user_id),
    CONSTRAINT fk_user_person FOREIGN KEY (person_id) 
        REFERENCES public.person(person_id) ON DELETE RESTRICT
);`}
            </CodeSnippet>
        </div>

        {/* 2. Transactional */}
        <div className="space-y-3">
            <h3 className="font-semibold text-lg text-[var(--accent)]">{tr("snip_trans_title")}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                {tr("snip_trans_expl")}
            </p>
            <CodeSnippet
              title="schema/02_sales.sql"
              language="sql"
            >
{`-- Maestro: Cotizaciones
CREATE TABLE public.quotations (
    quotation_id bigint NOT NULL,
    company_id bigint NOT NULL,
    client_id bigint NOT NULL,
    issue_date date DEFAULT CURRENT_DATE NOT NULL,
    status character varying(20) DEFAULT 'draft'::character varying,
    total_amount numeric(18,2) DEFAULT 0 NOT NULL,
    CONSTRAINT pk_quotations PRIMARY KEY (quotation_id)
);

-- Detalle: Items de Cotización
CREATE TABLE public.quotation_items (
    item_id bigint NOT NULL,
    quotation_id bigint NOT NULL, -- FK a quotations
    product_id bigint NOT NULL,
    quantity numeric(10,2) NOT NULL,
    unit_price numeric(18,2) NOT NULL,
    subtotal numeric(18,2) NOT NULL,
    CONSTRAINT pk_quotation_items PRIMARY KEY (item_id),
    CONSTRAINT fk_items_quotation FOREIGN KEY (quotation_id)
        REFERENCES public.quotations(quotation_id) ON DELETE CASCADE
);`}
            </CodeSnippet>
        </div>

        {/* 3. Multi-tenant */}
        <div className="space-y-3">
            <h3 className="font-semibold text-lg text-[var(--accent)]">{tr("snip_tenant_title")}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                {tr("snip_tenant_expl")}
            </p>
            <CodeSnippet
              title="schema/00_tenants.sql"
              language="sql"
            >
{`CREATE TABLE public.company (
    company_id bigint NOT NULL,
    name character varying(100) NOT NULL,
    cuit character varying(20),
    schema_name character varying(50) DEFAULT 'public'::character varying,
    is_active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now(),
    CONSTRAINT pk_company PRIMARY KEY (company_id),
    CONSTRAINT uq_company_cuit UNIQUE (cuit)
);`}
            </CodeSnippet>
        </div>
      </section>

      {/* Estructura */}
      <section className="card p-6 md:p-8 space-y-4">
        <h2 className="text-xl font-semibold">{tr("structure_title")}</h2>
        <pre className="overflow-x-auto text-xs sm:text-sm leading-relaxed p-4 bg-neutral-950 text-neutral-100 rounded-lg">
{`Database/
  ├─ schema/
  │  ├─ 00_tenants.sql      # Company & Config
  │  ├─ 01_identity.sql     # RBAC & Person
  │  ├─ 02_sales.sql        # Quotations & Orders
  │  └─ 03_catalog.sql      # Products & Prices
  ├─ seeds/
  │  └─ initial_data.sql    # Default Roles
  └─ migrations/            # Version control`}
        </pre>
        <p className="text-sm text-neutral-500 mt-2">{tr("structure_note")}</p>
      </section>

      <Link href="/#proyectos" className="btn-ghost inline-flex items-center gap-2">
        ← {tr("back_to_projects")}
      </Link>
    </main>
  );
}