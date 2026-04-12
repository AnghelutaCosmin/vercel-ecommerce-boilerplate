import Link from "next/link";

export interface NavLink {
  name: string;
  href: string;
}

export interface NavLinksProps {
  links: NavLink[];
}

export function NavLinks({ links }: NavLinksProps) {
  return (
    <nav
      className="ml-6 flex items-center gap-6"
      aria-label="Primary navigation"
    >
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          aria-label={link.name}
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
