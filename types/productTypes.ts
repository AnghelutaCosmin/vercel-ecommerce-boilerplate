import { PaginationInfo } from "./paginationTypes";

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number; // Price in cents to avoid floating point issues
  currency: string;
  category: string;
  images: string[]; // Array of image URLs
  featured: boolean;
  tags: string[];
  createdAt: string; // Date string
}

export interface ProductQueryParams {
  page?: number; //starts at 1
  limit?: number; //max 100
  category?: string;
  featured?: boolean;
  search?: string;
}

export interface ProductListResponse {
  success: boolean;
  data: Product[];
  meta: {
    pagination: PaginationInfo;
  };
}

export interface StockInfo {
  productId: string;
  stock: number;
  inStock: boolean;
  lowStock: boolean;
}
