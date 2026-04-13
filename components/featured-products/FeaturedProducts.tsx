import Link from "next/link";
import { Suspense } from "react";
import { FeaturedProductsSkeleton } from "./FeaturedProductsSkeleton";
import { FeaturedProductsContent } from "./FeaturedProductsContent";

export function FeaturedProducts() {
  return (
    <div className="w-full mt-10">
      <div className="flex flex-row justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <Link
          href="/search?featured=true"
          className="hover:text-gray-500 cursor-pointer font-bold px-4 rounded"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Suspense fallback={<FeaturedProductsSkeleton count={6} />}>
          <FeaturedProductsContent />
        </Suspense>
      </div>
    </div>
  );
}
