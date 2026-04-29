import { Promotion } from "@/types/promotionTypes";
import { fetchWithAuth } from "./fetch";
import { endpoints } from "./endpoints";
import { unstable_rethrow } from "next/navigation";

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
    unstable_rethrow(error);
    console.error("Error fetching active promotion:", error);
    return null;
  }
}
