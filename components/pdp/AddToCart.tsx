"use client";
import { StockInfo } from "@/types/productTypes";
import { useState } from "react";

export function AddToCart({ stockInfo }: { stockInfo: StockInfo }) {
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (delta: number) => {
    if (delta > 0 && quantity >= stockInfo.stock) return; // Prevent increasing beyond stock
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <div className="mt-4 flex items-center gap-4">
      <button
        className="py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50"
        onClick={() => handleQuantityChange(-1)}
        disabled={quantity <= 1}
      >
        -
      </button>
      <span className="w-12 text-center font-medium">{quantity}</span>
      <button
        className="py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50"
        disabled={quantity >= stockInfo.stock}
        onClick={() => handleQuantityChange(1)}
      >
        +
      </button>
      <button
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        disabled={!stockInfo.inStock}
      >
        Add to Cart
      </button>
    </div>
  );
}
