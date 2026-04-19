import { Cart } from "@/types/cartTypes";
import { ProductCartLine } from "../product-cart-line/ProductCartLine";

export async function CartItemList({ cart }: { cart: Cart }) {
  return (
    <section className="flex flex-col flex-1 w-full">
      <h2>Item List</h2>
      <div className="flex flex-1 flex-col w-full">
        {cart?.items.map((cartItem) => (
          <ProductCartLine key={cartItem.productId} item={cartItem} />
        ))}
      </div>
    </section>
  );
}
