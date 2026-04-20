import { cacheLife } from "next/cache";
import Link from "next/link";

async function getCachedYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getCachedYear();
  return (
    <footer className="w-full border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {year} NextEcom. All rights reserved.
        </p>
        <nav className="flex items-center gap-5" aria-label="Footer navigation">
          <Link
            href="/"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-150"
          >
            Home
          </Link>
          <Link
            href="/search"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-150"
          >
            Search
          </Link>
          <Link
            href="/cart"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-150"
          >
            Cart
          </Link>
        </nav>
      </div>
    </footer>
  );
}
