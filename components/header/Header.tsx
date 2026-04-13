import { Logo } from "../icons/LogoIcon";
import { NavLinks } from "./NavLinks";
import { CartLink } from "./CartLink";
import Link from "next/link";

const routes = [
  { name: "Home", href: "/" },
  { name: "Search", href: "/search" },
];

export function Header() {
  return (
    <header className="w-full h-16 flex items-center justify-between px-8 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-4">
        <Link
          href="/"
          aria-label="NextEcom Home"
          className="flex items-center gap-2"
        >
          <Logo />
          <h1 className="text-xl font-bold text-gray-900 dark:text-white font-lusitana">
            NextEcom
          </h1>
        </Link>
        <div className="ml-6 flex items-center gap-6">
          <NavLinks links={routes} />
        </div>
      </div>
      <CartLink />
    </header>
  );
}
