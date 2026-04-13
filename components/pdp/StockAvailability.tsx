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
    <p className="mt-4">
      {isOutOfStock && (
        <span className="text-red-500 font-semibold">Out of Stock</span>
      )}
      {isLowStock && (
        <span className="text-yellow-500 font-semibold">
          Only {stockInfo?.stock} left!
        </span>
      )}
      {isAvailable && (
        <span className="text-green-500 font-semibold">Available</span>
      )}
    </p>
  );
}
