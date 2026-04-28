"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState, useTransition } from "react";
import { Button } from "../ui/Button";

interface SearchFiltersProps {
  categories: string[];
  initialCategory: string;
  initialQuery: string;
  featuredOnly: boolean;
}

export function SearchFilters({
  categories,
  initialCategory,
  initialQuery,
  featuredOnly,
}: SearchFiltersProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [isFeatured, setIsFeatured] = useState(featuredOnly);
  const [isPending, startTransition] = useTransition();

  const navigateToResults = useCallback(
    (nextQuery: string, nextCategory: string, nextFeatured: boolean) => {
      const trimmedQuery = nextQuery.trim();
      const params = new URLSearchParams();

      if (trimmedQuery) {
        params.set("query", trimmedQuery);
      } else {
        params.delete("query");
      }

      if (nextCategory) {
        params.set("category", nextCategory);
      } else {
        params.delete("category");
      }

      if (nextFeatured) {
        params.set("featured", "true");
      } else {
        params.delete("featured");
      }

      const nextParams = params.toString();
      const nextUrl = nextParams ? `${pathname}?${nextParams}` : pathname;
      startTransition(() => {
        router.replace(nextUrl, { scroll: false });
      });
    },
    [pathname, router],
  );

  const toggleFeatured = () => setIsFeatured((prev) => !prev);

  useEffect(() => {
    const trimmedQuery = query.trim();
    const categoryChanged = category !== initialCategory;
    const shouldAutoSubmit =
      trimmedQuery.length === 0 || trimmedQuery.length >= 3 || categoryChanged;
    if (!shouldAutoSubmit) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      navigateToResults(query, category, isFeatured);
    }, 300);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [category, initialCategory, navigateToResults, query, isFeatured]);

  return (
    <form
      className="rounded-2xl border border-border bg-card p-5 shadow-sm"
      onSubmit={(event) => {
        event.preventDefault();
        navigateToResults(query, category, isFeatured);
      }}
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
        <div className="flex-1 space-y-2">
          <label
            htmlFor="search-query"
            className="text-sm font-medium text-foreground"
          >
            Search products
          </label>
          <input
            id="search-query"
            name="query"
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
            }}
            placeholder="Search by name, tag, or keyword"
            className="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none transition-colors focus:border-foreground"
          />
        </div>

        <div className="space-y-2 lg:w-64">
          <label
            htmlFor="search-category"
            className="text-sm font-medium text-foreground"
          >
            Category
          </label>
          <select
            id="search-category"
            name="category"
            value={category}
            onChange={(event) => {
              setCategory(event.target.value);
            }}
            className="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none transition-colors focus:border-foreground"
          >
            <option value="">All categories</option>
            {categories.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full lg:w-auto min-w-3xs"
          disabled={isPending}
        >
          {isPending ? "Searching..." : "Search"}
        </Button>
        <Button
          type="button"
          size="lg"
          variant="secondary"
          disabled={query.length === 0 && category.length === 0 && !isFeatured}
          onClick={() => {
            setQuery("");
            setCategory("");
            setIsFeatured(false);
            navigateToResults("", "", false);
          }}
        >
          Clear
        </Button>
      </div>
      <div className="flex flex-row gap-1 pt-1">
        <input
          name="featuredCheckbox"
          type="checkbox"
          onChange={toggleFeatured}
          checked={isFeatured}
        />
        <label className="text-sm">Featured only</label>
      </div>
    </form>
  );
}
