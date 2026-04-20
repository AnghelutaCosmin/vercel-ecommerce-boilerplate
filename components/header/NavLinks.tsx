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
    <nav className="flex items-center gap-1" aria-label="Primary navigation">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          aria-label={link.name}
          className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors duration-150"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
