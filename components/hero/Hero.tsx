import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full py-20 md:py-28 lg:py-32">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">
          Built with Next.js &amp; Vercel
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
          The modern
          <br />
          e-commerce starter
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed mb-10">
          Get your online store up and running in no time. Built for
          performance, scalability, and developer experience.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/search"
            className="inline-flex items-center justify-center h-11 px-8 rounded-lg bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors duration-200 shadow-sm"
          >
            Shop now
          </Link>
          <Link
            href="/search"
            className="inline-flex items-center justify-center h-11 px-8 rounded-lg border border-border bg-background text-foreground text-sm font-semibold hover:bg-secondary transition-colors duration-200"
          >
            Browse all
          </Link>
        </div>
      </div>
    </section>
  );
}
