import { Cart, CartItem } from "@/types/cartTypes";

export async function CartSummary({ cart }: { cart: Cart }) {
  return (
    <section className="flex flex-col flex-1 w-full">
      <h4>Summary</h4>
      <div className="flex w-full flex-col gap-2">
        {cart.items.map((item: CartItem) => (
          <div
            key={item.productId}
            className="flex flex-row justify-between w-full p-2 m-2"
          >
            <p>
              {item.product.name} x{item.quantity}
            </p>
            <p>
              {(item.lineTotal / 100).toFixed(2)} {item.product.currency}
            </p>
          </div>
        ))}
      </div>
      <div className="flex w-full flex-row justify-between p-2 m-2 border-t-1 border-black">
        <h3 className="font-bold">Total</h3>
        <span className="font-bold">
          {(cart.subtotal / 100).toFixed(2)} {cart.currency}
        </span>
      </div>
    </section>
  );
}
