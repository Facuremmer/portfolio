'use client';

import Link from "next/link";
import { useI18n } from '@/components_temp/I18nProvider';
import CodeSnippet from '@/components_temp/CodeSnippet';
// import ProjectFigure from '@/components/ProjectFigure'; // <--- Ya no lo usamos acá

export default function IndustrialOeePage() {
  const { t } = useI18n();
  const tr = (k: string) => t(`proj_2_${k}`);

  return (
    <main className="container-pro space-y-10 pb-16 pt-10">
      {/* Intro */}
      <section className="card p-6 md:p-8 space-y-4">
        <div className="flex items-center gap-3">
            <span className="badge bg-[var(--accent)] text-white border-transparent">Python</span>
            <span className="badge">Matplotlib</span>
            <span className="badge">Threading</span>
            <span className="badge">SQL Server</span>
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

      {/* Snippets Técnicos */}
      <section className="space-y-8">
        <div className="mb-6">
            <h2 className="text-2xl font-bold">{tr("snippets_title")}</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mt-2">{tr("snippets_intro")}</p>
        </div>

        {/* 1. Worker Thread */}
        <div className="space-y-3">
            <h3 className="font-semibold text-lg text-[var(--accent)]">{tr("snip_worker_title")}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                {tr("snip_worker_expl")}
            </p>
            <CodeSnippet
              title="app/gui/frames/oee_frame.py"
              language="python"
            >
{`class OEEWorker(QObject):
    finished = pyqtSignal(object)  # Emite dict con datos
    error = pyqtSignal(str)

    def run(self):
        try:
            # Ejecución pesada en hilo secundario
            with Connection.get_conn() as conn:
                # Llamada a Stored Procedure optimizado
                data = conn.fetch_all("EXEC usp_GetOEEData @Date=?", (self.date,))
                
            # Procesamiento de datos crudos (Pandas/Numpy logic manual)
            processed = self._calculate_kpis(data)
            
            # Retorno seguro al hilo principal
            self.finished.emit(processed)
        except Exception as e:
            self.error.emit(str(e))`}
            </CodeSnippet>
        </div>

        {/* 2. Matplotlib Integration */}
        <div className="space-y-3">
            <h3 className="font-semibold text-lg text-[var(--accent)]">{tr("snip_chart_title")}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                {tr("snip_chart_expl")}
            </p>
            <CodeSnippet
              title="app/gui/frames/oee_frame.py"
              language="python"
            >
{`class MplCanvas(FigureCanvasQTAgg):
    def __init__(self, parent=None, width=5, height=4, dpi=100):
        fig = Figure(figsize=(width, height), dpi=dpi)
        self.axes = fig.add_subplot(111)
        super(MplCanvas, self).__init__(fig)

# Uso en el Frame:
def _render_donut(self, value, label):
    self.canvas.axes.clear()
    # Lógica de renderizado Matplotlib
    self.canvas.axes.pie([value, 100-value], 
                        colors=['#4caf50', '#eeeeee'], 
                        startangle=90, 
                        wedgeprops=dict(width=0.3))
    self.canvas.draw() # Redibujar en UI`}
            </CodeSnippet>
        </div>

        {/* 3. Traceability Logic */}
        <div className="space-y-3">
            <h3 className="font-semibold text-lg text-[var(--accent)]">{tr("snip_trace_title")}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                {tr("snip_trace_expl")}
            </p>
            <CodeSnippet
              title="app/gui/frames/box_visualization_frame.py"
              language="python"
            >
{`def search_box(self):
    box_code = self.input_search.text().strip()
    if not box_code: return

    self.table.setRowCount(0)
    self.loader.start() # Spinner visual
    
    # Iniciar Worker de búsqueda
    self.worker = BoxSearchWorker(box_code)
    self.worker.finished.connect(self._on_search_result)
    self.worker.error.connect(self._on_search_error)
    self.thread = QThread()
    self.worker.moveToThread(self.thread)
    self.thread.started.connect(self.worker.run)
    self.thread.start()`}
            </CodeSnippet>
        </div>
      </section>

      {/* AVISO DE CONFIDENCIALIDAD (Reemplaza a las capturas) */}
      <section className="card p-8 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/20 text-center">
        <div className="mb-3 text-4xl">🔒</div>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
            {tr("confidential_title")}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed">
            {tr("confidential_desc")}
        </p>
      </section>

      {/* Estructura */}
      <section className="card p-6 md:p-8 space-y-4">
        <h2 className="text-xl font-semibold">{tr("structure_title")}</h2>
        <pre className="overflow-x-auto text-xs sm:text-sm leading-relaxed p-4 bg-neutral-950 text-neutral-100 rounded-lg">
{`App/
  ├─ gui/
  │  ├─ frames/
  │  │  ├─ oee_frame.py           # OEE Dashboard + Matplotlib
  │  │  ├─ statistics_frame.py    # Production Stats
  │  │  ├─ box_visualization.py   # Traceability Search
  │  │  └─ ...
  │  └─ widgets/
  │     └─ mpl_canvas.py          # Reusable Chart Component
  ├─ workers/
  │  ├─ oee_worker.py             # Threaded SQL Fetcher
  │  └─ search_worker.py
  └─ ...`}
        </pre>
      </section>

      <Link href="/#proyectos" className="btn-ghost inline-flex items-center gap-2">
        ← {tr("back_to_projects")}
      </Link>
    </main>
  );
}