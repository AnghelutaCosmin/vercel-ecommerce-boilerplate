"use client";
import { addItemToCartAction, CartActionResult } from "@/lib/cartActions";
import { StockInfo } from "@/types/productTypes";
import { useActionState, useEffect, useState } from "react";
import { QuantitySelector } from "../quantity-selector/QuantitySelector";

const SUCCESS_DURATION = 2000;

export function AddToCart({ stockInfo }: { stockInfo: StockInfo }) {
  const [quantity, setQuantity] = useState(1);
  const [dismissedAt, setDismissedAt] = useState<number | undefined>(undefined);

  const [state, formAction, pending] = useActionState<
    CartActionResult,
    FormData
  >(addItemToCartAction, {
    success: undefined,
  });

  const handleQuantityChange = (delta: number) => {
    if (delta > 0 && quantity >= stockInfo.stock) return; // Prevent increasing beyond stock
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  useEffect(() => {
    if (state.success !== true || !state.submittedAt) return;
    if (dismissedAt === state.submittedAt) return;

    const delay = 2000;

    const timer = setTimeout(() => setDismissedAt(state.submittedAt), delay);
    return () => clearTimeout(timer);
  }, [state.submittedAt, state.success, dismissedAt]);

  const showSuccess =
    state.success === true &&
    state.submittedAt !== undefined &&
    dismissedAt !== state.submittedAt;

  return (
    <div className="flex flex-1 w-full flex-col">
      <div className="mt-4 flex items-center gap-4">
        <QuantitySelector
          quantity={quantity}
          maxStock={stockInfo.stock}
          changeQuantity={handleQuantityChange}
        />
        <form className="w-full" action={formAction}>
          <input name="productId" type="hidden" value={stockInfo.productId} />
          <input name="quantity" type="hidden" value={quantity} />
          <button
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer"
            disabled={!stockInfo.inStock || pending}
            type="submit"
          >
            Add to Cart
          </button>
        </form>
      </div>
      {showSuccess && (
        <div className="bg-green-500 p-1 px-4">
          <span className="text-white">{state.message}</span>
        </div>
      )}
    </div>
  );
}
