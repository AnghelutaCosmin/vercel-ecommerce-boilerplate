import { PromoBanner } from "@/components/promo-banner/PromoBanner";
import { Hero } from "@/components/hero/Hero";
import { FeaturedProducts } from "@/components/featured-products/FeaturedProducts";

export default function Home() {
  return (
    <div className="w-full">
      <PromoBanner />
      <div className="flex flex-1 w-full flex-col items-center justify-between px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col flex-1 items-start justify-start font-sans w-full">
          <Hero />
          <FeaturedProducts />
        </div>
      </div>
    </div>
  );
}
