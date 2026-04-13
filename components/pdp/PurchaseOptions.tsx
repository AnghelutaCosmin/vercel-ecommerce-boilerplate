import { getStockInfo } from "@/lib/productsService";
import { AddToCart } from "./AddToCart";
import { StockAvailability } from "./StockAvailability";

export async function PurchaseOptions({ slug }: { slug: string }) {
  const stockInfo = await getStockInfo(slug);

  return (
    <>
      <StockAvailability stockInfo={stockInfo} />
      {stockInfo && <AddToCart stockInfo={stockInfo} />}
    </>
  );
}
