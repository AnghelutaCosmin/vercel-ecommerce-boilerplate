import { getSearchPageState } from "@/utils/searchUtils";
import { SearchResults } from "./SearchResults";

interface SearchResultsPanelProps {
  searchParams?: Promise<{
    category: string | string[];
    featured: string | string[];
    query: string | string[];
  }>;
}

export async function SearchResultsPanel({
  searchParams,
}: SearchResultsPanelProps) {
  const resolvedSearchParams = (await searchParams) || {};
  const searchState = getSearchPageState(resolvedSearchParams);

  return <SearchResults {...searchState} />;
}
