import { Product } from "@/types/productTypes";

export function getFormattedPrice(product: Product): string {
  const integerPrice = (product.price / 100).toFixed(2);
  return integerPrice + " " + product.currency;
}
