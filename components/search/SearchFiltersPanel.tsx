import { getSearchCategories } from "@/lib/searchService";
import { getSearchPageState } from "@/utils/searchUtils";
import { SearchFilters } from "./SearchFilters";

interface SearchFiltersPanelProps {
  searchParams?: Promise<{
    category?: string | string[];
    featured?: string | string[];
    query?: string | string[];
  }>;
}

export async function SearchFiltersPanel({
  searchParams,
}: SearchFiltersPanelProps) {
  const resolvedSearchParams = (await searchParams) || {};
  const searchState = getSearchPageState(resolvedSearchParams);
  const categories = await getSearchCategories();

  return (
    <SearchFilters
      key={JSON.stringify(searchState)}
      categories={categories}
      initialCategory={searchState.category}
      initialQuery={searchState.query}
      featuredOnly={searchState.featured}
    />
  );
}
