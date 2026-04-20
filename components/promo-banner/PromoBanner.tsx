import { Suspense } from "react";
import { PromoBannerContent } from "./PromoBannerContent";

export function PromoBanner() {
  return (
    <Suspense
      fallback={
        <div className="w-full bg-foreground py-2.5 animate-pulse h-9" />
      }
    >
      <PromoBannerContent />
    </Suspense>
  );
}
