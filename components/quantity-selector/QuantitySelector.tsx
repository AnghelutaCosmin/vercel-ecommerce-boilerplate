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
    <div className="flex flex-row align-center justify-center">
      <button
        className="py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 cursor-pointer"
        onClick={() => changeQuantity(-1)}
        disabled={quantity <= 1}
      >
        -
      </button>
      <span className="w-12 text-center font-medium self-center">
        {quantity}
      </span>
      <button
        className="py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 cursor-pointer"
        disabled={quantity >= maxStock}
        onClick={() => changeQuantity(1)}
      >
        +
      </button>
    </div>
  );
}
