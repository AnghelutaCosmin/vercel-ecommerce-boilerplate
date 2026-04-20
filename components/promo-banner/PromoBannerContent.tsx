import { fetchActivePromotion } from "@/lib/promotionsService";

export async function PromoBannerContent() {
  const promotion = await fetchActivePromotion();

  const message = promotion
    ? `${promotion.title} — ${promotion.description}`
    : "Free shipping on all orders over $50 · Use code NEXT10 for 10% off";

  return (
    <div className="w-full bg-foreground text-background text-center py-2.5 px-4">
      <p className="text-xs font-medium tracking-wide">
        {message}
      </p>
    </div>
  );
}
