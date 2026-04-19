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
    <div className="flex flex-col w-full mt-8">
      <div className="flex flex-row justify-between w-full grid-cols-2">
        <Image
          src={product.images[0]}
          alt={product.name}
          width={500}
          height={500}
          className="object-cover"
          loading="eager"
        />
        <div className="flex flex-col w-full p-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-lg font-semibold">{getFormattedPrice(product)}</p>
          <p className="text-gray-600">{product.description}</p>
          <Suspense
            fallback={
              <p className="mt-4 animate-pulse">Loading purchase info...</p>
            }
          >
            <PurchaseOptions slug={slug} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
