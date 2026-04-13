export function FeaturedProductsSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="w-full mt-10 animate-pulse">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className="border rounded p-4">
            <div className="h-40 bg-gray-300 rounded mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
