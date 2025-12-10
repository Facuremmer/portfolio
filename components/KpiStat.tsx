export default function KpiStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-neutral-200/70 p-4 text-center dark:border-neutral-800/70">
      <div className="text-sm text-neutral-500 dark:text-neutral-400">{label}</div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
    </div>
  );
}
