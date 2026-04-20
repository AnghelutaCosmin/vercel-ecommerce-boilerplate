export function FeaturedProductsSkeleton({ count = 6 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="rounded-xl border border-border bg-card overflow-hidden animate-pulse"
        >
          <div className="aspect-square bg-secondary" />
          <div className="p-4 space-y-2">
            <div className="h-4 bg-secondary rounded-md w-3/4" />
            <div className="h-3.5 bg-secondary rounded-md w-1/3" />
          </div>
        </div>
      ))}
    </>
  );
}
