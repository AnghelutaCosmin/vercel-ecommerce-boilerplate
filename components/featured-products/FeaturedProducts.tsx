import Link from "next/link";
import { Suspense } from "react";
import { FeaturedProductsSkeleton } from "./FeaturedProductsSkeleton";
import { FeaturedProductsContent } from "./FeaturedProductsContent";

export function FeaturedProducts() {
  return (
    <section className="w-full py-12 border-t border-border">
      <div className="flex flex-row justify-between items-baseline mb-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Featured</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Hand-picked products just for you
          </p>
        </div>
        <Link
          href="/search?featured=true"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150 shrink-0"
        >
          View all →
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <Suspense fallback={<FeaturedProductsSkeleton count={6} />}>
          <FeaturedProductsContent />
        </Suspense>
      </div>
    </section>
  );
}
