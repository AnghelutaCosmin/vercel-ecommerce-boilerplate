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
    item.quantity - 1,
  );
  const increment = updateCartItemQuantityAction.bind(
    null,
    item.productId,
    item.quantity + 1,
  );
  const remove = removeItemFromCartAction.bind(null, item.productId);

  return (
    <form>
      <div className="flex flex-row align-center justify-center gap-2">
        <div className="flex flex-row gap-2">
          <button
            className="py-1 px-2 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 cursor-pointer"
            formAction={decrement}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span className="self-center">{item.quantity}</span>
          <button
            className="py-1 px-2 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 cursor-pointer"
            formAction={increment}
            disabled={
              stockInfo?.stock ? item.quantity >= stockInfo?.stock : false
            }
          >
            +
          </button>
        </div>
        <button
          className="py-1 px-1 rounded bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 cursor-pointer"
          formAction={remove}
        >
          <TrashIcon color="white" />
        </button>
      </div>
    </form>
  );
}
