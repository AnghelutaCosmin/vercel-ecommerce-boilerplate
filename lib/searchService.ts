import { Product } from "@/types/productTypes";
import { SearchPageState } from "@/types/searchTypes";
import { cacheLife } from "next/cache";
import { getProducts } from "./productsService";

const SEARCH_RESULTS_LIMIT = 5;
const CATEGORY_FETCH_LIMIT = 100;

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

export async function getSearchCategories(): Promise<string[]> {
  "use cache";
  cacheLife("hours");

  const products = await getProducts({ limit: CATEGORY_FETCH_LIMIT });
  const categories = new Set(
    products
      .map((product) => product.category.trim())
      .filter((category) => category.length > 0),
  );

  return Array.from(categories).sort((left, right) =>
    left.localeCompare(right),
  );
}
