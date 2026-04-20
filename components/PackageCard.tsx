type PackageCardProps = {
  name: string;
  title: string;
  price: string;
  savings: string;
  featured?: boolean;
};

export default function PackageCard({
  name,
  title,
  price,
  savings,
  featured,
}: PackageCardProps) {
  return (
    <article
      className={`relative border p-6 transition-colors sm:p-8 ${
        featured
          ? "border-silver bg-surface"
          : "border-border bg-surface hover:border-border-hover hover:bg-[rgba(26,26,26,0.72)]"
      }`}
    >
      {featured ? (
        <span className="absolute right-5 top-5 border border-silver px-3 py-1 text-[0.6rem] uppercase tracking-[0.22em] text-silver-light">
          Most Popular
        </span>
      ) : null}
      <p className="text-[0.62rem] uppercase tracking-[0.22em] text-silver">{name}</p>
      <h3 className="mt-4 font-display text-2xl italic text-white">{title}</h3>
      <p className="mt-6 font-display text-4xl text-white">{price}</p>
      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-silver-dim">{savings}</p>
    </article>
  );
}
