import Link from "next/link";
import { CartIcon } from "../icons/CartIcon";

export function CartLink() {
  return (
    <Link
      href="/cart"
      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
    >
      <CartIcon />
      {/* TODO: Add cart item count */}
    </Link>
  );
}
