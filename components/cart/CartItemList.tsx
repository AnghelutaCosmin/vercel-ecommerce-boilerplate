import { Cart } from "@/types/cartTypes";
import { ProductCartLine } from "../product-cart-line/ProductCartLine";

export async function CartItemList({ cart }: { cart: Cart }) {
  return (
    <section className="flex-1 min-w-0">
      <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">
        Items ({cart.totalItems})
      </h2>
      <div className="flex flex-col divide-y divide-border">
        {cart?.items.map((cartItem) => (
          <ProductCartLine key={cartItem.productId} item={cartItem} />
        ))}
      </div>
    </section>
  );
}
