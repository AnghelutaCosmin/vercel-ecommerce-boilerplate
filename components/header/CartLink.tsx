import Link from "next/link";
import { CartIcon } from "../icons/CartIcon";
import { Suspense } from "react";
import { CartItemCount } from "./CartItemCount";

export function CartLink() {
  return (
    <Link
      href="/cart"
      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
    >
      <CartIcon />
      <Suspense
        fallback={
          <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse" />
        }
      >
        <CartItemCount />
      </Suspense>
    </Link>
  );
}
