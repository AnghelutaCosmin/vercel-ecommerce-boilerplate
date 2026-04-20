import { Cart, CartItem } from "@/types/cartTypes";

export async function CartSummary({ cart }: { cart: Cart }) {
  return (
    <aside className="w-full lg:w-80 shrink-0">
      <div className="rounded-xl border border-border bg-secondary/40 p-6">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">
          Order summary
        </h2>
        <div className="flex flex-col gap-2 mb-4">
          {cart.items.map((item: CartItem) => (
            <div
              key={item.productId}
              className="flex justify-between items-baseline text-sm"
            >
              <span className="text-muted-foreground truncate mr-2">
                {item.product.name}{" "}
                <span className="text-xs">×{item.quantity}</span>
              </span>
              <span className="shrink-0 font-medium">
                {(item.lineTotal / 100).toFixed(2)}{" "}
                {item.product.currency}
              </span>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-4 flex justify-between items-center">
          <span className="font-semibold">Total</span>
          <span className="font-bold text-lg">
            {(cart.subtotal / 100).toFixed(2)} {cart.currency}
          </span>
        </div>
        <button
          className="mt-5 w-full h-11 rounded-lg bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors duration-200 cursor-pointer"
          disabled
          title="Checkout coming soon"
        >
          Checkout
        </button>
        <p className="text-xs text-center text-muted-foreground mt-2">
          Checkout not yet available
        </p>
      </div>
    </aside>
  );
}
