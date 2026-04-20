import { PromoBanner } from "@/components/promo-banner/PromoBanner";
import { Hero } from "@/components/hero/Hero";
import { FeaturedProducts } from "@/components/featured-products/FeaturedProducts";

export default function Home() {
  return (
    <div className="w-full">
      <PromoBanner />
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10">
        <Hero />
        <FeaturedProducts />
      </div>
    </div>
  );
}
