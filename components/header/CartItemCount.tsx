import { getCart } from "@/lib/cartService";
import { getCartToken } from "@/utils/cartUtils";

export async function CartItemCount() {
  let totalItems = 0;
  const token = await getCartToken();
  if (token) {
    const cart = await getCart(token);
    totalItems = cart?.totalItems || 0; //If null, no cart created yet
  }
  return (
    <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
      {totalItems}
    </div>
  );
}
