export function SearchFiltersSkeleton() {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
        <div className="flex-1 space-y-2">
          <div className="h-4 w-28 rounded-full bg-secondary" />
          <div className="h-12 w-full rounded-xl bg-secondary" />
        </div>

        <div className="space-y-2 lg:w-64">
          <div className="h-4 w-20 rounded-full bg-secondary" />
          <div className="h-12 w-full rounded-xl bg-secondary" />
        </div>

        <div className="h-12 w-full rounded-xl bg-secondary lg:w-28" />
      </div>

      <div className="mt-3 h-4 w-full max-w-xl rounded-full bg-secondary" />
    </div>
  );
}
