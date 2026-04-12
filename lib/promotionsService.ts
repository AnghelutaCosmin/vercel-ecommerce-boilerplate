import { Promotion } from "@/types/promotionTypes";
import { fetchWithAuth } from "./config";
import { endpoints } from "./endpoints";

export async function fetchActivePromotion(): Promise<Promotion | null> {
  try {
    const promoData = await fetchWithAuth(endpoints.promotions, {
      cache: "no-store",
    });

    if (!promoData || !promoData.success || !promoData.data) {
      return null;
    }
    return promoData.data;
  } catch (error) {
    console.error("Error fetching active promotion:", error);
    return null;
  }
}
