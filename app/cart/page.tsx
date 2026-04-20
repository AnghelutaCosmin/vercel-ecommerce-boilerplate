import { CartItemList } from "@/components/cart/CartItemList";
import { CartSummary } from "@/components/cart/CartSummary";
import { getCart } from "@/lib/cartService";
import { getCartToken } from "@/utils/cartUtils";
import Link from "next/link";

export default async function CartPage() {
  const token = await getCartToken();

  const renderEmptyCart = () => (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 flex flex-col items-center text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
        Your cart
      </p>
      <h1 className="text-3xl font-bold tracking-tight mb-3">
        Your cart is empty
      </h1>
      <p className="text-muted-foreground max-w-sm mb-8">
        Looks like you haven&apos;t added anything yet.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center h-10 px-6 rounded-lg bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors duration-200"
      >
        Continue shopping
      </Link>
    </div>
  );

  if (!token) return renderEmptyCart();

  const cart = await getCart(token);

  if (!cart || !cart.totalItems) return renderEmptyCart();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Your cart</h1>
      <div className="flex flex-col lg:flex-row gap-10">
        <CartItemList cart={cart} />
        <CartSummary cart={cart} />
      </div>
    </div>
  );
}
