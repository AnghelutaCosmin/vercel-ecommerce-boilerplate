import { CartItemList } from "@/components/cart/CartItemList";
import { CartSummary } from "@/components/cart/CartSummary";
import { getCart } from "@/lib/cartService";
import { getCartToken } from "@/utils/cartUtils";

export default async function CartPage() {
  const token = await getCartToken();

  const renderEmptyCart = () => {
    return (
      <div className="flex flex-col flex-1 font-sans p-16">
        <h3 className="text-5xl font-bold mb-4">Cart Page</h3>
        <p>Add one item to the cart to see it here.</p>
      </div>
    );
  };

  if (!token) {
    return renderEmptyCart();
  }

  const cart = await getCart(token);

  if (!cart || !cart.totalItems) {
    return renderEmptyCart();
  }

  return (
    <div className="flex flex-col flex-1 font-sans p-16">
      <h1 className="text-5xl font-bold mb-4">Cart Page</h1>
      <div className="flex flex-row w-full gap-10">
        <CartItemList cart={cart} />
        <CartSummary cart={cart} />
      </div>
    </div>
  );
}
