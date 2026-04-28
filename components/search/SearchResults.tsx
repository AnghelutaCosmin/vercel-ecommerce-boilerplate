import { SearchPageState } from "@/types/searchTypes";
import { ProductCard } from "../product-card/ProductCard";
import { Product } from "@/types/productTypes";
import { getSearchProducts } from "@/lib/searchService";

function getResultsSummary({
  category,
  featured,
  query,
}: SearchPageState): string {
  if (query) {
    return `Showing matches for "${query}".`;
  }

  if (category && featured) {
    return `Showing featured products in ${category}.`;
  }

  if (category) {
    return `Showing products in ${category}.`;
  }

  if (featured) {
    return "Showing featured products.";
  }

  return "Get started with these products.";
}

export async function SearchResults(searchState: SearchPageState) {
  const products = await getSearchProducts(searchState);

  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-card px-6 py-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          No matches
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight">
          No products found
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">
          Try a different search term or remove one of the active filters to see
          more products.
        </p>
      </div>
    );
  }

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Search results
          </p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight">
            {products.length} product{products.length === 1 ? "" : "s"}
          </h2>
        </div>
        <p className="max-w-lg text-sm text-muted-foreground">
          {getResultsSummary(searchState)}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-5">
        {products.map((product: Product, index: number) => (
          <ProductCard key={product.id} product={product} eager={index === 0} />
        ))}
      </div>
    </section>
  );
}
