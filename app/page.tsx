import { PromoBanner } from "@/components/promo-banner/PromoBanner";
import { Hero } from "@/components/hero/Hero";

export default function Home() {
  return (
    <div className="w-full">
      <PromoBanner />
      <div className="flex flex-1 w-full flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col flex-1 items-center justify-center font-sans">
          {/* Hero Section - Static */}
          <Hero />
          {/* Promotional Banner - Cached Product Data */}

          {/* Featured Products - Server-Side Rendered based on cached data */}
        </div>
      </div>
    </div>
  );
}
