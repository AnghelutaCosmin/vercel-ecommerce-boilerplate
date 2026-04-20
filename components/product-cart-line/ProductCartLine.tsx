import { CartItem } from "@/types/cartTypes";
import Image from "next/image";
import { getFormattedPrice } from "@/utils/priceUtils";
import { getStockInfo } from "@/lib/productsService";
import { CartLineControls } from "../cart/CartLineControls";

export async function ProductCartLine({ item }: { item: CartItem }) {
  const stockInfo = await getStockInfo(item.product.slug);

  return (
    <div className="flex gap-4 py-5">
      <div className="relative h-20 w-20 shrink-0 rounded-lg overflow-hidden bg-secondary">
        <Image
          fill
          src={item.product.images[0]}
          alt={item.product.name}
          className="object-cover"
          sizes="80px"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between min-w-0">
        <div className="flex justify-between gap-2">
          <h3 className="text-sm font-semibold truncate">{item.product.name}</h3>
          <span className="text-sm font-semibold shrink-0">
            {(item.lineTotal / 100).toFixed(2)} {item.product.currency}
          </span>
        </div>
        <p className="text-xs text-muted-foreground mt-0.5">
          {getFormattedPrice(item.product)} each
        </p>
        <div className="mt-2">
          <CartLineControls item={item} stockInfo={stockInfo} />
        </div>
      </div>
    </div>
  );
}
