import { getCart } from "@/lib/cartService";
import { getCartToken } from "@/utils/cartUtils";

export async function CartItemCount() {
  let totalItems = 0;
  const token = await getCartToken();
  if (token) {
    const cart = await getCart(token);
    totalItems = cart?.totalItems || 0;
  }

  if (totalItems === 0) return null;

  return (
    <span className="absolute -top-1 -right-1 bg-foreground text-background text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
      {totalItems > 9 ? "9+" : totalItems}
    </span>
  );
}
