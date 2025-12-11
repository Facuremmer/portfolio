'use client';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Lang = 'es' | 'en';
export type Dict = Record<string, string>;
export type Dictionaries = Record<Lang, Dict>;

export const DICS: Dictionaries = {
  es: {
    brand: 'Facundo — Portfolio',
    nav_projects: 'Proyectos',
    nav_about: 'Sobre mí',
    nav_contact: 'Contacto',
    nav_skills: 'Herramientas / Skills',
    nav_projects_desktop: 'Aplicaciones de escritorio',
    nav_projects_web: 'Aplicaciones web',
    nav_projects_db: 'Diseño de base de datos',
    nav_projects_other: 'Otros / Automatización',
    skills_examples_title: 'Algunas aplicaciones',

    cv_modal_title: 'Descargar Curriculum',
    cv_modal_desc: 'Selecciona el idioma en el que deseas descargar el archivo:',
    cv_option_es: 'Versión en Español',
    cv_option_en: 'Versión en Inglés',
    cv_cancel: 'Cancelar',

    // Sección Skills
    section_skills_title: 'Herramientas y tecnologías',
    section_skills_subtitle: 'Principales tecnologías que he usado.',
    skills_core_intro: 'Principales tecnologías que he usado:',

    // Skills – Desktop applications
    skills_desktop_title: 'Aplicaciones de escritorio',
    skills_desktop_item1:
      'Desarrollo de aplicaciones de escritorio en Python utilizando PyQt5.',
    skills_desktop_item2:
      'Arquitectura de aplicaciones de negocio con múltiples módulos, soporte de roles y control de permisos.',
    skills_desktop_item3:
      'Creación de widgets personalizados y componentes de interfaz reutilizables.',
    skills_desktop_item4:
      'Sistema de temas e idioma: modo claro/oscuro, colores de acento e idioma configurables por usuario.',
    skills_desktop_item5:
      'Layouts adaptables y comportamiento dinámico, con tests unitarios y validaciones funcionales básicas.',

    // Skills – Backend & DB
    skills_backend_title: 'Backend y bases de datos',
    skills_backend_item1:
      'Diseño y normalización de bases de datos relacionales orientadas a negocio.',
    skills_backend_item2:
      'Modelado de esquemas en PostgreSQL, SQL Server y MySQL con claves foráneas y restricciones bien definidas.',
    skills_backend_item3:
      'Escritura de consultas SQL avanzadas, con índices y paginación eficiente sobre grandes volúmenes de datos.',
    skills_backend_item4:
      'Implementación de procedimientos almacenados, vistas y triggers de negocio con integración básica a APIs REST internas.',
    skills_backend_item5:
      'Garantía de integridad y consistencia de datos mediante constraints, validaciones y revisiones estructurales.',

    // Skills – Web & UI
    skills_web_title: 'Web y UI',
    skills_web_item1:
      'Maquetado con HTML5 semántico y estructura de componentes reutilizables.',
    skills_web_item2:
      'Estilos con CSS3 moderno, Tailwind CSS y Bootstrap para maquetado y ajustes rápidos.',
    skills_web_item3:
      'Desarrollo de interfaces con React y Next.js (App Router) orientadas a claridad y mantenimiento.',
    skills_web_item4:
      'Uso de JavaScript y TypeScript para frontends más seguros, tipados y fáciles de refactorizar.',
    skills_web_item5:
      'Diseño responsive e internacionalización con cambio de idioma/tema desde la UI, con exposición básica a Angular.',

    // Skills – DevOps & deployment
    skills_devops_title: 'DevOps y despliegue',
    skills_devops_item1:
      'Empaquetado de aplicaciones de escritorio en ejecutables utilizando PyInstaller.',
    skills_devops_item2:
      'Creación de instaladores para Windows con Inno Setup, incluyendo flujos de auto-update.',
    skills_devops_item3:
      'Flujos de trabajo con Git (branches, code review, GitHub) integrados a pipelines tipo CI/CD.',
    skills_devops_item4:
      'Configuración de entornos mediante archivos .env y scripts de backup/restore de bases de datos.',
    skills_devops_item5:
      'Uso básico de Docker para entornos locales de desarrollo/pruebas y conectividad remota vía VPN (por ejemplo, Tailscale).',

    // Skills – Real-time
    skills_realtime_title: 'Industrial & Real-Time',
    skills_realtime_item1:
      'Manejo de eventos de BD en tiempo real (LISTEN/NOTIFY).',
    skills_realtime_item2:
      'Conectividad con PLCs y Hardware Industrial.',
    skills_realtime_item3:
      'Sistemas SCADA / HMI y adquisición de datos (DAQ).',
    skills_realtime_item4:
      'Arquitectura de UI no bloqueante (Workers/Threads).',
    skills_realtime_item5:
      'Tolerancia a fallos de red (Offline-first).',

    // Skills – Data 
    skills_industrial_title: 'Análisis de Datos',
    skills_industrial_item1:
      'Pandas / NumPy para procesamiento de datos.',
    skills_industrial_item2:
      'Visualización científica (Matplotlib / PowerBI).',
    skills_industrial_item3:
      'Reportes automatizados (Excel/PDF).',
    skills_industrial_item4:
      'Limpieza y transformación de datasets industriales.',
    skills_industrial_item5:
      'Cálculo de KPIs de negocio (OEE, Rendimiento).',

    projects_title: 'Proyectos reales',
    projects_subtitle: 'Casos reales orientados a resultados.',

    // Hero / KPIs / contacto
    hero_bio:
      'Desarrollador Python/SQL orientado a proyectos. Construyo aplicaciones con foco en rendimiento, trazabilidad y experiencia de usuario.',
    cta_view_projects: 'Ver proyectos',
    cta_download_cv: 'Descargar CV',
    kpi_years: 'Años de experiencia',
    kpi_projects: 'Proyectos trabajados',
    kpi_highlights: 'Tecnologías clave',
    hero_headline:
      'Backend & Data Engineer | Python • SQL • System Architecture',
    
    hero_subheadline:
      'Transformo datos complejos y procesos manuales en sistemas de software eficientes, trazables y listos para la toma de decisiones.',
    
    hero_tagline:
      'Construyo soluciones de software que conectan el mundo físico (OT) con el digital (IT).',
    hero_read_more: 'Ver más',
    hero_read_less: 'Ver menos',
    caps_title: 'Capacidades',
    hi_title: 'Highlights',
    hi_perf:
      'Optimización SQL (índices, EXPLAIN/ANALYZE, paginado)',
    hi_pack: 'Packaging  + auto-update',
    hi_rt: 'Tiempo real (LISTEN/NOTIFY) + UI no bloqueante',
    about_title: 'Sobre mí',
    about_text:
      'Ingeniero de Software especializado en Backend, Arquitectura de Datos y automatización.',
    about_long:
      'Soy Técnico Universitario en Programación. Mi enfoque no es solo escribir código, sino diseñar la arquitectura que hace que los datos fluyan de manera segura y eficiente desde el origen hasta la toma de decisiones.\n\nMe especializo en el diseño de bases de datos relacionales (PostgreSQL, SQL Server) y el desarrollo de backends robustos en Python, manejando concurrencia, sockets y procesamiento en tiempo real. Me destaco en entornos donde la integridad del dato es crítica, habiendo construido sistemas de trazabilidad industrial y gestión de recursos humanos desde cero.\n\nActualmente busco desafíos donde pueda aplicar mi experiencia en modelado de datos y optimización de backend para resolver problemas de escala y eficiencia, más allá de la interfaz de usuario.',
    contact_title: 'Contacto',
    contact_pitch:
      'Interesado en proyectos con impacto medible y foco en rendimiento, datos y UX.',
    contact_email: 'Enviar email',
    contact_linkedin: 'Ver LinkedIn',
    contact_github: 'Ver GitHub',
    years_experience: 'Años de experiencia',
    projects_done: 'Proyectos trabajados',

    copy_btn: 'Copiar',
    copy_toast: 'Copiado al portapapeles',

    // Proyectos — Desktop apps
    proj_1_title: 'Gestión integral de negocio para agroinsumos',
    proj_1_subtitle:
      'Cotizaciones, stock, entregas y condiciones comerciales.',
    proj_1_impact1: 'Event Bus: Sincronización asíncrona DB-UI (Realtime).',
    proj_1_impact2: 'Smart Pooling: Gestión eficiente de conexiones.',
    proj_1_impact3: 'SaaS RBAC: Seguridad multinivel.',

    proj__title: 'Trazabilidad y OEE para planta industrial',
    proj__subtitle:
      'Seguimiento de producción, fallas y stock sobre SQL Server.',
    proj__impact1: 'Async Workers: Cálculos en background.',
    proj__impact2: 'Data Viz: Gráficos científicos embebidos.',
    proj__impact3: 'Traceability: Navegación Caja -> Pallet.',

    proj_app_title:
      'Gestión interna de proyectos, horas y operación',
    proj_app_subtitle:
      'Aplicación de escritorio para centralizar proyectos, horas, permisos, KPIs y tareas internas.',
    proj_app_impact1: 'Session Guard: Seguridad por inactividad.',
    proj_app_impact2: 'Automation: Alertas automáticas.',
    proj_app_impact3: 'Validation: Integridad de datos.',

    // Proyectos — Web apps
    proj_portfolio_title:
      'Portfolio web — Next.js, TypeScript y Vercel',
    proj_portfolio_subtitle:
      'Sitio personal responsive con modo oscuro/claro, i18n y despliegue continuo.',
    proj_portfolio_impact1: 'Next.js App Router & Server Components.',
    proj_portfolio_impact2: 'TypeScript Strict Typing.',
    proj_portfolio_impact3: 'Tailwind Design System.',
    proj_portfolio_impact4: 'Custom i18n System.',

    // Proyectos — Database design
    proj_1db_title:
      'Modelo de datos multi-tenant para agroinsumos',
    proj_1db_subtitle:
      'Base de datos relacional para centralizar empresas, clientes, stock y cotizaciones.',
    proj_1db_impact1: 'Multi-tenant Schema: Isolation.',
    proj_1db_impact2: 'Unified Identity: Inheritance Pattern.',
    proj_1db_impact3: 'Integrity: Strict Constraints.',
    proj_1db_impact4: 'Audit: Standardized logging.',

    proj_db_title:
      'Trazabilidad de cajas de producto y stock (gestión de bodega) en planta industrial',
    proj_db_subtitle:
      'Modelo de datos para seguir cada caja desde el túnel de frío hasta la entrega al cliente.',
    proj_db_impact1: 'High Volume: Millones de registros.',
    proj_db_impact2: 'Indexing: Optimización de lectura.',
    proj_db_impact3: 'Physical Modeling: Reflejo de planta.',
    proj_db_impact4: 'Performance: T-SQL Tuning.',

    proj_appdb_title:
      'Modelo de datos para gestión interna de proyectos y horas',
    proj_appdb_subtitle:
      'Esquema relacional para proyectos, horas trabajadas, permisos y KPIs internos.',
    proj_appdb_impact1: 'HR Core: Recursos centralizados.',
    proj_appdb_impact2: 'Timekeeping: Registro transaccional.',
    proj_appdb_impact3: 'Audit Trail: Histórico de cambios.',
    proj_appdb_impact4: 'Data Integrity: Constraints.',

    // Proyectos — Otros / Automatización
    proj_icecream_title:
      'Planta de helados — Monitoreo de tanques y temperaturas',
    proj_icecream_subtitle:
      'Sistema de adquisición de datos y webvisu sobre MySQL para control de proceso.',
    proj_icecream_impact1: 'Hardware Link: PLC Integration.',
    proj_icecream_impact2: 'Data Historian: SQL Trends.',
    proj_icecream_impact3: 'Process Control: Variables críticas.',

    proj_view_case: 'Ver caso',

    //Proyecto 1
    proj_1_tag_project: 'Arquitectura / SaaS',
    proj_1S_title: 'Plataforma de Gestión Agroindustrial (SaaS)',
    proj_1_summary: 'Arquitectura de aplicación de escritorio distribuida con sincronización en tiempo real, sistema de permisos multi-tenant y actualizaciones OTA.',

    proj_1_problem_title: 'El Desafío Técnico',
    proj_1_problem_intro: 'Migrar una operación crítica a la nube sin perder la velocidad de una app de escritorio, garantizando consistencia de datos en un entorno multi-usuario y multi-empresa.',
    proj_1_problem_1: 'Latencia: Los usuarios necesitaban respuesta inmediata, imposible con una web tradicional en zonas de baja conexión.',
    proj_1_problem_2: 'Colisiones: Múltiples operadores editando las mismas órdenes simultáneamente.',
    proj_1_problem_3: 'Seguridad: Necesidad de un esquema de permisos granular (Paquetes contratados vs Roles internos).',
    proj_1_problem_4: 'Despliegue: Distribuir parches y mejoras a cientos de terminales sin intervención técnica.',

    proj_1_solution_title: 'La Solución Arquitectónica',
    proj_1_solution_intro: 'Un cliente híbrido Python/Qt con un "Motor de Realtime" basado en eventos de base de datos y un sistema de autogestión robusto.',
    proj_1_solution_1: 'Motor Realtime: Implementación de un bus de eventos sobre PostgreSQL (LISTEN/NOTIFY) para refrescar la UI al instante sin polling.',
    proj_1_solution_2: 'Conexión Resiliente: Pool de conexiones inteligente con "Fast-Fail", reintentos exponenciales y modo "Offline Guard".',
    proj_1_solution_3: 'SaaS Core: Sistema de permisos dinámico que cruza "Paquetes contratados por la empresa" con "Roles de usuario".',
    proj_1_solution_4: 'Update Engine: Sistema propio de actualizaciones (OTA) con verificación criptográfica (SHA256) y rollback.',

    proj_1_tech_title: 'Stack & Tecnologías',
    proj_1_tech_backend_title: 'Core & Data',
    proj_1_tech_frontend_title: 'Cliente & UI',
    proj_1_tech_infra_title: 'Infra & Security',

    proj_1_highlight_section_title: 'Deep Dive: Código',
    proj_1_highlight_1_title: 'Event Bus',
    proj_1_highlight_1_desc: 'Bridge asíncrono entre SQL y la UI.',
    proj_1_highlight_2_title: 'Smart Pooling',
    proj_1_highlight_2_desc: 'Gestión de recursos crítica.',
    proj_1_highlight_3_title: 'RBAC SaaS',
    proj_1_highlight_3_desc: 'Lógica de acceso multinivel.',
    proj_1_highlight_4_title: 'OTA Updates',
    proj_1_highlight_4_desc: 'Deploy continuo en desktop.',

    proj_1_snippets_title: 'Snippets de Arquitectura',
    proj_1_snippets_intro: 'Fragmentos reales que resuelven problemas de concurrencia y escalabilidad.',

    proj_1_snip_realtime_title: 'Motor de Eventos (Low-Level Threading)',
    proj_1_snip_realtime_expl: 'Un hilo dedicado (Daemon) mantiene un socket abierto con PostgreSQL escuchando notificaciones asíncronas. Esto permite que la UI reaccione en milisegundos a cambios de otros usuarios sin saturar la red con polling.',

    proj_1_snip_pool_title: 'Pool de Conexiones Resiliente',
    proj_1_snip_pool_expl: 'Context Manager que administra el ciclo de vida de la conexión. Implementa "Backoff exponencial" para reintentos y configura timeouts de sesión para evitar bloqueos (deadlocks) en la base de datos.',

    proj_1_snip_perm_title: 'Lógica de Permisos SaaS (Multi-tenant)',
    proj_1_snip_perm_expl: 'El sistema valida acceso en capas: 1) ¿La empresa contrató el módulo? 2) ¿El usuario tiene rol de Admin? 3) ¿Tiene permisos específicos o overrides? Esto permite vender la app como SaaS modular.',

    proj_1_figures_title: 'Capturas de la Interfaz',
    proj_1_figures_intro: 'UI orientada a la productividad, diseñada con Qt para alta densidad de información.',
    proj_1_fig_rbac_alt: 'Panel de gestión de permisos',
    proj_1_fig_rbac_caption: 'Matriz de permisos granular: permite overrides por usuario sobre los roles base.',
    proj_1_fig_rt_alt: 'Indicador de estado online/offline',
    proj_1_fig_rt_caption: 'Feedback visual de conectividad y notificaciones en tiempo real.',
    proj_1_fig_upd_alt: 'Gestor de actualizaciones',
    proj_1_fig_upd_caption: 'Panel de control para desplegar versiones a canales "Stable" o "Beta" por empresa.',

    proj_1_structure_title: 'Estructura del Proyecto',
    proj_1_structure_intro: 'Organización modular separando servicios de infraestructura, lógica de negocio y capa de presentación.',
    proj_1_structure_note: 'Arquitectura hexagonal simplificada.',
    
    proj_1_back_to_projects: 'Volver a proyectos',

    // Proyecto 2 
    proj_2_tag_project: 'Analytics / Industrial',
    proj_2_title: 'Dashboard de Trazabilidad y OEE Industrial',
    proj_2_summary: 'Sistema de visualización de planta con gráficos embebidos (Matplotlib), cálculo de OEE en tiempo real y trazabilidad unitaria de producto.',

    proj_2_problem_title: 'El Desafío Operativo',
    proj_2_problem_intro: 'Una planta industrial genera miles de eventos por hora. Los operadores necesitaban visualizar métricas críticas (OEE) y rastrear cajas específicas sin detener la línea de producción ni esperar reportes batch.',
    proj_2_problem_1: 'Data Locking: Las consultas de estadísticas bloqueaban la interfaz de usuario (UI freeze) en PCs industriales antiguas.',
    proj_2_problem_2: 'Visualización: Necesidad de gráficos nativos (Donuts, Barras) integrados en la app, sin depender de herramientas externas como Excel.',
    proj_2_problem_3: 'Trazabilidad: Reconstruir la historia de una "Caja" (desde producción hasta despacho) requería cruzar 5+ tablas masivas.',

    proj_2_solution_title: 'La Solución de Datos',
    proj_2_solution_intro: 'Un dashboard de alto rendimiento que desacopla la carga de datos (SQL) de la renderización (UI) usando Hilos (Workers).',
    proj_2_solution_1: 'Multithreading: Implementación del patrón "Worker-Signal" (QThread) para ejecutar Stored Procedures pesados en background.',
    proj_2_solution_2: 'Embedded Analytics: Integración de Matplotlib dentro de PyQt5 para generar gráficos dinámicos de producción diaria y OEE.',
    proj_2_solution_3: 'Traceability Search: Buscador optimizado para rastrear Cajas, Pallets y Órdenes de Producción (OP) con navegación drill-down.',
    proj_2_solution_4: 'Reportes Nativos: Exportación directa de las vistas de datos a Excel/PDF manteniendo el formato visual.',

    proj_2_tech_title: 'Stack & Tecnologías',
    proj_2_tech_backend_title: 'Data & Threads',
    proj_2_tech_frontend_title: 'Viz & UI',
    proj_2_tech_infra_title: 'Database',

    proj_2_highlight_section_title: 'Deep Dive: Código',
    proj_2_highlight_1_title: 'Async Workers',
    proj_2_highlight_1_desc: 'SQL en hilos de fondo.',
    proj_2_highlight_2_title: 'Matplotlib Qt',
    proj_2_highlight_2_desc: 'Gráficos científicos en UI.',
    proj_2_highlight_3_title: 'Drill-down',
    proj_2_highlight_3_desc: 'Navegación Caja -> Pallet.',
    proj_2_highlight_4_title: 'Stored Procs',
    proj_2_highlight_4_desc: 'Lógica pesada en DB.',

    proj_2_snippets_title: 'Snippets de Data & Performance',
    proj_2_snippets_intro: 'Cómo lograr una UI fluida manejando grandes volúmenes de datos industriales.',

    proj_2_snip_worker_title: 'Worker Thread Pattern (Non-blocking UI)',
    proj_2_snip_worker_expl: 'Para evitar que la interfaz se congele durante el cálculo de OEE (que procesa millones de registros), encapsulamos la lógica en un QObject movido a un QThread. Los resultados vuelven al hilo principal vía Signals.',

    proj_2_snip_chart_title: 'Integración Matplotlib + PyQt5',
    proj_2_snip_chart_expl: 'Clase Canvas personalizada que hereda de FigureCanvasQTAgg. Permite renderizar gráficos de calidad científica (Donuts de eficiencia) directamente dentro de los widgets de la aplicación.',

    proj_2_snip_trace_title: 'Lógica de Visualización de Cajas',
    proj_2_snip_trace_expl: 'Controlador que orquesta la búsqueda. Gestiona el estado de "Cargando", invoca al worker y puebla la tabla de resultados, manejando errores de conexión o datos vacíos.',

    proj_2_figures_title: 'Tableros de Control',
    proj_2_figures_intro: 'Visualización clara de KPIs industriales y herramientas de rastreo.',
    proj_2_fig_oee_alt: 'Dashboard de OEE',
    proj_2_fig_oee_caption: 'Vista de eficiencia general (OEE) con gráficos de torta embebidos y KPIs diarios.',
    proj_2_fig_trace_alt: 'Buscador de Trazabilidad',
    proj_2_fig_trace_caption: 'Herramienta de búsqueda de Cajas/Pallets con grilla de resultados detallada.',

    proj_2_structure_title: 'Estructura del Proyecto',
    proj_2_structure_intro: 'Separación clara entre la capa de presentación (Frames) y la capa de procesamiento de datos (Workers).',
    proj_2_structure_note: 'Patrón MVC asíncrono.',

    proj_2_confidential_title: 'Material Confidencial',
    proj_2_confidential_desc: 'Debido a acuerdos de confidencialidad (NDA) con el cliente industrial, no es posible mostrar capturas reales de la interfaz o datos de producción. El código presentado ha sido anonimizado para fines demostrativos.',

    proj_2_back_to_projects: 'Volver a proyectos',

    // Proyecto 3
    proj_3_tag_project: 'Desktop / Business Logic',
    proj_3_title: 'Sistema de Gestión de Recursos y Operaciones',
    proj_3_summary: 'Aplicación de escritorio integral para la administración de horas, licencias, inventario y reportes operativos.',

    proj_3_problem_title: 'El Caos Administrativo',
    proj_3_problem_intro: 'La empresa gestionaba empleados y proyectos usando planillas de Excel dispersas, lo que generaba errores en la liquidación de horas y falta de visibilidad sobre quién estaba de licencia.',
    proj_3_problem_1: 'Control Horario: Dificultad para validar reglas complejas (ej: horas al 50%, 100%, feriados) manualmente.',
    proj_3_problem_2: 'Seguimiento: Los gerentes no tenían forma de saber qué tareas estaban pendientes o quién estaba asignado a qué proyecto.',
    proj_3_problem_3: 'Seguridad: Las sesiones quedaban abiertas en PCs compartidas, exponiendo datos sensibles.',

    proj_3_solution_title: 'La Solución Pragmática',
    proj_3_solution_intro: 'Desarrollo de una aplicación centralizada que digitalizó el 100% del flujo operativo, con reglas de negocio forzadas por software.',
    proj_3_solution_1: 'Reglas de Negocio Hardcoded: Motor de validación que impide cargar más de 9hs normales o asignar tareas a proyectos cerrados.',
    proj_3_solution_2: 'Session Guard: Sistema de inactividad que bloquea la aplicación automáticamente para proteger la información en planta.',
    proj_3_solution_3: 'Background Reminders: Un "Worker" que corre en segundo plano y envía alertas de vencimiento de licencias automáticamente.',
    proj_3_solution_4: 'Reportes One-Click: Generación automática de Excel/PDF para liquidación de sueldos y auditoría.',

    proj_3_tech_title: 'Stack & Tecnologías',
    proj_3_tech_backend_title: 'Python Core',
    proj_3_tech_frontend_title: 'PyQt5 (Legacy)',
    proj_3_tech_infra_title: 'SQL Server',

    proj_3_highlight_section_title: 'Deep Dive: Lógica',
    proj_3_highlight_1_title: 'Session Guard',
    proj_3_highlight_1_desc: 'Protección por inactividad.',
    proj_3_highlight_2_title: 'Workers',
    proj_3_highlight_2_desc: 'Tareas programadas.',
    proj_3_highlight_3_title: 'Business Rules',
    proj_3_highlight_3_desc: 'Validación estricta.',
    proj_3_highlight_4_title: 'Reporting',
    proj_3_highlight_4_desc: 'Automatización Excel.',

    proj_3_snippets_title: 'Snippets de Lógica de Negocio',
    proj_3_snippets_intro: 'Ejemplos de cómo se implementaron reglas críticas y seguridad en la aplicación.',

    proj_3_snip_worker_title: 'Worker de Recordatorios (Automation)',
    proj_3_snip_worker_expl: 'Este servicio corre en un hilo independiente al iniciar la app. Verifica en la base de datos si hay licencias próximas a vencer y envía notificaciones por correo sin bloquear la UI.',

    proj_3_snip_session_title: 'Gestor de Sesión (Security)',
    proj_3_snip_session_expl: 'Implementación de un temporizador de inactividad. Si el usuario no interactúa por un tiempo definido, el sistema muestra una advertencia y cierra la sesión forzosamente para proteger los datos.',

    proj_3_snip_rules_title: 'Validación de Carga Horaria',
    proj_3_snip_rules_expl: 'Fragmento de la lógica que valida la integridad de los datos antes de guardar. Asegura que no se excedan los límites legales de horas diarias y categoriza automáticamente horas extra.',

    proj_3_figures_title: 'Interfaz Operativa',
    proj_3_figures_intro: 'Diseño funcional enfocado en la velocidad de carga de datos para personal administrativo.',
    proj_3_fig_reassign_alt: 'Panel de carga de horas',
    proj_3_fig_reassign_caption: 'Interfaz de registro de actividades con validación en tiempo real.',
    proj_3_fig_idle_alt: 'Aviso de seguridad',
    proj_3_fig_idle_caption: 'Mecanismo de protección de sesión por inactividad.',

    proj_3_structure_title: 'Estructura Lógica',
    proj_3_structure_intro: 'Aunque la implementación física es monolítica (por requerimientos iniciales), el código se estructura lógicamente en módulos funcionales.',
    proj_3_structure_note: '',

    proj_3_confidential_title: 'Datos Sensibles Protegidos',
    proj_3_confidential_desc: 'Este sistema gestiona información crítica de empleados, liquidaciones y operaciones internas. Por políticas de privacidad y protección de datos, no se exhiben capturas de pantalla reales.',

    proj_3_back_to_projects: 'Volver a proyectos',

    // Proyecto 4
    snippets_title: 'Snippets de Código',
    snippets_intro: 'Fragmentos destacados de la implementación.',
    proj_portfolio_summary: 'Sitio personal desarrollado con Next.js 14, TypeScript y Tailwind CSS. Enfocado en performance, accesibilidad y una arquitectura limpia mantenible.',
    proj_portfolio_problem_title: 'El Desafío',
    proj_portfolio_problem_intro: 'Crear una identidad digital que no sea solo una tarjeta de presentación, sino una demostración técnica de capacidades full-stack.',
    proj_portfolio_problem_1: 'Demostración Técnica: Mostrar código real y arquitectura, no solo imágenes estáticas.',
    proj_portfolio_problem_2: 'Internacionalización: Soporte ES/EN fluido sin librerías pesadas.',
    proj_portfolio_problem_3: 'Experiencia de Usuario: Diseño responsive, modo oscuro y navegación rápida.',
    proj_portfolio_solution_title: 'La Solución',
    proj_portfolio_solution_intro: 'Una aplicación web moderna (PWA) construida desde cero con las últimas tecnologías del ecosistema React.',
    proj_portfolio_solution_1: 'Next.js App Router: Renderizado híbrido y optimización SEO.',
    proj_portfolio_solution_2: 'Custom Hooks: Lógica encapsulada para temas y traducciones.',
    proj_portfolio_solution_3: 'Tailwind CSS: Sistema de diseño atómico y consistente.',
    proj_portfolio_solution_4: 'Componentes Reutilizables: Arquitectura modular escalable.',
    proj_portfolio_snip_hook_title: 'Hook de Tema',
    proj_portfolio_snip_hook_expl: 'Lógica para persistir la preferencia de modo oscuro en localStorage y CSS.',
    proj_portfolio_snip_i18n_title: 'Sistema i18n',
    proj_portfolio_snip_i18n_expl: 'Contexto ligero y tipado para traducciones instantáneas O(1).',
    proj_portfolio_fig_mobile_alt: 'Versión Móvil',
    proj_portfolio_fig_mobile_caption: 'Diseño totalmente responsivo y menú off-canvas.',
    proj_portfolio_fig_dark_alt: 'Modo Oscuro',
    proj_portfolio_fig_dark_caption: 'Paleta de colores semántica para alto contraste.',
    back_to_projects: 'Volver a proyectos',

    // Proyecto 5
    proj_5_tag_project: 'Database / SQL',
    proj_5_title: 'Modelo Relacional Multi-Tenant para SaaS',
    proj_5_summary: 'Diseño e implementación de un esquema de base de datos PostgreSQL normalizado para soportar múltiples empresas, gestión de identidad unificada y trazabilidad comercial.',

    proj_5_problem_title: 'El Desafío de Datos',
    proj_5_problem_intro: 'El sistema requería soportar múltiples empresas (tenants) en una única base de datos, garantizando aislamiento total de la información y consistencia en transacciones complejas.',
    proj_5_problem_1: 'Aislamiento: Evitar que un usuario de la Empresa A vea datos de la Empresa B por error en una consulta.',
    proj_5_problem_2: 'Identidad Fragmentada: Una misma persona física podía ser "Usuario", "Cliente" y "Proveedor" simultáneamente.',
    proj_5_problem_3: 'Integridad: Necesidad de prevenir registros huérfanos en facturación y stock (ej: borrar un cliente con deudas).',

    proj_5_solution_title: 'Diseño Relacional (3NF)',
    proj_5_solution_intro: 'Un esquema fuertemente tipado en PostgreSQL, utilizando restricciones a nivel de motor para garantizar la calidad del dato.',
    proj_5_solution_1: 'Estrategia Multi-tenant: Inclusión de "company_id" en todas las claves compuestas y foráneas para forzar el filtrado por empresa.',
    proj_5_solution_2: 'Herencia de Entidades: Patrón "Person" como entidad base, de la cual extienden "Users", "Clients" y "Suppliers" mediante claves foráneas 1:1.',
    proj_5_solution_3: 'Constraints Robustos: Uso extensivo de ON DELETE RESTRICT para proteger datos históricos (no se puede borrar un producto si fue vendido).',
    proj_5_solution_4: 'Auditoría: Campos de control (created_at, is_active) estandarizados en todas las tablas maestras.',

    proj_5_tech_title: 'Tecnologías',
    proj_5_tech_backend_title: 'Motor',
    proj_5_tech_frontend_title: 'Diseño',
    proj_5_tech_infra_title: 'Scripting',

    proj_5_highlight_section_title: 'Decisiones de Diseño',
    proj_5_highlight_1_title: 'Multi-tenant',
    proj_5_highlight_1_desc: 'Aislamiento lógico por ID.',
    proj_5_highlight_2_title: 'Data Integrity',
    proj_5_highlight_2_desc: 'FKs y Constraints estrictos.',
    proj_5_highlight_3_title: 'Unified Identity',
    proj_5_highlight_3_desc: 'Modelo de herencia Person.',
    proj_5_highlight_4_title: 'DDL Puro',
    proj_5_highlight_4_desc: 'Control total del esquema.',

    proj_5_snippets_title: 'Definiciones DDL (SQL)',
    proj_5_snippets_intro: 'Extractos del script de creación que muestran la estructura de tablas y relaciones.',

    proj_5_snip_core_title: 'Núcleo de Identidad (Person + User)',
    proj_5_snip_core_expl: 'Implementación del patrón de herencia. La tabla "person" almacena los datos comunes (nombre, email), mientras que "user_login" y "clients" extienden de ella vinculando el "person_id".',

    proj_5_snip_trans_title: 'Transaccional (Cotizaciones)',
    proj_5_snip_trans_expl: 'Estructura Maestro-Detalle para cotizaciones. Nótese el uso de DECIMAL para montos (evitando errores de redondeo de float) y las restricciones NOT NULL para garantizar datos completos.',

    proj_5_snip_tenant_title: 'Estructura Multi-Empresa',
    proj_5_snip_tenant_expl: 'Tabla base para la gestión de tenants. Cada registro aquí representa un entorno aislado dentro de la aplicación SaaS.',

    proj_5_structure_title: 'Organización de Scripts',
    proj_5_structure_intro: 'El modelo se versiona mediante scripts SQL incrementales para facilitar migraciones.',
    proj_5_structure_note: 'PostgreSQL 14+',

    proj_5_back_to_projects: 'Volver a proyectos',

    // Proyecto 6
    proj_6_tag_project: 'SQL Server / T-SQL',
    proj_6_title: 'Base de Datos de Trazabilidad Industrial',
    proj_6_summary: 'Modelo relacional de alto volumen para el seguimiento unitario de producción (Cajas y Pallets) en planta frigorífica, optimizado para SQL Server.',

    proj_6_problem_title: 'El Desafío de Volumen',
    proj_6_problem_intro: 'La planta produce miles de cajas diarias. Se necesitaba un sistema que pudiera reconstruir la historia completa de cada unidad (desde la faena hasta el camión de despacho) sin degradar la performance con el paso de los años.',
    proj_6_problem_1: 'Granularidad: Pasar de un control por "Lote" a un control por "Caja Unitaria" (millones de registros anuales).',
    proj_6_problem_2: 'Performance de Lectura: Los reportes de stock y OEE necesitaban sumarizar millones de filas en segundos.',
    proj_6_problem_3: 'Integridad Física: El sistema debía impedir movimientos imposibles (ej: poner una caja en un pallet que ya fue despachado).',

    proj_6_solution_title: 'Modelado en T-SQL',
    proj_6_solution_intro: 'Implementación de un esquema estrella/copo de nieve normalizado en SQL Server, con un fuerte uso de índices para soportar la carga operativa.',
    proj_6_solution_1: 'Claves BigInt: Uso de BIGINT en tablas transaccionales (Caja, Movimientos) previendo la escala a largo plazo.',
    proj_6_solution_2: 'Indexing Strategy: Diseño de Índices No Agrupados (Non-Clustered) con columnas incluidas (INCLUDE) para acelerar consultas de agregación sin tocar la tabla base.',
    proj_6_solution_3: 'Jerarquía Logística: Modelado estricto de la relación Caja > Pallet > Ubicación > Depósito.',
    proj_6_solution_4: 'Vistas Materializadas: (Concepto) Preparación de vistas planas para facilitar la integración con herramientas de BI (PowerBI).',

    proj_6_tech_title: 'Tecnologías',
    proj_6_tech_backend_title: 'Motor',
    proj_6_tech_frontend_title: 'Modelado',
    proj_6_tech_infra_title: 'Optimización',

    proj_6_highlight_section_title: 'Puntos Clave',
    proj_6_highlight_1_title: 'High Volume',
    proj_6_highlight_1_desc: 'Diseño para millones de filas.',
    proj_6_highlight_2_title: 'T-SQL Expert',
    proj_6_highlight_2_desc: 'Schemas, DBO, Clustered Keys.',
    proj_6_highlight_3_title: 'Physical Modeling',
    proj_6_highlight_3_desc: 'Reflejo digital de planta.',
    proj_6_highlight_4_title: 'Indexing',
    proj_6_highlight_4_desc: 'Optimización de lectura.',

    proj_6_snippets_title: 'Definiciones T-SQL',
    proj_6_snippets_intro: 'Estructuras críticas del script de creación.',

    proj_6_snip_main_title: 'Tabla Core: Caja Unitaria',
    proj_6_snip_main_expl: 'La entidad central del modelo. Obsérvese el uso de claves foráneas hacia Pallet y Producto para mantener la integridad referencial, y tipos de datos precisos (DECIMAL para peso).',

    proj_6_snip_pallet_title: 'Contenedor Logístico: Pallet',
    proj_6_snip_pallet_expl: 'Entidad que agrupa cajas. Permite mover grandes volúmenes de stock actualizando una sola referencia de ubicación.',

    proj_6_snip_index_title: 'Estrategia de Indexación (Performance)',
    proj_6_snip_index_expl: 'Ejemplo de índice optimizado para reportes. Al filtrar por Orden de Producción (OP), el motor busca en el índice y recupera el Peso sin tener que leer la tabla completa (Key Lookup), reduciendo el I/O drásticamente.',

    proj_6_structure_title: 'Estructura del Script',
    proj_6_structure_intro: 'Organización secuencial para despliegue en servidor limpio.',
    proj_6_structure_note: 'SQL Server 2019+',

    proj_6_back_to_projects: 'Volver a proyectos',

    //Proyecto 7
    proj_7_tag_project: 'SQL Server / Data Modeling',
    proj_7_title: 'Modelo de Datos para Gestión de Operaciones',
    proj_7_summary: 'Base de datos relacional diseñada para centralizar la gestión de recursos humanos, imputación de horas, licencias y control de proyectos internos.',

    proj_7_problem_title: 'Fragmentación de Datos',
    proj_7_problem_intro: 'La información operativa residía en silos (Excel, correos, papeles), haciendo imposible obtener métricas cruzadas como "Costo real por Proyecto" o "Disponibilidad de Recursos".',
    proj_7_problem_1: 'Inconsistencia: Empleados cargando horas a proyectos cerrados o inexistentes.',
    proj_7_problem_2: 'Redundancia: Datos de empleados duplicados en múltiples planillas con información contradictoria.',
    proj_7_problem_3: 'Auditoría: Imposibilidad de saber quién modificó un registro de horas o cuándo se aprobó una licencia.',

    proj_7_solution_title: 'Modelo Relacional Centralizado',
    proj_7_solution_intro: 'Diseño de un esquema normalizado en SQL Server que actúa como única fuente de verdad (Single Source of Truth) para toda la organización.',
    proj_7_solution_1: 'Integridad Referencial: Claves foráneas estrictas que impiden la carga de datos huérfanos (ej: Horas sin Empleado).',
    proj_7_solution_2: 'Borrado Lógico: Implementación de columnas de estado (IsActive) para mantener el historial completo sin perder referencia de datos pasados.',
    proj_7_solution_3: 'Normalización: Separación de entidades (Clientes, Proyectos, Tareas, Empleados) para evitar redundancia y anomalías de actualización.',
    proj_7_solution_4: 'Vistas de Reporte: Abstracciones SQL para simplificar consultas complejas de liquidación y control de gestión.',

    proj_7_tech_title: 'Tecnologías',
    proj_7_tech_backend_title: 'SQL Server',
    proj_7_tech_frontend_title: 'T-SQL',
    proj_7_tech_infra_title: 'Backup & Recovery',

    proj_7_highlight_section_title: 'Estructura de Datos',
    proj_7_highlight_1_title: 'HR Core',
    proj_7_highlight_1_desc: 'Empleados y Perfiles.',
    proj_7_highlight_2_title: 'Ops Tracking',
    proj_7_highlight_2_desc: 'Proyectos y Tareas.',
    proj_7_highlight_3_title: 'Timekeeping',
    proj_7_highlight_3_desc: 'Registro de Horas.',
    proj_7_highlight_4_title: 'Audit Trail',
    proj_7_highlight_4_desc: 'Histórico de cambios.',

    proj_7_snippets_title: 'Definiciones de Esquema (DDL)',
    proj_7_snippets_intro: 'Estructuras principales que soportan la lógica de negocio de la aplicación de escritorio.',

    proj_7_snip_emp_title: 'Maestro de Empleados',
    proj_7_snip_emp_expl: 'Tabla central de recursos. Nótese el uso de restricciones para campos obligatorios y valores por defecto para el estado activo.',

    proj_7_snip_hours_title: 'Registro de Actividad (WorkHours)',
    proj_7_snip_hours_expl: 'Tabla transaccional donde se imputan las horas. Vincula "Quién" (Employee), "Qué" (Task/Project) y "Cuándo" (Date), con validación de tipos de datos.',

    proj_7_snip_proj_title: 'Gestión de Proyectos',
    proj_7_snip_proj_expl: 'Estructura jerárquica para organizar el trabajo. Permite definir fechas de inicio/fin y estado para controlar la asignación de tareas.',

    proj_7_structure_title: 'Organización del Backup',
    proj_7_structure_intro: 'El archivo SQL contiene la definición completa del esquema, datos semilla (diccionarios) y procedimientos almacenados.',
    proj_7_structure_note: 'SQL Server 2016+',

    proj_7_back_to_projects: 'Volver a proyectos',

    //Proyecto 8
    proj_8_tag_project: 'Industrial IoT / SCADA',
    proj_8_title: 'Sistema de Gestión de Materia Prima y Procesos',
    proj_8_summary: 'Solución integral para planta de helados que digitaliza la recepción de materia prima, monitoreo de tanques y control de pasteurización.',

    proj_8_problem_title: 'Control de Calidad y Stock',
    proj_8_problem_intro: 'La planta manejaba la recepción de leche y crema de forma manual, dificultando el control de mermas y el aseguramiento de la cadena de frío en los tanques de maduración.',
    proj_8_problem_1: 'Pérdida de Trazabilidad: Falta de registro digital sobre qué lote de materia prima se usó en cada producción.',
    proj_8_problem_2: 'Riesgo de Calidad: Necesidad de monitorear temperaturas críticas (Pasteurización/Maduración) las 24hs con alertas tempranas.',
    proj_8_problem_3: 'Silos de Información: Los datos del PLC (Control) no llegaban a la administración (ERP/Base de Datos).',

    proj_8_solution_title: 'Puente OT/IT',
    proj_8_solution_intro: 'Implementación de un sistema SCADA/HMI que dialoga con los PLCs de planta y vuelca la información a una base de datos MySQL para historización y análisis.',
    proj_8_solution_1: 'Adquisición de Datos: Lectura continua de sensores de nivel (litros) y temperatura (ºC) en tanques de recepción y mezcla.',
    proj_8_solution_2: 'Gestión de Recetas: Digitalización de fórmulas para asegurar que los operadores respeten las cantidades de materia prima.',
    proj_8_solution_3: 'Historización SQL: Almacenamiento de variables de proceso en MySQL para auditorías de calidad (curvas de temperatura).',
    proj_8_solution_4: 'Interfaz HMI: Pantallas operativas para visualización de estado de válvulas, bombas y agitadores en tiempo real.',

    proj_8_tech_title: 'Tecnologías',
    proj_8_tech_backend_title: 'Base de Datos',
    proj_8_tech_frontend_title: 'HMI / SCADA',
    proj_8_tech_infra_title: 'PLC / Hardware',

    proj_8_highlight_section_title: 'Puntos Clave',
    proj_8_highlight_1_title: 'Process Control',
    proj_8_highlight_1_desc: 'Monitoreo de variables críticas.',
    proj_8_highlight_2_title: 'Data Historian',
    proj_8_highlight_2_desc: 'Registro SQL de tendencias.',
    proj_8_highlight_3_title: 'Raw Material',
    proj_8_highlight_3_desc: 'Control de stock en tanques.',
    proj_8_highlight_4_title: 'Hardware Link',
    proj_8_highlight_4_desc: 'Integración con PLC.',

    proj_8_snippets_title: 'Estructura de Datos (SQL)',
    proj_8_snippets_intro: 'Esquema de base de datos utilizado para persistir la información proveniente del sistema de control industrial.',

    proj_8_snip_tank_title: 'Configuración de Tanques',
    proj_8_snip_tank_expl: 'Tabla maestra que define los parámetros físicos de los tanques (capacidad, offsets de sensores) para convertir señales eléctricas (4-20mA) en valores de ingeniería (Litros).',

    proj_8_snip_hist_title: 'Historico de Variables',
    proj_8_snip_hist_expl: 'Tabla transaccional optimizada para series de tiempo. Registra la "foto" del estado del tanque en intervalos regulares para generar curvas de tendencia.',

    proj_8_structure_title: 'Arquitectura del Sistema',
    proj_8_structure_intro: 'Flujo de datos desde el sensor físico hasta el reporte de gestión.',
    proj_8_structure_note: 'Integración PLC -> MySQL',

    proj_8_confidential_title: 'Confidencialidad Industrial',
    proj_8_confidential_desc: 'Este proyecto contiene lógica de control (PLC) y fórmulas de producción propietarias. Para proteger la propiedad intelectual del cliente, no se publican capturas de las pantallas HMI reales.',

    proj_8_back_to_projects: 'Volver a proyectos',

  },

  en: {
    brand: 'Facundo — Portfolio',
    nav_projects: 'Projects',
    nav_about: 'About',
    nav_contact: 'Contact',
    nav_skills: 'Tools / Skills',
    nav_projects_desktop: 'Desktop apps',
    nav_projects_web: 'Web apps',
    nav_projects_db: 'Database design',
    nav_projects_other: 'Other / Automation',
    skills_examples_title: 'Some applications',

    cv_modal_title: 'Download Resume',
    cv_modal_desc: 'Select the language version you wish to download:',
    cv_option_es: 'Spanish Version',
    cv_option_en: 'English Version',
    cv_cancel: 'Cancel',

    // Skills section
    section_skills_title: 'Skills & technologies',
    section_skills_subtitle: 'Main technologies I have used.',
    skills_core_intro: 'Main technologies I have used:',

    // Skills – Desktop applications
    skills_desktop_title: 'Backend & Python Core',
    skills_desktop_item1:
      'Advanced Python (Multithreading, Sockets, Services, Asyncio).',
    skills_desktop_item2:
      'Critical process automation (Workers, Cron jobs).',
    skills_desktop_item3:
      'Modular and scalable application architecture.',
    skills_desktop_item4:
      'REST API and external service integration.',
    skills_desktop_item5:
      'Testing, logging, and validation of complex business rules.',

    // Skills – Backend & DB
    skills_backend_title: 'Data Engineering & DB',
    skills_backend_item1:
      'Robust relational schema design (3NF/Star Schema).',
    skills_backend_item2:
      'PostgreSQL / SQL Server (T-SQL, PL/pgSQL, Stored Procs).',
    skills_backend_item3:
      'Query optimization (Indexes, CTEs, Partitioning).',
    skills_backend_item4:
      'High-volume ETL and data pipelines.',
    skills_backend_item5:
      'Referential integrity assurance and data auditing.',

    // Skills – Web & UI
    skills_web_title: 'Frontend & Web',
    skills_web_item1:
      'Next.js 14 (App Router & Server Components).',
    skills_web_item2:
      'TypeScript (Strict and safe typing).',
    skills_web_item3:
      'Tailwind CSS (Modern and responsive design).',
    skills_web_item4:
      'React (Hooks, Context, State Management).',
    skills_web_item5:
      'PyQt5 (High-complexity desktop interfaces).',

    // Skills – DevOps & deployment
    skills_devops_title: 'DevOps & deployment',
    skills_devops_item1:
      'Packaging desktop applications into executables using PyInstaller.',
    skills_devops_item2:
      'Creating Windows installers with Inno Setup, including auto-update flows.',
    skills_devops_item3:
      'Git workflows (branches, code review, GitHub) integrated into CI/CD-style pipelines.',
    skills_devops_item4:
      'Environment configuration using .env files and database backup/restore scripts.',
    skills_devops_item5:
      'Basic use of Docker for local development/test environments and remote connectivity via VPN (e.g. Tailscale).',

    // Skills – Real-time 
    skills_realtime_title: 'Industrial & Real-Time',
    skills_realtime_item1:
      'Real-time DB event handling (LISTEN/NOTIFY).',
    skills_realtime_item2:
      'Connectivity with PLCs and Industrial Hardware.',
    skills_realtime_item3:
      'SCADA / HMI systems and data acquisition (DAQ).',
    skills_realtime_item4:
      'Non-blocking UI architecture (Workers/Threads).',
    skills_realtime_item5:
      'Network fault tolerance (Offline-first).',

    // Skills – Data 
    skills_industrial_title: 'Data Analytics',
    skills_industrial_item1:
      'Pandas / NumPy for data processing.',
    skills_industrial_item2:
      'Scientific visualization (Matplotlib / PowerBI).',
    skills_industrial_item3:
      'Automated reporting (Excel/PDF).',
    skills_industrial_item4:
      'Cleaning and transformation of industrial datasets.',
    skills_industrial_item5:
      'Business KPI calculation (OEE, Performance).',

    projects_title: 'Real projects',
    projects_subtitle: 'Real cases oriented to results.',

    // Hero / KPIs / contacto
    hero_bio:
      'Python/SQL developer focused on projects. I build desktop and data applications with an emphasis on performance, traceability and UX.',
    cta_view_projects: 'View projects',
    cta_download_cv: 'Download CV',
    kpi_years: 'Years experience',
    kpi_projects: 'Projects worked on',
    kpi_highlights: 'Key technologies',
    hero_headline:
      'Backend & Data Engineer | Python • SQL • System Architecture',
    
    hero_subheadline:
      'I transform complex data and manual processes into efficient, traceable software systems ready for decision-making.',
    
    hero_tagline:
      'I build software solutions that bridge the physical world (OT) with the digital one (IT).',
    hero_read_more: 'Read more',
    hero_read_less: 'Show less',
    caps_title: 'Capabilities',
    hi_title: 'Highlights',
    hi_perf:
      'SQL performance (indexes, EXPLAIN/ANALYZE, pagination)',
    hi_pack: ' packaging + auto-update',
    hi_rt: 'Real-time (LISTEN/NOTIFY) + non-blocking UI',
    about_title: 'About Me',
    about_text:
      'Software Engineer specialized in Backend, Data Architecture, and automation.',
      
    about_long:
      'I am a University Programming Technician. My focus is not just on writing code, but on designing the architecture that ensures data flows securely and efficiently from the source to decision-making.\n\nI specialize in designing relational databases (PostgreSQL, SQL Server) and developing robust backends in Python, handling concurrency, sockets, and real-time processing. I excel in environments where data integrity is critical, having built industrial traceability and human resources management systems from scratch.\n\nI am currently seeking challenges where I can apply my experience in data modeling and backend optimization to solve scale and efficiency problems, beyond the user interface.',
    contact_title: 'Contact',
    contact_pitch:
      'Interested in projects with measurable impact and a focus on performance, data and UX.',
    contact_email: 'Send email',
    contact_linkedin: 'View LinkedIn',
    contact_github: 'View GitHub',
    years_experience: 'Years experience',
    projects_done: 'Projects worked on',

    copy_btn: 'Copy',
    copy_toast: 'Copied to clipboard',

    // Projects — Desktop apps
    proj_1_title:
      'End-to-end business management for agro-inputs',
    proj_1_subtitle:
      'Quotations, stock, deliveries and commercial terms.',
    proj_1_impact1: 'Event Bus: Asynchronous DB-UI synchronization (Real-time).',
    proj_1_impact2: 'Smart Pooling: Efficient connection management.',
    proj_1_impact3: 'SaaS RBAC: Multi-level security.',

    proj__title:
      'Traceability and OEE for industrial plants',
    proj__subtitle:
      'Tracking production, downtimes and stock on top of SQL Server.',
    proj__impact1: 'Async Workers: Background calculations.',
    proj__impact2: 'Data Viz: Embedded scientific charts.',
    proj__impact3: 'Traceability: Box -> Pallet navigation.',

    proj_app_title:
      'Internal management of projects, hours and operations',
    proj_app_subtitle:
      'Desktop application to centralize projects, hours, leave, KPIs and internal tasks.',
    proj_app_impact1: 'Session Guard: Inactivity security.',
    proj_app_impact2: 'Automation: Automatic alerts.',
    proj_app_impact3: 'Validation: Data integrity.',

    // Projects — Web apps
    proj_portfolio_title:
      'Portfolio website — Next.js, TypeScript & Vercel',
    proj_portfolio_subtitle:
      'Responsive personal site with dark/light mode, i18n and continuous deployment.',
    proj_portfolio_impact1: 'Next.js App Router & Server Components.',
    proj_portfolio_impact2: 'TypeScript Strict Typing.',
    proj_portfolio_impact3: 'Tailwind Design System.',
    proj_portfolio_impact4: 'Custom i18n System.',

    // Projects — Database design
    proj_1db_title:
      'Multi-tenant data model for agro-inputs',
    proj_1db_subtitle:
      'Relational database to centralize companies, clients, stock and quotations.',
    proj_1db_impact1: 'Multi-tenant Schema: Isolation.',
    proj_1db_impact2: 'Unified Identity: Inheritance Pattern.',
    proj_1db_impact3: 'Integrity: Strict Constraints.',
    proj_1db_impact4: 'Audit: Standardized logging.',

    proj_db_title:
      'Product box traceability and warehouse stock in an industrial plant',
    proj_db_subtitle:
      'Data model to track each box from freezing tunnel to customer delivery.',
    proj_db_impact1: 'High Volume: Millions of records.',
    proj_db_impact2: 'Indexing: Read optimization.',
    proj_db_impact3: 'Physical Modeling: Plant digital twin.',
    proj_db_impact4: 'Performance: T-SQL Tuning.',

    proj_appdb_title:
      'Data model for internal projects and hours management',
    proj_appdb_subtitle:
      'Relational schema for projects, worked hours, leave and internal KPIs.',
    proj_appdb_impact1: 'HR Core: Centralized resources.',
    proj_appdb_impact2: 'Timekeeping: Transactional recording.',
    proj_appdb_impact3: 'Audit Trail: Change history.',
    proj_appdb_impact4: 'Data Integrity: Constraints.',

    // Projects — Other / Automation
    proj_icecream_title:
      'Ice cream plant — Tank and temperature monitoring',
    proj_icecream_subtitle:
      'Data acquisition and webvisu system on MySQL for process control.',
    proj_icecream_impact1: 'Hardware Link: PLC Integration.',
    proj_icecream_impact2: 'Data Historian: SQL Trends.',
    proj_icecream_impact3: 'Process Control: Critical variables.',

    proj_view_case: 'View case',

    //Project 1
    proj_1_tag_project: 'Architecture / SaaS',
    proj_1S_title: 'Agro-Industrial Management Platform (SaaS)',
    proj_1_summary: 'Distributed desktop application architecture featuring real-time synchronization, multi-tenant permission system, and OTA updates.',

    proj_1_problem_title: 'The Technical Challenge',
    proj_1_problem_intro: 'Migrating a critical operation to the cloud without sacrificing desktop performance, while ensuring data consistency in a multi-user and multi-company environment.',
    proj_1_problem_1: 'Latency: Users required immediate response, impossible with traditional web apps in low-connectivity areas.',
    proj_1_problem_2: 'Collisions: Multiple operators editing the same orders simultaneously.',
    proj_1_problem_3: 'Security: Need for a granular permission scheme (Contracted Packages vs. Internal Roles).',
    proj_1_problem_4: 'Deployment: Distributing patches and improvements to hundreds of terminals without technical intervention.',

    proj_1_solution_title: 'The Architectural Solution',
    proj_1_solution_intro: 'A hybrid Python/Qt client featuring a database-event-based "Realtime Engine" and a robust self-management system.',
    proj_1_solution_1: 'Realtime Engine: Implementation of an event bus over PostgreSQL (LISTEN/NOTIFY) to refresh the UI instantly without polling.',
    proj_1_solution_2: 'Resilient Connection: Intelligent connection pool with "Fast-Fail", exponential retries, and "Offline Guard" mode.',
    proj_1_solution_3: 'SaaS Core: Dynamic permission system intersecting "Company Contracted Packages" with "User Roles".',
    proj_1_solution_4: 'Update Engine: Proprietary OTA update system with cryptographic verification (SHA256) and rollback capabilities.',

    proj_1_tech_title: 'Stack & Technologies',
    proj_1_tech_backend_title: 'Core & Data',
    proj_1_tech_frontend_title: 'Client & UI',
    proj_1_tech_infra_title: 'Infra & Security',

    proj_1_highlight_section_title: 'Deep Dive: Code',
    proj_1_highlight_1_title: 'Event Bus',
    proj_1_highlight_1_desc: 'Asynchronous bridge between SQL and UI.',
    proj_1_highlight_2_title: 'Smart Pooling',
    proj_1_highlight_2_desc: 'Critical resource management.',
    proj_1_highlight_3_title: 'SaaS RBAC',
    proj_1_highlight_3_desc: 'Multi-level access logic.',
    proj_1_highlight_4_title: 'OTA Updates',
    proj_1_highlight_4_desc: 'Continuous desktop deployment.',

    proj_1_snippets_title: 'Architectural Snippets',
    proj_1_snippets_intro: 'Real-world fragments solving concurrency and scalability issues.',

    proj_1_snip_realtime_title: 'Event Engine (Low-Level Threading)',
    proj_1_snip_realtime_expl: 'A dedicated daemon thread maintains an open socket with PostgreSQL listening for asynchronous notifications. This allows the UI to react in milliseconds to changes from other users without saturating the network with polling.',

    proj_1_snip_pool_title: 'Resilient Connection Pool',
    proj_1_snip_pool_expl: 'Context Manager handling connection lifecycle. Implements "Exponential Backoff" for retries and configures session timeouts to prevent database deadlocks.',

    proj_1_snip_perm_title: 'SaaS Permission Logic (Multi-tenant)',
    proj_1_snip_perm_expl: 'The system validates access in layers: 1) Did the company contract the module? 2) Is the user an Admin? 3) Are there specific permissions or overrides? This enables selling the app as modular SaaS.',

    proj_1_figures_title: 'Interface Screenshots',
    proj_1_figures_intro: 'Productivity-oriented UI, designed with Qt for high information density.',
    proj_1_fig_rbac_alt: 'Permission management panel',
    proj_1_fig_rbac_caption: 'Granular permission matrix allowing per-user overrides on base roles.',
    proj_1_fig_rt_alt: 'Online/offline status indicator',
    proj_1_fig_rt_caption: 'Visual connectivity feedback and real-time notifications.',
    proj_1_fig_upd_alt: 'Update manager',
    proj_1_fig_upd_caption: 'Control panel to deploy versions to "Stable" or "Beta" channels per company.',

    proj_1_structure_title: 'Project Structure',
    proj_1_structure_intro: 'Modular organization separating infrastructure services, business logic, and presentation layer.',
    proj_1_structure_note: 'Simplified hexagonal architecture.',

    proj_1_back_to_projects: 'Back to projects',

    // Project 2
    proj_2_tag_project: 'Analytics / Industrial',
    proj_2_title: 'Industrial Traceability & OEE Dashboard',
    proj_2_summary: 'Plant visualization system featuring embedded charts (Matplotlib), real-time OEE calculation, and unit-level product traceability.',

    proj_2_problem_title: 'The Operational Challenge',
    proj_2_problem_intro: 'An industrial plant generates thousands of events per hour. Operators needed to visualize critical metrics (OEE) and track specific boxes without stopping the production line or waiting for batch reports.',
    proj_2_problem_1: 'Data Locking: Statistics queries caused UI freeze on older industrial PCs.',
    proj_2_problem_2: 'Visualization: Need for native charts (Donuts, Bars) integrated into the app, avoiding external tools like Excel.',
    proj_2_problem_3: 'Traceability: Reconstructing the history of a "Box" (from production to dispatch) required joining 5+ massive tables.',

    proj_2_solution_title: 'The Data Solution',
    proj_2_solution_intro: 'A high-performance dashboard that decouples data loading (SQL) from rendering (UI) using Worker Threads.',
    proj_2_solution_1: 'Multithreading: Implementation of the "Worker-Signal" pattern (QThread) to execute heavy Stored Procedures in the background.',
    proj_2_solution_2: 'Embedded Analytics: Matplotlib integration within PyQt5 to generate dynamic daily production and OEE charts.',
    proj_2_solution_3: 'Traceability Search: Optimized search engine to track Boxes, Pallets, and Production Orders (OP) with drill-down navigation.',
    proj_2_solution_4: 'Native Reports: Direct export of data views to Excel/PDF while preserving visual formatting.',

    proj_2_tech_title: 'Stack & Technologies',
    proj_2_tech_backend_title: 'Data & Threads',
    proj_2_tech_frontend_title: 'Viz & UI',
    proj_2_tech_infra_title: 'Database',

    proj_2_highlight_section_title: 'Deep Dive: Code',
    proj_2_highlight_1_title: 'Async Workers',
    proj_2_highlight_1_desc: 'Background SQL threads.',
    proj_2_highlight_2_title: 'Matplotlib Qt',
    proj_2_highlight_2_desc: 'Scientific charts in UI.',
    proj_2_highlight_3_title: 'Drill-down',
    proj_2_highlight_3_desc: 'Box -> Pallet nav.',
    proj_2_highlight_4_title: 'Stored Procs',
    proj_2_highlight_4_desc: 'Heavy logic in DB.',

    proj_2_snippets_title: 'Data & Performance Snippets',
    proj_2_snippets_intro: 'How to achieve fluid UI while handling massive industrial data volumes.',

    proj_2_snip_worker_title: 'Worker Thread Pattern (Non-blocking UI)',
    proj_2_snip_worker_expl: 'To prevent UI freezing during OEE calculation (processing millions of rows), logic is encapsulated in a QObject moved to a QThread. Results return to the main thread via Signals.',

    proj_2_snip_chart_title: 'Matplotlib + PyQt5 Integration',
    proj_2_snip_chart_expl: 'Custom Canvas class inheriting from FigureCanvasQTAgg. Allows rendering scientific-quality charts (Efficiency Donuts) directly inside application widgets.',

    proj_2_snip_trace_title: 'Box Visualization Logic',
    proj_2_snip_trace_expl: 'Controller orchestrating the search. Manages "Loading" state, invokes the worker, and populates the result table, handling connection errors or empty data.',

    proj_2_figures_title: 'Control Dashboards',
    proj_2_figures_intro: 'Clear visualization of industrial KPIs and tracking tools.',
    proj_2_fig_oee_alt: 'OEE Dashboard',
    proj_2_fig_oee_caption: 'Overall Equipment Effectiveness (OEE) view with embedded pie charts and daily KPIs.',
    proj_2_fig_trace_alt: 'Traceability Search',
    proj_2_fig_trace_caption: 'Box/Pallet search tool with detailed result grid.',

    proj_2_structure_title: 'Project Structure',
    proj_2_structure_intro: 'Clear separation between presentation layer (Frames) and data processing layer (Workers).',
    proj_2_structure_note: 'Asynchronous MVC pattern.',

    proj_2_confidential_title: 'Confidential Material',
    proj_2_confidential_desc: 'Due to Non-Disclosure Agreements (NDA) with the industrial client, real interface screenshots or production data cannot be displayed. The code presented has been anonymized for demonstration purposes.',

    proj_2_back_to_projects: 'Back to projects',    

    // Project 3 
    proj_3_tag_project: 'Desktop / Business Logic',
    proj_3_title: 'Resource & Operations Management System',
    proj_3_summary: 'Comprehensive desktop application for managing hours, leave requests, inventory, and operational reporting.',

    proj_3_problem_title: 'Administrative Chaos',
    proj_3_problem_intro: 'The company managed employees and projects using scattered Excel spreadsheets, leading to errors in payroll and lack of visibility on leave status.',
    proj_3_problem_1: 'Time Control: Difficulty manually validating complex rules (e.g., 50% vs 100% overtime, holidays).',
    proj_3_problem_2: 'Tracking: Managers lacked visibility on pending tasks or project assignments.',
    proj_3_problem_3: 'Security: Sessions were left open on shared PCs, exposing sensitive data.',

    proj_3_solution_title: 'The Pragmatic Solution',
    proj_3_solution_intro: 'Development of a centralized application that digitized 100% of the operational flow, with software-enforced business rules.',
    proj_3_solution_1: 'Hardcoded Business Rules: Validation engine preventing logging >9 normal hours or assigning tasks to closed projects.',
    proj_3_solution_2: 'Session Guard: Inactivity system that automatically locks the application to protect data on the shop floor.',
    proj_3_solution_3: 'Background Reminders: A "Worker" running in the background sending automatic leave expiration notifications.',
    proj_3_solution_4: 'One-Click Reporting: Automatic generation of Excel/PDF for payroll and auditing.',

    proj_3_tech_title: 'Stack & Technologies',
    proj_3_tech_backend_title: 'Python Core',
    proj_3_tech_frontend_title: 'PyQt5 (Legacy)',
    proj_3_tech_infra_title: 'SQL Server',

    proj_3_highlight_section_title: 'Deep Dive: Logic',
    proj_3_highlight_1_title: 'Session Guard',
    proj_3_highlight_1_desc: 'Inactivity protection.',
    proj_3_highlight_2_title: 'Workers',
    proj_3_highlight_2_desc: 'Scheduled tasks.',
    proj_3_highlight_3_title: 'Business Rules',
    proj_3_highlight_3_desc: 'Strict validation.',
    proj_3_highlight_4_title: 'Reporting',
    proj_3_highlight_4_desc: 'Excel automation.',

    proj_3_snippets_title: 'Business Logic Snippets',
    proj_3_snippets_intro: 'Examples of how critical rules and security were implemented.',

    proj_3_snip_worker_title: 'Reminder Worker (Automation)',
    proj_3_snip_worker_expl: 'This service runs on a separate thread at startup. It checks the database for expiring leave requests and sends email notifications without blocking the UI.',

    proj_3_snip_session_title: 'Session Manager (Security)',
    proj_3_snip_session_expl: 'Implementation of an inactivity timer. If the user does not interact for a set time, the system shows a warning and forcibly closes the session to protect data.',

    proj_3_snip_rules_title: 'Workload Validation',
    proj_3_snip_rules_expl: 'Fragment of the logic validating data integrity before saving. Ensures legal daily hour limits are not exceeded and automatically categorizes overtime.',

    proj_3_figures_title: 'Operational Interface',
    proj_3_figures_intro: 'Functional design focused on data entry speed for administrative staff.',
    proj_3_fig_reassign_alt: 'Time tracking panel',
    proj_3_fig_reassign_caption: 'Activity registration interface with real-time validation.',
    proj_3_fig_idle_alt: 'Security warning',
    proj_3_fig_idle_caption: 'Session protection mechanism based on inactivity.',

    proj_3_structure_title: 'Logical Structure',
    proj_3_structure_intro: 'Although the physical implementation is monolithic (due to initial requirements), the code is logically structured into functional modules.',
    proj_3_structure_note: '',

    proj_3_confidential_title: 'Sensitive Data Protected',
    proj_3_confidential_desc: 'This system handles critical employee information, payroll, and internal operations. Due to privacy and data protection policies, real screenshots are not displayed.',

    proj_3_back_to_projects: 'Back to projects',

    //Project 4
    snippets_title: 'Code Snippets',
    snippets_intro: 'Featured implementation fragments.',
    proj_portfolio_summary: 'Personal site developed with Next.js 14, TypeScript, and Tailwind CSS. Focused on performance, accessibility, and clean maintainable architecture.',
    proj_portfolio_problem_title: 'The Challenge',
    proj_portfolio_problem_intro: 'Creating a digital identity that serves not just as a business card, but as a technical demonstration of full-stack capabilities.',
    proj_portfolio_problem_1: 'Technical Demo: Showcasing real code and architecture, not just static images.',
    proj_portfolio_problem_2: 'Internationalization: Fluid ES/EN support without heavy libraries.',
    proj_portfolio_problem_3: 'User Experience: Responsive design, dark mode, and fast navigation.',
    proj_portfolio_solution_title: 'The Solution',
    proj_portfolio_solution_intro: 'A modern web application (PWA) built from scratch with the latest React ecosystem technologies.',
    proj_portfolio_solution_1: 'Next.js App Router: Hybrid rendering and SEO optimization.',
    proj_portfolio_solution_2: 'Custom Hooks: Encapsulated logic for themes and translations.',
    proj_portfolio_solution_3: 'Tailwind CSS: Atomic and consistent design system.',
    proj_portfolio_solution_4: 'Reusable Components: Scalable modular architecture.',
    proj_portfolio_snip_hook_title: 'Theme Hook',
    proj_portfolio_snip_hook_expl: 'Logic to persist dark mode preference in localStorage and CSS.',
    proj_portfolio_snip_i18n_title: 'i18n System',
    proj_portfolio_snip_i18n_expl: 'Lightweight typed context for instant O(1) translations.',
    proj_portfolio_fig_mobile_alt: 'Mobile Version',
    proj_portfolio_fig_mobile_caption: 'Fully responsive design and off-canvas menu.',
    proj_portfolio_fig_dark_alt: 'Dark Mode',
    proj_portfolio_fig_dark_caption: 'Semantic color palette for high contrast.',
    back_to_projects: 'Back to projects',

    //Project 5
    proj_db1_tag: 'Database',
    proj_db1_title_nav: 'Data model — Agro',
    proj_db1_title_section: 'Data model — Agro',
    proj_db1_title: 'Data model — Agro',
    proj_db1_headline: 'Relational model for clients, price lists and quotations',
    proj_db1_summary: 'Multi-entity schema designed for commercial traceability: people, clients, price lists, items and quotations.',

    proj_db1_problem_title: 'Problem',
    proj_db1_problem_intro: 'A clear, scalable model was required to support real commercial operations.',
    proj_db1_problem_1: 'Unifying people with different roles (client/supplier).',
    proj_db1_problem_2: 'Price lists with validity and per-item discounts.',
    proj_db1_problem_3: 'Quotations with line items, amounts and statuses.',

    proj_db1_solution_title: 'Solution',
    proj_db1_solution_intro: 'Normalized relational design with foreign keys, constraints and indexes.',
    proj_db1_solution_1: 'Base entity person + specific profiles.',
    proj_db1_solution_2: 'Price list and price_item model with discounts.',
    proj_db1_solution_3: 'quotation + quotation_item for commercial traceability.',

    proj_db1_snippets_title: 'SQL snippets',
    proj_db1_snippets_intro: 'Representative excerpts taken from the creation script.',

    proj_db1_snip_core_title: 'Core: person + client_profile',
    proj_db1_snip_core_note: 'Identity base and client profile; extensible to other profiles.',
    proj_db1_snip_pricelist_title: 'Price lists and items',
    proj_db1_snip_pricelist_note: 'Supports validity windows and per-item discounts.',
    proj_db1_snip_quote_title: 'Quotations and lines',
    proj_db1_snip_quote_note: 'Header with status and total; lines with quantities and prices.',

    proj_db1_shots_title: 'Screenshots',
    proj_db1_shots_intro: 'Script views highlighting key parts of the model.',
    proj_db1_shot1_alt: 'Identity core',
    proj_db1_shot1_caption: 'Base person + client_profile entity.',
    proj_db1_shot2_alt: 'Price lists',
    proj_db1_shot2_caption: 'price_list + price_item with validity and discounts.',
    proj_db1_shot3_alt: 'Quotations',
    proj_db1_shot3_caption: 'quotation + quotation_item (header and detail).',

    proj_db1_structure_title: 'Simplified project structure',
    proj_db1_structure_intro: 'Organization of the folders and files shown on the page.',
    proj_db1_back: 'Back to projects',
    proj_db1_tag_label: 'Database',
    proj_db1_tagline: 'Relational model ready to grow.',
    
    // Project 6
    proj_6_tag_project: 'SQL Server / T-SQL',
    proj_6_title: 'Industrial Traceability Database',
    proj_6_summary: 'High-volume relational model for unit-level production tracking (Boxes and Pallets) in a meat processing plant, optimized for SQL Server.',

    proj_6_problem_title: 'The Volume Challenge',
    proj_6_problem_intro: 'The plant produces thousands of boxes daily. A system was needed to reconstruct the full history of each unit (from slaughter to dispatch) without performance degradation over years.',
    proj_6_problem_1: 'Granularity: Moving from "Batch" control to "Unit/Box" control (millions of annual records).',
    proj_6_problem_2: 'Read Performance: Stock and OEE reports needed to summarize millions of rows in seconds.',
    proj_6_problem_3: 'Physical Integrity: The system had to prevent impossible movements (e.g., placing a box on a pallet that was already dispatched).',

    proj_6_solution_title: 'T-SQL Modeling',
    proj_6_solution_intro: 'Implementation of a normalized star/snowflake schema in SQL Server, with heavy use of indexes to support operational load.',
    proj_6_solution_1: 'BigInt Keys: Use of BIGINT in transactional tables (Box, Movements) anticipating long-term scale.',
    proj_6_solution_2: 'Indexing Strategy: Non-Clustered Indexes with INCLUDE columns to accelerate aggregation queries without touching the base table (Covering Index).',
    proj_6_solution_3: 'Logistics Hierarchy: Strict modeling of the Box > Pallet > Location > Warehouse relationship.',
    proj_6_solution_4: 'Materialized Views: (Concept) Preparation of flat views to facilitate integration with BI tools (PowerBI).',

    proj_6_tech_title: 'Technologies',
    proj_6_tech_backend_title: 'Engine',
    proj_6_tech_frontend_title: 'Modeling',
    proj_6_tech_infra_title: 'Optimization',

    proj_6_highlight_section_title: 'Key Points',
    proj_6_highlight_1_title: 'High Volume',
    proj_6_highlight_1_desc: 'Designed for millions of rows.',
    proj_6_highlight_2_title: 'T-SQL Expert',
    proj_6_highlight_2_desc: 'Schemas, DBO, Clustered Keys.',
    proj_6_highlight_3_title: 'Physical Modeling',
    proj_6_highlight_3_desc: 'Digital twin of the plant.',
    proj_6_highlight_4_title: 'Indexing',
    proj_6_highlight_4_desc: 'Read optimization.',

    proj_6_snippets_title: 'T-SQL Definitions',
    proj_6_snippets_intro: 'Critical structures from the creation script.',

    proj_6_snip_main_title: 'Core Table: Unit Box',
    proj_6_snip_main_expl: 'The central entity of the model. Note the use of foreign keys to Pallet and Product to maintain referential integrity, and precise data types (DECIMAL for weight).',

    proj_6_snip_pallet_title: 'Logistics Container: Pallet',
    proj_6_snip_pallet_expl: 'Entity grouping boxes. Allows moving large stock volumes by updating a single location reference.',

    proj_6_snip_index_title: 'Indexing Strategy (Performance)',
    proj_6_snip_index_expl: 'Example of an index optimized for reporting. When filtering by Production Order (OP), the engine seeks the index and retrieves Weight without reading the full table (avoiding Key Lookups), drastically reducing I/O.',

    proj_6_structure_title: 'Script Structure',
    proj_6_structure_intro: 'Sequential organization for clean server deployment.',
    proj_6_structure_note: 'SQL Server 2019+',

    proj_6_back_to_projects: 'Back to projects',

    //Project 7
    proj_7_tag_project: 'SQL Server / Data Modeling',
    proj_7_title: 'Operations Management Data Model',
    proj_7_summary: 'Relational database designed to centralize human resources, time tracking, leave management, and internal project control.',

    proj_7_problem_title: 'Data Fragmentation',
    proj_7_problem_intro: 'Operational information resided in silos (Excel, emails, paper), making it impossible to obtain crossed metrics like "Real Project Cost" or "Resource Availability".',
    proj_7_problem_1: 'Inconsistency: Employees logging hours to closed or non-existent projects.',
    proj_7_problem_2: 'Redundancy: Duplicate employee data across multiple spreadsheets with conflicting information.',
    proj_7_problem_3: 'Audit: Impossible to track who modified a time record or when a leave request was approved.',

    proj_7_solution_title: 'Centralized Relational Model',
    proj_7_solution_intro: 'Design of a normalized SQL Server schema acting as the Single Source of Truth for the entire organization.',
    proj_7_solution_1: 'Referential Integrity: Strict foreign keys preventing orphaned data (e.g., Hours without Employee).',
    proj_7_solution_2: 'Logical Deletion: Implementation of status columns (IsActive) to keep full history without losing reference to past data.',
    proj_7_solution_3: 'Normalization: Separation of entities (Clients, Projects, Tasks, Employees) to avoid redundancy and update anomalies.',
    proj_7_solution_4: 'Reporting Views: SQL abstractions to simplify complex payroll and management control queries.',

    proj_7_tech_title: 'Technologies',
    proj_7_tech_backend_title: 'SQL Server',
    proj_7_tech_frontend_title: 'T-SQL',
    proj_7_tech_infra_title: 'Backup & Recovery',

    proj_7_highlight_section_title: 'Data Structure',
    proj_7_highlight_1_title: 'HR Core',
    proj_7_highlight_1_desc: 'Employees & Profiles.',
    proj_7_highlight_2_title: 'Ops Tracking',
    proj_7_highlight_2_desc: 'Projects & Tasks.',
    proj_7_highlight_3_title: 'Timekeeping',
    proj_7_highlight_3_desc: 'Hours Logging.',
    proj_7_highlight_4_title: 'Audit Trail',
    proj_7_highlight_4_desc: 'Change history.',

    proj_7_snippets_title: 'Schema Definitions (DDL)',
    proj_7_snippets_intro: 'Main structures supporting the business logic of the desktop application.',

    proj_7_snip_emp_title: 'Employee Master',
    proj_7_snip_emp_expl: 'Central resource table. Note the use of constraints for mandatory fields and default values for active status.',

    proj_7_snip_hours_title: 'Activity Log (WorkHours)',
    proj_7_snip_hours_expl: 'Transactional table for logging hours. Links "Who" (Employee), "What" (Task/Project), and "When" (Date), with data type validation.',

    proj_7_snip_proj_title: 'Project Management',
    proj_7_snip_proj_expl: 'Hierarchical structure to organize work. Allows defining start/end dates and status to control task assignment.',

    proj_7_structure_title: 'Backup Organization',
    proj_7_structure_intro: 'The SQL file contains the full schema definition, seed data (dictionaries), and stored procedures.',
    proj_7_structure_note: 'SQL Server 2016+',

    proj_7_back_to_projects: 'Back to projects',

    //Project 8
    proj_8_tag_project: 'Industrial IoT / SCADA',
    proj_8_title: 'Raw Material & Process Management System',
    proj_8_summary: 'Comprehensive solution for an ice cream plant digitizing raw material intake, tank monitoring, and pasteurization control.',

    proj_8_problem_title: 'Quality & Stock Control',
    proj_8_problem_intro: 'The plant handled milk and cream intake manually, making it difficult to control losses (shrinkage) and ensure cold chain compliance in maturation tanks.',
    proj_8_problem_1: 'Traceability Loss: No digital record of which raw material batch was used in each production run.',
    proj_8_problem_2: 'Quality Risk: Need for 24/7 monitoring of critical temperatures (Pasteurization/Maturation) with early warnings.',
    proj_8_problem_3: 'Information Silos: PLC (Control) data did not reach administration (ERP/Database).',

    proj_8_solution_title: 'OT/IT Bridge',
    proj_8_solution_intro: 'Implementation of a SCADA/HMI system that communicates with plant PLCs and dumps information into a MySQL database for historization and analysis.',
    proj_8_solution_1: 'Data Acquisition: Continuous reading of level (liters) and temperature (ºC) sensors in intake and mixing tanks.',
    proj_8_solution_2: 'Recipe Management: Digitization of formulas to ensure operators respect raw material quantities.',
    proj_8_solution_3: 'SQL Historian: Storage of process variables in MySQL for quality audits (temperature curves).',
    proj_8_solution_4: 'HMI Interface: Operational screens for real-time visualization of valves, pumps, and agitators.',

    proj_8_tech_title: 'Technologies',
    proj_8_tech_backend_title: 'Database',
    proj_8_tech_frontend_title: 'HMI / SCADA',
    proj_8_tech_infra_title: 'PLC / Hardware',

    proj_8_highlight_section_title: 'Key Points',
    proj_8_highlight_1_title: 'Process Control',
    proj_8_highlight_1_desc: 'Critical variable monitoring.',
    proj_8_highlight_2_title: 'Data Historian',
    proj_8_highlight_2_desc: 'SQL trend logging.',
    proj_8_highlight_3_title: 'Raw Material',
    proj_8_highlight_3_desc: 'Tank stock control.',
    proj_8_highlight_4_title: 'Hardware Link',
    proj_8_highlight_4_desc: 'PLC Integration.',

    proj_8_snippets_title: 'Data Structure (SQL)',
    proj_8_snippets_intro: 'Database schema used to persist information coming from the industrial control system.',

    proj_8_snip_tank_title: 'Tank Configuration',
    proj_8_snip_tank_expl: 'Master table defining physical tank parameters (capacity, sensor offsets) to convert electrical signals (4-20mA) into engineering values (Liters).',

    proj_8_snip_hist_title: 'Variable Historian',
    proj_8_snip_hist_expl: 'Transactional table optimized for time-series. Records the "snapshot" of tank status at regular intervals to generate trend curves.',

    proj_8_structure_title: 'System Architecture',
    proj_8_structure_intro: 'Data flow from physical sensor to management report.',
    proj_8_structure_note: 'PLC -> MySQL Integration',

    proj_8_confidential_title: 'Industrial Confidentiality',
    proj_8_confidential_desc: 'This project contains proprietary control logic (PLC) and production formulas. To protect the client’s intellectual property, real HMI screenshots are not published.',

    proj_8_back_to_projects: 'Back to projects',

  },
};

