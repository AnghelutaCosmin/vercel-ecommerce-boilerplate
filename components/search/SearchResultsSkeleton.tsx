export function SearchResultsSkeleton() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <div className="h-3 w-28 rounded-full bg-secondary" />
          <div className="h-8 w-32 rounded-lg bg-secondary" />
        </div>
        <div className="h-4 w-full max-w-md rounded-full bg-secondary" />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border border-border bg-card"
          >
            <div className="aspect-square animate-pulse bg-secondary" />
            <div className="space-y-2 p-4">
              <div className="h-4 w-3/4 animate-pulse rounded-full bg-secondary" />
              <div className="h-4 w-1/3 animate-pulse rounded-full bg-secondary" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
