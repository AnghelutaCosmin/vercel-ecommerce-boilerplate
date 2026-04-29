import { StockInfo } from "@/types/productTypes";
import { TrashIcon } from "../icons/TrashIcon";
import {
  removeItemFromCartAction,
  updateCartItemQuantityAction,
} from "@/lib/cartActions";
import { CartItem } from "@/types/cartTypes";

export async function CartLineControls({
  item,
  stockInfo,
}: {
  item: CartItem;
  stockInfo: StockInfo | null;
}) {
  const decrement = updateCartItemQuantityAction.bind(
    null,
    item.productId,
    item.product.slug,
    item.quantity - 1,
  );
  const increment = updateCartItemQuantityAction.bind(
    null,
    item.productId,
    item.product.slug,
    item.quantity + 1,
  );
  const remove = removeItemFromCartAction.bind(null, item.productId);

  return (
    <form>
      <div className="flex items-center gap-2">
        <div className="inline-flex items-center rounded-lg border border-border bg-background">
          <button
            className="flex items-center justify-center h-8 w-8 text-foreground hover:bg-secondary rounded-l-lg transition-colors duration-150 disabled:opacity-30 disabled:pointer-events-none cursor-pointer font-medium text-sm"
            formAction={decrement}
            disabled={item.quantity <= 1}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="w-8 text-center text-sm font-semibold select-none">
            {item.quantity}
          </span>
          <button
            className="flex items-center justify-center h-8 w-8 text-foreground hover:bg-secondary rounded-r-lg transition-colors duration-150 disabled:opacity-30 disabled:pointer-events-none cursor-pointer font-medium text-sm"
            formAction={increment}
            disabled={
              !stockInfo ||
              !stockInfo.inStock ||
              item.quantity >= stockInfo.stock
            }
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <button
          className="flex items-center justify-center h-8 w-8 rounded-lg border border-border text-muted-foreground hover:text-destructive hover:border-destructive/50 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors duration-150 cursor-pointer"
          formAction={remove}
          aria-label="Remove item"
        >
          <TrashIcon size={15} />
        </button>
      </div>
    </form>
  );
}
