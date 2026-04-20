import Image from "next/image";
import { Product } from "@/types/productTypes";
import Link from "next/link";
import { getFormattedPrice } from "@/utils/priceUtils";

export function ProductCard({
  product,
  eager,
}: {
  product: Product;
  eager?: boolean;
}) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group rounded-xl border border-border bg-card overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
    >
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading={eager ? "eager" : "lazy"}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold truncate">{product.name}</h3>
        <p className="text-sm text-muted-foreground mt-0.5">
          {getFormattedPrice(product)}
        </p>
      </div>
    </Link>
  );
}
