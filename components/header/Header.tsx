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
    <header className="sticky top-0 z-50 w-full h-16 flex items-center justify-between px-6 md:px-10 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center gap-8">
        <Link
          href="/"
          aria-label="NextEcom Home"
          className="flex items-center gap-2.5 shrink-0"
        >
          <Logo />
          <span className="text-lg font-bold tracking-tight font-lusitana">
            NextEcom
          </span>
        </Link>
        <NavLinks links={routes} />
      </div>
      <CartLink />
    </header>
  );
}
