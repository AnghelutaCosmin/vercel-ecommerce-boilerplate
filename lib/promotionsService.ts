import { Promotion } from "@/types/promotionTypes";
import { fetchWithAuth } from "./fetch";
import { endpoints } from "./endpoints";

export async function fetchActivePromotion(): Promise<Promotion | null> {
  const promoData = await fetchWithAuth(endpoints.promotions, {
    cache: "no-store",
  });

  if (!promoData || !promoData.success || !promoData.data) {
    return null;
  }
  return promoData.data;
}
