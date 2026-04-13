import {
  Product,
  ProductListResponse,
  ProductQueryParams,
} from "@/types/productTypes";
import { fetchWithAuth } from "./config";
import { endpoints } from "./endpoints";
import { cacheLife } from "next/cache";

export async function getProducts({
  page = 1,
  limit = 10,
  category,
  featured,
  search,
}: ProductQueryParams): Promise<Product[]> {
  const queryParams = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });

  if (category) {
    queryParams.append("category", category);
  }

  if (featured !== undefined) {
    queryParams.append("featured", featured.toString());
  }

  if (search) {
    queryParams.append("search", search);
  }
  const response: ProductListResponse = await fetchWithAuth(
    endpoints.products + "?" + queryParams.toString(),
  );

  if (!response.success) {
    throw new Error("Failed to fetch products");
  }

  return response.data;
}

export async function getFeaturedProducts(
  limit: number = 6,
): Promise<Product[]> {
  "use cache";
  cacheLife("minutes");
  try {
    return await getProducts({ featured: true, limit });
  } catch (error) {
    console.error("Error fetching featured products:", error);
    return [];
  }
}
