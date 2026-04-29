import {
  Product,
  ProductListResponse,
  ProductQueryParams,
  StockInfo,
} from "@/types/productTypes";
import { fetchWithAuth } from "./fetch";
import { endpoints } from "./endpoints";
import { cacheLife } from "next/cache";
import { unstable_rethrow } from "next/navigation";

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
  try {
    const response: ProductListResponse = await fetchWithAuth(
      endpoints.products + "?" + queryParams.toString(),
    );
    if (!response.success) {
      throw new Error("Failed to fetch products");
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
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

export async function getProductBySlug(slug: string): Promise<Product | null> {
  "use cache";
  cacheLife("products");

  try {
    const response = await fetchWithAuth(endpoints.productsBySlug(slug));
    if (!response.success) {
      return null;
    }
    return response.data as Product;
  } catch (error) {
    console.error(`Error fetching product with slug "${slug}":`, error);
    return null;
  }
}

export async function getStockInfo(slug: string): Promise<StockInfo | null> {
  try {
    const response = await fetchWithAuth(endpoints.productStockBySlug(slug), {
      cache: "no-store",
    });
    if (!response.success) {
      return null;
    }
    return response.data;
  } catch (error) {
    unstable_rethrow(error);
    console.error(
      `Error fetching stock info for product with slug "${slug}":`,
      error,
    );
    return null;
  }
}
