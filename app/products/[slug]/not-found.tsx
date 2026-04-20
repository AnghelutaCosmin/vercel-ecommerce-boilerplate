import Link from "next/link";

export default function NotFoundProduct() {
  return (
    <div className="flex flex-col items-center justify-center w-full py-32 px-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
        404 — Not Found
      </p>
      <h1 className="text-3xl font-bold tracking-tight mb-3">
        Product not found
      </h1>
      <p className="text-muted-foreground max-w-sm mb-8">
        The product you&apos;re looking for doesn&apos;t exist or has been
        removed.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center h-10 px-6 rounded-lg bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors duration-200"
      >
        Back to home
      </Link>
    </div>
  );
}
