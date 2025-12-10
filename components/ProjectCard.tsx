import Image from 'next/image';

export default function ProjectCard({
  cover, title, subtitle, impact, tech
}: { cover: string; title: string; subtitle: string; impact: string[]; tech: string[] }) {
  return (
    <article className="group card p-0 overflow-hidden transition hover:-translate-y-0.5 hover:shadow">
      <div className="relative h-44 w-full">
        <Image src={cover} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{subtitle}</p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
          {impact.map((i) => <li key={i}>{i}</li>)}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => <span key={t} className="badge">{t}</span>)}
        </div>
        <div className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--accent)]">
          Ver caso <span aria-hidden>→</span>
        </div>
      </div>
    </article>
  );
}

