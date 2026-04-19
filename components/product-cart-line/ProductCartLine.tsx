import { CartItem } from "@/types/cartTypes";
import Image from "next/image";
import { getFormattedPrice } from "@/utils/priceUtils";
import { getStockInfo } from "@/lib/productsService";
import { CartLineControls } from "../cart/CartLineControls";

export async function ProductCartLine({ item }: { item: CartItem }) {
  const stockInfo = await getStockInfo(item.product.slug);

  return (
    <div key={item.productId} className="flex flex-row gap-2 w-full">
      <Image
        width={100}
        height={100}
        src={item.product.images[0]}
        alt={item.product.name}
      />
      <div className="flex flex-col w-full">
        <h3>{item.product.name}</h3>
        <p>{getFormattedPrice(item.product)}</p>
        <CartLineControls item={item} stockInfo={stockInfo} />
      </div>
    </div>
  );
}
