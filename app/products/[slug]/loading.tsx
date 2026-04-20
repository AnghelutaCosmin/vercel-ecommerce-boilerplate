export default function LoadingPageSkeleton() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
        <div className="aspect-square rounded-xl bg-secondary" />
        <div className="flex flex-col pt-2 space-y-4">
          <div className="h-3 w-20 rounded-md bg-secondary" />
          <div className="h-8 w-3/4 rounded-md bg-secondary" />
          <div className="h-7 w-1/4 rounded-md bg-secondary" />
          <div className="w-12 h-px bg-border" />
          <div className="space-y-2">
            <div className="h-4 w-full rounded-md bg-secondary" />
            <div className="h-4 w-full rounded-md bg-secondary" />
            <div className="h-4 w-2/3 rounded-md bg-secondary" />
          </div>
          <div className="h-5 w-16 rounded-full bg-secondary mt-4" />
          <div className="h-10 w-full rounded-lg bg-secondary" />
        </div>
      </div>
    </div>
  );
}
