import { Product } from "@/types/productTypes";
import { SearchPageState } from "@/types/searchTypes";
import { cacheLife } from "next/cache";
import { getProducts } from "./productsService";

const SEARCH_RESULTS_LIMIT = 5;

export async function getSearchProducts({
  query,
  category,
  featured,
}: SearchPageState): Promise<Product[]> {
  "use cache";
  cacheLife("minutes");

  return getProducts({
    limit: SEARCH_RESULTS_LIMIT,
    category: category || undefined,
    featured: featured || undefined,
    search: query || undefined,
  });
}
