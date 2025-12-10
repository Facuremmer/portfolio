'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useI18n } from '@/components_temp/I18nProvider';
import Section from '@/components_temp/Section';
import ProjectCard from '@/components_temp/ProjectCard';
import KpiStat from '@/components_temp/KpiStat';
/**
 * Página principal — con anclas para About, Skills, Projects (y subcategorías) y Contact.
 * Navbar fijo + Offcanvas lateral manejan la navegación.
 */

export default function Page() {
  const { t } = useI18n();

  const [showMore, setShowMore] = useState(false);

  const yearsExperience = useMemo(() => {
    // Julio 2023 -> mes 6 (0-based)
    const start = new Date(2023, 6, 1);
    const now = new Date();
    const diffYears =
      (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
    if (diffYears < 1) return '<1';
    return `${Math.floor(diffYears)}+`;
  }, []);

  return (
    <main className="container-pro space-y-14 pb-20">
      {/* ======= ABOUT ======= */}
      <section id="about" className="card p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-[auto,1fr] md:gap-8">
          <div className="flex items-start">
            <div className="relative h-28 w-28 overflow-hidden rounded-2xl ring-2 ring-[var(--accent)] md:h-32 md:w-32">
              <Image
                src="/me.png"
                alt="Facundo Remmer"
                fill
                sizes="128px"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-semibold md:text-3xl">
              Facundo Remmer
            </h1>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
              Python/PyQt5 • PostgreSQL/SQL Server • Next.js/Tailwind • CI/CD
            </p>

            <div className="mt-5 max-w-3xl space-y-2 leading-relaxed">
              {/* Versión corta */}
              <p className="text-sm md:text-base font-medium">
                {t('hero_headline') ??
                  'Desarrollador Python | Diseñador de bases de datos | Analista de datos | Automatización de procesos de negocio'}
              </p>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                {t('hero_subheadline') ??
                  'Conecto el mundo de los datos con automatización y decisiones reales en los proyectos.'}
              </p>

              {/* Ver más / Ver menos */}
              <button
                type="button"
                onClick={() => setShowMore((prev) => !prev)}
                className="mt-1 text-sm font-medium text-[var(--accent)] hover:underline"
              >
                {showMore
                  ? t('hero_read_less') ?? 'Ver menos'
                  : t('hero_read_more') ?? 'Ver más'}
              </button>

              {/* Texto extendido */}
              {showMore && (
                <p className="text-sm md:text-base leading-relaxed whitespace-pre-line">
                  {t('about_long') ??
                    'Soy Técnico Universitario en Programación con sólida experiencia práctica en desarrollo backend con Python, diseño de bases de datos relacionales y automatización de procesos productivos y administrativos.\n\nActualmente me desempeño como Desarrollador Backend, participando en el diseño e implementación de soluciones con Python y SQL: aplicaciones de escritorio con PyQt5, consultas complejas y modelos de datos, además de tableros e informes interactivos en herramientas como Power BI y Grafana.\n\nMe interesa transformar requerimientos en sistemas claros, eficientes y mantenibles, conectando el mundo de los datos con la automatización, el análisis y decisiones reales en los proyectos. Cuento con experiencia en el manejo seguro de datos sensibles y en la integración de servicios como APIs, correo electrónico SMTP, entre otros.\n\nMe considero una persona proactiva, con pensamiento estructurado y orientado a resultados. Disfruto trabajar en equipo, revisar diseños con otros perfiles técnicos y aprender de forma continua. Valoro el conocimiento compartido y busco que cada solución que desarrollo aporte valor real al proyecto y a las personas que la utilizan.'}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* KPIs */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <KpiStat
            value={yearsExperience}
            label={t('kpi_years') ?? 'Años de experiencia'}
          />
          <KpiStat
            value="6"
            label={t('kpi_projects') ?? 'Proyectos trabajados'}
          />
          <KpiStat
            value="10+"
            label={t('kpi_highlights') ?? 'Tecnologías clave'}
          />
        </div>
      </section>

            {/* ======= SKILLS ======= */}
      <Section
        id="skills"
        title={t('section_skills_title')}
        subtitle={t('section_skills_subtitle')}
      >
        <div className="space-y-6">
          {/* Stack principal en chips */}
          <div className="card px-4 py-4 sm:px-6 sm:py-5">
            <p className="mb-3 text-sm text-neutral-600 dark:text-neutral-400">
              {t('skills_core_intro')}
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                'Python',
                'SQL',
                'Database design',
                'PostgreSQL',
                'SQL Server',
                'MySQL',
                'PyQt5',
                'Desktop apps',
                'HTML5',
                'CSS3',
                'Bootstrap',
                'Tailwind CSS',
                'React / Next.js',
                'JavaScript',
                'TypeScript',
                'pandas',
                'NumPy',
                'Matplotlib / Plotly',
                'Data analysis',
                'CI/CD',
                'Git / GitHub',
                'Docker (basic)',
                'Packaging & installers',
                'Real-time (LISTEN/NOTIFY)',
                'PLC / Ladder (basic)',
              ].map((tag) => (
                <span key={tag} className="badge">
                  {tag}
                </span>
              ))}
            </div>


          </div>
          <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
            {t('skills_examples_title')}
          </h3>
          {/* Categorías de skills */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Desktop apps */}
            <div className="card px-4 py-4 sm:px-6 sm:py-5">
              <h3 className="mb-2 text-sm font-semibold">
                {t('skills_desktop_title')}
              </h3>
              <ul className="space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                <li>{t('skills_desktop_item1')}</li>
                <li>{t('skills_desktop_item2')}</li>
                <li>{t('skills_desktop_item3')}</li>
                <li>{t('skills_desktop_item4')}</li>
                <li>{t('skills_desktop_item5')}</li>
              </ul>
            </div>

            {/* Backend & DB */}
            <div className="card px-4 py-4 sm:px-6 sm:py-5">
              <h3 className="mb-2 text-sm font-semibold">
                {t('skills_backend_title')}
              </h3>
              <ul className="space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                <li>{t('skills_backend_item1')}</li>
                <li>{t('skills_backend_item2')}</li>
                <li>{t('skills_backend_item3')}</li>
                <li>{t('skills_backend_item4')}</li>
                <li>{t('skills_backend_item5')}</li>
              </ul>
            </div>

            {/* Web & UI */}
            <div className="card px-4 py-4 sm:px-6 sm:py-5">
              <h3 className="mb-2 text-sm font-semibold">
                {t('skills_web_title')}
              </h3>
              <ul className="space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                <li>{t('skills_web_item1')}</li>
                <li>{t('skills_web_item2')}</li>
                <li>{t('skills_web_item3')}</li>
                <li>{t('skills_web_item4')}</li>
                <li>{t('skills_web_item5')}</li>
              </ul>
            </div>

            {/* DevOps & deployment */}
            <div className="card px-4 py-4 sm:px-6 sm:py-5">
              <h3 className="mb-2 text-sm font-semibold">
                {t('skills_devops_title')}
              </h3>
              <ul className="space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                <li>{t('skills_devops_item1')}</li>
                <li>{t('skills_devops_item2')}</li>
                <li>{t('skills_devops_item3')}</li>
                <li>{t('skills_devops_item4')}</li>
                <li>{t('skills_devops_item5')}</li>
              </ul>
            </div>

            {/* Real-time & notifications */}
            <div className="card px-4 py-4 sm:px-6 sm:py-5">
              <h3 className="mb-2 text-sm font-semibold">
                {t('skills_realtime_title')}
              </h3>
              <ul className="space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                <li>{t('skills_realtime_item1')}</li>
                <li>{t('skills_realtime_item2')}</li>
                <li>{t('skills_realtime_item3')}</li>
                <li>{t('skills_realtime_item4')}</li>
                <li>{t('skills_realtime_item5')}</li>
              </ul>
            </div>

            {/* Industrial, video & analytics */}
            <div className="card px-4 py-4 sm:px-6 sm:py-5">
              <h3 className="mb-2 text-sm font-semibold">
                {t('skills_industrial_title')}
              </h3>
              <ul className="space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                <li>{t('skills_industrial_item1')}</li>
                <li>{t('skills_industrial_item2')}</li>
                <li>{t('skills_industrial_item3')}</li>
                <li>{t('skills_industrial_item4')}</li>
                <li>{t('skills_industrial_item5')}</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

            {/* ======= PROJECTS ======= */}
      <Section
        id="proyectos"
        title={t('projects_title') ?? 'Proyectos reales'}
        subtitle={t('projects_subtitle') ?? 'Real cases oriented to results'}
      >
        {/* Subcategorías (anclas) */}
        <div className="mb-6 flex flex-wrap gap-3 text-sm">
          <a href="#projects-desktop" className="badge">
            {t('nav_projects_desktop') ?? 'Desktop apps'}
          </a>
          <a href="#projects-web" className="badge">
            {t('nav_projects_web') ?? 'Web apps'}
          </a>
          <a href="#projects-db" className="badge">
            {t('nav_projects_db') ?? 'Database design'}
          </a>
          <a href="#projects-other" className="badge">
            {t('nav_projects_other') ?? 'Other / Automation'}
          </a>
        </div>

          {/* Desktop apps */}
          <h3 id="projects-desktop" className="mb-3 text-base font-semibold">
            {t('nav_projects_desktop') ?? 'Desktop apps'}
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/projects/1" className="block group">
              <ProjectCard
                cover="/file.svg"
                title={t('proj_1_title')}
                subtitle={t('proj_1_subtitle')}
                impact={[
                  t('proj_1_impact1'),
                  t('proj_1_impact2'),
                  t('proj_1_impact3'),
                ]}
                tech={[
                  'Python',
                  'PyQt5',
                  'PostgreSQL',
                  'SQL',
                  'Database design',
                  'CI/CD',
                ]}
              />
            </Link>

            <Link href="/projects/2" className="block group">
              <ProjectCard
                cover="/file.svg"
                title={t('proj__title')}
                subtitle={t('proj__subtitle')}
                impact={[
                  t('proj__impact1'),
                  t('proj__impact2'),
                  t('proj__impact3'),
                ]}
                tech={[
                  'Python',
                  'PyQt5',
                  'SQL Server',
                  'T-SQL',
                  'OEE',
                  'Excel / PDF export',
                  'Traceability',
                ]}
              />
            </Link>

            <Link href="/projects/3" className="block group">
              <ProjectCard
                cover="/file.svg"
                title={t('proj_app_title')}
                subtitle={t('proj_app_subtitle')}
                impact={[
                  t('proj_app_impact1'),
                  t('proj_app_impact2'),
                  t('proj_app_impact3'),
                ]}
                tech={[
                  'Python',
                  'PyQt5',
                  'PostgreSQL',
                  'SQL',
                  'Desktop apps',
                  'KPIs',
                  'Notifications',
                  'Reporting',
                ]}
              />
            </Link>
          </div>


                {/* Web apps */}
        <h3 id="projects-web" className="mt-10 mb-3 text-base font-semibold">
          {t('nav_projects_web') ?? 'Web apps'}
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          <Link href="/projects/4" className="block group">
            <ProjectCard
              cover="/file.svg"
              title={t('proj_portfolio_title')}
              subtitle={t('proj_portfolio_subtitle')}
              impact={[
                t('proj_portfolio_impact1'),
                t('proj_portfolio_impact2'),
                t('proj_portfolio_impact3'),
                t('proj_portfolio_impact4'),
              ]}
              tech={[
                'Next.js',
                'React',
                'TypeScript',
                'Node.js',
                'Tailwind CSS',
                'i18n',
                'Dark/Light theme',
                'Vercel',
                'CI/CD',
              ]}
            />
          </Link>
        </div>



        {/* Database design */}
        <h3 id="projects-db" className="mt-10 mb-3 text-base font-semibold">
          {t('nav_projects_db') ?? 'Database design'}
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          <Link href="/projects/5" className="block group">
            <ProjectCard
              cover="/file.svg"
              title={t('proj_1db_title')}
              subtitle={t('proj_1db_subtitle')}
              impact={[
                t('proj_1db_impact1'),
                t('proj_1db_impact2'),
                t('proj_1db_impact3'),
                t('proj_1db_impact4'),
              ]}
              tech={[
                'PostgreSQL',
                'Database design',
                'Multi-tenant',
                'SQL',
                'Constraints',
                'Indexes',
              ]}
            />
          </Link>

          <Link href="/projects/6" className="block group">
            <ProjectCard
              cover="/file.svg"
              title={t('proj_db_title')}
              subtitle={t('proj_db_subtitle')}
              impact={[
                t('proj_db_impact1'),
                t('proj_db_impact2'),
                t('proj_db_impact3'),
                t('proj_db_impact4'),
              ]}
              tech={[
                'SQL Server',
                'T-SQL',
                'Database design',
                'Traceability',
                'OEE',
                'Indexes',
                'Constraints',
              ]}
            />
          </Link>

          <Link href="/projects/7" className="block group">
            <ProjectCard
              cover="/file.svg"
              title={t('proj_appdb_title')}
              subtitle={t('proj_appdb_subtitle')}
              impact={[
                t('proj_appdb_impact1'),
                t('proj_appdb_impact2'),
                t('proj_appdb_impact3'),
                t('proj_appdb_impact4'),
              ]}
              tech={[
                'PostgreSQL',
                'Database design',
                'SQL',
                'KPIs',
                'Constraints',
                'Indexes',
              ]}
            />
          </Link>
        </div>


        {/* Other / automation */}
        <h3 id="projects-other" className="mt-10 mb-3 text-base font-semibold">
          {t('nav_projects_other') ?? 'Otros / Automatización'}
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          <Link href="/projects/8" className="block group">
            <ProjectCard
              cover="/file.svg"
              title={t('proj_icecream_title')}
              subtitle={t('proj_icecream_subtitle')}
              impact={[
                t('proj_icecream_impact1'),
                t('proj_icecream_impact2'),
                t('proj_icecream_impact3'),
              ]}
              tech={[
                'PLC',
                'Ladder logic',
                'MySQL',
                'WebVisu',
                'Automation',
                'Process monitoring',
              ]}
            />
          </Link>
        </div>



      </Section>

      {/* ======= CONTACT ======= */}
            {/* ======= CONTACT ======= */}
      <Section id="contacto" title={t('nav_contact') ?? 'Contact'} subtitle="">
        <div className="card p-6">
          <div className="space-y-3 text-sm">
            {/* Email en texto, sin mailto */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-lg" aria-hidden="true">📧</span>
              <span className="font-medium">Email:</span>
              <span>facundoremmer0@gmail.com</span>
            </div>

            {/* LinkedIn con icono + link clickeable */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-lg" aria-hidden="true">🔗</span>
              <span className="font-medium">LinkedIn:</span>
              <a
                href="https://www.linkedin.com/in/facundo-remmer-6b761b211"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2"
              >
                linkedin.com/in/facundo-remmer
              </a>
            </div>

            {/* GitHub con icono + link clickeable */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-lg" aria-hidden="true">🔗</span>
              <span className="font-medium">GitHub:</span>
              <a
                href="https://github.com/Facuremmer"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2"
              >
                github.com/FacuRemmer
              </a>
            </div>
          </div>
        </div>
      </Section>

    </main>
  );
}

/* ---------- util styles via globals.css ----------
.btn-primary { @apply rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-medium text-neutral-900; }
.btn-ghost   { @apply rounded-xl border px-4 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800; }
.badge       { @apply rounded-full border px-3 py-1 text-xs; }
.card        { @apply rounded-2xl border bg-white dark:bg-neutral-950; }
.container-pro { @apply mx-auto max-w-6xl px-4; }
-------------------------------------------------- */
