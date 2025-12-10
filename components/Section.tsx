export default function Section({
  id, title, subtitle, children
}: { id?: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="container-pro py-10 md:py-14">
      <div className="mb-6">
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}
