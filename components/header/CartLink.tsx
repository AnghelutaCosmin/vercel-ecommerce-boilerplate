import Link from "next/link";
import { CartIcon } from "../icons/CartIcon";
import { Suspense } from "react";
import { CartItemCount } from "./CartItemCount";

export function CartLink() {
  return (
    <Link
      href="/cart"
      aria-label="Shopping cart"
      className="relative flex items-center justify-center h-9 w-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-150"
    >
      <CartIcon size={20} />
      <Suspense
        fallback={
          <span className="absolute -top-1 -right-1 bg-foreground text-background text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center animate-pulse" />
        }
      >
        <CartItemCount />
      </Suspense>
    </Link>
  );
}
