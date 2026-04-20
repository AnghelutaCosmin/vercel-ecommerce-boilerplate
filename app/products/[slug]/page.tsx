import { PurchaseOptions } from "@/components/pdp/PurchaseOptions";
import { getProductBySlug } from "@/lib/productsService";
import { getFormattedPrice } from "@/utils/priceUtils";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
        {/* Image */}
        <div className="relative aspect-square rounded-xl overflow-hidden bg-secondary">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
            loading="eager"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-start pt-2">
          {product.category && (
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              {product.category}
            </p>
          )}
          <h1 className="text-3xl font-bold tracking-tight leading-tight">
            {product.name}
          </h1>
          <p className="text-2xl font-semibold mt-3">
            {getFormattedPrice(product)}
          </p>
          <div className="w-12 h-px bg-border my-6" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            {product.description}
          </p>
          <Suspense
            fallback={
              <div className="mt-6 space-y-3 animate-pulse">
                <div className="h-5 w-20 rounded-full bg-secondary" />
                <div className="h-10 rounded-lg bg-secondary" />
              </div>
            }
          >
            <PurchaseOptions slug={slug} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
