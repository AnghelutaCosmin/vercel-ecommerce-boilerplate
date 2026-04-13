import Image from "next/image";
import { Product } from "@/types/productTypes";
import Link from "next/link";

export function ProductCard({
  product,
  eager,
}: {
  product: Product;
  eager?: boolean;
}) {
  return (
    <Link href={`/products/${product.slug}`} className="overflow-hidden">
      <Image
        src={product.images[0]} // Assuming the first image is the main one
        alt={product.name}
        width={300}
        height={200}
        loading={eager ? "eager" : "lazy"}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="p-4">
        <h3 className="text-md font-semibold max-w-xs truncate">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500">
          ${(product.price / 100).toFixed(2)}
        </p>
      </div>
    </Link>
  );
}
