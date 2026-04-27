import { SearchPageState } from "@/types/searchTypes";

function getSingleSearchParam(value?: string | string[]): string {
  const param = Array.isArray(value) ? value[0] : value;
  return param?.trim() ?? "";
}

export function getSearchPageState(searchParams: {
  query?: string | string[];
  category?: string | string[];
  featured?: string | string[];
}): SearchPageState {
  return {
    query: getSingleSearchParam(searchParams.query),
    category: getSingleSearchParam(searchParams.category),
    featured: getSingleSearchParam(searchParams.featured) === "true",
  };
}
