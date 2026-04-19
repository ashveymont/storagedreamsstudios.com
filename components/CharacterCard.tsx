type CharacterCardProps = {
  tag: string;
  title: string;
  body: string;
  brandFit: string;
  highlight?: boolean;
};

export default function CharacterCard({
  tag,
  title,
  body,
  brandFit,
  highlight,
}: CharacterCardProps) {
  return (
    <article
      className={`flex min-h-[280px] flex-col border p-10 transition-colors duration-200 ${
        highlight
          ? "border-silver/80 bg-[rgba(26,26,26,0.32)]"
          : "border-border bg-black hover:border-border-hover hover:bg-[rgba(26,26,26,0.28)]"
      }`}
    >
      <p className="text-[0.65rem] uppercase tracking-[0.24em] text-silver">{tag}</p>
      <h3 className="mt-5 font-display text-[1.2rem] italic text-white">{title}</h3>
      <p className="mt-5 flex-1 text-[0.85rem] font-light leading-relaxed text-silver-dim">{body}</p>
      <p className="mt-8 text-[0.7rem] uppercase tracking-[0.17em] text-silver">{brandFit}</p>
    </article>
  );
}
