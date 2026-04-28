import { SearchFiltersPanel } from "@/components/search/SearchFiltersPanel";
import { SearchFiltersSkeleton } from "@/components/search/SearchFiltersSkeleton";
import { SearchResultsPanel } from "@/components/search/SearchResultsPanel";
import { SearchResultsSkeleton } from "@/components/search/SearchResultsSkeleton";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Search | NextEcom",
  description: "Search the Vercel Swag Store catalog by keyword and category.",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: Promise<{
    category: string | string[];
    featured: string | string[];
    query: string | string[];
  }>;
}) {
  return (
    <div className="w-full">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-10">
        <section className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Search
          </p>
          <div className="space-y-3">
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              Find the right product for you.
            </h1>
          </div>
        </section>

        <Suspense fallback={<SearchFiltersSkeleton />}>
          <SearchFiltersPanel searchParams={searchParams} />
        </Suspense>

        <Suspense fallback={<SearchResultsSkeleton />}>
          <SearchResultsPanel searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
