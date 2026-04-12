import { fetchActivePromotion } from "@/lib/promotionsService";

export async function PromoBannerContent() {
  const promotion = await fetchActivePromotion();

  if (!promotion) {
    return (
      <div className="flex justify-center mb-4 bg-blue-500 text-white text-center p-2 w-full px-16 h-10">
        Discover our latest promotions and discounts!
      </div>
    );
  }

  return (
    <div className="flex justify-center mb-4 bg-blue-500 text-white text-center p-2 w-full px-16 h-10">
      {promotion.title} - {promotion.description}
    </div>
  );
}
