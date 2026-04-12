import { Suspense } from "react";
import { PromoBannerContent } from "./PromoBannerContent";

export function PromoBanner() {
  return (
    <Suspense
      fallback={
        <div className="flex mb-4 bg-blue-500 p-2 w-full px-16 animate-pulse h-10" />
      }
    >
      <PromoBannerContent />
    </Suspense>
  );
}
