"use client";
import { addItemToCartAction, CartActionResult } from "@/lib/cartActions";
import { StockInfo } from "@/types/productTypes";
import { useActionState, useEffect, useState } from "react";
import { QuantitySelector } from "../quantity-selector/QuantitySelector";

const SUCCESS_DURATION = 2000;

export function AddToCart({
  stockInfo,
  slug,
}: {
  stockInfo: StockInfo;
  slug: string;
}) {
  const [quantity, setQuantity] = useState(1);
  const [dismissedAt, setDismissedAt] = useState<number | undefined>(undefined);

  const [state, formAction, pending] = useActionState<
    CartActionResult,
    FormData
  >(addItemToCartAction, {
    success: undefined,
  });

  const handleQuantityChange = (delta: number) => {
    if (delta > 0 && quantity >= stockInfo.stock) return;
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  useEffect(() => {
    if (state.success !== true || !state.submittedAt) return;
    if (dismissedAt === state.submittedAt) return;

    const timer = setTimeout(
      () => setDismissedAt(state.submittedAt),
      SUCCESS_DURATION,
    );
    return () => clearTimeout(timer);
  }, [state.submittedAt, state.success, dismissedAt]);

  const showSuccess =
    state.success === true &&
    state.submittedAt !== undefined &&
    dismissedAt !== state.submittedAt;

  return (
    <div className="flex flex-col gap-3 mt-6">
      <div className="flex items-center gap-3">
        <QuantitySelector
          quantity={quantity}
          maxStock={stockInfo.stock}
          changeQuantity={handleQuantityChange}
        />
        <form className="flex-1" action={formAction}>
          <input name="productId" type="hidden" value={stockInfo.productId} />
          <input name="quantity" type="hidden" value={quantity} />
          <input name="slug" type="hidden" value={slug} />
          <button
            className="w-full h-10 px-6 rounded-lg bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors duration-200 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
            disabled={!stockInfo.inStock || pending}
            type="submit"
          >
            {pending ? "Adding…" : "Add to cart"}
          </button>
        </form>
      </div>
      {showSuccess && (
        <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-2.5 dark:border-green-800 dark:bg-green-900/20">
          <span className="text-sm font-medium text-green-700 dark:text-green-400">
            {state.message}
          </span>
        </div>
      )}
    </div>
  );
}
