export default function LoadingCartSkeleton() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 animate-pulse">
      <div className="h-8 w-40 rounded-md bg-secondary mb-8" />
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1 space-y-0 divide-y divide-border">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-4 py-5">
              <div className="h-20 w-20 rounded-lg bg-secondary shrink-0" />
              <div className="flex-1 space-y-2 py-1">
                <div className="h-4 w-3/4 rounded-md bg-secondary" />
                <div className="h-3 w-1/4 rounded-md bg-secondary" />
                <div className="h-8 w-32 rounded-lg bg-secondary mt-2" />
              </div>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-80 shrink-0">
          <div className="rounded-xl border border-border bg-secondary/40 p-6 space-y-3">
            <div className="h-3 w-28 rounded-md bg-secondary" />
            <div className="h-4 w-full rounded-md bg-secondary" />
            <div className="h-4 w-full rounded-md bg-secondary" />
            <div className="h-px w-full bg-border my-4" />
            <div className="h-5 w-full rounded-md bg-secondary" />
            <div className="h-11 w-full rounded-lg bg-secondary mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
