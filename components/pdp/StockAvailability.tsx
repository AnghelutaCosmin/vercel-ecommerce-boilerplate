import { Badge } from "@/components/ui/Badge";
import { StockInfo } from "@/types/productTypes";

export function StockAvailability({
  stockInfo,
}: {
  stockInfo: StockInfo | null;
}) {
  const isOutOfStock = !stockInfo || !stockInfo.inStock;
  const isLowStock = stockInfo?.lowStock;
  const isAvailable = stockInfo?.inStock && !stockInfo.lowStock;

  return (
    <div className="mt-4">
      {!stockInfo && (
        <Badge variant="default">Stock information unavailable</Badge>
      )}
      {isOutOfStock && <Badge variant="destructive">Out of stock</Badge>}
      {isLowStock && (
        <Badge variant="warning">Only {stockInfo?.stock} left</Badge>
      )}
      {isAvailable && <Badge variant="success">In stock</Badge>}
    </div>
  );
}
