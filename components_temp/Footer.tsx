export default function Footer() {
  return (
    <footer className="container-pro py-10">
      <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
        <span>© {new Date().getFullYear()} Facundo</span>
        <div className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
          Acento activo
        </div>
      </div>
    </footer>
  );
}
