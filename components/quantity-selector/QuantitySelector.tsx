"use client";

export function QuantitySelector({
  quantity,
  maxStock,
  changeQuantity,
}: {
  quantity: number;
  maxStock: number;
  changeQuantity: (delta: number) => void;
}) {
  return (
    <div className="inline-flex items-center rounded-lg border border-border bg-background">
      <button
        className="flex items-center justify-center h-10 w-10 text-foreground hover:bg-secondary rounded-l-lg transition-colors duration-150 disabled:opacity-30 disabled:pointer-events-none cursor-pointer font-medium"
        onClick={() => changeQuantity(-1)}
        disabled={quantity <= 1}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="w-12 text-center text-sm font-semibold select-none">
        {quantity}
      </span>
      <button
        className="flex items-center justify-center h-10 w-10 text-foreground hover:bg-secondary rounded-r-lg transition-colors duration-150 disabled:opacity-30 disabled:pointer-events-none cursor-pointer font-medium"
        disabled={quantity >= maxStock}
        onClick={() => changeQuantity(1)}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
